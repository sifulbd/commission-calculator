import React from "react";

export default function Results({ fcamara, competitor }) {
    if (fcamara === null || competitor === null) return null;

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Results</h3>
            <p className="mb-2 text-gray-700">Total FCamara Commission: £{fcamara.toFixed(2)}</p>
            <p className="text-gray-700">Total Competitor Commission: £{competitor.toFixed(2)}</p>
        </div>
    );
}
