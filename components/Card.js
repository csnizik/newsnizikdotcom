import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc && (
        <div className="relative w-full" style={{ paddingTop: '100%' }}>
          {' '}
          {/* Maintain 1:1 Aspect Ratio */}
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="absolute top-0 left-0 h-full w-full object-cover object-center"
                width={2000} // Original width but will scale based on parent
                height={2000} // Original height but will scale based on parent
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="absolute top-0 left-0 h-full w-full object-cover object-center"
              width={2000} // Original width but will scale based on parent
              height={2000} // Original height but will scale based on parent
            />
          )}
        </div>
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
