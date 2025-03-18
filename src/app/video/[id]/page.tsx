'use client'

import { Video } from '@/types/video'
import { formatDate } from '@/utils/videoUtils'

export default function VideoPage({ params }: { params: { id: string } }) {
  const decodedId = decodeURIComponent(params.id)
  const currentDate = new Date()

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="aspect-video w-full mb-8">
          <iframe
            src={`https://rumble.com/embed/${decodedId}`}
            className="w-full h-full rounded-lg"
            allowFullScreen
          />
        </div>

        <h1 className="text-3xl font-bold mb-4">Video {decodedId}</h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
          <span>{formatDate(currentDate.toISOString())}</span>
        </div>

        <p className="text-gray-300">
          This is a video from the War Room collection.
        </p>
      </div>
    </div>
  )
} 