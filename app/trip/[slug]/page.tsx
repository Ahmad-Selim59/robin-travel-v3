import { notFound } from 'next/navigation';
import { TripPage } from '../../../components/trip_template';
import tripsData from '../../../components/trips/tripsData.json';
import highlightedTripsData from '../../../components/home/highlighted_trips/highlightedTripsData.json';
import { generateSlug } from '../../../utils/slugify';

interface TripDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TripDetailPage({ params }: TripDetailPageProps) {
  const { slug } = await params;
  
  // Combine both data sources and find the trip by matching generated slug
  const allTrips = [...tripsData, ...highlightedTripsData];
  const trip = allTrips.find(t => generateSlug(t.title) === slug);
  
  // If not found, show 404
  if (!trip) {
    notFound();
  }

  // Ensure header_image exists (fallback for any trips that might not have it)
  const tripWithHeader = {
    ...trip,
    header_image: trip.header_image || '/indo_kids.jpg'
  };

  return (
    <main>
      <TripPage trip={tripWithHeader} />
    </main>
  );
} 