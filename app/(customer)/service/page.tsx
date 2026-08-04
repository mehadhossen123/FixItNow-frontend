import React from "react";

const CreateServiceForm = () => {
  return (
    <div className="w-full min-h-screen bg-[#7B8B9E] flex justify-center items-center p-4 sm:p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        {/* লোগো ও হেডার */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="mb-2">
            <span className="text-3xl font-extrabold text-[#1E293B]"> FixIT</span>
            <span className="text-3xl font-black text-orange-500"> Now</span>
            <p className="text-[10px] tracking-widest font-bold text-slate-600 uppercase">
              Contractor-On-Demand
            </p>
          </div>
          <h1 className="text-2xl font-bold text-[#1E293B] mt-2">
            Post a New Service
          </h1>
          <p className="text-sm text-slate-500">
            Offer your skills and services to clients
          </p>
        </div>

        {/* স্ট্যাটিক ফরম */}
        <form className="space-y-4">
          {/* Service Title */}
          <div className="form-control">
            <label className="label text-sm font-medium text-slate-700">
              Service Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Wooden Door Alignment & Lock Installation"
              className="input input-bordered w-full focus:outline-orange-500 bg-slate-50 text-slate-800"
              required
            />
          </div>

          {/* Category Dropdown */}
          <div className="form-control">
            <label className="label text-sm font-medium text-slate-700">
              Select Category
            </label>
            <select
              name="categoryId"
              defaultValue=""
              className="select select-bordered w-full focus:outline-orange-500 bg-slate-50 text-slate-800"
              required
            >
              <option value="" disabled>
                -- Choose a Category --
              </option>
              <option value="978d2fdc-8ac4-4d5b-a094-fe0b3f6af88c">
                Carpentry & Woodwork
              </option>
              <option value="plumbing-id">Plumbing Services</option>
              <option value="electrical-id">Electrical Repair</option>
            </select>
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label text-sm font-medium text-slate-700">
              Service Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              name="price"
              placeholder="600.00"
              className="input input-bordered w-full focus:outline-orange-500 bg-slate-50 text-slate-800"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label text-sm font-medium text-slate-700">
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              placeholder="Describe your service in detail..."
              className="textarea textarea-bordered w-full focus:outline-orange-500 bg-slate-50 text-slate-800 h-28"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-orange-500 hover:bg-orange-600 text-white font-bold border-none mt-4 shadow-lg shadow-orange-500/30"
          >
            Publish Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateServiceForm;
