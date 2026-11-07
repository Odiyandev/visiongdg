const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('final_questions.json', 'utf8'));

const extraBasics = [
  {
    c: 'Aviation Basics & Principles',
    source: 'Basics of Aviation',
    q: "What does an aircraft's Mach number measure?",
    o: [
      "The ratio of the aircraft's true airspeed to the local speed of sound",
      "The engine thrust output measured in thousands of pounds",
      "The rate of climb measured in feet per minute",
      "The angle of the wings relative to the runway surface"
    ],
    a: 0,
    e: "Mach number (named after Ernst Mach) is the ratio of aircraft speed to the speed of sound in the surrounding air (Mach 1.0 = speed of sound)."
  },
  {
    c: 'Aviation Basics & Principles',
    source: 'Basics of Aviation',
    q: "What is the aerodynamic purpose of winglets installed at the tips of aircraft wings?",
    o: [
      "Reduce induced drag by weakening wingtip vortices, improving fuel efficiency",
      "Act as emergency fuel dump nozzles during overweight landings",
      "Provide additional radar reflectivity for air traffic control tracking",
      "Store auxiliary oxygen bottles for passenger cabin use"
    ],
    a: 0,
    e: "Winglets reduce induced drag by minimizing the high-pressure air curling over the wingtips into wingtip vortices, saving 3-5% fuel."
  },
  {
    c: 'Aviation Basics & Principles',
    source: 'Basics of Aviation',
    q: "What aerodynamic phenomenon is known as 'Ground Effect'?",
    o: [
      "Increased lift and reduced induced drag when an aircraft flies within approximately one wingspan of the runway surface",
      "Turbulence created by jet engines striking the tarmac during taxi",
      "The suction effect that pulls aircraft tires toward runway water puddles",
      "The sudden loss of engine thrust when rolling over airport arrestor beds"
    ],
    a: 0,
    e: "Ground effect occurs when an aircraft flies close to the surface (within one wingspan), reducing 3D airflow and wingtip vortices, resulting in higher lift and lower drag."
  },
  {
    c: 'Aviation Basics & Principles',
    source: 'Basics of Aviation',
    q: "What is 'Ground Speed' (GS) in aircraft navigation?",
    o: [
      "The actual horizontal speed of the aircraft relative to the ground surface (True Airspeed corrected for wind)",
      "The maximum taxi speed allowed on airport taxiways",
      "The speed of the aircraft wheels when touching the runway",
      "The speed of air flowing through the jet engine bypass ducts"
    ],
    a: 0,
    e: "Ground Speed is the aircraft's true speed across the earth's surface; a tailwind increases ground speed, while a headwind decreases it."
  },
  {
    c: 'Aircraft Systems & Control Surfaces',
    source: 'Basics of Aviation',
    q: "What do the pitot tube and static ports measure on an aircraft?",
    o: [
      "Pitot tube measures dynamic (ram) air pressure; Static ports measure ambient atmospheric pressure",
      "Pitot tube measures cabin oxygen; Static ports measure fuel tank levels",
      "Pitot tube measures hydraulic fluid; Static ports measure engine oil temperature",
      "Pitot tube measures passenger cabin pressure; Static ports measure wing de-icing heat"
    ],
    a: 0,
    e: "The pitot-static system uses the pitot tube (ram air) and static ports (ambient pressure) to operate the Airspeed Indicator, Altimeter, and Vertical Speed Indicator."
  },
  {
    c: 'Aircraft Systems & Control Surfaces',
    source: 'Basics of Aviation',
    q: "What is the purpose of an aircraft's flashing red beacon light?",
    o: [
      "Warns ground personnel that the engines are running or about to be started, or that the aircraft is in motion",
      "Signals that the aircraft is carrying VIP passengers or heads of state",
      "Indicates that the aircraft requires emergency medical services on the runway",
      "Marks the location of the passenger emergency exit doors"
    ],
    a: 0,
    e: "The red anti-collision beacon is switched on immediately before engine start to warn all personnel on the ramp to stay clear of running engines and moving aircraft."
  },
  {
    c: 'Aircraft Systems & Control Surfaces',
    source: 'Basics of Aviation',
    q: "What is a Fly-By-Wire (FBW) flight control system?",
    o: [
      "A system that converts pilot control inputs into electronic signals processed by flight computers that move hydraulic actuators",
      "A mechanical system using physical steel cables and pulleys exclusively to move control surfaces",
      "An emergency wireless radio connecting the cockpit to the ground maintenance hangar",
      "A passenger entertainment system streaming video directly to seatback monitors"
    ],
    a: 0,
    e: "Fly-by-wire replaces mechanical cables with an electronic interface: computers interpret pilot inputs and move flight control surfaces automatically within safe flight envelopes."
  },
  {
    c: 'Aircraft Systems & Control Surfaces',
    source: 'Basics of Aviation',
    q: "What is the function of spoilers (speedbrakes) on an aircraft wing?",
    o: [
      "Disrupt (spoil) lift and increase drag to slow down the aircraft in flight and dump lift upon touchdown for maximum wheel braking",
      "Increase wing camber to generate extra lift at slow speeds during takeoff",
      "Deflect crosswinds away from the vertical stabilizer during landing flare",
      "Direct warm bleed air over the wing leading edge to prevent ice formation"
    ],
    a: 0,
    e: "Spoilers spoil lift: deployed in flight to descend without gaining speed, and extended fully on touchdown to dump lift and transfer aircraft weight to the wheels for powerful braking."
  },
  {
    c: 'Runways, Taxiways & Airfield',
    source: 'Basics of Aviation',
    q: "What is an ILS (Instrument Landing System)?",
    o: [
      "A ground-based precision approach system providing horizontal guidance (localizer) and vertical guidance (glide slope) to landing aircraft",
      "An automated baggage barcode sorting system installed beneath airport terminal floors",
      "A computer algorithm used by airline revenue managers to adjust ticket prices",
      "A radar device inside the cockpit measuring the distance to clouds ahead"
    ],
    a: 0,
    e: "ILS provides precision radio guidance: the Localizer provides runway centerline alignment and the Glide Slope provides vertical 3-degree descent guidance."
  },
  {
    c: 'Runways, Taxiways & Airfield',
    source: 'Basics of Aviation',
    q: "What does a 'Displaced Threshold' on a runway mean?",
    o: [
      "A runway portion usable for takeoff and landing rollout, but not allowed for initial touchdown when landing",
      "A runway that has been permanently closed and marked with large yellow X symbols",
      "A runway reserved exclusively for military supersonic fighter aircraft",
      "An unpaved grass strip located between two parallel concrete runways"
    ],
    a: 0,
    e: "A displaced threshold is marked with white arrows pointing to the threshold line; it is available for takeoff roll and landing rollout from the opposite direction, but not for landing touchdown."
  },
  {
    c: 'Runways, Taxiways & Airfield',
    source: 'Basics of Aviation',
    q: "What does a large yellow 'X' marked at both ends of a runway signify?",
    o: [
      "The runway is closed and unsafe for all aircraft operations",
      "The runway is reserved exclusively for helicopter vertical landings",
      "The runway is equipped with an automated precision arrestor cable",
      "The runway has an elevation higher than 5,000 feet above sea level"
    ],
    a: 0,
    e: "Large yellow Xs placed on runway ends or along its surface indicate that the runway is closed to all aircraft operations."
  },
  {
    c: 'Air Traffic Control & Emergencies',
    source: 'Basics of Aviation',
    q: "What is a 'Go-Around' (Missed Approach)?",
    o: [
      "An aborted landing procedure where the pilot increases thrust, climbs away from the runway, and sets up for another approach",
      "A procedure where an aircraft taxis around the terminal building twice before parking",
      "A circular flight path flown while waiting for an available boarding gate",
      "A maneuver where an aircraft turns 180 degrees on the runway after landing"
    ],
    a: 0,
    e: "A go-around is a standard safety procedure executed when a landing approach cannot be safely completed (e.g., runway obstruction, unstable approach, wind shear)."
  },
  {
    c: 'Air Traffic Control & Emergencies',
    source: 'Basics of Aviation',
    q: "What does the abbreviation 'ETOPS' mean in commercial aviation?",
    o: [
      "Extended-range Twin-engine Operational Performance Standards",
      "Emergency Terminal Operations and Passenger Safety",
      "Electronic Takeoff Power Setting",
      "En-route Traffic Optimization and Positioning System"
    ],
    a: 0,
    e: "ETOPS allows twin-engine commercial airliners (like the B777, B787, A350) to fly long-distance routes that are hours away from the nearest suitable diversion airport."
  },
  {
    c: 'Air Traffic Control & Emergencies',
    source: 'Basics of Aviation',
    q: "What is 'Wake Turbulence', and when is it most intense?",
    o: [
      "Vortices trailing behind aircraft generating lift; most intense behind heavy, clean (gear/flaps up), and slow aircraft",
      "Exhaust gas turbulence created only when jet engines operate in reverse thrust mode",
      "Choppy airflow caused by passengers walking inside the aircraft cabin during turbulence",
      "Shockwaves created when supersonic fighter jets fly below 1,000 feet altitude"
    ],
    a: 0,
    e: "Wake turbulence is caused by wingtip vortices created whenever a wing generates lift; it is strongest when the generating aircraft is Heavy, Clean, and Slow."
  },
  {
    c: 'Aviation Atmosphere & Weather',
    source: 'Basics of Aviation',
    q: "What is 'Wind Shear', and why is it especially hazardous during takeoff and landing?",
    o: [
      "A sudden, drastic change in wind speed and/or direction over a short distance, which can cause an abrupt loss of airspeed and lift",
      "A steady headwind that gently slows an aircraft down on final approach",
      "The cooling of aircraft fuel inside the wing tanks due to high-altitude subzero temperatures",
      "The sound produced by wind whistling over the cockpit windshield"
    ],
    a: 0,
    e: "Wind shear is a rapid change in wind velocity/direction. Low-level wind shear and microbursts can cause catastrophic loss of airspeed and lift near the ground."
  },
  {
    c: 'Aviation Atmosphere & Weather',
    source: 'Basics of Aviation',
    q: "What physiological condition occurs when the human body is deprived of adequate oxygen at high altitudes?",
    o: [
      "Hypoxia",
      "Hyperthermia",
      "Hydroplaning",
      "Hypertension"
    ],
    a: 0,
    e: "Hypoxia is the dangerous deficiency of oxygen in body tissues at high altitudes, impairing judgment, motor skills, and consciousness unless supplemental oxygen is provided."
  },
  {
    c: 'Ramp Operations & GSE',
    source: 'Basics of Aviation',
    q: "What is the danger zone known as the 'Engine Ingestion Hazard Zone'?",
    o: [
      "The area in front of and around a running jet engine where suction is powerful enough to suck personnel or equipment into the engine intake",
      "The area behind the aircraft tail where baggage carts are parked",
      "The space directly underneath the passenger cabin floor",
      "The fuel delivery port located under the outer wingtip"
    ],
    a: 0,
    e: "Running jet engines create massive suction in front of the inlet (ingestion zone) and extreme high-velocity hot blast behind the exhaust (jet blast zone)."
  },
  {
    c: 'Ramp Operations & GSE',
    source: 'Basics of Aviation',
    q: "What is the function of an aircraft potable water servicing truck on the ramp?",
    o: [
      "Replenishes safe, sanitized drinking water used for passenger handwashing, coffee/tea makers, and galley sinks",
      "Flushes and empties the chemical waste holding tanks from aircraft lavatories",
      "Sprays glycol fluid over aircraft wings to melt frozen morning frost",
      "Pumps coolant directly into the aircraft air conditioning heat exchangers"
    ],
    a: 0,
    e: "Potable water service trucks fill the aircraft's onboard clean drinking water tanks under strict hygiene protocols, completely separated from lavatory waste service."
  }
];

extraBasics.forEach(item => {
  questions.push({
    id: questions.length + 1,
    c: item.c,
    source: item.source,
    q: item.q,
    o: item.o,
    a: item.a,
    e: item.e
  });
});

console.log('Updated total questions count:', questions.length);
fs.writeFileSync('final_questions.json', JSON.stringify(questions, null, 2));

