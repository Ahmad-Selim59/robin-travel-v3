import Hero from '../components/home/hero/Hero';
import Discover from '../components/home/discover/Discover';
import Trips from '../components/trips/Trips';
import Destinations from '../components/home/destinations/Destinations';
import Expectations from '../components/home/expectations/Expectations';
export default function Home() {
  return (
    <main>
      <Hero />
      <Discover />
      <Destinations />
      <Expectations />
      <Trips />
    </main>
  );
}
