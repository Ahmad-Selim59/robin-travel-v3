import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  const aboutSections = [
    {
      id: 1,
      title: "Our story",
      subtitle: "Our family business and enthusiastic specialists",
      image: "/indo_kids.jpg",
      href: "/about/our-story"
    },
    {
      id: 2,
      title: "Our working method", 
      subtitle: "From travel proposal to beautiful memories",
      image: "/indo_kids.jpg",
      href: "/about/working-method"
    },
    {
      id: 3,
      title: "Our travel specialists",
      subtitle: "Our specialists and their love for long-distance travel", 
      image: "/indo_kids.jpg",
      href: "/about/specialists"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#FFFFF0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-teal-800 text-center">
            Personal attention makes the difference
          </h3>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutSections.map((section) => (
            <Link 
              key={section.id}
              href={section.href}
              className="group block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 md:h-96">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-200 transition-colors duration-300">
                    {section.title}
                  </h4>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {section.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-teal-800 max-w-4xl mx-auto leading-relaxed">
          &quot;A wonderful individual tour that had everything we asked for from Van Verre, and even more.&quot;
          </blockquote>
          <div className="mt-6 w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>
      </div>
    </section>
  );
} 