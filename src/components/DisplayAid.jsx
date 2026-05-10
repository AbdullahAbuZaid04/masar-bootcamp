import { getAllDistributionPoints } from "@/services/AidPoints";
import Points from "./Points";

export default async function DisplayAid() {
  let data, error;
  try {
    data = await getAllDistributionPoints();
  } catch (e) {
    error = e.message;
  }

  return (
    <div className="p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 border-b pb-4 flex justify-between items-center">
          <div className="">
            <h1 className="text-2xl font-bold text-[#003357]">Distribution Points</h1>
            <p className="text-gray-500 text-sm">Overview of all active aid stations.</p>
          </div>
        </div>
        {error ? (
          <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-red-200">
            <p className="text-red-500">Failed to load distribution points. Please try again later.</p>
          </div>
        ) : (
          <Points points={data} />
        )}
      </div>
    </div>
  );
}
