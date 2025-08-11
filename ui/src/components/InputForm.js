import React from "react";

export default function InputForm({ localSalesCount, foreignSalesCount, averageSaleAmount, onChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="localSalesCount" className="block text-gray-700 font-semibold mb-2">
                    Local Sales Count
                </label>
                <input type="number" id="localSalesCount" name="localSalesCount" value={localSalesCount} onChange={onChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" min="0" required />
            </div>

            <div className="mb-4">
                <label htmlFor="foreignSalesCount" className="block text-gray-700 font-semibold mb-2">
                    Foreign Sales Count
                </label>
                <input type="number" id="foreignSalesCount" name="foreignSalesCount" value={foreignSalesCount} onChange={onChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" min="0" required />
            </div>

            <div className="mb-6">
                <label htmlFor="averageSaleAmount" className="block text-gray-700 font-semibold mb-2">
                    Average Sale Amount (£)
                </label>
                <input type="number" step="0.01" id="averageSaleAmount" name="averageSaleAmount" value={averageSaleAmount} onChange={onChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" min="0" required />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
                Calculate
            </button>
        </form>
    );
}
