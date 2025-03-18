import { Video } from '@/types/video'
import { formatDate } from '@/utils/videoUtils'

export default function VideoPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="aspect-video w-full mb-8">
          <iframe
            src={`https://rumble.com/embed/${params.id}`}
            className="w-full h-full rounded-lg"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
} 