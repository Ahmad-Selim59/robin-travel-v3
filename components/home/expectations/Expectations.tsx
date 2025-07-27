export default function Expectations() {
  const expectations = [
    {
      number: 1,
      title: "100% custom-made, everything is possible",
      description: "We'll discuss your travel wishes in detail and then create a private, tailor-made tour for you. No wish is too outlandish, and we're happy to go the extra mile!"
    },
    {
      number: 2,
      title: "We've been there ourselves",
      description: "Each country expert specializes in one or more destinations. We know these destinations from our own travel experience: we try out excursions and visit hotels to guarantee you a fantastic experience."
    },
    {
      number: 3,
      title: "Travel worry-free",
      description: "Save valuable time and let us take care of every detail of your trip. We're committed to detail, quality, and safety. Once you've arrived at your destination, we're available 24/7."
    },
    {
      number: 4,
      title: "Boutique and small-scale accommodations",
      description: "Spend the night in a luxury boutique hotel, followed by a night on a boat, in a treehouse, or safari tent. Variety makes your customized tour special."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50" style={{ backgroundColor: '#FFFFF0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
            What can you expect from us?
          </h2>
          <h4 className="text-lg md:text-xl text-gray-600">
            4 reasons why we have so many satisfied customers
          </h4>
        </div>

        {/* Content Grid with Circles and Dotted Line */}
        <div className="relative">
          {/* Dotted line background - positioned to connect circles only */}
          <div className="absolute top-8 left-0 right-0 h-0.5 border-t-2 border-dotted border-teal-700 hidden lg:block mx-32"></div>
          
          {/* Grid with circles and content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {expectations.map((item) => (
              <div key={item.number} className="text-center relative">
                {/* Number circle positioned above each column */}
                <div className="w-16 h-16 bg-teal-800 text-white rounded-full flex items-center justify-center text-xl font-bold z-10 mx-auto mb-8 relative">
                  {item.number}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-teal-800 mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="bg-transparent border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
            Read more about securities
          </button>
        </div>
      </div>
    </section>
  );
} 