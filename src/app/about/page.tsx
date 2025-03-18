import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Natalie G. Winters</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Natalie G. Winters"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              Natalie G. Winters is a White House Press Correspondent and investigative journalist known for her insightful analysis in media, geo-politics, culture, and international business & diplomacy.
            </p>
            <p className="text-lg mb-4">
              As a member of the White House Press Corps, she provides comprehensive coverage of presidential briefings, press conferences, and key political developments.
            </p>
            <p className="text-lg">
              Her work has been featured in various media outlets, and she maintains an active presence on social media platforms to share real-time updates and analysis.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Professional Background</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-white mr-2">•</span>
              <span>White House Press Correspondent</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">•</span>
              <span>Investigative Journalist</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">•</span>
              <span>Media Analyst</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">•</span>
              <span>International Affairs Commentator</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Connect</h2>
            <div className="space-y-4">
              <a
                href="https://x.com/nataliegwinters"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Twitter/X
              </a>
              <a
                href="https://warroom.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                War Room
              </a>
              <a
                href="https://www.whitehouse.gov/news/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                White House News
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Latest Coverage</h2>
            <div className="space-y-4">
              <a
                href="/videos"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Latest Videos
              </a>
              <a
                href="/news"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                News Articles
              </a>
              <a
                href="/latest-posts"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Latest Posts
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 