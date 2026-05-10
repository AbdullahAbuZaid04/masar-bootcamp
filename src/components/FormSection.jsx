"use client";

import { ChevronDown, HomeIcon, MapPin } from "lucide-react";
import { createDistributionPoint } from "@/app/actions";
import { useActionState } from "react";
import Notification from "./Notification";

export default function FormSection() {
  const [state, formAction, isPending] = useActionState(createDistributionPoint, null);

  if (isPending) {
    scroll({
      top: 0,
    });
  }

  return (
    <section className="max-w-xl mx-auto my-2 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#003357] mb-2">Add New Distribution Point</h2>
        <p className="text-sm text-gray-500">
          Register a new humanitarian aid station within the active network.
        </p>
      </div>

      <Notification state={state} />

      <form action={formAction} className="space-y-5">
        <div>
          <label htmlFor="point-name" className="block text-sm font-bold text-[#003357] mb-2">Point Name</label>
          <input
            id="point-name"
            type="text"
            name="name"
            required
            placeholder="e.g., Central Station A"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8faff] focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-500"
          />
        </div>

        <div>
          <label htmlFor="point-type" className="block text-sm font-bold text-[#003357] mb-2">Type</label>
          <div className="relative">
            <select id="point-type" name="type" required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8faff] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer text-gray-700">
              <option value="Food">Food</option>
              <option value="Medicine">Medicine</option>
              <option value="Money">Money</option>
              <option value="Water">Water</option>
            </select>
            <ChevronDown className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>

        <div>
          <label htmlFor="point-area" className="block text-sm font-bold text-[#003357] mb-2">Area</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-3.5 text-gray-500 pointer-events-none" size={18} />
            <select id="point-area" name="area" required className="w-full pl-11 pr-10 py-3 rounded-lg border border-gray-200 bg-[#f8faff] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer text-gray-700">
              <option value="Gaza">Gaza</option>
              <option value="Khan-Younis">Khan-Younis</option>
              <option value="Rafah">Rafah</option>
            </select>
            <ChevronDown className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>

        <div>
          <label htmlFor="point-organization" className="block text-sm font-bold text-[#003357] mb-2">Organization</label>
          <div className="relative">
            <select id="point-organization" name="organization_id" required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8faff] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer text-gray-700">
              <option value="1">UNRWA</option>
              <option value="2">WFP</option>
              <option value="3">UNICEF</option>
              <option value="4">WHO</option>
            </select>
            <ChevronDown className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>

        <div>
          <label htmlFor="point-address" className="block text-sm font-bold text-[#003357] mb-2">Address</label>
          <div className="relative">
            <HomeIcon className="absolute left-4 top-3.5 text-gray-500 pointer-events-none" size={18} />
            <input
              id="point-address"
              type="text"
              name="address"
              required
              placeholder="e.g., Main Street, Rafah"
              className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 bg-[#f8faff] focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="point-status" className="block text-sm font-bold text-[#003357] mb-2">Status</label>
          <div className="relative">
            <select id="point-status" name="status" required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8faff] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer text-gray-700">
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
            <ChevronDown className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>

        <button
          disabled={isPending}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#003357] text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
        >
          {isPending ? "Adding..." : "Add Distribution Point"}
        </button>
      </form>
    </section >
  );
}
