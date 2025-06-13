import type { SortBy, SortOrder } from "./enums";

export interface Location {
  country: string;
  city?: string;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  merchantName: string;
  merchantRating: number;
  imageUrl: string;
  category: string;
  originalPrice: number;
  discountPrice: number;
  location: Location;
}

export interface FilterCriteria {
  search?: string;
  maxPrice?: number;
  minDiscount?: number;
  category?: string;
  subcategory?: string;
  tags?: string[];
  merchantRating?: number;
  location?: { lat: number; lng: number };
  radius?: number;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
};

export interface DealsFiltersProps {
  filters: FilterCriteria
  allCategories: string[]
  onFilterChange: React.Dispatch<React.SetStateAction<FilterCriteria>>;
};

export interface FetchFilteredDeals {
  filters: FilterCriteria,
  setDeals: React.Dispatch<React.SetStateAction<Deal[]>>
}
