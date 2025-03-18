'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Video } from '@/types/video'
import { getVideos, formatDuration, formatDate } from '@/utils/videoUtils'

const ITEMS_PER_PAGE = 12

const VideoThumbnail = ({ src, alt }: { src?: string; alt: string }) => {
  const [error, setError] = useState(false)
  const imageUrl = error || !src ? '/images/placeholder.svg' : src
  const altText = alt || 'Video thumbnail'

  return (
    <div className="relative w-full aspect-video">
      <Image
        src={imageUrl}
        alt={altText}
        fill
        className="object-cover rounded-lg"
        onError={() => setError(true)}
      />
    </div>
  )
}

const extractVideoId = (url: string): string => {
  const match = url.match(/v([a-zA-Z0-9-]+)/)
  return match ? match[1] : ''
}

export default function Videos() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    loadVideos()
  }, [page])

  const loadVideos = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await getVideos(page, ITEMS_PER_PAGE)
      setVideos(prev => page === 1 ? response.videos : [...prev, ...response.videos])
      setTotal(response.total)
      setHasMore(response.videos.length === ITEMS_PER_PAGE)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load videos')
      console.error('Error in loadVideos:', err)
    } finally {
      setLoading(false)
    }
  }

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1)
    }
  }

  if (error) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Latest Videos</h1>
          <div className="bg-red-900/50 text-red-200 p-4 rounded-lg mb-8">
            <p className="font-bold">Error loading videos:</p>
            <p>{error}</p>
            <button 
              onClick={() => { setPage(1); loadVideos(); }}
              className="mt-4 bg-red-800 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Latest Videos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => {
            const videoId = extractVideoId(video.link)
            const key = `video-${videoId || index}`
            return (
              <div key={key} className="group">
                <Link href={`/video/${encodeURIComponent(video.link)}`}>
                  <div className="relative w-full aspect-video mb-2">
                    <VideoThumbnail
                      src={video.thumbnail}
                      alt={video.title}
                    />
                  </div>
                </Link>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-white transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                  {video.date && (
                    <span>{formatDate(video.date)}</span>
                  )}
                  {video.duration && (
                    <span>{video.duration}</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div>
          </div>
        )}

        {!loading && hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Load More
            </button>
          </div>
        )}

        {!loading && !hasMore && videos.length > 0 && (
          <div className="text-center mt-8 text-gray-400">
            Showing {videos.length} of {total} videos
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="https://warroom.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            View More on War Room
          </Link>
        </div>
      </div>
    </div>
  )
} 