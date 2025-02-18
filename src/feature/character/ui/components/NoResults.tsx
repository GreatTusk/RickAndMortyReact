import { FrownIcon } from "lucide-react";

export const NoResults = () => {
  return (
    <div className="flex flex-col items-center">
      <FrownIcon className="w-16 h-16 text-gray-500 mb-4" />
      <p className="text-lg text-gray-700">No results found.</p>
    </div>
  );
};