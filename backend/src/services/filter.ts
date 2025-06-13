import { Deal, FilterCriteria } from "../types";
import { SortOrder, SortBy } from "../types/enums";

export function filterAndSortDeals(deals: Deal[], criteria: FilterCriteria): Deal[] {
  const { search, sortBy, sortOrder, category, maxPrice } = criteria;

  if (search?.trim()) {
    const searchLower = search.toLowerCase();
    deals = deals.filter(deal =>
      deal.title.toLowerCase().includes(searchLower) ||
      deal.description.toLowerCase().includes(searchLower) ||
      deal.merchantName.toLowerCase().includes(searchLower)
    );
  }

  if (category?.length) {
    deals = deals.filter(deal => category!.includes(deal.category));
  }

  if (maxPrice) {
    deals = deals.filter(deal => deal.discountPrice <= maxPrice);
  }

  if (sortBy) {
    const order = sortOrder === SortOrder.desc ? -1 : 1;

    deals.sort((a, b) => {
      switch (sortBy) {
        case SortBy.discount:
          return order * (b.discountPercentage - a.discountPercentage);
        case SortBy.price:
          return order * (a.discountPrice - b.discountPrice);
        case SortBy.rating:
          return order * (b.merchantRating - a.merchantRating);
        case SortBy.popularity:
          return order * (b.quantitySold - a.quantitySold);
        case SortBy.expiry:
          return order * (new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime());
        default:
          return 0;
      }
    });
  }

  return deals;
}
