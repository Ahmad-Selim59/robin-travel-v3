import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full h-[60vh]">
      <Image
        src="/indo_kids.jpg"
        alt="Children in Indonesia"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-opacity-30 flex items-center justify-start">
        <div className="ml-12 md:ml-24">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Indonesia travels</h1>
        </div>
      </div>
    </div>
  );
} 