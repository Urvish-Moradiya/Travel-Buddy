export interface Trip {
  id: string;
  title: string;
  destination: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  tags: string[];
  featured: boolean;
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  included: string[];
  notIncluded: string[];
}

export const trips: Trip[] = [
  {
    id: "bali-bliss",
    title: "Bali Bliss",
    destination: "Bali, Indonesia",
    description: "Discover the magic of Bali with our 10-day cultural immersion tour. Experience stunning beaches, ancient temples, and lush rice terraces while enjoying luxury accommodation and authentic experiences.",
    duration: "10 Days / 9 Nights",
    price: 1899,
    image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470653503930-46bff4009c5f?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviews: 124,
    tags: ["Beach", "Cultural", "Luxury"],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Denpasar",
        description: "Welcome to Bali! Upon arrival at Ngurah Rai International Airport, you'll be greeted by your guide and transferred to your beachfront resort in Seminyak. Enjoy a welcome dinner and brief orientation."
      },
      {
        day: 2,
        title: "Seminyak Exploration",
        description: "After breakfast, explore the vibrant streets of Seminyak, known for boutique shopping and dining. Afternoon at leisure with optional sunset cocktails at Ku De Ta beach club."
      },
      {
        day: 3,
        title: "Uluwatu Temple & Kecak Dance",
        description: "Visit the breathtaking clifftop Uluwatu Temple and witness the mesmerizing Kecak fire dance at sunset. Enjoy a seafood dinner at Jimbaran Bay."
      }
    ],
    included: [
      "Airport transfers",
      "9 nights accommodation",
      "Daily breakfast",
      "Welcome and farewell dinners",
      "English-speaking guide",
      "All entrance fees",
      "Transportation in air-conditioned vehicle",
      "Bottled water daily"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
      "Visa fees (if applicable)",
      "Tips and gratuities"
    ]
  },
  {
    id: "swiss-alps-adventure",
    title: "Swiss Alps Adventure",
    destination: "Switzerland",
    description: "Embark on an unforgettable journey through the majestic Swiss Alps. This adventure combines thrilling outdoor activities with picturesque mountain villages and stunning alpine scenery.",
    duration: "8 Days / 7 Nights",
    price: 2499,
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580921673177-cce7526f0060?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573126617899-41f1dffb196c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviews: 87,
    tags: ["Adventure", "Mountains", "Winter"],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zurich",
        description: "Welcome to Switzerland! Upon arrival at Zurich Airport, transfer to your hotel in the heart of the city. Enjoy a welcome dinner and orientation meeting."
      },
      {
        day: 2,
        title: "Journey to Interlaken",
        description: "Travel by scenic train to Interlaken, nestled between Lake Thun and Lake Brienz. Afternoon leisure time to explore this adventure capital."
      },
      {
        day: 3,
        title: "Jungfraujoch Excursion",
        description: "Embark on an unforgettable trip to Jungfraujoch, the 'Top of Europe'. Ride the highest railway station in Europe and enjoy breathtaking views of the Aletsch Glacier."
      }
    ],
    included: [
      "All transportation within Switzerland",
      "7 nights accommodation",
      "Daily breakfast and 4 dinners",
      "Mountain excursion passes",
      "English-speaking mountain guide",
      "Swiss Travel Pass for unlimited travel"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
      "Lunches and some dinners",
      "Tips and gratuities"
    ]
  },
  {
    id: "costa-rica-rainforest",
    title: "Costa Rica Rainforest Expedition",
    destination: "Costa Rica",
    description: "Immerse yourself in the biodiversity of Costa Rica's lush rainforests. This expedition takes you through cloud forests, volcanic landscapes, and pristine beaches while spotting incredible wildlife.",
    duration: "9 Days / 8 Nights",
    price: 2199,
    image: "https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1589659078542-e42f1701159d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591017683260-128c6add149a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518555976592-c8b6d14de00e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535221413453-349d0ce3c72a?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviews: 103,
    tags: ["Nature", "Wildlife", "Adventure"],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Arrival in San José",
        description: "Welcome to Costa Rica! Upon arrival at Juan Santamaría International Airport, you'll be transferred to your hotel in San José. Evening welcome dinner and trip briefing."
      },
      {
        day: 2,
        title: "Arenal Volcano",
        description: "Travel to La Fortuna and check into your lodge with views of Arenal Volcano. Afternoon hike around the volcano base and relax in natural hot springs."
      },
      {
        day: 3,
        title: "Monteverde Cloud Forest",
        description: "Journey to Monteverde Cloud Forest Reserve. Afternoon guided hike to spot unique flora and fauna, followed by an exciting nighttime rainforest walk."
      }
    ],
    included: [
      "Airport transfers",
      "8 nights accommodation",
      "Daily breakfast and select meals",
      "All ground transportation",
      "English-speaking naturalist guide",
      "Entrance fees to national parks and reserves",
      "Canopy tour and zipline experience"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Some meals",
      "Optional activities",
      "Tips for guides and drivers"
    ]
  },
  {
    id: "ancient-egypt",
    title: "Ancient Egypt Explorer",
    destination: "Egypt",
    description: "Journey through time exploring Egypt's ancient wonders from the pyramids of Giza to the treasures of Luxor and a relaxing Nile cruise. Experience 5000 years of history on this comprehensive tour.",
    duration: "12 Days / 11 Nights",
    price: 2899,
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1568322445389-f8dfdae33c85?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562693315-80fcae6966f8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569230516306-5a8cb5586399?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviews: 156,
    tags: ["Historical", "Cultural", "Luxury"],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description: "Welcome to Egypt! Upon arrival at Cairo International Airport, meet your Egyptologist guide and transfer to your hotel overlooking the Nile. Evening at leisure."
      },
      {
        day: 2,
        title: "Pyramids of Giza & Sphinx",
        description: "Full day exploring the Pyramids of Giza, the Sphinx, and the Valley Temple. Afternoon visit to the Egyptian Museum to view the treasures of Tutankhamun."
      },
      {
        day: 3,
        title: "Fly to Luxor & Karnak Temple",
        description: "Morning flight to Luxor. Visit the magnificent Karnak Temple complex, the largest religious building ever constructed. Evening sound and light show at the temple."
      }
    ],
    included: [
      "All internal flights within Egypt",
      "11 nights accommodation (5* hotels and Nile cruise)",
      "Daily breakfast, 8 lunches, 9 dinners",
      "Professional Egyptologist guide throughout",
      "All entrance fees to listed sites",
      "Camel ride at the pyramids",
      "Nile felucca sailing experience",
      "Air-conditioned transportation"
    ],
    notIncluded: [
      "International flights",
      "Egypt entry visa",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
      "Drinks during meals",
      "Tips and gratuities"
    ]
  },
  {
    id: "japanese-highlights",
    title: "Japanese Highlights",
    destination: "Japan",
    description: "Experience the perfect blend of ancient traditions and modern innovations on this journey through Japan. From Tokyo's neon lights to Kyoto's serene temples and gardens.",
    duration: "10 Days / 9 Nights",
    price: 3499,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569230516306-5a8cb5586399?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviews: 128,
    tags: ["Cultural", "City", "Luxury"],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tokyo",
        description: "Welcome to Japan! Upon arrival at Narita or Haneda Airport, you'll be transferred to your hotel in central Tokyo. Evening welcome dinner and orientation."
      },
      {
        day: 2,
        title: "Tokyo Exploration",
        description: "Full day exploring Tokyo's highlights including Senso-ji Temple in Asakusa, the Tokyo Skytree, Meiji Shrine, and the vibrant districts of Harajuku and Shibuya."
      },
      {
        day: 3,
        title: "Mt. Fuji & Hakone",
        description: "Day trip to Hakone National Park with views of iconic Mt. Fuji (weather permitting). Enjoy a cruise on Lake Ashi and ride the Hakone Ropeway for spectacular mountain views."
      }
    ],
    included: [
      "Airport transfers",
      "9 nights accommodation",
      "Daily breakfast and select meals",
      "7-day Japan Rail Pass",
      "English-speaking guide",
      "Tea ceremony experience",
      "Guided city tours",
      "Mt. Fuji excursion",
      "Bullet train journeys"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Some meals",
      "Optional activities",
      "Tips and gratuities"
    ]
  },
  {
    id: "moroccan-odyssey",
    title: "Moroccan Odyssey",
    destination: "Morocco",
    description: "A magical journey through Morocco's imperial cities, ancient medinas, and the Sahara Desert. Experience vibrant souks, stunning architecture, and overnight in a luxury desert camp under the stars.",
    duration: "11 Days / 10 Nights",
    price: 2299,
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1548017361-7a2680f9a8e7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539020140153-e71ab23511f3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531660963566-c61eaee3f3ab?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviews: 94,
    tags: ["Cultural", "Desert", "Adventure"],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description: "Welcome to Morocco! Upon arrival at Casablanca's Mohammed V Airport, you'll be met and transferred to your hotel. Visit the impressive Hassan II Mosque in the afternoon."
      },
      {
        day: 2,
        title: "Rabat & Fes",
        description: "Morning tour of Rabat, Morocco's capital, including the Royal Palace and Kasbah des Oudaias. Continue to the imperial city of Fes for overnight."
      },
      {
        day: 3,
        title: "Explore Fes Medina",
        description: "Full day exploring the UNESCO-listed medina of Fes, including the ancient tanneries, Al-Qarawiyyin University, and vibrant souks. Enjoy a traditional Moroccan dinner."
      }
    ],
    included: [
      "Airport transfers",
      "10 nights accommodation",
      "Daily breakfast and select meals",
      "Transportation in air-conditioned vehicle",
      "English-speaking guide",
      "Camel trek in the Sahara",
      "Desert luxury camp experience",
      "Guided tours in imperial cities",
      "Moroccan cooking class"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Some meals",
      "Optional activities",
      "Tips and gratuities"
    ]
  },
  {
    id: "thailand-adventure",
    title: "Thailand Adventure",
    destination: "Thailand",
    description: "Experience the best of Thailand from bustling Bangkok to serene beaches and ancient temples. This comprehensive tour combines cultural experiences with relaxation and adventure.",
    duration: "14 Days / 13 Nights",
    price: 2399,
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598975157262-443f757fdd09?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580224716654-a515866ae34d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.6,
    reviews: 82,
    tags: ["Beach", "Cultural", "Adventure"],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bangkok",
        description: "Welcome to Thailand! Upon arrival at Suvarnabhumi Airport, you'll be met by your guide and transferred to your hotel in the heart of Bangkok. Evening welcome dinner and trip orientation."
      },
      {
        day: 2,
        title: "Bangkok City Tour",
        description: "Full day exploring Bangkok's highlights including the Grand Palace, Wat Pho with its reclining Buddha, and a longtail boat ride through the canals. Evening visit to a night market."
      },
      {
        day: 3,
        title: "Ayutthaya Day Trip",
        description: "Day trip to the ancient capital of Ayutthaya, a UNESCO World Heritage site. Explore the impressive temple ruins and historical park before returning to Bangkok."
      }
    ],
    included: [
      "Airport transfers",
      "13 nights accommodation",
      "Daily breakfast and select meals",
      "Domestic flights within Thailand",
      "English-speaking guide",
      "All entrance fees",
      "Transportation in air-conditioned vehicle",
      "Longtail boat experience"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
      "Some meals",
      "Tips and gratuities"
    ]
  },
  {
    id: "new-zealand-explorer",
    title: "New Zealand Explorer",
    destination: "New Zealand",
    description: "Journey through New Zealand's stunning landscapes from the North to South Island. Experience Maori culture, adventure activities, and breathtaking natural wonders.",
    duration: "15 Days / 14 Nights",
    price: 4199,
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577007683422-d5d7b0a3d6e1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543169108-32ac15a21e05?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviews: 64,
    tags: ["Adventure", "Nature", "Wildlife"],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Auckland",
        description: "Welcome to New Zealand! Upon arrival at Auckland International Airport, you'll be met and transferred to your hotel. Rest of the day at leisure to recover from your flight."
      },
      {
        day: 2,
        title: "Auckland & Waiheke Island",
        description: "Morning city tour of Auckland. Afternoon ferry to Waiheke Island for a wine tasting tour at premium vineyards followed by dinner with stunning views."
      },
      {
        day: 3,
        title: "Hobbiton & Rotorua",
        description: "Travel to Matamata for a guided tour of the Hobbiton Movie Set. Continue to Rotorua, the geothermal wonderland and Maori cultural center of New Zealand."
      }
    ],
    included: [
      "Airport transfers",
      "14 nights accommodation",
      "Daily breakfast",
      "Selected activities and excursions",
      "Inter-island ferry",
      "Transportation in air-conditioned vehicle",
      "English-speaking guide",
      "Hobbiton tour",
      "Wine tasting"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
      "Some meals",
      "Tips and gratuities"
    ]
  },
  {
    id: "peruvian-highlights",
    title: "Peruvian Highlights",
    destination: "Peru",
    description: "Discover the wonders of Peru from ancient Machu Picchu to the Amazon rainforest and the stunning Sacred Valley. Experience Inca history, vibrant culture and diverse landscapes.",
    duration: "10 Days / 9 Nights",
    price: 2899,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1565452344681-47b30863e977?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531761535209-180857e963d9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553550591-fc2f58e22789?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviews: 77,
    tags: ["Cultural", "Adventure", "Historical"],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Lima",
        description: "Welcome to Peru! Upon arrival at Jorge Chávez International Airport in Lima, you'll be met and transferred to your hotel in Miraflores. Evening welcome dinner."
      },
      {
        day: 2,
        title: "Lima City Tour",
        description: "Morning guided tour of colonial and modern Lima including the Plaza de Armas, cathedral, and San Francisco Monastery. Afternoon visit to Larco Museum and free time to explore Miraflores."
      },
      {
        day: 3,
        title: "Fly to Cusco & Sacred Valley",
        description: "Flight to Cusco, the ancient Inca capital. Transfer to the Sacred Valley with a stop at an alpaca farm. Overnight in Urubamba to acclimatize to the altitude."
      }
    ],
    included: [
      "Airport transfers",
      "9 nights accommodation",
      "Daily breakfast and select meals",
      "Domestic flights within Peru",
      "English-speaking guide",
      "Entrance fees to Machu Picchu and other sites",
      "Train to Machu Picchu",
      "Transportation in air-conditioned vehicle"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
      "Some meals",
      "Tips and gratuities"
    ]
  },
  {
    id: "greek-island-hopping",
    title: "Greek Island Hopping",
    destination: "Greece",
    description: "Experience the magic of the Greek Islands with this island-hopping adventure. From the iconic white buildings of Santorini to the beautiful beaches of Mykonos and historical treasures of Crete.",
    duration: "12 Days / 11 Nights",
    price: 3299,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570077188758-77cc7205e672?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555962414-5c79698c953a?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviews: 91,
    tags: ["Beach", "Luxury", "Cultural"],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Athens",
        description: "Welcome to Greece! Upon arrival at Athens International Airport, you'll be transferred to your hotel in the heart of Athens. Evening free to explore the vibrant Plaka neighborhood."
      },
      {
        day: 2,
        title: "Athens City Tour",
        description: "Morning guided tour of Athens including the Acropolis, Parthenon, and the new Acropolis Museum. Afternoon at leisure to explore more of Athens."
      },
      {
        day: 3,
        title: "Ferry to Mykonos",
        description: "Morning ferry to the cosmopolitan island of Mykonos. Check into your hotel and enjoy the afternoon exploring the famous windmills and Little Venice neighborhood."
      }
    ],
    included: [
      "Airport transfers",
      "11 nights accommodation",
      "Daily breakfast",
      "Ferry tickets between islands",
      "Athens city tour with guide",
      "Island orientation tours",
      "24/7 support from our local team"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Most meals",
      "Optional activities",
      "Tips and gratuities"
    ]
  }
];

export const destinations = [
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1200&auto=format&fit=crop",
    featured: true
  },
  {
    id: "switzerland",
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1200&auto=format&fit=crop",
    featured: true
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    country: "Costa Rica",
    image: "https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=1200&auto=format&fit=crop",
    featured: true
  },
  {
    id: "egypt",
    name: "Egypt",
    country: "Egypt",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1200&auto=format&fit=crop",
    featured: true
  },
  {
    id: "japan",
    name: "Japan",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    featured: false
  },
  {
    id: "morocco",
    name: "Morocco",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1200&auto=format&fit=crop",
    featured: false
  },
  {
    id: "thailand",
    name: "Thailand",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop",
    featured: false
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    country: "New Zealand",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1200&auto=format&fit=crop",
    featured: false
  },
  {
    id: "peru",
    name: "Peru",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop",
    featured: false
  },
  {
    id: "greece",
    name: "Greece",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
    featured: true
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    quote: "Our trip to Bali with RavelXplorer was truly magical. The itinerary was perfectly balanced between adventure and relaxation. Our guide was knowledgeable and funny - made the experience unforgettable!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "David Wilson",
    location: "London, UK",
    quote: "The Swiss Alps Adventure exceeded all my expectations. The accommodations were top-notch and the hiking routes were breathtaking. I'll definitely book with RavelXplorer again!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Michelle Rodriguez",
    location: "Barcelona, Spain",
    quote: "Egypt was a dream destination for me, and RavelXplorer made it perfect. Our Egyptologist guide was incredibly knowledgeable and passionate. The Nile cruise was the highlight!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "James Chen",
    location: "Sydney, Australia",
    quote: "Costa Rica was amazing! We saw so much wildlife - sloths, toucans, monkeys - and the rainforest hikes were incredible. The eco-lodges were comfortable and sustainable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop"
  }
];
