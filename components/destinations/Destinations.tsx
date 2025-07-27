import Image from 'next/image';
import destinationData from './destinationData.json';

interface Destination {
  id: number;
  name: string;
  image: string;
  itinerary: string[];
}

export default function Destinations() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50" style={{ backgroundColor: '#FFFFF0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Destinations
          </h2>
          <p className="text-xl text-gray-600">
            Where do you want to go?
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {destinationData.map((destination: Destination) => (
            <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-64 md:h-72">
                <Image
                  src={`/${destination.image}`}
                  alt={destination.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Destination Name */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {destination.name}
                </h3>

                {/* Itinerary List */}
                <div className="space-y-2">
                  {destination.itinerary.map((item, index) => (
                    <div 
                      key={index}
                      className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 