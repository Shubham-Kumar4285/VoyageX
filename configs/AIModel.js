const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  
  
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_KEY
  const genAI = new GoogleGenerativeAI(apiKey);
  
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-pro-exp-03-25",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 65536,
    responseModalities: [
    ],
    responseMimeType: "application/json",
  };
  

   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: " Generate Travel plan for location : New York, USA, for 3 days Moderate Budget with flight details, flight price with booking url, hotels options list with hotelname, hotel address, price , hotel image url, geo coordinates, rating description, and places to visit nearby with place name, place details, place image url, geo coordinates, ticket pricing , time and travel of each of the location with each day plan with best time to visit in JSON format and don't add any comments\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "The user wants a 3-day moderate budget travel plan for New York City, USA.\nThe plan needs to be in JSON format and should include:\n1.  **Flight Details**: Including flight price and booking URL (I need to make a note that providing real-time, bookable flight prices and URLs is difficult for an AI. I will provide placeholder information or links to flight search engines).\n2.  **Hotel Options**: A list of hotels with:\n    *   Hotel Name\n    *   Hotel Address\n    *   Price (Moderate budget range - need to define this, maybe $150-$250/night?)\n    *   Hotel Image URL (Placeholder or generic image URL)\n    *   Geo Coordinates (Latitude, Longitude)\n    *   Rating Description (e.g., \"Good\", \"Very Good\", \"4/5 stars\")\n3.  **Places to Visit Nearby**: For each hotel option, list nearby attractions with:\n    *   Place Name\n    *   Place Details (Brief description)\n    *   Place Image URL (Placeholder or generic image URL)\n    *   Geo Coordinates (Latitude, Longitude)\n    *   Ticket Pricing (Approximate or indicate if free)\n    *   Time (Opening/Closing hours or estimated visit duration)\n    *   Travel (How to get there from the hotel, e.g., walking distance, subway line)\n4.  **Daily Itinerary**: A 3-day plan including:\n    *   Day number (1, 2, 3)\n    *   Places to visit for that day (linking to the previously defined places or adding new ones with full details)\n    *   Estimated timing for each activity\n    *   Travel details between locations (e.g., subway, walking)\n5.  **Best Time to Visit**: Overall best time to visit NYC.\n6.  **JSON Format**: The entire output must be a single JSON object.\n7.  **No Comments**: The final JSON should not contain any comments (`//` or `/* */`).\n8.  **Moderate Budget**: This needs to be reflected in hotel choices, activity suggestions (mix of free and paid), and perhaps transportation (emphasizing subway/walking).\n\n**Constraint Checklist & Confidence Score:**\n1.  Travel plan for NYC: Yes\n2.  Duration: 3 days: Yes\n3.  Budget: Moderate: Yes (Will aim for mid-range options)\n4.  Flight details: Yes (Placeholder/Search Engine Link)\n5.  Flight price: Yes (Placeholder/Estimate)\n6.  Booking URL: Yes (Placeholder/Search Engine Link)\n7.  Hotel Options List: Yes\n8.  Hotel Name: Yes\n9.  Hotel Address: Yes\n10. Hotel Price: Yes (Estimate range)\n11. Hotel Image URL: Yes (Placeholder)\n12. Hotel Geo Coordinates: Yes\n13. Hotel Rating Description: Yes\n14. Places to Visit Nearby (Hotel): Yes\n15. Place Name: Yes\n16. Place Details: Yes\n17. Place Image URL: Yes (Placeholder)\n18. Place Geo Coordinates: Yes\n19. Ticket Pricing: Yes (Estimate/Free indication)\n20. Time (Visit/Hours): Yes\n21. Travel (from hotel): Yes\n22. Daily Plan (3 days): Yes\n23. Best Time to Visit: Yes\n24. JSON Format: Yes\n25. No Comments: Yes\n\nConfidence Score: 5/5 (I can generate all elements, noting the limitations on real-time dynamic data like flight/hotel prices and booking links).\n\n**Mental Sandbox Simulation:**\n*   **Flight Info:** I'll use placeholder text and links to Google Flights or Skyscanner, mentioning that prices vary greatly. Example: Price: \"$300-$700 (Variable)\", URL: \"https://www.google.com/flights\".\n*   **Hotel Info:** I'll select 2-3 hotels known for being decent mid-range options in relatively central locations (e.g., Midtown, LIC, Brooklyn near Manhattan). I'll estimate prices around $180-$280. I'll use placeholder image URLs and find approximate geo-coordinates. Ratings will be descriptive (e.g., \"Good 3.5-star\", \"Very Good 4-star\").\n*   **Nearby Places (Hotel):** For each hotel, I'll list 2-3 nearby points of interest (could be parks, landmarks, specific subway stations).\n*   **Daily Itinerary:**\n    *   Day 1: Arrival, Check-in, Midtown exploration (Times Square, Bryant Park, Grand Central). Focus on iconic sights.\n    *   Day 2: Downtown & Financial District (Statue of Liberty/Ellis Island Ferry - maybe just Staten Island Ferry for budget, Wall Street, 9/11 Memorial & Museum, Brooklyn Bridge walk).\n    *   Day 3: Culture & Parks (Museum - Met or MoMA - entry fee consideration, Central Park exploration, Check-out, Departure).\n*   **Details for Places:** I'll find coordinates, estimate ticket prices (e.g., 9/11 Museum ~$28, Met suggested donation, Staten Island Ferry free), include opening hours, and suggest subway lines or walking.\n*   **Budget Consideration:** Emphasize walking, subway (MetroCard), free activities (Staten Island Ferry, walking Brooklyn Bridge, Central Park, Times Square gazing, Grand Central), potentially one major paid attraction per day. Food budget assumed moderate (mix of cheap eats, cafes, maybe one mid-range dinner).\n*   **JSON Structure:** Will create a nested structure with top-level keys like `travelPlan`, `flightDetails`, `hotelOptions`, `dailyItinerary`, `bestTimeToVisit`.\n\n**Refinement:**\n*   Ensure geo-coordinates are reasonably accurate.\n*   Make ticket prices explicit estimates (e.g., \"approx. $X\", \"Free\", \"Suggested Donation\").\n*   Hotel price range: Stick to $150-$300/night as \"moderate\" for NYC.\n*   Image URLs: Use generic placeholders like \"https://example.com/image.jpg\" or link to image search results if possible, but a static placeholder is safer. I'll use placeholders.\n*   Booking URLs: Clearly state these are examples or search engine links.\n\nOkay, planning complete. I will now proceed with generating the JSON output based on this plan."},
            {text: "```json\n{\n  \"travelPlan\": {\n    \"location\": \"New York, USA\",\n    \"duration\": \"3 Days\",\n    \"budget\": \"Moderate\"\n  },\n  \"flightDetails\": {\n    \"note\": \"Flight prices are highly variable based on origin, time of booking, and airline. The following is an estimate. Please check booking sites for real-time prices.\",\n    \"priceEstimate\": \"$300 - $700 (Round Trip, Economy)\",\n    \"bookingUrl\": \"https://www.google.com/flights or https://www.skyscanner.com\",\n    \"departureAirport\": \"Your Origin Airport (e.g., LAX, ORD, LHR)\",\n    \"arrivalAirport\": \"JFK (John F. Kennedy Intl.), LGA (LaGuardia Airport), or EWR (Newark Liberty Intl.)\"\n  },\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Pod 51\",\n      \"hotelAddress\": \"230 E 51st St, New York, NY 10022, USA\",\n      \"price\": \"$150 - $250 per night (approx.)\",\n      \"hotelImageUrl\": \"https://example.com/pod51_image.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 40.7559,\n        \"longitude\": -73.9681\n      },\n      \"ratingDescription\": \"Good - 3-star hotel, known for compact, budget-friendly rooms in Midtown East.\",\n      \"placesNearby\": [\n        {\n          \"placeName\": \"St. Patrick's Cathedral\",\n          \"placeDetails\": \"Iconic Neo-Gothic Roman Catholic cathedral.\",\n          \"placeImageUrl\": \"https://example.com/stpatricks_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7584,\n            \"longitude\": -73.9754\n          },\n          \"ticketPricing\": \"Free entry (donations welcome)\",\n          \"time\": \"Usually 7:00 AM - 8:30 PM\",\n          \"travel\": \"Approx. 10-15 min walk\"\n        },\n        {\n          \"placeName\": \"Rockefeller Center\",\n          \"placeDetails\": \"Complex of commercial buildings, home to Top of the Rock observation deck and seasonal attractions.\",\n          \"placeImageUrl\": \"https://example.com/rockefeller_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7587,\n            \"longitude\": -73.9787\n          },\n          \"ticketPricing\": \"Grounds free; Top of the Rock approx. $40+\",\n          \"time\": \"Grounds open 24/7; Top of the Rock hours vary (approx. 9 AM - 11 PM)\",\n          \"travel\": \"Approx. 15 min walk\"\n        }\n      ]\n    },\n    {\n      \"hotelName\": \"The LIC Hotel\",\n      \"hotelAddress\": \"44-04 21st St, Queens, NY 11101, USA\",\n      \"price\": \"$170 - $280 per night (approx.)\",\n      \"hotelImageUrl\": \"https://example.com/lic_hotel_image.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 40.7480,\n        \"longitude\": -73.9448\n      },\n      \"ratingDescription\": \"Very Good - 3-star hotel in Long Island City, often offering better value with quick subway access to Manhattan.\",\n      \"placesNearby\": [\n        {\n          \"placeName\": \"Gantry Plaza State Park\",\n          \"placeDetails\": \"Riverside park with stunning Manhattan skyline views, restored gantries, and walkways.\",\n          \"placeImageUrl\": \"https://example.com/gantry_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7451,\n            \"longitude\": -73.9580\n          },\n          \"ticketPricing\": \"Free\",\n          \"time\": \"Daily, 8:00 AM - 10:00 PM\",\n          \"travel\": \"Approx. 15-20 min walk or short bus ride\"\n        },\n        {\n          \"placeName\": \"MoMA PS1\",\n          \"placeDetails\": \"Contemporary art institution affiliated with the Museum of Modern Art.\",\n          \"placeImageUrl\": \"https://example.com/momaps1_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7455,\n            \"longitude\": -73.9470\n          },\n          \"ticketPricing\": \"Approx. $10-$20 (check website, sometimes included with MoMA ticket)\",\n          \"time\": \"Hours vary, typically closed Tue/Wed\",\n          \"travel\": \"Approx. 10 min walk\"\n        }\n      ]\n    },\n    {\n      \"hotelName\": \"citizenM New York Bowery Hotel\",\n      \"hotelAddress\": \"189 Bowery, New York, NY 10002, USA\",\n      \"price\": \"$200 - $300 per night (approx.)\",\n      \"hotelImageUrl\": \"https://example.com/citizenm_bowery_image.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 40.7204,\n        \"longitude\": -73.9935\n      },\n      \"ratingDescription\": \"Excellent - 4-star hotel with modern tech features, stylish rooms, and a rooftop bar in a vibrant downtown location.\",\n      \"placesNearby\": [\n        {\n          \"placeName\": \"New Museum\",\n          \"placeDetails\": \"Museum dedicated to contemporary art.\",\n          \"placeImageUrl\": \"https://example.com/newmuseum_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7223,\n            \"longitude\": -73.9929\n          },\n          \"ticketPricing\": \"Approx. $18\",\n          \"time\": \"Typically 11 AM - 6 PM, closed Mon/Tue\",\n          \"travel\": \"Approx. 5 min walk\"\n        },\n        {\n          \"placeName\": \"Katz's Delicatessen\",\n          \"placeDetails\": \"Legendary deli famous for pastrami sandwiches.\",\n          \"placeImageUrl\": \"https://example.com/katz_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7223,\n            \"longitude\": -73.9873\n          },\n          \"ticketPricing\": \"Free entry, pay per item (sandwiches ~$25+)\",\n          \"time\": \"Hours vary, generally open late\",\n          \"travel\": \"Approx. 10 min walk\"\n        }\n      ]\n    }\n  ],\n  \"dailyItinerary\": [\n    {\n      \"day\": 1,\n      \"theme\": \"Midtown Icons & Arrival\",\n      \"schedule\": [\n        {\n          \"time\": \"Afternoon\",\n          \"activity\": \"Arrival & Check-in\",\n          \"description\": \"Arrive at JFK/LGA/EWR, take AirTrain/subway or taxi/rideshare to your hotel. Check in and drop off luggage.\",\n          \"travel\": \"Subway: Approx. $2.90 + AirTrain fee if applicable ($8.50 from JFK). Taxi/Rideshare: $50-$80+ depending on traffic and airport.\"\n        },\n        {\n          \"time\": \"Late Afternoon\",\n          \"placeName\": \"Times Square\",\n          \"placeDetails\": \"Experience the dazzling billboards, street performers, and energy of this world-famous intersection.\",\n          \"placeImageUrl\": \"https://example.com/times_square_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7580,\n            \"longitude\": -73.9855\n          },\n          \"ticketPricing\": \"Free\",\n          \"visitDuration\": \"1 - 1.5 hours\",\n          \"travel\": \"Subway (e.g., N, Q, R, W, S, 1, 2, 3, 7 lines to Times Sq-42 St) or walk depending on hotel location.\"\n        },\n        {\n          \"time\": \"Evening\",\n          \"placeName\": \"Bryant Park & New York Public Library\",\n          \"placeDetails\": \"Relax in the urban oasis of Bryant Park, adjacent to the stunning Beaux-Arts architecture of the NYPL's main branch.\",\n          \"placeImageUrl\": \"https://example.com/bryant_park_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7536,\n            \"longitude\": -73.9832\n          },\n          \"ticketPricing\": \"Free (Library entry free, special exhibits may have fees)\",\n          \"visitDuration\": \"1 hour\",\n          \"travel\": \"Short walk from Times Square.\"\n        },\n        {\n          \"time\": \"Late Evening\",\n          \"placeName\": \"Grand Central Terminal\",\n          \"placeDetails\": \"Marvel at the architecture of this historic train terminal, especially the Main Concourse ceiling.\",\n          \"placeImageUrl\": \"https://example.com/grand_central_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7527,\n            \"longitude\": -73.9772\n          },\n          \"ticketPricing\": \"Free\",\n          \"visitDuration\": \"30 - 45 minutes\",\n          \"travel\": \"Short walk from Bryant Park.\"\n        },\n        {\n            \"time\": \"Dinner\",\n            \"activity\": \"Dinner near Grand Central or Hotel\",\n            \"description\": \"Find a moderately priced eatery. Options range from food halls (e.g., Urbanspace Vanderbilt) to casual restaurants.\",\n            \"budget\": \"$20-$40 per person\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"theme\": \"Downtown History & Views\",\n      \"schedule\": [\n        {\n          \"time\": \"Morning\",\n          \"placeName\": \"Staten Island Ferry (South Ferry Terminal)\",\n          \"placeDetails\": \"Take the free ferry for great views of the Statue of Liberty and the Manhattan skyline. Round trip takes about 1 hour.\",\n          \"placeImageUrl\": \"https://example.com/staten_island_ferry_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7013,\n            \"longitude\": -74.0132\n          },\n          \"ticketPricing\": \"Free\",\n          \"visitDuration\": \"1 - 1.5 hours (including round trip)\",\n          \"travel\": \"Subway (1 train to South Ferry, R/W to Whitehall St)\"\n        },\n        {\n          \"time\": \"Late Morning\",\n          \"placeName\": \"Financial District & Wall Street\",\n          \"placeDetails\": \"Walk through the heart of NYC's financial hub. See the Charging Bull statue (expect crowds) and Fearless Girl.\",\n          \"placeImageUrl\": \"https://example.com/wall_street_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7061,\n            \"longitude\": -74.0100\n          },\n          \"ticketPricing\": \"Free (exterior viewing)\",\n          \"visitDuration\": \"1 hour\",\n          \"travel\": \"Short walk from the Ferry Terminal.\"\n        },\n        {\n          \"time\": \"Lunch\",\n          \"activity\": \"Lunch in Financial District/Near WTC\",\n          \"description\": \"Grab lunch from various delis, cafes, or fast-casual spots in the area.\",\n           \"budget\": \"$15-$30 per person\"\n        },\n        {\n          \"time\": \"Afternoon\",\n          \"placeName\": \"9/11 Memorial & Museum\",\n          \"placeDetails\": \"Pay respects at the outdoor Memorial pools (free) and consider visiting the Museum (paid) for a deeper understanding of the events.\",\n          \"placeImageUrl\": \"https://example.com/911_memorial_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7115,\n            \"longitude\": -74.0125\n          },\n          \"ticketPricing\": \"Memorial: Free. Museum: Approx. $33 (Adult). Booking recommended.\",\n          \"visitDuration\": \"Memorial: 30-60 mins. Museum: 2-3 hours.\",\n          \"time\": \"Memorial: Daily 10 AM - 5 PM. Museum: Wed-Mon 10 AM - 5 PM (Check website for current hours).\",\n          \"travel\": \"Short walk from Wall Street.\"\n        },\n        {\n          \"time\": \"Late Afternoon\",\n          \"placeName\": \"Brooklyn Bridge Walk\",\n          \"placeDetails\": \"Walk across the iconic Brooklyn Bridge from Manhattan to Brooklyn (or vice versa) for fantastic city views.\",\n          \"placeImageUrl\": \"https://example.com/brooklyn_bridge_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7061,\n            \"longitude\": -73.9969\n          },\n          \"ticketPricing\": \"Free\",\n          \"visitDuration\": \"45 - 60 minutes (one way walk)\",\n          \"travel\": \"Walk from WTC area to bridge entrance (approx. 15-20 mins). Take subway back from Brooklyn side (e.g., A/C at High St or 2/3 at Clark St).\"\n        },\n        {\n            \"time\": \"Evening\",\n            \"activity\": \"Dinner in Brooklyn (DUMBO/Brooklyn Heights) or back in Manhattan\",\n            \"description\": \"Explore pizza options in Brooklyn (Grimaldi's, Juliana's) or head back towards your hotel area for dinner.\",\n            \"budget\": \"$25-$50 per person\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"theme\": \"Culture, Parks & Departure\",\n      \"schedule\": [\n        {\n          \"time\": \"Morning\",\n          \"activity\": \"Check-out or Luggage Storage\",\n          \"description\": \"Check out from your hotel. Arrange for luggage storage if your flight is later in the day.\"\n        },\n        {\n          \"time\": \"Late Morning\",\n          \"placeName\": \"The Metropolitan Museum of Art (The Met)\",\n          \"placeDetails\": \"Explore one of the world's largest and finest art museums. Focus on a few wings (e.g., Egyptian Art, European Paintings).\",\n          \"placeImageUrl\": \"https://example.com/met_museum_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7794,\n            \"longitude\": -73.9632\n          },\n          \"ticketPricing\": \"Pay-what-you-wish for NY residents & NY/NJ/CT students; General Admission: Approx. $30 (Adult)\",\n          \"visitDuration\": \"2 - 4 hours\",\n          \"time\": \"Sun-Tue & Thu: 10 AM-5 PM, Fri & Sat: 10 AM-9 PM, Closed Wed. (Check website).\",\n          \"travel\": \"Subway (e.g., 4, 5, 6 trains to 86th St, then walk approx. 10-15 mins)\"\n        },\n        {\n          \"time\": \"Lunch\",\n          \"activity\": \"Lunch near The Met or in Central Park\",\n          \"description\": \"Grab a bite from food carts near the museum or find a cafe.\",\n          \"budget\": \"$15-$25 per person\"\n        },\n        {\n          \"time\": \"Afternoon\",\n          \"placeName\": \"Central Park Exploration\",\n          \"placeDetails\": \"Stroll through parts of Central Park. Visit Strawberry Fields (John Lennon memorial), Bethesda Terrace and Fountain, or The Lake.\",\n          \"placeImageUrl\": \"https://example.com/central_park_image.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7829,\n            \"longitude\": -73.9654\n          },\n          \"ticketPricing\": \"Free\",\n          \"visitDuration\": \"1.5 - 2.5 hours\",\n          \"travel\": \"Adjacent to The Met.\"\n        },\n        {\n          \"time\": \"Late Afternoon\",\n          \"activity\": \"Retrieve Luggage & Depart\",\n          \"description\": \"Head back to the hotel to collect luggage.\",\n          \"travel\": \"Subway or walk depending on hotel location.\"\n        },\n        {\n          \"time\": \"Evening\",\n          \"activity\": \"Travel to Airport\",\n          \"description\": \"Travel to JFK/LGA/EWR via subway/AirTrain or taxi/rideshare for your departure.\",\n          \"travel\": \"Allow ample time (1.5 - 2.5 hours depending on airport, method, and traffic).\"\n        }\n      ]\n    }\n  ],\n  \"bestTimeToVisit\": {\n    \"period\": \"Spring (April-May) and Fall (September-October)\",\n    \"reason\": \"Pleasant weather, ideal for walking and exploring. Summer (June-August) can be hot and humid with peak tourist crowds. Winter (November-March) can be cold, but offers festive holiday decorations and potentially lower prices (excluding holidays).\"\n  },\n  \"notes\": {\n      \"transportation\": \"Purchase a 7-day Unlimited MetroCard (approx $34) if you plan extensive subway/bus use, otherwise use Pay-Per-Ride on a MetroCard or OMNY contactless payment.\",\n      \"food\": \"Budget for food can vary. Utilize food carts, delis, pizza slices, and ethnic neighborhoods (like Chinatown) for cheaper eats. Factor in approx. $50-$80 per person per day for a moderate food budget.\",\n      \"booking\": \"Book flights and accommodations in advance, especially during peak seasons, for better prices and availability.\",\n      \"flexibility\": \"This is a suggested itinerary. Feel free to adjust based on your interests, pace, and weather conditions.\"\n  }\n}\n```"},
          ],
        },
      ],
    });
  
    
    