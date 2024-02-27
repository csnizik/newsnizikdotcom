import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Card from '@/components/Card'
import tsListingsData from '@/data/tsListingsData' // Ensure this path is correct

export default function TabascoSunrise() {
  return (
    <>
      <PageSEO
        title={`Tabasco Sunrise - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="flex flex-col items-center justify-center py-10">
        <img
          src="/static/images/ts-logo-200x200.png"
          alt="Tabasco Sunrise Logo"
          className="w-200 h-200"
        />
      </div>

      <div className="mt-8 mb-12 text-center">
        <h2 className="text-2xl font-bold text-[#057342] sm:text-3xl">Newly Released Patterns</h2>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tsListingsData.map((listing) => (
            <Card
              key={listing.id} // Assuming each listing has a unique 'id'
              title={listing.title}
              description={listing.description}
              imgSrc={listing.imgSrc}
              href={listing.href}
              className="border-[#9b1b22] bg-[#057342] text-[#fcd23b] hover:bg-[#9b1b22] hover:text-white"
            />
          ))}
        </div>
      </div>
    </>
  )
}
