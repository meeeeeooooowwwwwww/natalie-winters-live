import { scrapeWarRoomVideos } from '../src/utils/scraper';
import fs from 'fs';
import path from 'path';

async function main() {
  try {
    console.log('Starting video scraping...');
    
    // Scrape videos
    const videos = await scrapeWarRoomVideos();
    
    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'public', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Save videos to JSON file
    const outputPath = path.join(dataDir, 'warroom-videos.json');
    fs.writeFileSync(outputPath, JSON.stringify(videos, null, 2));
    
    console.log(`Successfully scraped ${videos.length} videos`);
    console.log(`Data saved to ${outputPath}`);
  } catch (error) {
    console.error('Error during scraping:', error);
    process.exit(1);
  }
}

main(); 