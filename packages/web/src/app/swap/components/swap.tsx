import React from 'react';

const CryptoSwap = () => {
  return (
    <div className="bg-black text-white p-6 max-w-sm mx-auto rounded-lg">
      <div className="flex justify-between mb-4">
        <button className="text-lg font-semibold">Swap</button>
        <button className="text-lg font-semibold">Buy</button>
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2">You pay</label>
        <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
          <input
            className="bg-transparent text-right outline-none"
            type="number"
            placeholder="0"
          />
          <span className="ml-2">ETH</span>
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <label className="mb-2">You receive</label>
        <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
          <input
            className="bg-transparent text-right outline-none"
            type="number"
            placeholder="0"
          />
          <span className="ml-2">DAI</span>
        </div>
      </div>
      <button className="w-full bg-purple-600 py-2 rounded hover:bg-purple-700 transition duration-300">
        Connect wallet
      </button>
    </div>
  );
};

export default CryptoSwap;
