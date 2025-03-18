import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET(request: Request) {
  try {
    const jsonPath = path.join(process.cwd(), 'public', 'data', 'warroom-videos.json')
    const fileContents = await fs.readFile(jsonPath, 'utf8')
    const data = JSON.parse(fileContents)
    
    // Get page and pageSize from URL params
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const pageSize = parseInt(searchParams.get('pageSize') || '12')
    
    // Calculate pagination
    const start = (page - 1) * pageSize
    const end = start + pageSize
    const paginatedVideos = data.videos.slice(start, end)
    
    return NextResponse.json({
      videos: paginatedVideos,
      total: data.total,
      page,
      pageSize
    })
  } catch (error) {
    console.error('Error reading videos:', error)
    // More detailed error response
    return NextResponse.json(
      { 
        error: 'Failed to load videos',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 