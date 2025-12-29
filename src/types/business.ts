export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  phone: string;
  email?: string;
  website?: string;
  image: string;
  location: string;
  district: string;
  distance?: string;
  isOpen: boolean;
  priceRange: string;
  address: string;
  workingHours: {
    [key: string]: string;
  };
  features: string[];
  images: string[];
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  count: number;
}

export interface Review {
  id: string;
  businessId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  images?: string[];
  createdAt: Date;
  helpful: number;
}
