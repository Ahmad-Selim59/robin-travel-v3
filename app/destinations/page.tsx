import { Suspense } from 'react';
import Trips from '../../components/trips/Trips';  

function TripsWithSuspense() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
      <Trips />
    </Suspense>
  );
}

export default function DestinationsPage() {
  return (
    <main>
      <TripsWithSuspense />
    </main>
  );
} 