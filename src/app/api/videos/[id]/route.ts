import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface Video {
  link: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
}

interface VideoData {
  videos: Video[];
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Read the JSON file
    const filePath = path.join(process.cwd(), 'public/data/warroom-videos.json')
    const fileContents = await fs.promises.readFile(filePath, 'utf8')
    const data: VideoData = JSON.parse(fileContents)
    
    // Decode the URL-encoded ID
    const decodedId = decodeURIComponent(params.id)
    
    // Find the video with matching link
    const video = data.videos.find((v: Video) => v.link === decodedId)
    
    if (!video) {
      return NextResponse.json(
        { error: 'Video not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(video)
  } catch (error) {
    console.error('Error reading video data:', error)
    return NextResponse.json(
      { error: 'Error reading video data' },
      { status: 500 }
    )
  }
} 