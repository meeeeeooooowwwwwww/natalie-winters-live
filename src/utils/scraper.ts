import axios from 'axios';
import { Video } from '@/types/video';

export async function scrapeWarRoomVideos(): Promise<Video[]> {
  try {
    // Rumble API endpoint for Bannon's War Room channel
    const response = await axios.get('https://rumble.com/c/BannonsWarRoom');
    
    // Extract video data from the response
    const videos: Video[] = [];
    
    // Parse the HTML response to extract video information
    // Note: This is a basic example and would need to be enhanced based on Rumble's actual HTML structure
    const videoElements = response.data.match(/<div class="video-item"[^>]*>[\s\S]*?<\/div>/g) || [];
    
    for (const element of videoElements) {
      const link = extractLink(element);
      const video: Video = {
        id: extractVideoId(element),
        title: extractTitle(element),
        description: extractDescription(element),
        thumbnail: extractThumbnail(element),
        date: extractDate(element),
        duration: extractDuration(element),
        url: link,
        link: link,
        embed_url: `https://rumble.com/embed/${extractVideoId(element)}/?pub=4kxtac`,
        views: extractViews(element),
        comments: extractComments(element),
        category: extractCategory(element),
        tags: extractTags(element)
      };
      
      videos.push(video);
    }
    
    return videos;
  } catch (error) {
    console.error('Error scraping videos:', error);
    throw error;
  }
}

// Helper functions to extract data from HTML elements
function extractVideoId(element: string): string {
  const match = element.match(/data-video-id="([^"]+)"/);
  return match ? match[1] : '';
}

function extractTitle(element: string): string {
  const match = element.match(/<h3[^>]*>([^<]+)<\/h3>/);
  return match ? match[1].trim() : '';
}

function extractDescription(element: string): string {
  const match = element.match(/<p class="description"[^>]*>([^<]+)<\/p>/);
  return match ? match[1].trim() : '';
}

function extractThumbnail(element: string): string {
  const match = element.match(/<img[^>]*src="([^"]+)"[^>]*>/);
  return match ? match[1] : '';
}

function extractDate(element: string): string {
  const match = element.match(/<span class="date"[^>]*>([^<]+)<\/span>/);
  return match ? match[1].trim() : '';
}

function extractDuration(element: string): string {
  const match = element.match(/<span class="duration"[^>]*>([^<]+)<\/span>/);
  return match ? match[1].trim() : '';
}

function extractLink(element: string): string {
  const match = element.match(/<a[^>]*href="([^"]+)"[^>]*>/);
  return match ? match[1] : '';
}

function extractViews(element: string): number {
  const match = element.match(/<span class="views"[^>]*>([^<]+)<\/span>/);
  return match ? parseInt(match[1].replace(/[^0-9]/g, '')) : 0;
}

function extractComments(element: string): number {
  const match = element.match(/<span class="comments"[^>]*>([^<]+)<\/span>/);
  return match ? parseInt(match[1].replace(/[^0-9]/g, '')) : 0;
}

function extractCategory(element: string): string {
  const match = element.match(/<span class="category"[^>]*>([^<]+)<\/span>/);
  return match ? match[1].trim() : '';
}

function extractTags(element: string): string[] {
  const match = element.match(/<div class="tags"[^>]*>([^<]+)<\/div>/);
  return match ? match[1].split(',').map(tag => tag.trim()) : [];
} 