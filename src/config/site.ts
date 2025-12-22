/**
 * Site Configuration
 *
 * Central configuration for your Astro project.
 *
 * 🚀 CUSTOMIZE THIS FILE FOR YOUR PROJECT:
 * 1. Update name, title, description with your project details
 * 2. Set your domain URL (important for SEO and social sharing)
 * 3. Add your social media handles
 * 4. Customize navigation items
 */

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
  social: {
    github?: string;
    linkedin?: string;
  };
  nav: Array<{
    label: string;
    href: string;
  }>;
}

export const siteConfig: SiteConfig = {
  // 📝 Update with your project name (appears in page titles, footer, etc.)
  name: 'My Project',

  // 📝 Main site title (used for homepage and meta tags)
  title: 'My Project',

  // 📝 Brief description for SEO and social sharing
  description:
    'A modern, fast, and accessible web application built with Astro',

  // 🌐 Your domain URL (update this for production!)
  url: 'https://your-domain.com',

  // 👤 Your name or organization
  author: 'Your Name',

  // 📱 Social media handles (uncomment and update as needed)
  social: {
    github: 'github-username',
    linkedin: 'linkedin-username',
  },

  // 🧭 Main navigation menu
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Articles', href: '/articles' },
  ],
};
