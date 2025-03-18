import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Breaking: Major Policy Announcement',
    excerpt: 'Just covered a significant policy announcement at the White House. Key points and analysis coming soon...',
    platform: 'Twitter/X',
    date: '2024-03-20',
    time: '2:30 PM',
    likes: 245,
    comments: 89,
    image: '/images/post1.jpg',
  },
  {
    id: 2,
    title: 'Live from the Press Briefing',
    excerpt: 'Currently in the White House press briefing room. Stay tuned for updates on today\'s announcements...',
    platform: 'Twitter/X',
    date: '2024-03-20',
    time: '1:15 PM',
    likes: 189,
    comments: 45,
    image: '/images/post2.jpg',
  },
  {
    id: 3,
    title: 'Analysis: Current Media Landscape',
    excerpt: 'New article up on the current state of media and its impact on public discourse. Check it out...',
    platform: 'War Room',
    date: '2024-03-19',
    time: '4:45 PM',
    likes: 312,
    comments: 156,
    image: '/images/post3.jpg',
  },
  {
    id: 4,
    title: 'International Summit Coverage',
    excerpt: 'Live coverage from the international summit. Key developments and analysis...',
    platform: 'Twitter/X',
    date: '2024-03-19',
    time: '11:30 AM',
    likes: 278,
    comments: 92,
    image: '/images/post4.jpg',
  },
]

export default function LatestPosts() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-400">{post.time}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-400">{post.platform}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-400">
                        {post.likes} likes
                      </span>
                      <span className="text-sm text-gray-400">
                        {post.comments} comments
                      </span>
                    </div>
                  </div>
                  <div className="relative h-48 md:h-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://x.com/nataliegwinters"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Follow on Twitter/X
          </Link>
        </div>
      </div>
    </div>
  )
} 