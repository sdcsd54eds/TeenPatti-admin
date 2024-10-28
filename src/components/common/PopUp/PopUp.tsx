import React, { useState } from "react";

const Popup = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative h-[500px] w-[500px] rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="mb-4 text-2xl font-semibold">Custom Form</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              className="w-full rounded border border-gray-300 p-2"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              className="w-full rounded border border-gray-300 p-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message:</label>
            <textarea
              className="w-full rounded border border-gray-300 p-2"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
