const fs = require('fs');

const questions = [
  // ==========================================
  // SECTION 1: GROUND HANDLING PPT - BASICS OF AVIATION & AIRPORTS
  // ==========================================
  {
    c: "Aviation Basics",
    source: "Ground Handling PPT",
    q: "How does the Ground Handling presentation define the term 'aviation'?",
    o: [
      "The art or science of flying, including aircraft design, manufacturing, maintenance and operations",
      "The engineering of airport taxiways and passenger terminal buildings only",
      "The regulation of marine and air customs across international borders",
      "The commercial marketing of airline ticket reservation systems"
    ],
    a: 0,
    e: "Slide 8 defines aviation as the art or science of flying, encompassing the designing, manufacturing, maintenance, and operations of aircraft."
  },
  {
    c: "Aviation Basics",
    source: "Ground Handling PPT",
    q: "Which two standard industry reference manuals are cited as foundational texts in the presentation?",
    o: [
      "Airport Handling Manual (AHM) and IATA Ground Operations Manual (IGOM)",
      "ICAO Annex 14 and Boeing Flight Crew Operating Manual",
      "Federal Aviation Regulations (FAR) and World Airline Directory",
      "Airports Council International Safety Code and Montreal Convention"
    ],
    a: 0,
    e: "Slide 4 lists the Airport Handling Manual (AHM) and the IATA Ground Operations Manual (IGOM) as prime references."
  },
  {
    c: "Aviation Basics",
    source: "Ground Handling PPT",
    q: "According to the presentation, what is an airport?",
    o: [
      "A land aerodrome with extended facilities used for the transportation of passengers, baggage, and cargo",
      "Any runway designated exclusively for emergency and military aircraft landings",
      "A commercial warehouse facility used strictly for air cargo consolidation",
      "A maintenance base where aircraft engines are overhauled"
    ],
    a: 0,
    e: "Slide 9 defines an airport as a land aerodrome with extended facilities used for transporting passengers, baggage, and cargo."
  },
  {
    c: "Aviation Basics",
    source: "Ground Handling PPT",
    q: "Which of the following is explicitly listed as a type of airport in the presentation?",
    o: [
      "STOL Airports (Short Take-Off and Landing)",
      "Suborbital Spaceports",
      "Floating Marine Seadromes",
      "Rail-Integrated Aerostations"
    ],
    a: 0,
    e: "Slide 10 categorizes airports into Commercial, Cargo, Military, Private, Heliports, and STOL (Short Take-Off and Landing) airports."
  },
  {
    c: "Aviation Basics",
    source: "Ground Handling PPT",
    q: "What defines an 'aircraft' according to the presentation?",
    o: [
      "Any machine or vehicle capable of flying through the air by gaining support from aerodynamic principles",
      "Any powered vehicle with fixed wings manufactured exclusively for commercial passenger travel",
      "Any flying vessel that operates above 10,000 feet Mean Sea Level",
      "Any transport vehicle carrying more than 19 passengers across airspace"
    ],
    a: 0,
    e: "Slide 11 defines an aircraft as any machine or vehicle capable of flying through the air by gaining support from the air via principles of aerodynamics."
  },
  {
    c: "Aviation Basics",
    source: "Ground Handling PPT",
    q: "Which four civil aircraft manufacturers are specifically highlighted in the presentation?",
    o: [
      "Boeing (USA), Airbus (Europe), Embraer (Brazil), and Bombardier (Canada)",
      "Lockheed (USA), Dassault (France), Antonov (Ukraine), and Tupolev (Russia)",
      "Cessna (USA), Beechcraft (USA), Saab (Sweden), and ATR (France/Italy)",
      "Gulfstream (USA), Sukhoi (Russia), Pilatus (Switzerland), and De Havilland (UK)"
    ],
    a: 0,
    e: "Slide 12 identifies Boeing (USA), Airbus (Europe), Embraer (Brazil), and Bombardier (Canada) as major civil aircraft manufacturers."
  },

  // ==========================================
  // SECTION 2: GROUND HANDLING PPT - AIRCRAFT PARTS & FLIGHT CONTROLS
  // ==========================================
  {
    c: "Aircraft Parts & Controls",
    source: "Ground Handling PPT",
    q: "What is the primary function of the aircraft's fuselage?",
    o: [
      "Serves as the main body, holds passengers, cargo, and crew, and connects all other components",
      "Produces the thrust necessary for forward acceleration and climb",
      "Generates aerodynamic lift to sustain the aircraft in flight",
      "Houses the primary VHF radio navigation and weather radar antennas"
    ],
    a: 0,
    e: "Slide 13 states the fuselage is the main body that holds passengers, cargo, and crew, connecting all other aircraft parts."
  },
  {
    c: "Aircraft Parts & Controls",
    source: "Ground Handling PPT",
    q: "How do aircraft wings enable an airplane to stay airborne?",
    o: [
      "Air flows over and under the wings to generate aerodynamic lift",
      "Jet exhaust is directed beneath the wings to create ground cushion effect",
      "Internal gyroscopes counteract the force of gravity during forward travel",
      "The wings tilt upward to scoop air underneath the aircraft fuselage"
    ],
    a: 0,
    e: "Slide 14 explains that the wing's function is to provide lift as air flows over the wings."
  },
  {
    c: "Aircraft Parts & Controls",
    source: "Ground Handling PPT",
    q: "What is the flight deck or cockpit?",
    o: [
      "The compartment where pilots control the aircraft, containing flight controls, instruments, and navigation systems",
      "The pressurized section under the passenger floor reserved for high-value cargo",
      "The forward galley compartment where cabin crew manage in-flight food and beverage service",
      "The external equipment bay housing hydraulic pumps and air conditioning packs"
    ],
    a: 0,
    e: "Slide 15 defines the cockpit (flight deck) as where pilots control the aircraft, housing flight controls, instruments, and navigation systems."
  },
  {
    c: "Aircraft Parts & Controls",
    source: "Ground Handling PPT",
    q: "What is the dual role of the landing gear described in the presentation?",
    o: [
      "Supports the aircraft during takeoff, landing, and ground movement, and absorbs touchdown shocks",
      "Increases aerodynamic drag during high-altitude cruise to stabilize airspeed",
      "Directs bleed air from the jet engines into the cabin air conditioning ducts",
      "Provides emergency buoyancy in case of forced ditching in water"
    ],
    a: 0,
    e: "Slide 16 notes that landing gear supports the aircraft during takeoff, landing, and ground operations, and absorbs landing shock."
  },
  {
    c: "Aircraft Parts & Controls",
    source: "Ground Handling PPT",
    q: "What do the aircraft engines provide according to the presentation?",
    o: [
      "Thrust (power) to move the aircraft forward",
      "Direct vertical lift during high-speed cruise",
      "Hydraulic pressure without burning any aviation fuel",
      "Cabin pressurization exclusively without bleed air"
    ],
    a: 0,
    e: "Slide 17 describes the function of engines: providing thrust (power) to move the plane forward."
  },
  {
    c: "Aircraft Parts & Controls",
    source: "Ground Handling PPT",
    q: "What is the empennage, and what are its two main structural parts?",
    o: [
      "The tail assembly; consists of the vertical stabilizer (with rudder) and horizontal stabilizer (with elevators)",
      "The forward fuselage section; consists of radome and nose gear bay",
      "The wing trailing edge; consists of inboard flaps and outboard ailerons",
      "The engine cowling; consists of fan cowl doors and thrust reversers"
    ],
    a: 0,
    e: "Slide 18 details the empennage (tail), which keeps the plane stable and consists of the vertical stabilizer (with rudder) and horizontal stabilizer (with elevators)."
  },
  {
    c: "Aircraft Parts & Controls",
    source: "Ground Handling PPT",
    q: "Which control surfaces are mounted on the wings to control aircraft roll (banking left or right)?",
    o: [
      "Ailerons",
      "Elevators",
      "Rudders",
      "Trim tabs"
    ],
    a: 0,
    e: "Slide 19 states that ailerons on the wings control rolling left or right."
  },
  {
    c: "Aircraft Parts & Controls",
    source: "Ground Handling PPT",
    q: "Which control surface is located on the horizontal stabilizer to control aircraft pitch (climbing or descending)?",
    o: [
      "Elevators",
      "Ailerons",
      "Rudder",
      "Slats"
    ],
    a: 0,
    e: "Slide 19 indicates that elevators on the horizontal stabilizer control pitch (nose up or down)."
  },
  {
    c: "Aircraft Parts & Controls",
    source: "Ground Handling PPT",
    q: "Which control surface is attached to the vertical stabilizer to control yaw (turning nose left or right)?",
    o: [
      "Rudder",
      "Flaps",
      "Elevators",
      "Ailerons"
    ],
    a: 0,
    e: "Slide 19 explains that the rudder on the vertical stabilizer controls yaw (left/right direction)."
  },
  {
    c: "Aircraft Parts & Controls",
    source: "Ground Handling PPT",
    q: "What is the key purpose of wing flaps and slats during takeoff and landing?",
    o: [
      "Increase aerodynamic lift at low speeds",
      "Decrease wing surface area to achieve supersonic speed",
      "Disconnect the flight controls from hydraulic actuators",
      "Prevent jet engine exhaust from entering the cabin air ducts"
    ],
    a: 0,
    e: "Slide 20 explains that flaps and slats increase lift at low speeds, aiding safe takeoff and landing."
  },

  // ==========================================
  // SECTION 3: GROUND HANDLING PPT - AIRCRAFT CATEGORIES & AIRLINES
  // ==========================================
  {
    c: "Aircraft Types",
    source: "Ground Handling PPT",
    q: "What characterizes a 'narrow-body' commercial aircraft?",
    o: [
      "A single passenger aisle with seating typically up to 6 across (e.g., Boeing 737, Airbus A320)",
      "Two passenger aisles designed exclusively for intercontinental routes above 10 hours",
      "No passenger windows and reinforced main-deck cargo floors",
      "An unpressurized cabin operating only between remote non-towered airstrips"
    ],
    a: 0,
    e: "Slide 21 describes narrow-body aircraft as single-aisle planes used for short- to medium-haul transport, such as the B737 and A320."
  },
  {
    c: "Aircraft Types",
    source: "Ground Handling PPT",
    q: "What distinguishes a 'wide-body' aircraft from a narrow-body aircraft?",
    o: [
      "Twin passenger aisles with higher passenger and cargo capacity (e.g., Boeing 777, Airbus A350)",
      "A single aisle with turboprop engines mounted above high wings",
      "Open-air seating bays for regional sightseeing flights",
      "Operation restricted strictly to military aerial refueling"
    ],
    a: 0,
    e: "Slide 21 notes wide-body aircraft feature twin aisles with large passenger and cargo capacity for long-haul routes."
  },
  {
    c: "Aircraft Types",
    source: "Ground Handling PPT",
    q: "What examples of regional jets are highlighted in the presentation?",
    o: [
      "Embraer E190 and Bombardier CRJ",
      "Airbus A380 and Boeing 747-8",
      "Lockheed C-130 and Boeing C-17",
      "Concorde and Tupolev Tu-144"
    ],
    a: 0,
    e: "Slide 22 gives the Embraer E190 and Bombardier CRJ as prime examples of regional jets operating on short regional routes."
  },
  {
    c: "Aircraft Types",
    source: "Ground Handling PPT",
    q: "What does the aviation acronym 'P2F' stand for?",
    o: [
      "Passenger to Freighter",
      "Pilot to Flight",
      "Pushback to Flight-deck",
      "Payload to Fuel"
    ],
    a: 0,
    e: "Slide 23 explains that P2F stands for Passenger to Freighter, referring to retired or modified passenger planes converted for dedicated cargo service."
  },
  {
    c: "Aircraft Types",
    source: "Ground Handling PPT",
    q: "Which capability defines rotary-wing aircraft (helicopters) in the presentation?",
    o: [
      "Vertical Takeoff and Landing (VTOL), hovering, and exceptional low-speed maneuverability",
      "High-altitude supersonic cruise above Mach 2.0 without refueling",
      "Long-distance intercontinental transport exceeding 8,000 nautical miles",
      "Unpowered glide flight utilizing rising thermal updrafts"
    ],
    a: 0,
    e: "Slide 24 highlights helicopters as rotary-wing aircraft used for VTOL, hovering, and maneuvering in confined spaces."
  },
  {
    c: "Aircraft Types",
    source: "Ground Handling PPT",
    q: "What five categories of airlines are listed in the presentation?",
    o: [
      "Full-Service Airlines, Low-Cost Carriers, Regional Airlines, Charter Airlines, and Cargo Airlines",
      "Government Airlines, Private Jets, Aerial Ambulance, Flight Training, and Crop Dusters",
      "Domestic Trunk Lines, Commuter Turboprops, Air Taxi, Floatplane, and Helicopter Shuttles",
      "Continental Flagship, Budget Commuter, Military Transport, Space-cargo, and Humanitarian"
    ],
    a: 0,
    e: "Slide 29 lists Full-Service Airlines, Low-Cost Carriers, Regional Airlines, Charter Airlines, and Cargo Airlines."
  },

  // ==========================================
  // SECTION 4: GROUND HANDLING PPT - AIRPORT AREAS & LAYOUT
  // ==========================================
  {
    c: "Airport Layout",
    source: "Ground Handling PPT",
    q: "What are the three primary zones of an airport identified in the presentation?",
    o: [
      "Landside, Terminal, and Airside",
      "Hangar, Runway, and Control Tower",
      "Inbound Concourse, Outbound Concourse, and Baggage Bay",
      "Customs Zone, Apron Zone, and Runway Safety Area"
    ],
    a: 0,
    e: "Slide 30 divides an airport into three main zones: Landside, Terminal, and Airside."
  },
  {
    c: "Airport Layout",
    source: "Ground Handling PPT",
    q: "Which airport zone is defined as unrestricted and freely accessible to both traveling and non-traveling public?",
    o: [
      "Landside",
      "Airside",
      "Apron / Ramp",
      "Movement Area"
    ],
    a: 0,
    e: "Slide 31 defines Landside as the unrestricted area of an airport where traveling and non-traveling individuals have free access."
  },
  {
    c: "Airport Layout",
    source: "Ground Handling PPT",
    q: "What is the core function of the airport terminal building?",
    o: [
      "A facility where passengers, baggage, and cargo are processed to transition between surface and air transport",
      "A storage shed where grounded aircraft undergo major structural overhaul",
      "A secured bunker from which Air Traffic Controllers direct air routes",
      "A refueling depot where aviation turbine fuel is filtered and piped"
    ],
    a: 0,
    e: "Slide 32 describes the terminal building as where passengers, baggage, and cargo are processed and transition between surface modes and aircraft."
  },
  {
    c: "Airport Layout",
    source: "Ground Handling PPT",
    q: "Which facilities are located inside the airport terminal building according to Slide 33?",
    o: [
      "Check-in counters, Security check, Immigration & Customs, Boarding gates, and Baggage claim area",
      "Runways, Taxiways, Aircraft parking stands, Hangars, and Fuel farm",
      "Airport perimeter fences, Instrument Landing System (ILS) antenna, and Fire crash station",
      "Jet engine test cells, Flight simulator halls, and Ramp catering loading bays"
    ],
    a: 0,
    e: "Slide 33 lists Check-in counters, Security check, Immigration & Customs, Boarding gates, and Baggage claim area inside the terminal building."
  },
  {
    c: "Airport Layout",
    source: "Ground Handling PPT",
    q: "What is the Airside area of an airport?",
    o: [
      "The secured, restricted movement area where aircraft operations and servicing take place",
      "The public sidewalk in front of the departures concourse for passenger drop-off",
      "The commercial shopping plaza located prior to security screening checkpoints",
      "The administrative headquarters of the municipal civil aviation ministry"
    ],
    a: 0,
    e: "Slide 34 defines Airside as the secured, restricted area where aircraft operations take place, also known as the movement area."
  },
  {
    c: "Airport Layout",
    source: "Ground Handling PPT",
    q: "Which facilities belong to the Airside zone as listed on Slide 35?",
    o: [
      "Runways, Taxiways, Apron/Ramp, Aircraft stands/bays, Air Traffic Control Tower, and Hangars",
      "Short-term parking lots, Public bus stops, Curbside check-in, and Taxi queues",
      "Airline ticketing sales office, Hotel transit desks, and Currency exchange counters",
      "Passenger duty-free shops, Food courts, and Public observation decks"
    ],
    a: 0,
    e: "Slide 35 lists Runways, Taxiways, Apron/Ramp, Aircraft stands/bays, ATC Tower, and Hangars as airside facilities."
  },

  // ==========================================
  // SECTION 5: GROUND HANDLING PPT - AVIATION HISTORY
  // ==========================================
  {
    c: "Aviation History",
    source: "Ground Handling PPT",
    q: "Who conducted the first controlled, sustained, and powered heavier-than-air flight at Kitty Hawk in 1903?",
    o: [
      "The Wright Brothers (Orville and Wilbur Wright)",
      "Otto Lilienthal",
      "Sir George Cayley",
      "Charles Lindbergh"
    ],
    a: 0,
    e: "Slide 39 highlights the Wright Brothers' historic 1903 flight at Kitty Hawk as the first controlled, sustained, and powered flight."
  },
  {
    c: "Aviation History",
    source: "Ground Handling PPT",
    q: "What historic milestone took place in 1783 involving the Montgolfier brothers?",
    o: [
      "The first successful human hot-air balloon flight",
      "The invention of the internal combustion aircraft engine",
      "The first solo transatlantic flight",
      "The construction of the first rigid metal airship"
    ],
    a: 0,
    e: "Slide 37 highlights 1783 for the Montgolfier brothers' hot air balloon demonstration in aviation history."
  },
  {
    c: "Aviation History",
    source: "Ground Handling PPT",
    q: "Which 19th-century pioneer formulated the foundational aerodynamic concepts of lift, drag, and thrust?",
    o: [
      "Sir George Cayley",
      "Leonardo da Vinci",
      "Otto Lilienthal",
      "Ferdinand von Zeppelin"
    ],
    a: 0,
    e: "Slide 38 credits Sir George Cayley with discovering and defining the fundamental concepts of lift, drag, and thrust."
  },
  {
    c: "Aviation History",
    source: "Ground Handling PPT",
    q: "What landmark achievement did Charles Lindbergh accomplish in 1927?",
    o: [
      "First solo nonstop transatlantic flight (New York to Paris)",
      "First supersonic flight breaking the sound barrier",
      "First circumnavigation of the globe by commercial airliner",
      "Establishment of the International Civil Aviation Organization"
    ],
    a: 0,
    e: "Slide 41 notes Lindbergh's solo transatlantic flight in 1927 as a pivotal milestone in aviation history."
  },
  {
    c: "Aviation History",
    source: "Ground Handling PPT",
    q: "Which aircraft introduced commercial jet passenger service in 1952?",
    o: [
      "de Havilland Comet",
      "Boeing 707",
      "Douglas DC-8",
      "Sud Aviation Caravelle"
    ],
    a: 0,
    e: "Slide 43 identifies the de Havilland Comet (1952) as the pioneer of commercial passenger jet aviation."
  },

  // ==========================================
  // SECTION 6: GROUND HANDLING PPT - REGULATORY AUTHORITIES & PHONETICS
  // ==========================================
  {
    c: "Aviation Authorities",
    source: "Ground Handling PPT",
    q: "What does the acronym ICAO stand for, and where is its global headquarters located?",
    o: [
      "International Civil Aviation Organization; Montreal, Canada",
      "International Commercial Airline Office; Geneva, Switzerland",
      "Intercontinental Civil Aeronautics Order; Washington, D.C., USA",
      "International Cargo Airport Oversight; London, United Kingdom"
    ],
    a: 0,
    e: "Slides 46-48 confirm ICAO stands for International Civil Aviation Organization, headquartered in Montreal, Canada."
  },
  {
    c: "Aviation Authorities",
    source: "Ground Handling PPT",
    q: "What are the two foundation years associated with ICAO as cited in Slide 47?",
    o: [
      "1919 (1st Foundation / ICAN) and 1945 (2nd Foundation / Chicago Convention)",
      "1903 and 1927",
      "1939 and 1958",
      "1948 and 1991"
    ],
    a: 0,
    e: "Slide 47 notes 1919 as the 1st foundation (Paris/ICAN) and 1945 as the 2nd foundation (Chicago Convention/PICAO/ICAO)."
  },
  {
    c: "Aviation Authorities",
    source: "Ground Handling PPT",
    q: "What is IATA's principal area of activity according to the presentation?",
    o: [
      "Commercial activity: standardizing airline ticketing, fares, documents, and financial clearing",
      "Military air combat tactical doctrine and territorial defense",
      "Air Traffic Control tower radar hardware development",
      "Direct municipal management of airport passenger terminals"
    ],
    a: 0,
    e: "Slide 278 and Slide 46 emphasize that IATA's activity area is commercial, focusing on airline standards, safety, financial, and legal issues."
  },
  {
    c: "Aviation Authorities",
    source: "Ground Handling PPT",
    q: "What does ACI stand for, and when was it established?",
    o: [
      "Airports Council International; established in 1991 in Montreal, Canada",
      "Aviation Cargo International; established in 1945 in Paris, France",
      "Airline Certification Institute; established in 1958 in London, UK",
      "Aerodrome Compliance Inspectorate; established in 1974 in Brussels, Belgium"
    ],
    a: 0,
    e: "Slide 51 states Airports Council International (ACI) was established in 1991 with headquarters in Montreal, Canada."
  },
  {
    c: "Aviation Authorities",
    source: "Ground Handling PPT",
    q: "What is the primary role of a National Aviation Authority (NAA)?",
    o: [
      "Governmental body regulating and overseeing civil aviation, safety, airworthiness, and licensing within a country",
      "Commercial travel agency booking international airline tickets for government staff",
      "Private aircraft maintenance company servicing corporate business jets",
      "Trade union representing commercial airline pilots and cabin crew"
    ],
    a: 0,
    e: "Slide 53 defines an NAA as the governmental body responsible for civil aviation regulation, airworthiness, certification, licensing, and safety oversight in a nation."
  },
  {
    c: "Aviation Authorities",
    source: "Ground Handling PPT",
    q: "In the ICAO Aviation Phonetic Alphabet, which words represent the letters C, D, and E?",
    o: [
      "Charlie, Delta, Echo",
      "Canada, David, Edward",
      "Central, Danger, Eagle",
      "Chicago, Direct, Energy"
    ],
    a: 0,
    e: "Standard ICAO radiotelephony phonetics: A - Alfa, B - Bravo, C - Charlie, D - Delta, E - Echo, F - Foxtrot, etc."
  },
  {
    c: "Aviation Authorities",
    source: "Ground Handling PPT",
    q: "In the ICAO Aviation Phonetic Alphabet, which words represent the letters J, K, and L?",
    o: [
      "Juliett, Kilo, Lima",
      "Japan, King, London",
      "Jupiter, Kangaroo, Lemon",
      "Justice, Knight, Liberty"
    ],
    a: 0,
    e: "In the ICAO phonetic alphabet: J is Juliett (spelled with two t's), K is Kilo, and L is Lima."
  },

  // ==========================================
  // SECTION 7: GROUND HANDLING CONCEPTS & PROVIDERS
  // ==========================================
  {
    c: "Ground Handling",
    source: "Ground Handling PPT",
    q: "How does the presentation define 'Ground Handling' in aviation?",
    o: [
      "The range of services provided to support an aircraft, passengers, and cargo while the aircraft is on the ground between flights",
      "The aerodynamic testing of prototype wing structures inside wind tunnels",
      "The direct radar guidance of airborne flights by area air traffic controllers",
      "The financial leasing of aircraft engines by commercial manufacturing firms"
    ],
    a: 0,
    e: "Slide 57 defines ground handling as the range of services provided to support an aircraft and its occupants while on the ground."
  },
  {
    c: "Ground Handling",
    source: "Ground Handling PPT",
    q: "Which of the following are listed as the main components of ground handling on Slide 59?",
    o: [
      "Passenger Services, Ramp Services, Cargo/Mail Handling, Technical Services, Catering Services, and Administration",
      "Aircraft Engine Overhaul, Avionics Fabrication, Flight Deck Simulator Training, and ATC Radar",
      "Airport Construction, Airspace Design, Runway Resurfacing, and Fuel Refining",
      "In-flight Entertainment Production, Hotel Hospitality, and Duty-Free Manufacturing"
    ],
    a: 0,
    e: "Slide 59 lists Passenger Services, Ramp Services, Cargo and Mail Handling, Technical Services, Catering Services, and Administration as main components."
  },
  {
    c: "Ground Handling",
    source: "Ground Handling PPT",
    q: "What types of ground handling service providers operate at airports?",
    o: [
      "Airline self-handling units and third-party ground handling agencies (e.g., Swissport, Dnata)",
      "Military aerial regiments and border coast guard stations exclusively",
      "Airport architectural contractors and electrical utility providers",
      "Commercial passenger marketing firms and credit card merchants"
    ],
    a: 0,
    e: "Slide 61 indicates ground handling is performed either by airline self-handling units or third-party service providers like Swissport or Dnata."
  },
  {
    c: "Ground Handling",
    source: "Ground Handling PPT",
    q: "Why are efficient ground handling services critical to airline operations?",
    o: [
      "They ensure on-time performance (OTP), maintain safety and security, reduce turnaround time (TAT), and enhance passenger experience",
      "They eliminate the requirement for certified pilots on short regional routes",
      "They bypass all security and customs screening requirements for international transit",
      "They eliminate the need for aircraft fuel and weight calculation manifests"
    ],
    a: 0,
    e: "Slide 63 highlights that efficient ground handling ensures on-time performance, safety, enhanced passenger experience, and minimized turnaround times."
  },

  // ==========================================
  // SECTION 8: RESERVATIONS & TICKETING
  // ==========================================
  {
    c: "Reservations & Ticketing",
    source: "Ground Handling PPT",
    q: "What is the distinction between a reservation and ticketing in aviation?",
    o: [
      "Reservation is holding a seat for a specific flight; Ticketing is issuing the confirmed travel contract document",
      "Reservation is checking baggage at the counter; Ticketing is boarding the aircraft gate",
      "Reservation is done only at the airport ticket desk; Ticketing is done exclusively online",
      "Reservation applies only to cargo shipments; Ticketing applies only to passenger travel"
    ],
    a: 0,
    e: "Slide 65 explains: Reservation is the process of booking a seat on an aircraft; Ticketing is issuing the legal travel document confirming that booking."
  },
  {
    c: "Reservations & Ticketing",
    source: "Ground Handling PPT",
    q: "What does the abbreviation GDS stand for in airline distribution?",
    o: [
      "Global Distribution System",
      "General Departure Schedule",
      "Ground Dispatch System",
      "Global Document Standard"
    ],
    a: 0,
    e: "Slide 67 includes Global Distribution Systems (GDS, e.g., Amadeus, Sabre, Travelport) as major reservation channels."
  },
  {
    c: "Reservations & Ticketing",
    source: "Ground Handling PPT",
    q: "What is the correct sequential workflow of an airline reservation system as shown on Slide 69?",
    o: [
      "Search Flights → Selection & Booking → Fare Calculation → Payment → Issuance of E-ticket",
      "Payment → Search Flights → Issuance of E-ticket → Booking → Gate Check-in",
      "Issuance of E-ticket → Fare Calculation → Search Flights → Payment → Selection",
      "Booking → Boarding Pass Print → Flight Search → Fare Calculation → Payment"
    ],
    a: 0,
    e: "Slide 69 outlines the reservation workflow: Searches for Flights → Flight Selection and Booking → Fare Calculation → Payment → Issuance of E-ticket."
  },

  // ==========================================
  // SECTION 9: PASSENGER HANDLING & CHECK-IN
  // ==========================================
  {
    c: "Passenger Handling",
    source: "Ground Handling PPT",
    q: "What are the core duties performed by airport check-in agents according to Slide 73?",
    o: [
      "Greet passengers, verify travel documents, check in passengers, issue boarding passes, and weigh/tag baggage",
      "Inspect aircraft jet engines, guide pushback tugs, and pump aviation jet fuel",
      "Direct aircraft through air corridors using primary surveillance radar",
      "Prepare hot meals inside the airport flight catering flight kitchen"
    ],
    a: 0,
    e: "Slide 73 defines check-in duties: greet passengers, verify documents, check-in passengers, issue boarding passes, and weigh, tag, and dispatch baggage."
  },
  {
    c: "Passenger Handling",
    source: "Ground Handling PPT",
    q: "What are frequent challenges faced by check-in staff during airport operations?",
    o: [
      "Dealing with long queues, irate passengers during delays, system outages, and excess baggage disputes",
      "Refueling aircraft tanks under bad weather conditions and inspecting tire treads",
      "Directing runway snow plows and calculating aircraft engine thrust settings",
      "Translating air-to-ground radio transmissions for en-route air traffic control"
    ],
    a: 0,
    e: "Slide 75 lists dealing with long lines, irate passengers during delays, managing airline systems, and handling excess baggage."
  },
  {
    c: "Passenger Handling",
    source: "Ground Handling PPT",
    q: "What takes place during airport immigration and customs procedures as described in Slide 77?",
    o: [
      "Verification of passports and visas for entry eligibility, and interview of travelers if required",
      "Weighing and tagging passenger cabin roll-aboard suitcases",
      "Assignment of passenger cabin seats and frequent flyer miles accrual",
      "Marshalling aircraft into the parking stand using illuminated wands"
    ],
    a: 0,
    e: "Slide 77 states immigration and customs verify passports and visas for validity, interview passengers if necessary, and ensure legal entry compliance."
  },
  {
    c: "Passenger Handling",
    source: "Ground Handling PPT",
    q: "What key tasks are carried out during the Pre-Boarding phase according to Slide 80?",
    o: [
      "Gate preparation, document verification, pre-boarding announcements, and priority passenger assistance",
      "Disembarking inbound arriving passengers and directing them to customs",
      "Cleaning passenger lavatories and unloading bulk baggage from the aft cargo hold",
      "Filing the flight plan with local civil aviation air traffic control authorities"
    ],
    a: 0,
    e: "Slide 80 lists Gate Preparation, Document and Identity Verification, Pre-Boarding Announcements, and Priority/Special passenger assistance."
  },
  {
    c: "Passenger Handling",
    source: "Ground Handling PPT",
    q: "Which challenges do gate agents frequently confront during aircraft boarding according to Slide 87?",
    o: [
      "Late passengers, seat disputes, full overhead bin space, and disruptive passengers",
      "Engine oil leaks, landing gear tire deflation, and crosswind turbulence",
      "Runway friction loss, taxiway repaving, and air traffic radar blanking",
      "Baggage carousel conveyor motor failures and airport parking ticket jams"
    ],
    a: 0,
    e: "Slide 87 identifies late passengers, seat disputes, full overhead bin space, disruptive passengers, and flight delays as prime boarding challenges."
  },
  {
    c: "Passenger Handling",
    source: "Ground Handling PPT",
    q: "What does Arrival Handling encompass as described on Slide 89?",
    o: [
      "Coordinating aircraft docking, passenger disembarkation, transit/transfer assistance, and baggage delivery",
      "Selling promotional ticket reservations for future travel routes at check-in desks",
      "Pre-flight meal heating inside the aircraft galley ovens before pushback",
      "Issuing departure tax receipts to outbound international tourists"
    ],
    a: 0,
    e: "Slide 89-90 defines arrival handling as managing passengers and baggage from aircraft landing until airport exit, including docking, disembarkation, transfer, and baggage reclaim."
  },

  // ==========================================
  // SECTION 10: CHECK-IN TYPES & PASSENGER CLASSIFICATIONS
  // ==========================================
  {
    c: "Check-in & Passenger Types",
    source: "Ground Handling PPT",
    q: "Which check-in methods are listed on Slide 95?",
    o: [
      "Manual check-in, Departure Control System (DCS), Self check-in, Online check-in, Stand-by check-in, and Through check-in",
      "In-flight check-in, Cockpit check-in, Runway check-in, and Customs-only check-in",
      "Baggage carousel check-in, Jet-bridge check-in, and Pushback check-in",
      "Pilot radio check-in, Radar transponder check-in, and Hangar check-in"
    ],
    a: 0,
    e: "Slide 95 lists Manual Check-in, DCS Check-in, Self Check-in, Online Check-in, Stand-by Check-in, and Through Check-in."
  },
  {
    c: "Check-in & Passenger Types",
    source: "Ground Handling PPT",
    q: "What is 'Through Check-in'?",
    o: [
      "Checking in a passenger and their baggage across connecting flights to the final destination in a single transaction",
      "Passing through airport security without showing any identification or boarding pass",
      "Checking in directly from inside an automobile without leaving the vehicle",
      "A fast check-in method reserved exclusively for airline flight crew members"
    ],
    a: 0,
    e: "Through check-in allows passengers traveling on connecting multi-sector flights to receive boarding passes and check baggage straight to the final destination."
  },
  {
    c: "Check-in & Passenger Types",
    source: "Ground Handling PPT",
    q: "What does the travel purpose category 'VFR' stand for in passenger demographics?",
    o: [
      "Visiting Friends and Relatives",
      "Visual Flight Regulations",
      "Variable Fare Rate",
      "Verified Frequent Rider"
    ],
    a: 0,
    e: "Slide 97 lists VFR as 'Visiting Friends and Relatives', a major classification alongside business and leisure travel."
  },
  {
    c: "Check-in & Passenger Types",
    source: "Ground Handling PPT",
    q: "What is a 'No-show' passenger?",
    o: [
      "A passenger holding a confirmed reservation who fails to arrive for the flight before check-in closes",
      "A passenger who boards without a ticket using false documentation",
      "A passenger who travels without any checked or cabin baggage",
      "A passenger who declines in-flight meal service"
    ],
    a: 0,
    e: "In aviation and check-in terminology, a no-show is a ticketed passenger with a confirmed seat who fails to appear for departure."
  },
  {
    c: "Check-in & Passenger Types",
    source: "Ground Handling PPT",
    q: "What is a 'Go-show' passenger in airline ground operations?",
    o: [
      "A passenger who arrives at the airport without an advance booking seeking a seat on the next departure",
      "A passenger who purchases an expensive first-class seat months in advance",
      "A passenger who cancels their flight after boarding the aircraft",
      "An airline crew member deadheading to another operational base"
    ],
    a: 0,
    e: "A go-show is an unbooked traveler who arrives at the airport counter hoping to purchase an available seat or be accommodated on the spot."
  },

  // ==========================================
  // SECTION 11: BAGGAGE ACCEPTANCE, CONCEPTS & TAGS
  // ==========================================
  {
    c: "Baggage Handling",
    source: "Ground Handling PPT",
    q: "What are the two primary baggage acceptance allowance systems explained on Slide 100?",
    o: [
      "Weight Concept and Piece Concept",
      "Volume Concept and Density Concept",
      "Cabin Concept and Cargo Concept",
      "Domestic Concept and International Concept"
    ],
    a: 0,
    e: "Slide 100 explains that baggage acceptance at check-in is governed by two main systems: the Weight Concept and the Piece Concept."
  },
  {
    c: "Baggage Handling",
    source: "Ground Handling PPT",
    q: "How does the 'Weight Concept' function for passenger baggage?",
    o: [
      "Passengers are permitted a total weight allowance regardless of the number of individual bags checked",
      "Passengers may only check one bag which must weigh an exact predetermined amount",
      "Passengers are charged per bag based strictly on the passenger's own body weight",
      "Baggage weight is measured only upon arrival at the final destination airport"
    ],
    a: 0,
    e: "Slide 102 explains that under the Weight Concept, passengers are allowed a total aggregate weight, regardless of how many bags they check."
  },
  {
    c: "Baggage Handling",
    source: "Ground Handling PPT",
    q: "How does the 'Piece Concept' govern baggage allowance?",
    o: [
      "Passengers are permitted a specific number of bags, with distinct weight and size limits applied to each bag",
      "Passengers can carry unlimited bags as long as each piece contains only clothing",
      "Baggage is charged solely based on the length of the longest zipper on the bag",
      "Baggage allowances are calculated based on the total number of passengers on board"
    ],
    a: 0,
    e: "Slide 104 defines the Piece Concept as allowing a specific number of bags, each subject to individual weight and dimension limits (e.g., 2 bags up to 23 kg each)."
  },
  {
    c: "Baggage Handling",
    source: "Ground Handling PPT",
    q: "What is the typical maximum weight limit for any single checked bag, enforced for occupational health and safety?",
    o: [
      "32 kg (70 lbs)",
      "20 kg (44 lbs)",
      "45 kg (100 lbs)",
      "15 kg (33 lbs)"
    ],
    a: 0,
    e: "Slide 105 specifies that for occupational health and safety of baggage handlers, a single checked bag typically must not exceed 32 kg (70 lbs)."
  },
  {
    c: "Baggage Handling",
    source: "Ground Handling PPT",
    q: "Which mandatory security questions must check-in agents ask passengers when accepting baggage?",
    o: [
      "'Does this bag belong to you?' and 'Have you packed your bag yourself?'",
      "'What is the financial value of the clothes inside this bag?'",
      "'How many years have you owned this luggage piece?'",
      "'Can you name the air traffic controller on duty today?'"
    ],
    a: 0,
    e: "Slide 106 highlights mandatory security verification questions: 'Does this bag belong to you?' and 'Have you packed your bag yourself?'"
  },
  {
    c: "Baggage Handling",
    source: "Ground Handling PPT",
    q: "What does the code 'CBBQ' or 'CBBG' stand for in passenger baggage handling?",
    o: [
      "Cabin Seat Baggage (delicate or bulky item occupying a purchased passenger seat)",
      "Checked Baggage Bulk Goods",
      "Cargo Bay Box Group",
      "Cabin Boarding Baggage Gate"
    ],
    a: 0,
    e: "Slide 107 defines CBBG as Cabin Seat Baggage—baggage not suitable for loading in the cargo hold (e.g., cellos, fragile instruments) that occupies a paid seat."
  },
  {
    c: "Baggage Handling",
    source: "Ground Handling PPT",
    q: "When is a 'Limited Release Tag' (LRT) attached to a passenger's checked baggage?",
    o: [
      "When the bag is pre-damaged, unsuitably packed, fragile, or accepted without airline liability for existing defects",
      "When a passenger pays for a first-class ticket and demands priority delivery",
      "When the bag contains dangerous goods approved for transport in the cabin",
      "When the aircraft cargo hold is completely full and the bag is left behind"
    ],
    a: 0,
    e: "Slide 110: A Limited Release Tag releases the airline from liability when baggage is already torn/damaged, fragile, or insufficiently packed."
  },
  {
    c: "Baggage Handling",
    source: "Ground Handling PPT",
    q: "Which of the following special baggage tags are listed on Slide 109?",
    o: [
      "Priority Tags, Heavy Tags, Cabin Tags, Wheelchair Tags, COMAIL Tags, and Rush Tags",
      "Airworthiness Tags, Flight Deck Tags, Engine Cowling Tags, and Fuel Tank Tags",
      "Runway Clearance Tags, Radar Calibration Tags, and Pilot Uniform Tags",
      "Passenger Passport Tags, Visa Tags, Boarding Gate Tags, and Ticket Tags"
    ],
    a: 0,
    e: "Slide 109 lists Cabin Tags, Short Connection Tags, COMAIL Tags, Wheelchair Tags, Priority Tags, Heavy Tags, and Rush Tags."
  },

  // ==========================================
  // SECTION 12: SPECIAL CATEGORY PASSENGERS (SCPs) & IATA CODES
  // ==========================================
  {
    c: "Special Category Passengers",
    source: "Ground Handling PPT",
    q: "What does the abbreviation 'PRM' stand for in airport passenger handling?",
    o: [
      "Persons with Reduced Mobility",
      "Passenger Ramp Manager",
      "Priority Route Manifest",
      "Passenger Regional Membership"
    ],
    a: 0,
    e: "Slide 93 & 112 define PRM as Persons with Reduced Mobility, requiring special assistance at airports."
  },
  {
    c: "Special Category Passengers",
    source: "Ground Handling PPT",
    q: "What does the wheelchair code 'WCHR' (Wheelchair Ramp) mean?",
    o: [
      "Passenger can ascend/descend steps and walk inside the cabin, but requires a wheelchair for ramp/long terminal distances",
      "Passenger cannot walk at all and must be carried into their cabin seat",
      "Passenger can walk long distances but cannot climb boarding stairs",
      "Passenger is traveling with an electric wheelchair stored in the passenger seat"
    ],
    a: 0,
    e: "WCHR means the passenger can climb stairs and walk inside the aircraft cabin, but needs assistance for long terminal distances."
  },
  {
    c: "Special Category Passengers",
    source: "Ground Handling PPT",
    q: "What does the wheelchair code 'WCHS' (Wheelchair Steps) indicate?",
    o: [
      "Passenger cannot walk up or down stairs, but can walk slowly inside the aircraft cabin to their seat",
      "Passenger is completely paralyzed and needs a high-lift ambulift to enter the aircraft",
      "Passenger only needs a wheelchair upon arrival at the baggage reclaim area",
      "Passenger requires an onboard stretcher across three seats"
    ],
    a: 0,
    e: "WCHS means Wheelchair Steps: the passenger cannot negotiate stairs/steps, but can walk inside the aircraft cabin."
  },
  {
    c: "Special Category Passengers",
    source: "Ground Handling PPT",
    q: "What does the wheelchair code 'WCHC' (Wheelchair Cabin) designate?",
    o: [
      "Passenger is completely immobile and requires a wheelchair for terminal distance, boarding stairs, and to their cabin seat",
      "Passenger only requires a wheelchair inside the business class lounge",
      "Passenger is traveling with a guide dog occupying an aisle seat",
      "Passenger is temporarily fatigued from a connecting flight"
    ],
    a: 0,
    e: "WCHC means Wheelchair Cabin: the passenger is completely immobile and requires full assistance from terminal to aircraft seat."
  },
  {
    c: "Special Category Passengers",
    source: "Ground Handling PPT",
    q: "What does the industry code 'UMNR' refer to?",
    o: [
      "Unaccompanied Minor (child traveling without parent or guardian)",
      "Unconfirmed Medical Need Record",
      "Urgent Missing Number Reservation",
      "Unclaimed Missing Navigational Route"
    ],
    a: 0,
    e: "Slide 93 identifies UMNR as Unaccompanied Minor—a child traveling alone who receives special supervision from airline ground staff."
  },
  {
    c: "Special Category Passengers",
    source: "Ground Handling PPT",
    q: "What does the special passenger service code 'STCR' represent?",
    o: [
      "Stretcher passenger (requiring multiple seats to be blocked with an installed stretcher)",
      "Student Concession Route passenger",
      "Standard Tour Group Coordinator",
      "Security Transit Clearance Required"
    ],
    a: 0,
    e: "Slide 97 & 114: STCR stands for Stretcher case, where a passenger requires an onboard stretcher installed across aircraft seats."
  },
  {
    c: "Special Category Passengers",
    source: "Ground Handling PPT",
    q: "What does the special service request code 'OXYG' specify?",
    o: [
      "Passenger requires supplemental medical oxygen during the flight",
      "Passenger has scuba gear in their checked baggage",
      "Passenger requires an aisle seat near the emergency exit",
      "Passenger is allergic to air conditioning ozone filters"
    ],
    a: 0,
    e: "Slide 98 & 114: OXYG indicates that the passenger requires therapeutic medical oxygen during flight."
  },
  {
    c: "Special Category Passengers",
    source: "Ground Handling PPT",
    q: "What is the distinction between 'DEPA' and 'DEPU' in deportee handling?",
    o: [
      "DEPA is a Deportee Accompanied by escorts; DEPU is a Deportee Unaccompanied by an escort",
      "DEPA is a Deportee by Air; DEPU is a Deportee by Underwater vessel",
      "DEPA is an Approved Deportee; DEPU is an Urgent Deportee",
      "DEPA is a Deportee with Adult children; DEPU is an Underage Deportee"
    ],
    a: 0,
    e: "Slide 116 defines DEPA as Deportee – Accompanied (escorted by law enforcement) and DEPU as Deportee – Unaccompanied."
  },
  {
    c: "Special Category Passengers",
    source: "Ground Handling PPT",
    q: "What is an Inadmissible Passenger (INAD)?",
    o: [
      "A traveler who has been refused entry into a country by immigration authorities upon arrival",
      "A passenger who boards without paying the checked baggage excess fee",
      "A traveler who refuses to listen to the pre-flight safety demonstration",
      "A passenger whose flight was cancelled due to bad weather"
    ],
    a: 0,
    e: "Slide 117 defines an INAD (Inadmissible Passenger) as a traveler refused entry by immigration authorities, typically returned to their point of origin."
  },
  {
    c: "Special Category Passengers",
    source: "Ground Handling PPT",
    q: "According to Slide 118, what are common reasons for a passenger receiving INAD status?",
    o: [
      "Invalid or missing visa, expired passport, suspicious travel intent, or counterfeit travel documents",
      "Carrying too many duty-free shopping bags through the arrivals gate",
      "Requesting a special vegan meal without booking 24 hours in advance",
      "Arriving at the destination airport 30 minutes ahead of scheduled time"
    ],
    a: 0,
    e: "Slide 118 lists invalid/missing visa, expired passport/travel documents, and fraudulent paperwork as prime reasons for INAD status."
  },
  {
    c: "Special Category Passengers",
    source: "Ground Handling PPT",
    q: "What general rule for expectant mothers is highlighted on Slide 113?",
    o: [
      "Unrestricted travel usually up to 27 weeks; medical clearance certificate required from the 28th week",
      "Complete prohibition from air travel after the 12th week of pregnancy",
      "Air travel permitted without any medical check until 2 hours prior to delivery",
      "Expectant mothers must occupy two separate passenger seats at all times"
    ],
    a: 0,
    e: "Slide 113 notes most airlines allow unrestricted travel up to 27 weeks, requiring doctor fitness certificates thereafter, with travel restricted in late weeks."
  },

  // ==========================================
  // SECTION 13: AIRSIDE, RAMP OPERATIONS & GSE
  // ==========================================
  {
    c: "Airside & Ramp Operations",
    source: "Ground Handling PPT",
    q: "What do Airside Operations encompass according to Slide 120?",
    o: [
      "All activities and services in the secure airside area (runways, taxiways, aprons, parking stands) for aircraft, passenger, baggage, and cargo handling",
      "Commercial advertising campaigns placed on public highway billboards approaching the airport",
      "Ticketing reservations booked through high-street travel agency shops",
      "Long-term automobile parking management outside the airport terminal perimeter"
    ],
    a: 0,
    e: "Slide 120 defines airside operations as all activities in the secure airside zone (runways, taxiways, aprons, stands) for safe handling of aircraft and traffic."
  },
  {
    c: "Airside & Ramp Operations",
    source: "Ground Handling PPT",
    q: "What is an aircraft pushback procedure?",
    o: [
      "Moving an aircraft backward from the gate or parking stand using a specialized tow tug or tractor",
      "Reversing the aircraft using high-power jet engine thrust reversers against terminal windows",
      "Pushing baggage trolleys manually across the apron to the sorting shed",
      "Using air traffic control radar to push arriving aircraft into holding stacks"
    ],
    a: 0,
    e: "Slide 116 & 128 explain pushback: moving an aircraft back from the gate using a pushback tractor after servicing and boarding."
  },
  {
    c: "Airside & Ramp Operations",
    source: "Ground Handling PPT",
    q: "What does GSE stand for in airport ramp operations?",
    o: [
      "Ground Support Equipment",
      "General Security Examination",
      "Gate Standard Entry",
      "Global Safety Enclosure"
    ],
    a: 0,
    e: "Slide 127 highlights GSE as Ground Support Equipment—the specialized fleet of vehicles and equipment servicing aircraft on the apron."
  },
  {
    c: "Airside & Ramp Operations",
    source: "Ground Handling PPT",
    q: "What is the definition of aircraft Turnaround Time (TAT)?",
    o: [
      "The duration an aircraft spends on the ground between its arrival at the stand and its subsequent departure",
      "The time it takes for an aircraft to perform a complete 360-degree holding turn in the sky",
      "The total time needed to manufacture and assemble an aircraft at the factory",
      "The hours required to overhaul and replace both jet engines during heavy maintenance"
    ],
    a: 0,
    e: "Slide 133 defines turnaround time (TAT) as the time between an aircraft's arrival and its next departure."
  },
  {
    c: "Airside & Ramp Operations",
    source: "Ground Handling PPT",
    q: "What does 'FOD' stand for in ramp safety, and why is it hazardous?",
    o: [
      "Foreign Object Debris; items left on the ramp that can be ingested into jet engines or puncture tires",
      "Fuel Operations Document; an invoice recording aviation jet fuel delivery",
      "Flight Order Dispatch; the pilot's final routing release",
      "Forward Overhead Door; the main passenger entry portal"
    ],
    a: 0,
    e: "Slide 119 & 131 explain FOD (Foreign Object Debris/Damage), loose objects on the ground that can destroy jet engines or damage aircraft structures."
  },
  {
    c: "Airside & Ramp Operations",
    source: "Ground Handling PPT",
    q: "Which Personal Protective Equipment (PPE) is mandatory for personnel working on the active ramp?",
    o: [
      "High-visibility vest, hearing protection (ear defenders), and safety boots with toe protection",
      "Nomex fireproof flight suit, pilot sunglasses, and parachute harness",
      "Sterile medical gown, surgical latex gloves, and cloth face mask",
      "Radiation lead apron, scuba breathing tank, and rubber flippers"
    ],
    a: 0,
    e: "Slide 118 & 131 emphasize PPE for ramp safety: high-visibility clothing, hearing protection against high-decibel jet noise, and protective footwear."
  },
  {
    c: "Airside & Ramp Operations",
    source: "Ground Handling PPT",
    q: "What are the primary functions of Ramp Operations outlined on Slides 124-130?",
    o: [
      "Aircraft parking/marshaling, baggage/cargo loading, refuelling, GSE operation, pushback, and minor servicing",
      "Passenger passport issuance, international visa approvals, and national customs tariff collection",
      "Manufacturing spare wings, casting titanium engine fan blades, and rewiring cabin seating",
      "Setting international airline ticket fares and managing stock market investor briefings"
    ],
    a: 0,
    e: "Slides 124-130 enumerate ramp functions: aircraft parking, loading/unloading, refueling, GSE operations, pushback, safety, and minor maintenance."
  },

  // ==========================================
  // SECTION 14: CARGO OPERATIONS & DANGEROUS GOODS
  // ==========================================
  {
    c: "Cargo & Dangerous Goods",
    source: "Ground Handling PPT",
    q: "What does the abbreviation 'AWB' stand for in air cargo handling?",
    o: [
      "Air Waybill",
      "Aircraft Weight and Balance",
      "Airworthiness Verification Book",
      "Automated Warehouse Bay"
    ],
    a: 0,
    e: "Slide 121 & 137 define AWB as Air Waybill, the legally binding contract of carriage between the shipper and the airline."
  },
  {
    c: "Cargo & Dangerous Goods",
    source: "Ground Handling PPT",
    q: "What key document lists all cargo consignments loaded onto an aircraft for a specific flight?",
    o: [
      "Cargo Manifest",
      "Passenger Boarding List",
      "Cabin Service Log",
      "Airport Handling Invoice"
    ],
    a: 0,
    e: "Slide 122 & 137 list the Cargo Manifest as the primary document summarizing all cargo shipments on the flight."
  },
  {
    c: "Cargo & Dangerous Goods",
    source: "Ground Handling PPT",
    q: "What is DGR in air cargo transport?",
    o: [
      "IATA Dangerous Goods Regulations",
      "Daily Ground Report",
      "Departure Gate Record",
      "Direct General Routing"
    ],
    a: 0,
    e: "Slide 126 & 144 identify DGR as IATA Dangerous Goods Regulations, the worldwide industry standard for shipping hazardous materials safely by air."
  },
  {
    c: "Cargo & Dangerous Goods",
    source: "Ground Handling PPT",
    q: "Which of the following are categorized as 'Special Cargo' types on Slide 144?",
    o: [
      "Perishable Cargo (PER), Dangerous Goods (DGR), and Live Animals (AVI)",
      "Standard Passenger Suitcases, Backpacks, and Duty-Free Carrier Bags",
      "Printed In-Flight Magazines, Paper Napkins, and Plastic Cutlery",
      "Airport Terminal Floor Tiles, Glass Panes, and Office Desks"
    ],
    a: 0,
    e: "Slide 144 identifies Perishable Cargo, Dangerous Goods (DGR), and Live Animals (AVI) as prime categories of special air cargo."
  },
  {
    c: "Cargo & Dangerous Goods",
    source: "Ground Handling PPT",
    q: "Which methods are utilized for real-time tracking of cargo packages through airport facilities?",
    o: [
      "Barcode scanners and RFID tags",
      "Passenger passport stamping machines",
      "Terminal flight information display screens",
      "Manual chalk markings on airplane tires"
    ],
    a: 0,
    e: "Slide 124 & 142 highlight barcode scanners and RFID (Radio Frequency Identification) tags for tracking air cargo shipments."
  },
  {
    c: "Cargo & Dangerous Goods",
    source: "Ground Handling PPT",
    q: "Why must cargo loading adhere strictly to weight and balance calculations on Slide 140?",
    o: [
      "To ensure the aircraft's center of gravity (CG) remains within certified safe aerodynamic operating limits",
      "To verify that all cargo boxes are painted in the airline's corporate color scheme",
      "To prevent passengers in economy class from noticing the weight under their seats",
      "To ensure cargo handlers have equal amounts of work on both sides of the aircraft"
    ],
    a: 0,
    e: "Slide 140 notes cargo is loaded in strict compliance with weight distribution and balance requirements to keep the aircraft within safe limits."
  },

  // ==========================================
  // SECTION 15: AVIATION SECURITY (AVSEC)
  // ==========================================
  {
    c: "Aviation Security",
    source: "Ground Handling PPT",
    q: "How does the presentation define 'Aviation Security'?",
    o: [
      "Safeguarding civil aviation against acts of unlawful interference",
      "Securing financial profits for commercial airline investors",
      "Protecting airport retail shops from inventory loss and theft",
      "Preventing aircraft engines from consuming excess aviation kerosene"
    ],
    a: 0,
    e: "Slide 127 & 153 define aviation security as safeguarding civil aviation against acts of unlawful interference."
  },
  {
    c: "Aviation Security",
    source: "Ground Handling PPT",
    q: "Which of the following are key aspects of airport ground handling security operations?",
    o: [
      "Access control, passenger screening, hold baggage screening, and cargo screening",
      "Frequent flyer point calculation, lounge catering, and seat upgrade auctions",
      "Aircraft painting, carpet shampooing, and in-flight movie subtitling",
      "Runway centerline repainting and terminal parking ticket validation"
    ],
    a: 0,
    e: "Slide 128 & 153 list access control, passenger screening, baggage screening, and cargo security as vital security operations."
  },

  // ==========================================
  // SECTION 16: CAREERS & INDUSTRY TRENDS
  // ==========================================
  {
    c: "Careers & Future Trends",
    source: "Ground Handling PPT",
    q: "Which four career pathways in ground operations are identified on Slide 155-158?",
    o: [
      "Passenger Services, Ramp Operations, Aircraft Servicing, and Reservation & Ticketing",
      "Commercial Ship Captain, Train Dispatcher, Submarine Pilot, and Highway Patrol",
      "Aviation Insurance Underwriting, Aircraft Metallurgical Smelting, and Radar Engineering",
      "Airport Hotel Chef, Duty-free Retail Buyer, and Limousine Chauffeur"
    ],
    a: 0,
    e: "Slide 155-158 list Passenger Services, Ramp Operations, Aircraft Servicing, and Reservation & Ticketing as key career paths."
  },
  {
    c: "Careers & Future Trends",
    source: "Ground Handling PPT",
    q: "Which core skill groups are essential for ground operations candidates according to Slide 159?",
    o: [
      "Customer service skills, soft skills, and technical skills",
      "Martial arts skills, precision aerobatic flying, and deep-sea diving",
      "Computer game design, heavy machinery welding, and financial stock trading",
      "Civil architecture, concrete mixing, and high-voltage electrical grid wiring"
    ],
    a: 0,
    e: "Slide 159 emphasizes Customer Service Skills, Soft Skills (communication, teamwork), and Technical Skills for ground operations personnel."
  },
  {
    c: "Careers & Future Trends",
    source: "Ground Handling PPT",
    q: "What technological trends are highlighted on Slide 168 as shaping modern aviation?",
    o: [
      "Autonomous aircraft, drones, artificial intelligence (AI), and machine learning",
      "Steam-powered turbochargers, coal-fired auxiliary boilers, and wooden wings",
      "Return to fabric-covered biplanes and manual paper-only passenger manifests",
      "Replacement of all radar systems with optical signal lanterns on tower roofs"
    ],
    a: 0,
    e: "Slide 168 highlights Autonomous aircraft, drones, AI, and machine learning as key technological trends transforming aviation."
  },
  {
    c: "Careers & Future Trends",
    source: "Ground Handling PPT",
    q: "What environmental sustainability trends are emphasized in the presentation?",
    o: [
      "Green aviation, Sustainable Aviation Fuels (SAF), and carbon-emission reduction targets",
      "Eliminating all international flights in favor of ocean liners",
      "Operating aircraft exclusively without wing flaps or landing gear",
      "Venting excess aviation fuel into the upper stratosphere during cruise"
    ],
    a: 0,
    e: "Slide 168 highlights green aviation, sustainable fuels (SAF), and carbon emission reduction as critical industry sustainability trends."
  },

  // ==========================================
  // SECTION 17: BASICS OF AVIATION - AERODYNAMICS & FOUR FORCES
  // ==========================================
  {
    c: "Aerodynamics & Flight Basics",
    source: "Basics of Aviation",
    q: "What are the four fundamental forces acting on an aircraft in flight?",
    o: [
      "Lift, Weight (Gravity), Thrust, and Drag",
      "Speed, Momentum, Inertia, and Friction",
      "Centrifugal force, Buoyancy, Pressure, and Tension",
      "Angle of attack, Stall, Pitch, and Roll"
    ],
    a: 0,
    e: "The four forces of flight are Lift (acting upward), Weight (gravity downward), Thrust (forward by engines), and Drag (rearward resistance)."
  },
  {
    c: "Aerodynamics & Flight Basics",
    source: "Basics of Aviation",
    q: "When an aircraft is in steady, unaccelerated level flight, what is the mathematical relationship between the four forces?",
    o: [
      "Lift equals Weight, and Thrust equals Drag",
      "Lift is twice the Weight, and Thrust is four times the Drag",
      "Thrust exceeds Drag by 50%, and Lift is constantly decreasing",
      "Weight exceeds Lift, and Drag is equal to zero"
    ],
    a: 0,
    e: "In unaccelerated, straight-and-level flight, an aircraft is in equilibrium: Lift = Weight, and Thrust = Drag."
  },
  {
    c: "Aerodynamics & Flight Basics",
    source: "Basics of Aviation",
    q: "According to Bernoulli's Principle, how do airplane wings generate aerodynamic lift?",
    o: [
      "Air traveling over the curved upper surface moves faster, creating lower static pressure compared to the higher pressure beneath the wing",
      "Air bounces off the upper wing surface, creating a downward vacuum that pulls the plane upward",
      "Cold air underneath the wing heats up from friction, pushing the wing upward like a hot-air balloon",
      "The wing blades spin in circles to drill through the ambient air like a screw"
    ],
    a: 0,
    e: "Bernoulli's Principle: Higher velocity air over the cambered upper surface reduces pressure, producing a net upward lifting force."
  },
  {
    c: "Aerodynamics & Flight Basics",
    source: "Basics of Aviation",
    q: "What is the aerodynamic 'Angle of Attack' (AoA)?",
    o: [
      "The angle between the wing's chord line and the oncoming relative wind direction",
      "The angle between the aircraft fuselage and the runway surface during flare",
      "The angle of bank between the wings and the horizontal horizon during a turn",
      "The climb angle relative to the earth's gravitational equator"
    ],
    a: 0,
    e: "Angle of Attack (AoA) is the angle between the wing's chord line (an imaginary line from leading to trailing edge) and the relative wind."
  },
  {
    c: "Aerodynamics & Flight Basics",
    source: "Basics of Aviation",
    q: "What causes an aerodynamic stall in an aircraft wing?",
    o: [
      "Exceeding the critical angle of attack, causing airflow over the upper wing surface to separate and destroy lift",
      "The jet engines running out of aviation fuel while in cruise flight",
      "Airspeed dropping below the speed of sound while at high altitude",
      "The aircraft autopilot disconnecting during bad weather"
    ],
    a: 0,
    e: "An aerodynamic stall occurs when the wing exceeds its critical angle of attack, causing airflow separation and an abrupt loss of lift, regardless of airspeed."
  },
  {
    c: "Aerodynamics & Flight Basics",
    source: "Basics of Aviation",
    q: "What are the two major categories of aerodynamic drag on an airplane?",
    o: [
      "Parasite drag (form, skin friction, interference) and Induced drag (byproduct of lift)",
      "Surface drag and High-altitude drag",
      "Forward engine drag and Reverse thrust drag",
      "Cabin window drag and Landing gear wheel drag"
    ],
    a: 0,
    e: "Total drag is divided into Parasite drag (resistance of the aircraft moving through air) and Induced drag (generated as a necessary byproduct of creating lift)."
  },

  // ==========================================
  // SECTION 18: BASICS OF AVIATION - AIRCRAFT AXES & DYNAMICS
  // ==========================================
  {
    c: "Aircraft Axes & Controls",
    source: "Basics of Aviation",
    q: "What are the three imaginary axes of an aircraft that pass through its Center of Gravity (CG)?",
    o: [
      "Longitudinal axis, Lateral axis, and Vertical (Normal) axis",
      "Horizontal axis, Circular axis, and Altitude axis",
      "Equatorial axis, Polar axis, and Meridian axis",
      "Thrust axis, Glide axis, and Runway axis"
    ],
    a: 0,
    e: "Aircraft rotate around three axes through their center of gravity: Longitudinal (roll), Lateral (pitch), and Vertical (yaw)."
  },
  {
    c: "Aircraft Axes & Controls",
    source: "Basics of Aviation",
    q: "Movement about the Longitudinal axis (extending nose to tail) is called what, and which control surface manages it?",
    o: [
      "Roll; controlled by the Ailerons",
      "Pitch; controlled by the Elevators",
      "Yaw; controlled by the Rudder",
      "Heave; controlled by the Flaps"
    ],
    a: 0,
    e: "Rotation around the longitudinal axis (nose to tail) is Roll, controlled primarily by the ailerons on the outer trailing edge of the wings."
  },
  {
    c: "Aircraft Axes & Controls",
    source: "Basics of Aviation",
    q: "Movement about the Lateral axis (extending wingtip to wingtip) is called what, and which control surface governs it?",
    o: [
      "Pitch; controlled by the Elevators",
      "Roll; controlled by the Ailerons",
      "Yaw; controlled by the Rudder",
      "Sideslip; controlled by the Spoilers"
    ],
    a: 0,
    e: "Rotation around the lateral axis (wingtip to wingtip) is Pitch (nose up or down), controlled by the elevators on the horizontal stabilizer."
  },
  {
    c: "Aircraft Axes & Controls",
    source: "Basics of Aviation",
    q: "Movement about the Vertical axis (running top to bottom through the fuselage) is called what, and which control surface controls it?",
    o: [
      "Yaw; controlled by the Rudder",
      "Pitch; controlled by the Elevators",
      "Roll; controlled by the Winglets",
      "Surge; controlled by the Engine Throttle"
    ],
    a: 0,
    e: "Rotation around the vertical axis is Yaw (nose pointing left or right), governed by the rudder mounted on the vertical stabilizer."
  },

  // ==========================================
  // SECTION 19: BASICS OF AVIATION - ALTIMETRY, PRESSURE & ATMOSPHERE
  // ==========================================
  {
    c: "Aviation Atmosphere & Weather",
    source: "Basics of Aviation",
    q: "What are the standard international sea level atmospheric pressure and temperature defined by ICAO (ISA)?",
    o: [
      "1013.25 hPa (29.92 inches of mercury) and 15°C (59°F)",
      "1000.00 hPa (30.00 inches of mercury) and 20°C (68°F)",
      "1025.50 hPa (28.50 inches of mercury) and 0°C (32°F)",
      "980.00 hPa (27.80 inches of mercury) and 25°C (77°F)"
    ],
    a: 0,
    e: "Standard atmospheric conditions at sea level (ICAO Standard Atmosphere - ISA) are 1013.25 hPa / mb (29.92 inHg) and 15°C."
  },
  {
    c: "Aviation Atmosphere & Weather",
    source: "Basics of Aviation",
    q: "What is the altimeter subscale setting 'QNH'?",
    o: [
      "Barometric pressure setting that causes the altimeter to read altitude above Mean Sea Level (MSL)",
      "Pressure setting that makes the altimeter read zero when on the runway (height above aerodrome)",
      "Standard pressure setting (1013.25 hPa) used when cruising above the transition altitude",
      "The cabin pressurization setting chosen by the flight attendant supervisor"
    ],
    a: 0,
    e: "QNH is the altimeter setting that gives aircraft altitude above Mean Sea Level (MSL), reading airport elevation when on the ground."
  },
  {
    c: "Aviation Atmosphere & Weather",
    source: "Basics of Aviation",
    q: "What is the altimeter subscale setting 'QFE'?",
    o: [
      "Pressure setting that causes the altimeter to read height above the airfield elevation (reads zero on runway)",
      "Pressure setting giving height above the highest mountain within 100 miles",
      "Standard altimeter setting used by transoceanic flights over the Atlantic",
      "The differential air pressure measured inside the aircraft fuel tanks"
    ],
    a: 0,
    e: "QFE is the barometric pressure setting that makes the altimeter read 0 when the aircraft wheels are resting on the runway threshold."
  },
  {
    c: "Aviation Atmosphere & Weather",
    source: "Basics of Aviation",
    q: "What does the aviation weather report abbreviation 'METAR' stand for?",
    o: [
      "Meteorological Aerodrome Report (Aviation Routine Weather Report)",
      "Maximum En-route Terminal Altitude Review",
      "Mid-air Emergency Traffic Avoidance Radar",
      "Military Electronic Target Acquisition Range"
    ],
    a: 0,
    e: "METAR is the French/international acronym for 'Météorologique Aviation Régulière'—the Aviation Routine Weather Report issued hourly or half-hourly."
  },
  {
    c: "Aviation Atmosphere & Weather",
    source: "Basics of Aviation",
    q: "What does the aviation weather code 'CAVOK' indicate?",
    o: [
      "Ceiling And Visibility OK (visibility ≥ 10 km, no clouds below 5,000 ft, no significant weather)",
      "Cold Air Vortex Over Kansas",
      "Clear Air Velocity Observation Kite",
      "Cancel All VFR Operations Immediately"
    ],
    a: 0,
    e: "CAVOK indicates Ceiling And Visibility OK: visibility 10 km or greater, no clouds below 5,000 ft or minimum sector altitude, and no cumulonimbus or weather."
  },
  {
    c: "Aviation Atmosphere & Weather",
    source: "Basics of Aviation",
    q: "Which cloud type presents the most extreme hazards to flight (severe turbulence, hail, icing, microbursts)?",
    o: [
      "Cumulonimbus (CB)",
      "Cirrus (CI)",
      "Altostratus (AS)",
      "Stratocumulus (SC)"
    ],
    a: 0,
    e: "Cumulonimbus (CB) clouds—thunderstorm clouds—are dangerous weather formations featuring violent updrafts, downdrafts, hail, icing, and severe microbursts."
  },

  // ==========================================
  // SECTION 20: BASICS OF AVIATION - AIR TRAFFIC CONTROL & EMERGENCY CODES
  // ==========================================
  {
    c: "ATC & Emergency Procedures",
    source: "Basics of Aviation",
    q: "Which transponder squawk code indicates an aircraft is experiencing unlawful interference (hijacking)?",
    o: [
      "7500",
      "7600",
      "7700",
      "1200"
    ],
    a: 0,
    e: "Transponder code 7500 indicates hijacking / unlawful interference ('75 - taken alive')."
  },
  {
    c: "ATC & Emergency Procedures",
    source: "Basics of Aviation",
    q: "Which transponder squawk code signals a complete radio communications failure (lost comms)?",
    o: [
      "7600",
      "7500",
      "7700",
      "7000"
    ],
    a: 0,
    e: "Transponder code 7600 signals radio communication failure ('76 - radio in a fix')."
  },
  {
    c: "ATC & Emergency Procedures",
    source: "Basics of Aviation",
    q: "Which transponder squawk code signals a general in-flight emergency (Mayday)?",
    o: [
      "7700",
      "7500",
      "7600",
      "2000"
    ],
    a: 0,
    e: "Transponder code 7700 alerts ATC to a general emergency / distress situation ('77 - going to heaven / emergency')."
  },
  {
    c: "ATC & Emergency Procedures",
    source: "Basics of Aviation",
    q: "What is the internationally recognized radio distress call denoting grave and imminent danger?",
    o: [
      "MAYDAY (repeated three times)",
      "PAN-PAN (repeated three times)",
      "SECURITE (repeated three times)",
      "EMERGENCY STOP (repeated three times)"
    ],
    a: 0,
    e: "MAYDAY (derived from French 'm'aider' - help me) is spoken three times to declare a life-threatening distress situation."
  },
  {
    c: "ATC & Emergency Procedures",
    source: "Basics of Aviation",
    q: "What urgency call is used when an aircraft has an urgent safety situation that does not pose immediate life-threatening peril?",
    o: [
      "PAN-PAN (repeated three times)",
      "MAYDAY (repeated three times)",
      "ROGER THAT (repeated three times)",
      "WILCO (repeated three times)"
    ],
    a: 0,
    e: "PAN-PAN (from French 'panne' - breakdown) is the urgency signal for serious situations not immediately endangering life or aircraft."
  },

  // ==========================================
  // SECTION 21: BASICS OF AVIATION - RUNWAYS & AIRPORT LIGHTING
  // ==========================================
  {
    c: "Runways & Airfield Markings",
    source: "Basics of Aviation",
    q: "How are runway numbers designated around the world?",
    o: [
      "By their magnetic heading rounded to the nearest 10 degrees and divided by 10 (e.g., 090° is Runway 09)",
      "In sequential order based on when the runway was constructed at the airport",
      "By the length of the runway in thousands of feet",
      "According to the elevation of the threshold above sea level"
    ],
    a: 0,
    e: "Runways are numbered based on magnetic azimuth divided by 10. A runway aligned along 093° magnetic heading is designated Runway 09."
  },
  {
    c: "Runways & Airfield Markings",
    source: "Basics of Aviation",
    q: "If an aircraft takes off on Runway 09, what is the designation of the reciprocal runway at the opposite end?",
    o: [
      "Runway 27 (090° + 180° = 270°)",
      "Runway 18 (090° + 090° = 180°)",
      "Runway 36 (090° + 270° = 360°)",
      "Runway 04 (090° - 050° = 040°)"
    ],
    a: 0,
    e: "Runway pairs are reciprocal ends separated by 180° (18 units). Opposite of Runway 09 is Runway 27 (9 + 18 = 27)."
  },
  {
    c: "Runways & Airfield Markings",
    source: "Basics of Aviation",
    q: "Why do aircraft preferentially take off and land facing into the wind (headwind)?",
    o: [
      "Headwind increases airspeed across the wings, generating higher lift and reducing ground takeoff/landing roll distance",
      "Headwind pushes the aircraft backwards so fuel burn is halved",
      "Headwind cools the passenger cabin through open cockpit vents",
      "Headwind reduces the noise generated by jet engines toward terminal gates"
    ],
    a: 0,
    e: "A headwind gives greater airspeed for the same ground speed, producing higher lift and significantly shortening the required takeoff and landing distance."
  },
  {
    c: "Runways & Airfield Markings",
    source: "Basics of Aviation",
    q: "What colors are standard for taxiway edge lighting versus runway edge lighting at night?",
    o: [
      "Taxiway edge lights are Blue; Runway edge lights are White",
      "Taxiway edge lights are Red; Runway edge lights are Green",
      "Taxiway edge lights are Yellow; Runway edge lights are Purple",
      "Taxiway edge lights are Orange; Runway edge lights are Black"
    ],
    a: 0,
    e: "Worldwide ICAO standard: Taxiway edges are outlined in Blue lights (centerlines Green); Runway edges are outlined in White lights."
  },
  {
    c: "Runways & Airfield Markings",
    source: "Basics of Aviation",
    q: "What color lights mark the landing runway threshold (beginning of landing area) to arriving pilots?",
    o: [
      "Green lights",
      "Red lights",
      "Blue lights",
      "Flashing amber lights"
    ],
    a: 0,
    e: "Runway threshold lights appear Green to approaching landing aircraft, marking the beginning of usable landing runway (the opposite end appears Red)."
  },

  // ==========================================
  // SECTION 22: BASICS OF AVIATION - AIRCRAFT AUXILIARY SYSTEMS & AVIONICS
  // ==========================================
  {
    c: "Aircraft Auxiliary Systems",
    source: "Basics of Aviation",
    q: "What is the APU (Auxiliary Power Unit) on a commercial aircraft, and where is it normally located?",
    o: [
      "A small gas turbine engine in the tail cone that provides AC electrical power and bleed air for air conditioning and engine starting when main engines are off",
      "A backup battery pack under the cockpit seats used only for emergency cabin lighting",
      "A supplementary rocket motor under the wings that boosts climb during high-altitude cruise",
      "A diesel generator mounted inside the nose gear wheel well"
    ],
    a: 0,
    e: "The APU is a small turbine engine in the tail providing electrical power and pneumatic bleed air on the ground (and as backup in flight) without running main engines."
  },
  {
    c: "Aircraft Auxiliary Systems",
    source: "Basics of Aviation",
    q: "What is a Ram Air Turbine (RAT)?",
    o: [
      "An emergency deployable wind propeller that generates backup hydraulic or electrical power if all main engines fail",
      "A cooling fan inside the cabin galley refrigerator",
      "A turbocharger connected to the cockpit air conditioning ducts",
      "A ground maintenance vacuum cleaner used for cleaning passenger seats"
    ],
    a: 0,
    e: "A Ram Air Turbine (RAT) drops from the fuselage into the slipstream to generate hydraulic and electrical power in the event of total engine or power failure."
  },
  {
    c: "Aircraft Auxiliary Systems",
    source: "Basics of Aviation",
    q: "What are the two 'Black Boxes' installed on commercial aircraft, and what color are they painted?",
    o: [
      "Flight Data Recorder (FDR) and Cockpit Voice Recorder (CVR); painted bright fluorescent orange",
      "Fuel Gauge Computer and Pilot Navigation Unit; painted flat matte black",
      "Engine Control Unit and Radar Processor; painted high-gloss silver",
      "Cabin Entertainment Drive and Passenger Wi-Fi Server; painted deep navy blue"
    ],
    a: 0,
    e: "The two flight recorders (FDR and CVR) are colloquially called black boxes, but are painted fluorescent bright orange with reflective strips for search and recovery."
  },
  {
    c: "Aircraft Auxiliary Systems",
    source: "Basics of Aviation",
    q: "What does the cockpit safety system 'TCAS' do?",
    o: [
      "Traffic Collision Avoidance System; monitors nearby transponder-equipped aircraft and issues Resolution Advisories (RA) to prevent mid-air collisions",
      "Turbine Climate Adjustment System; regulates cockpit cockpit heater fans",
      "Tire Condition Automatic Sensor; monitors wheel pressure during taxi",
      "Terminal Clearance Access System; opens the jet bridge gate door"
    ],
    a: 0,
    e: "TCAS (Traffic Collision Avoidance System) interrogates transponders of other aircraft nearby, issuing visual and audio Resolution Advisories (e.g., 'Climb, Climb') to prevent collision."
  },
  {
    c: "Aircraft Auxiliary Systems",
    source: "Basics of Aviation",
    q: "What are the three critical takeoff 'V-Speeds' known as V1, VR, and V2?",
    o: [
      "V1: Takeoff decision speed; VR: Rotation speed; V2: Takeoff safety climb speed",
      "V1: Minimum taxi speed; VR: Reverse thrust speed; V2: Cruise speed",
      "V1: Maximum flap retraction speed; VR: Radio check speed; V2: Vertical dive speed",
      "V1: Cabin door locking speed; VR: Runway exit speed; V2: Cruising altitude speed"
    ],
    a: 0,
    e: "V1 is decision speed (beyond which takeoff must continue even with an engine failure), VR is rotation speed to lift nose, and V2 is safe engine-out climb speed."
  },

  // ==========================================
  // SECTION 23: BASICS OF AVIATION - GROUND OPERATIONS PRACTICES
  // ==========================================
  {
    c: "Airside GSE & Turnaround",
    source: "Basics of Aviation",
    q: "What are 'wheel chocks' and what does 'chocks on / chocks off' signal in airline schedules?",
    o: [
      "Rubber or wooden blocks placed against wheels; 'Chocks on' marks flight arrival (block-in) and 'Chocks off' marks flight departure (block-out)",
      "Metallic locks on passenger doors; signals when beverage carts can enter",
      "Brake pads inside the landing gear; indicates when brakes are overheated",
      "Wing covers used to protect flaps from freezing rain overnight"
    ],
    a: 0,
    e: "Chocks prevent wheel roll. 'Chocks on' (block-in) and 'Chocks off' (off-block) are the official industry timestamps defining flight arrival and departure block times."
  },
  {
    c: "Airside GSE & Turnaround",
    source: "Basics of Aviation",
    q: "What does a Ground Power Unit (GPU) supply to an aircraft on the stand?",
    o: [
      "Standard 115V AC electrical power at 400 Hz frequency to operate avionics and systems while engines are shutdown",
      "High-octane gasoline for auxiliary starter spark plugs",
      "Hydraulic fluid directly into passenger seat reclining mechanisms",
      "Pressurized drinking water to the aircraft galley sinks"
    ],
    a: 0,
    e: "A Ground Power Unit (GPU) provides standard aviation 400 Hz 115V AC electricity to power aircraft electrical buses on the ground without burning jet fuel."
  },
  {
    c: "Airside GSE & Turnaround",
    source: "Basics of Aviation",
    q: "What is an Air Start Unit (ASU) used for on the ramp?",
    o: [
      "Supplies high-pressure compressed air to crank and start the jet engines if the onboard APU is inoperative",
      "Pumps fresh filtered air into passenger pillows inside the cabin",
      "Inflates aircraft tires to proper pressure before takeoff",
      "Blows snow off the runway surface before an airplane lands"
    ],
    a: 0,
    e: "An ASU (Air Start Unit / 'air cart') provides high-pressure pneumatic airflow to spin the jet engine starter turbine when the APU bleed air is unavailable."
  },
  {
    c: "Airside GSE & Turnaround",
    source: "Basics of Aviation",
    q: "Why is a steering bypass pin inserted into the nose landing gear before an aircraft pushback?",
    o: [
      "To disconnect the nosewheel steering hydraulics so the pushback tractor can turn the nose gear without damaging aircraft systems",
      "To lock the nose wheels straight so the aircraft cannot turn during pushback",
      "To ground electrical static electricity into the concrete apron",
      "To signal to the control tower that all passenger doors are armed"
    ],
    a: 0,
    e: "The steering bypass pin bypasses aircraft hydraulic pressure to the nose gear steering actuators, allowing the tow tractor to steer freely without mechanical resistance."
  },
  {
    c: "Airside GSE & Turnaround",
    source: "Basics of Aviation",
    q: "What does a ramp marshaller crossing their illuminated wands overhead in an 'X' pattern signal to the pilot?",
    o: [
      "Emergency Stop immediately",
      "All clear, proceed straight ahead",
      "Turn sharp left into the gate",
      "Cut all engine throttles to idle"
    ],
    a: 0,
    e: "Standard ICAO aircraft marshalling signal: Crossing wands or arms overhead in an 'X' is the universal signal for 'EMERGENCY STOP'."
  },
  {
    c: "Airside GSE & Turnaround",
    source: "Basics of Aviation",
    q: "What is a Unit Load Device (ULD) in air cargo and baggage handling?",
    o: [
      "A standardized container or pallet used to consolidate cargo, baggage, and mail into wide-body aircraft cargo holds",
      "A computer scanner used by customs officers to verify passports",
      "A mechanical lift used by disabled passengers to enter small turboprops",
      "An electronic baggage scale built into the terminal check-in conveyor"
    ],
    a: 0,
    e: "A Unit Load Device (ULD, e.g., AKE, LD3, PMC) is a standardized pallet or container that locks directly into the aircraft lower and main deck cargo restraint systems."
  },
  {
    c: "Airside GSE & Turnaround",
    source: "Basics of Aviation",
    q: "What is the difference between De-icing fluid and Anti-icing fluid applied to aircraft wings in winter?",
    o: [
      "De-icing fluid (Type I) removes existing snow, ice, or frost; Anti-icing fluid (Type IV) prevents new ice from accumulating before takeoff (holdover time)",
      "De-icing fluid is heated water only; Anti-icing fluid is pressurized oil",
      "De-icing fluid is sprayed inside the cabin; Anti-icing fluid is sprayed on the engines",
      "De-icing fluid is used only on helicopters; Anti-icing fluid is used only on wide-body jets"
    ],
    a: 0,
    e: "De-icing (usually heated Type I glycol/water) removes frozen contamination; Anti-icing (viscous Type IV) adheres to wings to prevent ice buildup until takeoff rotation."
  },
  {
    c: "Airside GSE & Turnaround",
    source: "Basics of Aviation",
    q: "What is Maximum Takeoff Weight (MTOW)?",
    o: [
      "The maximum certified gross weight at which an aircraft is legally permitted to begin its takeoff run",
      "The weight of an aircraft when all fuel tanks are completely empty",
      "The total weight of passengers and their baggage excluding the airplane",
      "The maximum weight allowed to be stored in the overhead luggage lockers"
    ],
    a: 0,
    e: "MTOW (Maximum Takeoff Weight) is the structural maximum gross weight authorized for flight at the start of the takeoff run."
  }
];

console.log('Total questions defined:', questions.length);

// Verify data integrity
const ids = new Set();
let errorCount = 0;
questions.forEach((q, i) => {
  if (!q.q || !q.o || q.o.length !== 4 || q.a === undefined || !q.e) {
    console.error(`Invalid structure at index ${i}:`, q);
    errorCount++;
  }
  if (q.a < 0 || q.a > 3) {
    console.error(`Invalid correct index at index ${i}:`, q.a);
    errorCount++;
  }
  const setOpts = new Set(q.o);
  if (setOpts.size !== 4) {
    console.error(`Duplicate options at index ${i}:`, q.o);
    errorCount++;
  }
});

console.log('Validation completed with errors:', errorCount);
fs.writeFileSync('validated_questions.json', JSON.stringify(questions, null, 2));

