export const invitation = {
  babyName: 'Gezylle M. Lucban',
  greeting: "With joy in our hearts, we invite you to celebrate the Christening of our baby, Gezylle.",
  eventDate: '2026-06-07T10:30:00',
  heroImage: '/images/gezylle.jpg',
  heroImageAlt: 'Cherished christening portrait of baby Gezylle',
  church: {
    name: 'ST. Gabriel The Archangel Parish',
    address: 'Brgy. San Francisco, Gen. Trias, Cavite',
    time: '10:30 AM',
  },
  reception: {
    name: 'Lucban Resident',
    address: 'Blk 79 Lot 53 C1 Bella Vista Subd. Brgy. Santiago Gen. Trias Cavite',
    time: '12:30 PM',
  },
  parents: {
    father: 'Geremias Lucban (Elmer)',
    mother: 'Cristina Merino',
    photos: {
      father: '',
      mother: '',
    },
  },
  ninongs: ['Jayson Lucban', 'Peter Lucban', 'Ray Cris Capispisan', 'Cirilo Damuag Jr.', 'Joseph Palisoc'],
  ninangs: ['Shiela Grefaldo', 'Joana M. Lucban', 'Mirabel B. Capispisan', 'Ma. Shirley Merino'],
  gallery: [
    {
      src: '/images/gezylle_1st_month.jpg',
      alt: 'Gezylle at 1st month',
      caption: 'Gezylle - 1st Month',
    },
    {
      src: '/images/gezylle_2nd_month.jpg',
      alt: 'Gezylle at 2nd month',
      caption: 'Gezylle - 2nd Month',
    },
    {
      src: '/images/gezylle_3rd_month.jpg',
      alt: 'Gezylle at 3rd month',
      caption: 'Gezylle - 3rd Month',
    },
  ],
  giftMessage: 'Your presence and prayers are enough. Thank you for celebrating this special day with us.',
  contact: {
    phone: '+639175880444',
    messengerLabel: 'Geremias Lucban',
    messengerUrl: 'https://m.me/geremias.lucban',
  },
  thankYouMessage: 'Thank you for being part of Gezylle\'s Christening.',
} as const;