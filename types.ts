
export interface PerformanceDate {
  id: string;
  date: string;
  venue: string;
  city: string;
  country: string;
  type: 'Festival' | 'Club' | 'Private' | 'Corporate';
  status: 'Tickets' | 'Sold Out' | 'Private';
}

export interface MediaTrack {
  id: string;
  title: string;
  artist: string;
  duration: string;
  coverUrl: string;
  platform: 'Spotify' | 'SoundCloud';
}

export interface BookingFormState {
  name: string;
  email: string;
  eventType: string;
  location: string;
  date: string;
  budgetRange: string;
  message: string;
}
