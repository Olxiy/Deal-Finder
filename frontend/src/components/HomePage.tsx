
import { useEffect, useState } from 'react';
import { DealsFilters } from './DealsFilters';
import { DealsList } from './DealList';
import type { Deal, FilterCriteria } from '../types';
import { SortBy, SortOrder } from '../types/enums';
import { fetchFilteredDeals, fetchAllCategories } from '../api/dealsApi';
import { useDebounce } from '../hooks';

export default function HomePage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [filters, setFilters] = useState<FilterCriteria>({
    sortBy: SortBy.discount,
    sortOrder: SortOrder.desc,
    search: ""
  });

  const debouncedSearch = useDebounce(filters.search, 500);

  useEffect(() => {
    fetchAllCategories(setAllCategories)
  }, [])

  useEffect(() => {
    const finalFilters = {
      ...filters,
      search: debouncedSearch,
    };
    fetchFilteredDeals({ filters: finalFilters, setDeals, });
  }, [
    filters.sortBy, 
    filters.sortOrder, 
    filters.category,
    filters.maxPrice, 
    debouncedSearch
  ]);

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Available Deals</h1>
      <DealsFilters 
        onFilterChange={setFilters} 
        filters={filters} 
        allCategories={allCategories} 
      />
      <DealsList deals={deals} />
    </main>
  );
}