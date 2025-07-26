import Hero from '../components/hero/Hero';
import Discover from '../components/discover/Discover';
import Trips from '../components/trips/Trips';

export default function Home() {
  return (
    <main>
      <Hero />
      <Discover />
      <Trips />
    </main>
  );
}
