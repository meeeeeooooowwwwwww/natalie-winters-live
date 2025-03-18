export interface Video {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  date: string;
  duration?: string;
  url: string;
  link: string;
  embed_url: string;
  views?: number;
  comments?: number;
  category?: string;
  tags?: string[];
}

export interface VideoResponse {
  videos: Video[];
  total: number;
  page: number;
  pageSize: number;
} 