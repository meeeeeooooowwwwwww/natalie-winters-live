'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Video } from '@/types/video'
import { formatDate } from '@/utils/videoUtils'

export default function VideoDetail() {
  const params = useParams()
  const [video, setVideo] = useState<Video | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`/api/videos/${params.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch video')
        }
        const data = await response.json()
        console.log('Video data:', data)
        console.log('Video link:', data.link)
        
        // Extract video ID from Rumble URL (just the v6qi45w part)
        const videoId = data.link.split('/').pop()?.split('-')[0] || ''
        console.log('Video ID:', videoId)
        
        setVideo(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load video')
      } finally {
        setLoading(false)
      }
    }

    fetchVideo()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !video) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-red-900/50 text-red-200 p-4 rounded-lg">
            <p className="font-bold">Error loading video:</p>
            <p>{error || 'Video not found'}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="relative h-[600px] w-full">
            <div 
              className="rumble-embed"
              dangerouslySetInnerHTML={{
                __html: `<div class="rumble-embed" style="position: relative; width: 100%; height: 100%;">
                  <iframe 
                    src="https://rumble.com/embed/${video.link.split('/').pop()?.split('-')[0]}/"
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>`
              }}
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
            {video.date && (
              <p className="text-gray-400 mb-4">{formatDate(video.date)}</p>
            )}
            {video.description && (
              <p className="text-gray-300 mb-4">{video.description}</p>
            )}
            {video.category && (
              <div className="mb-4">
                <span className="text-sm text-gray-400">Category:</span>
                <span className="ml-2 text-white">{video.category}</span>
              </div>
            )}
            {video.tags && video.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {video.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 