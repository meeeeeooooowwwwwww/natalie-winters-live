import { Video, VideoResponse } from '@/types/video';

export async function getVideos(page: number = 1, pageSize: number = 12): Promise<VideoResponse> {
  try {
    const response = await fetch(`/api/videos?page=${page}&pageSize=${pageSize}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.details || errorData.error || 'Failed to fetch videos');
    }
    const data = await response.json();
    
    // Validate response structure
    if (!Array.isArray(data.videos)) {
      throw new Error('Invalid response format: videos array not found');
    }
    
    return {
      videos: data.videos,
      total: data.total || 0,
      page: data.page || page,
      pageSize: data.pageSize || pageSize
    };
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error; // Let the component handle the error
  }
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
} 