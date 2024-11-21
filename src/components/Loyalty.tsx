import React from 'react';
import { Users, BarChart, MessageSquare, TrendingUp } from 'lucide-react';

export default function Loyalty() {
  return (
    <section id="loyalty" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              Získejte věrné zákazníky a maximalizujte své tržby
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Věrnostní programy, které přitahují zákazníky zpět
            </p>
            <div className="space-y-6">
              {[
                { icon: <Users className="w-6 h-6" />, title: 'Sběr dat o zákaznících', text: 'Analyzujte chování zákazníků a jejich preference' },
                { icon: <BarChart className="w-6 h-6" />, title: 'Personalizované programy', text: 'Jednoduché nastavení věrnostních programů šitých na míru' },
                { icon: <MessageSquare className="w-6 h-6" />, title: 'SMS marketing', text: 'Možnost posílat cílené nabídky a akce přes SMS' },
                { icon: <TrendingUp className="w-6 h-6" />, title: 'Růst tržeb', text: 'Podpora pro růst tržeb a posílení loajality zákazníků' }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1556742208-999815fca738?auto=format&fit=crop&w=600&q=80"
              alt="Loyalty Program"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}