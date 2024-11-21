import React from 'react';
import { CreditCard, Shield, Wallet, Award } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Wallet className="w-8 h-8" />
          <span className="text-2xl font-bold">PayTech</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#terminal" className="hover:text-blue-200 transition">Terminál</a>
          <a href="#loyalty" className="hover:text-blue-200 transition">Věrnostní program</a>
          <a href="#wallet" className="hover:text-blue-200 transition">Peněženka</a>
          <a href="#pricing" className="hover:text-blue-200 transition">Ceník</a>
        </div>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition">
          Registrovat
        </button>
      </nav>
    </header>
  );
}