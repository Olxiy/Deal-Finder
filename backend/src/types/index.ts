import { SortBy, SortOrder } from "./enums";

export interface Location {
  id?: string;
  lat: number;
  lng: number;
  address?: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  discountPercentage: number;
  category: string;
  subcategory: string;
  tags: string[];
  location: Location;
  merchantName: string;
  merchantRating: number;
  quantitySold: number;
  expiryDate: Date;
  featuredDeal: boolean;
  imageUrl: string;
  redemptionLocations: Location[];
  finePrint?: string;
  reviewCount: number;
  averageRating: number;
  availableQuantity: number;
}

export interface FilterCriteria {
  maxPrice?: number;
  minDiscount?: number;
  category?: string;
  subcategory?: string;
  tags?: string[];
  location?: Location;
  radius?: number; // in miles
  merchantRating?: number;
	search?: string;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
}