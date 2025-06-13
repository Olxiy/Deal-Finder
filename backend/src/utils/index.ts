import { Deal } from "../types";

export function getAllCategories(deals: Deal[]): string[] {
  return [...new Set(deals.map(deal => deal.category))];
}