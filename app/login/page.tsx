"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import React from "react";

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    router.push(`/personal`);
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#292F36] px-7">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Sign in to your account
          </h1>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="email"
                placeholder="username"
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
