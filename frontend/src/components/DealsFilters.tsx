import { useEffect } from 'react';
import type { DealsFiltersProps } from '../types';
import { SortBy, SortOrder } from '../types/enums';

export const DealsFilters = ({ filters, onFilterChange, allCategories }: DealsFiltersProps) => {
  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  return (
    <div className="flex flex-col justify-center gap-4 mb-6 md:flex-row md:flex-wrap md:items-end">
      <select
        value={filters.category || ''}
        onChange={e => onFilterChange(f => ({ ...f, category: e.target.value }))}
        className="border px-3 py-2 rounded-md w-full md:w-1/4"
      >
        <option value="">All categories</option>
        {allCategories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Max price"
        min={0}
        value={filters.maxPrice || ''}
        onChange={e =>
          onFilterChange(f => ({ ...f, maxPrice: Number(e.target.value) || undefined }))
        }
        className="border px-3 py-2 rounded-md w-full md:w-[120px]"
      />

      <select
        value={filters.sortBy || ''}
        onChange={e => onFilterChange(f => ({ ...f, sortBy: e.target.value as SortBy }))}
        className="border px-3 py-2 rounded-md w-full md:w-1/4"
      >
        <option value="">Sort by...</option>
        {Object.values(SortBy).map(value => (
          <option key={value} value={value}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </option>
        ))}
      </select>

      <select
        value={filters.sortOrder || SortOrder.desc}
        onChange={e => onFilterChange(f => ({ ...f, sortOrder: e.target.value as SortOrder }))}
        className="border px-3 py-2 rounded-md w-full md:w-[145px]"
      >
        <option value={SortOrder.desc}>High → Low</option>
        <option value={SortOrder.asc}>Low → High</option>
      </select>
        <div className='w-full md:w-1/3'>
          <input
            type="text"
            placeholder="Search by text..."
            value={filters.search || ''}
            onChange={e => onFilterChange(f => ({ ...f, search: e.target.value }))}
            className="mb-auto border px-3 py-2 rounded-md w-full"
          />
        </div>
    </div>
  );
};
