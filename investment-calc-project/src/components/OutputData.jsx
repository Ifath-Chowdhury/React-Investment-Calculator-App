import React from 'react';
import { calculateInvestmentResults } from '../util/investments';

const OutputData = ({ inputValue }) => {
    if (inputValue.duration <= 0) {
        return <p>Enter a duration greater than 0</p>
    }
    // Component logic will go here
    const resultData = calculateInvestmentResults({
    initialInvestment: +inputValue.initialInvestment,
    annualInvestment: +inputValue.annualInvestment,
    expectedReturn: +inputValue.expectedReturn,
    duration: +inputValue.duration
    });

    return (
        <div>
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
        </div>
    );
};

export default OutputData;