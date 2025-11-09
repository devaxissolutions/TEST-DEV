// Common types for the application

export interface Service {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface Link {
  name: string;
  href: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
}

export interface Project {
  // Define based on projects data
  title: string;
  description: string;
  image: string;
  // Add more fields as needed
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  // Add more fields
}