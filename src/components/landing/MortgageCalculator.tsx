'use client';

import React, { useState } from 'react';
import { Calculator, Percent, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState<number>(8500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(30);

  // Calculations
  const downPayment = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = Math.max(0, propertyPrice - downPayment);
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalPayments = loanTermYears * 12;

  let monthlyPrincipalInterest = 0;
  if (loanAmount > 0 && monthlyInterestRate > 0) {
    monthlyPrincipalInterest =
      (loanAmount *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments))) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
  }

  const estimatedTax = (propertyPrice * 0.012) / 12; // ~1.2% annual property tax
  const estimatedInsurance = (propertyPrice * 0.0035) / 12; // ~0.35% annual insurance
  const totalMonthly = monthlyPrincipalInterest + estimatedTax + estimatedInsurance;

  return (
    <section id="amenities" className="py-24 bg-[#fcfafa] relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a96150]">
            <Calculator className="w-4 h-4 text-[#c8816e]" />
            <span>Interactive Financial Amenities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1e1b18] tracking-tight">
            Luxury Estate <span className="rosegold-gradient-text font-serif italic">Mortgage Estimator</span>
          </h2>
          <p className="text-sm text-[#4a443e]">
            Plan your capital outlay with real-time financial modeling for high-value properties.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-panel p-6 sm:p-10 rounded-3xl border border-[#c8816e]/20 shadow-xl bg-white">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Property Price Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-[#1e1b18] uppercase tracking-wider">Property Valuation</span>
                <span className="text-[#c8816e] text-base font-extrabold">${propertyPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={1000000}
                max={30000000}
                step={250000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2 bg-[#f7f2ef] rounded-lg appearance-none cursor-pointer accent-[#c8816e]"
              />
              <div className="flex justify-between text-[10px] text-[#7a7268] font-medium">
                <span>$1M</span>
                <span>$15M</span>
                <span>$30M</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-[#1e1b18] uppercase tracking-wider">Down Payment ({downPaymentPercent}%)</span>
                <span className="text-[#a96150] text-sm font-extrabold">${Math.round(downPayment).toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-[#f7f2ef] rounded-lg appearance-none cursor-pointer accent-[#a96150]"
              />
            </div>

            {/* Interest Rate & Loan Term */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2 p-4 rounded-2xl bg-[#f7f2ef]/50 border border-[#c8816e]/15">
                <label className="text-xs font-bold uppercase tracking-wider text-[#4a443e] flex items-center gap-1.5">
                  <Percent className="w-3.5 h-3.5 text-[#c8816e]" /> Interest Rate
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="2.0"
                  max="12.0"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full bg-white border border-[#c8816e]/20 rounded-xl px-3 py-2 text-sm text-[#1e1b18] font-bold focus:outline-none focus:border-[#c8816e]"
                />
              </div>

              <div className="space-y-2 p-4 rounded-2xl bg-[#f7f2ef]/50 border border-[#c8816e]/15">
                <label className="text-xs font-bold uppercase tracking-wider text-[#4a443e] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#c8816e]" /> Loan Term
                </label>
                <select
                  value={loanTermYears}
                  onChange={(e) => setLoanTermYears(Number(e.target.value))}
                  className="w-full bg-white border border-[#c8816e]/20 rounded-xl px-3 py-2 text-sm text-[#1e1b18] font-bold focus:outline-none focus:border-[#c8816e] cursor-pointer"
                >
                  <option value={15}>15 Years Fixed</option>
                  <option value={20}>20 Years Fixed</option>
                  <option value={30}>30 Years Fixed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#f7f2ef] to-white p-6 border border-[#c8816e]/25 flex flex-col justify-between space-y-6 shadow-sm">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7a7268] font-bold">Estimated Monthly Payment</span>
              <div className="text-4xl font-black rosegold-gradient-text mt-2">
                ${Math.round(totalMonthly).toLocaleString()}
                <span className="text-xs text-[#7a7268] font-normal ml-1">/ mo</span>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 mt-6 text-xs">
                <div className="flex justify-between py-2 border-b border-[#c8816e]/10">
                  <span className="text-[#4a443e]">Principal & Interest</span>
                  <span className="text-[#1e1b18] font-bold">${Math.round(monthlyPrincipalInterest).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#c8816e]/10">
                  <span className="text-[#4a443e]">Estimated Property Tax</span>
                  <span className="text-[#1e1b18] font-bold">${Math.round(estimatedTax).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#c8816e]/10">
                  <span className="text-[#4a443e]">Hazard Insurance</span>
                  <span className="text-[#1e1b18] font-bold">${Math.round(estimatedInsurance).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#c8816e]/10">
                  <span className="text-[#4a443e]">Financed Amount</span>
                  <span className="text-[#a96150] font-bold">${Math.round(loanAmount).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact?subject=financial-advisory"
              className="rosegold-button w-full py-3.5 rounded-xl text-center text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-md"
            >
              <span>Consult Financial Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
