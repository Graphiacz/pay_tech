import React from 'react';
import { Wallet, LineChart, Gift, Lock } from 'lucide-react';

export default function DigitalWallet() {
  return (
    <section id="wallet" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Peníze vždy pod kontrolou</h2>
          <p className="text-xl text-gray-600">
            Kompletní přehled a správa financí na jednom místě
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Wallet className="w-8 h-8" />,
              title: 'Digitální peněženka',
              description: 'Okamžité platby a převody mezi účty'
            },
            {
              icon: <LineChart className="w-8 h-8" />,
              title: 'Sledování transakcí',
              description: 'Přehled o výdajích v reálném čase'
            },
            {
              icon: <Gift className="w-8 h-8" />,
              title: 'Věrnostní program',
              description: 'Integrovaný systém odměn a bonusů'
            },
            {
              icon: <Lock className="w-8 h-8" />,
              title: 'Bezpečné bankovnictví',
              description: 'Jednoduché a zabezpečené funkce'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}