import React, { useState } from 'react';
import { calculateInvestmentResults } from '../util/investments';

import generatepdf from '../util/generatereport.js';

const OutputData = ({ inputValue }) => {
    // Component logic will go here

    const resultData = calculateInvestmentResults({
    initialInvestment: +inputValue.initialInvestment,
    annualInvestment: +inputValue.annualInvestment,
    expectedReturn: +inputValue.expectedReturn,
    duration: +inputValue.duration
    });

    const handleGeneratePDF = () => {
        console.log(resultData.initialInvestment);
        generatepdf(resultData);
    }

    if (inputValue.duration <= 0) {
        return <p>Enter a duration greater than 0</p>
    }

    return (
        <div className='report-content'>
            <table id='result'>
                <thead id='result-head'>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {resultData.map((yearData, index) => (
                        <tr key={index}>
                            <td>{yearData.year}</td>
                            <td>{yearData.investmentValue.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
                            <td>{yearData.interest.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
                            <td>{yearData.totalInterest.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
                            <td>{yearData.investedCapital.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={() => handleGeneratePDF()}>Generate PDF</button>
        </div>
    );
};

export default OutputData;