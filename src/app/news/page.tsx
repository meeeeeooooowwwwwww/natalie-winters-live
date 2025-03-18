import Image from 'next/image'
import Link from 'next/link'

const newsItems = [
  {
    id: 1,
    title: 'White House Announces New Policy Initiative',
    description: 'Analysis of the latest policy announcement from the White House and its potential impact.',
    image: '/images/news1.jpg',
    date: '2024-03-20',
    source: 'White House Press Briefing',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Global Summit Coverage',
    description: 'Comprehensive coverage of the recent international summit and its outcomes.',
    image: '/images/news2.jpg',
    date: '2024-03-19',
    source: 'International Affairs',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Media Landscape Analysis',
    description: 'In-depth examination of current media trends and their influence on public discourse.',
    image: '/images/news3.jpg',
    date: '2024-03-18',
    source: 'Media Analysis',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Political Developments Report',
    description: 'Latest updates on significant political developments and their implications.',
    image: '/images/news4.jpg',
    date: '2024-03-17',
    source: 'Political Coverage',
    readTime: '7 min read',
  },
]

export default function News() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">News Coverage</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm text-gray-400">{item.date}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-400">{item.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{item.source}</span>
                  <Link
                    href={`/news/${item.id}`}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://www.whitehouse.gov/news/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            View More on White House News
          </Link>
        </div>
      </div>
    </div>
  )
} 