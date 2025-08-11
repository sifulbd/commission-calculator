import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Results from "./components/Results";

function App() {
    const [formData, setFormData] = useState({
        localSalesCount: "",
        foreignSalesCount: "",
        averageSaleAmount: "",
    });

    const [results, setResults] = useState({
        fcamara: null,
        competitor: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const localCount = parseInt(formData.localSalesCount, 10);
        const foreignCount = parseInt(formData.foreignSalesCount, 10);
        const avgAmount = parseFloat(formData.averageSaleAmount);

        if (isNaN(localCount) || isNaN(foreignCount) || isNaN(avgAmount) || localCount < 0 || foreignCount < 0 || avgAmount < 0) {
            alert("Please enter valid non-negative numbers.");
            return;
        }

        const FCAMARA_LOCAL_RATE = 0.2;
        const FCAMARA_FOREIGN_RATE = 0.35;
        const COMPETITOR_LOCAL_RATE = 0.02;
        const COMPETITOR_FOREIGN_RATE = 0.0755;

        const fcamaraCommission = localCount * avgAmount * FCAMARA_LOCAL_RATE + foreignCount * avgAmount * FCAMARA_FOREIGN_RATE;
        const competitorCommission = localCount * avgAmount * COMPETITOR_LOCAL_RATE + foreignCount * avgAmount * COMPETITOR_FOREIGN_RATE;

        setResults({
            fcamara: fcamaraCommission,
            competitor: competitorCommission,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <h1 className="text-center text-3xl font-bold mb-10 text-gray-800">Commission Calculator</h1>
            <InputForm localSalesCount={formData.localSalesCount} foreignSalesCount={formData.foreignSalesCount} averageSaleAmount={formData.averageSaleAmount} onChange={handleChange} onSubmit={handleSubmit} />
            <Results fcamara={results.fcamara} competitor={results.competitor} />
        </div>
    );
}

export default App;
