import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white pb-32 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Nejvýhodnější platební ekosystém pro podnikatele
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Vše, co potřebujete pro moderní podnikání: Platební terminál. Věrnostní program. 
            Platební karty. Peněženka.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition flex items-center gap-2">
              Registrovat
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="fill-white" viewBox="0 0 1440 120">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}