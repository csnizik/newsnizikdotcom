import { useEffect, useState } from 'react'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import useInfiniteScroll from 'hooks/useInfiniteScroll'

import NewsletterForm from '@/components/NewsletterForm'

const INITIAL_POSTS_TO_LOAD = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

function useLazyLoadPosts(posts) {
  const [loadedPosts, setLoadedPosts] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [numLoadedPosts, setNumLoadedPosts] = useState(INITIAL_POSTS_TO_LOAD)

  useEffect(() => {
    if (loadedPosts.length >= posts.length) {
      setHasMore(false)
      return
    }
    setLoadedPosts(posts.slice(0, numLoadedPosts))
  }, [numLoadedPosts])

  const loadMore = () => {
    if (hasMore) {
      setNumLoadedPosts((prevNumLoadedPosts) => prevNumLoadedPosts + INITIAL_POSTS_TO_LOAD)
    }
  }

  useInfiniteScroll(loadMore)

  return { loadedPosts, hasMore }
}

export default function Home({ posts }) {
  const { loadedPosts, hasMore } = useLazyLoadPosts(posts)
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="cinzel text-center text-3xl italic leading-9 tracking-wide text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Obscurum Per Obscurius
          </h1>
          <p className="text-center text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!loadedPosts.length && 'No posts found.'}
          {loadedPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags, subtitle } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          {subtitle ? (
                            <h3 className="font-bold leading-8 text-secondary-600 dark:text-secondary-400">
                              {subtitle}
                            </h3>
                          ) : (
                            ''
                          )}
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
