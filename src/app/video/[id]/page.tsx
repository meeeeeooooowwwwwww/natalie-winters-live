'use client'

import { useEffect, useState, useCallback } from 'react'
import { use } from 'react'
import Link from 'next/link'
import { Video } from '@/types/video'
import { formatDate } from '@/utils/videoUtils'

export default function VideoPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const [video, setVideo] = useState<Video | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadVideo = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const decodedId = decodeURIComponent(resolvedParams.id)
      const response = await fetch(`/api/videos/${encodeURIComponent(decodedId)}`)
      if (!response.ok) {
        throw new Error('Failed to load video')
      }
      const data = await response.json()
      setVideo(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load video')
      console.error('Error loading video:', err)
    } finally {
      setLoading(false)
    }
  }, [resolvedParams.id])

  useEffect(() => {
    loadVideo()
  }, [loadVideo])

  if (loading) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
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

  // Extract the video ID from the Rumble URL
  const videoId = video.link.match(/v([a-zA-Z0-9-]+)/)?.[1]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="relative w-full aspect-video">
            <iframe
              src={`https://rumble.com/embed/${videoId}/?pub=4kxtac`}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <div className="p-6">
            <h1 className="text-4xl font-bold mb-4">{video.title}</h1>
            
            <div className="flex items-center gap-4 text-gray-400 mb-8">
              {video.date && (
                <span>{formatDate(video.date)}</span>
              )}
              {video.duration && (
                <span>{video.duration}</span>
              )}
            </div>

            {video.description && (
              <p className="text-gray-300 mb-8">{video.description}</p>
            )}

            <div className="mt-8 flex gap-4">
              <Link
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                Watch on Rumble
              </Link>
              <Link
                href="https://warroom.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                Visit War Room
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 