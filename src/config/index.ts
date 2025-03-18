interface Config {
  baseUrl: string;
  apiBaseUrl: string;
  environment: string;
  isDevelopment: boolean;
  isGitHub: boolean;
  isProduction: boolean;
}

const config: Config = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
  environment: process.env.NEXT_PUBLIC_ENV || 'development',
  isDevelopment: process.env.NEXT_PUBLIC_ENV === 'development',
  isGitHub: process.env.NEXT_PUBLIC_ENV === 'github',
  isProduction: process.env.NEXT_PUBLIC_ENV === 'production',
};

export default config; 