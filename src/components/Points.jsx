import { deletePoint } from "@/app/actions";
import { Trash, CircleCheck, CircleX, Package, Tag, MapPin, Building2 } from "lucide-react";

export default async function Points({ points }) {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {points?.map((point) => (
        <div
          key={point.id}
          className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="space-y-1 min-w-0">
              <h2 className="font-bold text-lg text-[#004a80] truncate" title={point.name}>{point.name || 'Unknown Aid Point'}</h2>

            </div>
            <form action={deletePoint}>
              <input type="hidden" name="id" value={point.id} />
              <button type="submit" aria-label="Delete Point" title="Delete Point" className="text-red-600 hover:bg-red-500 hover:text-white p-2 rounded-full cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500">
                <Trash size={18} />
              </button>
            </form>
          </div>
          <div className="space-y-3">
            <div className={`flex items-center gap-3 font-medium ${point.status?.toLowerCase() === 'available' ? 'text-green-700' : 'text-red-700'}`}>
              {point.status?.toLowerCase() === 'available' ? <CircleCheck size={16} /> : <CircleX size={16} />}
              <span className="text-sm">
                {point.status || 'Available'}
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Package size={16} className="text-gray-500" aria-hidden="true" />
              <span className="text-sm truncate" title={point.organization?.name}>
                {point.organization?.name || 'Unknown Organization'}
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Tag size={16} className="text-gray-500" aria-hidden="true" />
              <span className="text-sm truncate" title={point.type}>
                {point.type || 'General Support'}
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <MapPin size={16} className="text-gray-500" aria-hidden="true" />
              <span className="text-sm truncate" title={point.address}>{point.address || 'Gaza, Palestine'}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Building2 size={16} className="text-gray-500" aria-hidden="true" />
              <span className="text-sm font-medium">{point.area || 'AidFlow Partner'}</span>
            </div>
          </div>
        </div>
      ))}

      {
        (!points || points.length === 0) && (
          <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed">
            <p className="text-gray-500 font-medium">No distribution points found.</p>
          </div>
        )
      }
    </div>
  )
}