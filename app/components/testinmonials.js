'use client';

import { useState } from 'react';

const Testimonials = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const testimonials = [
    {
      "id": 1,
      "name": "Sample User 1",
      "position": "[Position Title 1]",
      "quote": "[Sample testimonial text - Replace this with actual customer feedback. This is a placeholder testimonial demonstrating the layout and structure of the content.]"
    },
    {
      "id": 2,
      "name": "Sample User 2",
      "position": "[Position Title 2]",
      "quote": "[Another example testimonial showing how customer feedback would appear in this space. Add real testimonials when available.]"
    },
    {
      "id": 3,
      "name": "Sample User 3",
      "position": "[Position Title 3]",
      "quote": "[Placeholder testimonial text - This space is reserved for genuine customer feedback about their experience with the product or service.]"
    },
    {
      "id": 4,
      "name": "Sample User 4",
      "position": "[Position Title 4]",
      "quote": "[Example testimonial placeholder - Replace with authentic customer testimonial highlighting specific benefits or features.]"
    },
    {
      "id": 5,
      "name": "Sample User 5",
      "position": "[Position Title 5]",
      "quote": "[Testimonial placeholder text - This area will showcase real customer experiences and success stories.]"
    },
    {
      "id": 6,
      "name": "Sample User 6",
      "position": "[Position Title 6]",
      "quote": "[Sample review text - Insert actual customer feedback here describing their journey and results with the product.]"
    },
    {
      "id": 7,
      "name": "Sample User 7",
      "position": "[Position Title 7]",
      "quote": "[Placeholder for customer testimonial - Add genuine feedback about product impact and customer satisfaction.]"
    },
    {
      "id": 8,
      "name": "Sample User 8",
      "position": "[Position Title 8]",
      "quote": "[Example testimonial content - This space will contain real customer stories and experiences.]"
    },
    {
      "id": 9,
      "name": "Sample User 9",
      "position": "[Position Title 9]",
      "quote": "[Testimonial placeholder - Replace with authentic customer feedback about their success with the product.]"
    },
    {
      "id": 10,
      "name": "Sample User 10",
      "position": "[Position Title 10]",
      "quote": "[Sample testimonial text - This will be replaced with real customer testimonials and success stories.]"
    },
    {
      "id": 11,
      "name": "Sample User 11",
      "position": "[Position Title 11]",
      "quote": "[Example placeholder testimonial - Add actual customer feedback highlighting their experience and results.]"
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