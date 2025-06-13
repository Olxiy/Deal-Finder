import type { Deal } from "../types";
import { DealCard } from "./DealCard";

export const DealsList = ({ deals }: { deals: Deal[] }) => {
  return (
    <>
      {!deals.length && (
        <div className="w-full min-h-[625px] flex items-center justify-center text-gray-500">
          No deals found.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {deals.map(deal => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </>
  );
};