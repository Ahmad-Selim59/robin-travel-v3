import Hero from '../components/hero/Hero';
import Discover from '../components/discover/Discover';
import Trips from '../components/trips/Trips';
import Destinations from '../components/destinations/Destinations';

export default function Home() {
  return (
    <main>
      <Hero />
      <Discover />
      <Destinations />
      <Trips />
    </main>
  );
}
