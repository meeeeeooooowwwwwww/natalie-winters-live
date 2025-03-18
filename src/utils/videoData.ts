import { Video } from '@/types/video'

export async function getVideoData(videoLink: string): Promise<Video | null> {
  try {
    const response = await fetch('/data/warroom-videos.json')
    const data = await response.json()
    return data.videos.find((v: Video) => v.link === videoLink) || null
  } catch (error) {
    console.error('Error fetching video data:', error)
    return null
  }
} 