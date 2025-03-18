import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header.jpg"
            alt="Natalie G. Winters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Natalie G. Winters
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            White House Press Correspondent
          </p>
          <Link
            href="/about"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Featured Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Latest Videos */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/videos/video1.jpg"
                alt="Latest Videos"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Latest Videos</h2>
              <p className="text-gray-300 mb-4">
                Watch the latest interviews and reports from the White House.
              </p>
              <Link
                href="/videos"
                className="text-white hover:text-gray-300 transition-colors"
              >
                View All Videos →
              </Link>
            </div>
          </div>

          {/* News Coverage */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/news/news1.jpg"
                alt="News Coverage"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">News Coverage</h2>
              <p className="text-gray-300 mb-4">
                Stay updated with the latest news and developments.
              </p>
              <Link
                href="https://warroom.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/posts/post1.jpg"
                alt="Social Media"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Social Media</h2>
              <p className="text-gray-300 mb-4">
                Follow for real-time updates and insights.
              </p>
              <Link
                href="https://x.com/nataliegwinters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Follow →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
