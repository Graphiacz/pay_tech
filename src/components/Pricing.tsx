import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Nejnižší poplatky na trhu</h2>
          <p className="text-xl text-gray-600">
            Transparentnost, kterou jinde nenajdete
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Transakční poplatky</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>Od 0,6 % do 1,4 % (dle obratu)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>Žádné měsíční poplatky</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>Peníze na účtu do 24 hodin</span>
                  </div>
                </div>
              </div>
              
              <div className="md:border-l md:pl-8 border-blue-100">
                <h3 className="text-2xl font-bold mb-4">Bez skrytých poplatků</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>Žádné poplatky za vedení účtu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>Zdarma aktivace terminálu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>Bez závazků a minimálního obratu</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                Spočítat úsporu s PayTech
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}