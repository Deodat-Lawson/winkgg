"use client"
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const LovePuzzle = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === '1558') {
      setMessage('Congratulations! You have solved the key to our hearts! 💕');
      setShowSuccess(true);
    } else {
      setMessage('Try again, my love. Let your heart guide you to the right numbers...');
      setShowSuccess(false);
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 mx-auto mb-4 text-pink-300" />
            <h1 className="text-3xl font-serif text-pink-100 mb-2">
              A Love's Mystery
            </h1>
            <p className="text-pink-200 italic">
              "In every number lies a secret, in every digit a whisper of our love..."
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter the key to my heart..."
                  className="w-full px-4 py-2 bg-white/20 border border-pink-300/50 rounded-lg text-pink-100 placeholder-pink-300/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  maxLength={4}
              />
            </div>

            <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Unlock Our Destiny
            </button>
          </form>

          {message && (
              <div className={`mt-6 text-center ${showSuccess ? 'text-pink-200' : 'text-pink-300'} font-serif`}>
                {message}
              </div>
          )}

          {showSuccess && (
              <div className="mt-8 text-center">
                <div className="animate-pulse">
                  <Heart className="w-12 h-12 mx-auto text-pink-400" fill="currentColor" />
                </div>
              </div>
          )}
        </div>
      </div>
  );
};

export default LovePuzzle;
