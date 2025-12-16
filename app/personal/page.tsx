"use client"

import React from "react";

import { useQuery } from "@tanstack/react-query";


interface StockQuote {
  symbol: string;
  current: number;
  high: number;
  low: number;
  open: number;
  prevClose: number;
}

const fetchStock = async (symbol: string): Promise<StockQuote> => {
  const res = await fetch(`/api/stock?symbol=${symbol}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export default function personal() {
    const YOUR_SHARES = 0; // your holding

    const { data, isLoading, error } = useQuery({
        queryKey: ["stock", "MDB"],
        queryFn: () => fetchStock("MDB"),
        refetchInterval: 5000,
    });

    
    if (isLoading) return <p>Loading stock info...</p>;
    if (error) return <p>Error fetching stock data.</p>;

    const totalValue = (data!.current * YOUR_SHARES).toFixed(2);

    return (
        <div className="ml-[15px] mr-[15px] mt-[20px]">
            <h2 className="text-white text-[22px] font-sans">Welcome back, Dima!</h2>
            <div className="font-sans max-w-m m-auto mt-8 p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-4">{data!.symbol} Stock</h1>
                <div className="space-y-1">
                    <p>Current Price: <span className="font-semibold">${data!.current}</span></p>
                    <p>Open: <span className="font-semibold">${data!.open}</span></p>
                    <p>High: <span className="font-semibold">${data!.high}</span></p>
                    <p>Low: <span className="font-semibold">${data!.low}</span></p>
                    <p>Previous Close: <span className="font-semibold">${data!.prevClose}</span></p>
                </div>
                <hr className="my-4 border-gray-300" />
                <div className="space-y-1">
                    <p>Your Holding: <span className="font-semibold">{YOUR_SHARES} shares</span></p>
                    <p>Total Value: <span className="font-semibold">${totalValue}</span></p>
                </div>
            </div>
        </div>

        // WebUntis Lessons 

        // Timetable for today

        // Important links to use 

        // 
    )
}