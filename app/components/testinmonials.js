'use client';

import { useState } from 'react';

const Testimonials = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const testimonials = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "position": "CEO, Tech Innovations",
      "quote": "Delta's AI solutions have revolutionized our decision-making process. The predictive analytics have given us a competitive edge we never thought possible."
    },
    {
      "id": 2,
      "name": "Mark Smith",
      "position": "CTO, Digital Solutions",
      "quote": "Delta has transformed the way I manage my daily tasks. It's like having a personal assistant that truly understands my needs!"
    },
    {
      "id": 3,
      "name": "Sarah Williams",
      "position": "Product Manager, InnovateCo",
      "quote": "The automation capabilities have cut our processing time in half. Our team can now focus on strategic initiatives instead of repetitive tasks."
    },
    {
      "id": 4,
      "name": "David Chen",
      "position": "Founder, AI Ventures",
      "quote": "As someone who works with AI solutions daily, I'm impressed by Delta's intuitive interface and powerful backend. It's rare to find both in one package."
    },
    {
      "id": 5,
      "name": "Emma Davis",
      "position": "Director, Future Tech",
      "quote": "The integration was seamless, and the results were immediate. Our data analysis capabilities have improved exponentially since implementing Delta."
    },
    {
      "id": 6,
      "name": "Michael Rodriguez",
      "position": "Operations Manager, Global Logistics",
      "quote": "Delta's AI has streamlined our supply chain operations beyond our expectations. Real-time optimization and predictive maintenance have saved us millions."
    },
    {
      "id": 7,
      "name": "Jennifer Patel",
      "position": "Head of Research, BioTech Solutions",
      "quote": "The pattern recognition capabilities have accelerated our research timeline significantly. What used to take months now takes weeks."
    },
    {
      "id": 8,
      "name": "Robert Kim",
      "position": "Financial Analyst, Investment Corp",
      "quote": "Delta's market prediction models have proven invaluable for our portfolio management. The accuracy of its forecasts is remarkable."
    },
    {
      "id": 9,
      "name": "Laura Martinez",
      "position": "HR Director, Enterprise Solutions",
      "quote": "We've transformed our talent acquisition process with Delta's AI. The matching algorithms have improved our hiring success rate by 60%."
    },
    {
      "id": 10,
      "name": "Thomas Anderson",
      "position": "Chief Innovation Officer, Smart Manufacturing",
      "quote": "The real-time production line optimization has reduced our waste by 35% and increased efficiency across all our facilities. Delta's impact on our bottom line has been substantial."
    },
    {
      "id": 11,
      "name": "Sophie Chen",
      "position": "Digital Marketing Director, E-commerce Giant",
      "quote": "Delta's customer behavior analysis has revolutionized our marketing strategy. We're now able to predict trends and adjust campaigns in real-time."
    }
  ];

  const handleViewMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="relative mb-8">
          <div className={`grid grid-cols-1 py-2 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-in-out overflow-hidden ${!isExpanded ? 'max-h-[500px]' : ''}`}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#252525] rounded-xl p-8 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border border-white/10">
                    <span className="text-white text-lg font-medium">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none transition-opacity duration-700 ease-in-out ${isExpanded ? 'opacity-0' : 'opacity-100'}`}></div>
        </div>
        
        <div className="text-center relative z-20">
          <button 
            onClick={handleViewMore}
            className="bg-white text-gray-900 px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg"
          >
            {isExpanded ? "Show Less" : "View More Testimonials"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;