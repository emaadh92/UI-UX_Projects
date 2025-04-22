"use client"

import { useState } from 'react';

export default function BmiCalculator() {
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const heightInCm = (parseFloat(feet) * 30.48) + (parseFloat(inches) * 2.54);
    const heightInMeters = heightInCm / 100;
    const calculatedBmi = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(parseFloat(calculatedBmi));
  };

  return (
    <div className="bg-gray-900 p-8 mx-auto my-10 rounded-lg shadow-lg border border-yellow-600 max-w-md w-full">
      <h2 className="text-2xl font-bold text-center text-red-600 mb-4">
        BMI Calculator
      </h2>
      <p className="text-gray-300 mb-6 text-center">
        At <span className="font-semibold">Core<span className="text-red-600">Xtreme</span></span>, tracking your BMI is a step towards achieving a balanced and healthy body.
        Aim for progress, not perfection, and let each small goal inspire your journey to strength!
      </p>
      <form onSubmit={calculateBMI} className="space-y-4">
        <div>
          <label className="block text-gray-400 mb-1" htmlFor="feet">Height:</label>
          <div className="flex space-x-2">
            <input
              type="number"
              id="feet"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              className="w-1/2 p-2 border rounded-lg bg-gray-800 text-white"
              placeholder="Feet"
              required
            />
            <input
              type="number"
              id="inches"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              className="w-1/2 p-2 border rounded-lg bg-gray-800 text-white"
              placeholder="Inches"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-400 mb-1" htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border rounded-lg bg-gray-800 text-white"
            placeholder="Enter your weight"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-lg transition hover:bg-red-700"
        >
          Calculate BMI
        </button>
      </form>
      {bmi !== null && (
        <div className="text-center mt-6">
          <p className="text-xl font-semibold text-gray-100">Your BMI: {bmi}</p>
          <p className="text-sm text-gray-400">
            A healthy body is built on consistency and effort. Keep going!
          </p>
        </div>
      )}
    </div>
  );
}
