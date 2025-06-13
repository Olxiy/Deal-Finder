import type { Deal } from "../types";

export const DealCard = ({ deal }: { deal: Deal }) => {
  return (
    <div className="rounded-2xl shadow-md border p-4 flex flex-col gap-2 hover:shadow-lg transition">
      <div className="flex justify-center items-center">
        <h3 className="text-xl font-semibold text-emerald-800">{deal.merchantName}</h3>
      </div>
			<div className="flex justify-center items-center">
        <img src={deal.imageUrl} />
      </div>
      <div className="flex justify-center items-center">
        <h3 className="text-xl font-semibold">{deal.title}</h3>
      </div>

      <p className="text-gray-600">{deal.description}</p>

      <div className="flex flex-wrap gap-2">
        {deal.tags && deal.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between gap-2">
				<div className="mt-2 text-sm text-gray-500">
					📍 {deal.merchantName}, {deal.location.country}
				</div>
				<div className="flex">
						<svg className="w-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        		<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    			</svg>
					<p className="ms-2 text-lg font-bold text-gray-900">{deal.merchantRating}</p>
				</div>
      </div>

      <div className="flex justify-end gap-2 text-right font-semibold mt-auto">
				<div className="line-through text-black">{deal.originalPrice} USD</div>
				<div className="text-red-600 text-xl">/ {deal.discountPrice} USD</div>
      </div>
    </div>
  );
};
