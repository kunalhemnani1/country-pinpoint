import type { Puzzle } from './api';

export const puzzles: Puzzle[] = [
  {
    id: 1,
    country: 'Japan',
    clues: [
      { category: 'Tradition', text: 'This country practices "forest bathing" (Shinrin-yoku) as a form of therapy' },
      { category: 'History', text: 'It had a period of isolation called Sakoku lasting over 200 years' },
      { category: 'Culture', text: 'Home to the world\'s oldest company, founded in 578 AD' },
      { category: 'Geography', text: 'An archipelago of nearly 7,000 islands in the Pacific Ocean' },
      { category: 'Landmark', text: 'Famous for Mount Fuji and cherry blossom season' },
    ],
  },
  {
    id: 2,
    country: 'Brazil',
    clues: [
      { category: 'Nature', text: 'Contains the meeting of black and white waters at Encontro das Águas' },
      { category: 'History', text: 'Its capital was moved from Rio de Janeiro to a brand-new planned city in 1960' },
      { category: 'Culture', text: 'Home to the largest Japanese diaspora outside of Japan' },
      { category: 'Geography', text: 'The largest country in South America, spanning 3 time zones' },
      { category: 'Landmark', text: 'Famous for Christ the Redeemer statue and Carnival festival' },
    ],
  },
  {
    id: 3,
    country: 'Egypt',
    clues: [
      { category: 'Science', text: 'Ancient doctors here performed the first known surgical procedures, documented on papyrus' },
      { category: 'History', text: 'The Rosetta Stone, key to deciphering hieroglyphics, was found here in 1799' },
      { category: 'Culture', text: 'Home to Al-Azhar University, one of the oldest universities in the world (970 AD)' },
      { category: 'Geography', text: 'A transcontinental country connecting northeast Africa to the Middle East via the Sinai' },
      { category: 'Landmark', text: 'Famous for the Great Pyramids of Giza and the Sphinx' },
    ],
  },
  {
    id: 4,
    country: 'Iceland',
    clues: [
      { category: 'Governance', text: 'Established the Althing in 930 AD, one of the world\'s oldest parliaments' },
      { category: 'Nature', text: 'Has no mosquitoes despite being surrounded by ocean' },
      { category: 'Culture', text: 'Most of the population believes in or doesn\'t deny the existence of elves' },
      { category: 'Geography', text: 'Sits on the Mid-Atlantic Ridge where two tectonic plates are pulling apart' },
      { category: 'Landmark', text: 'Known for geysers, the Northern Lights, and the Blue Lagoon' },
    ],
  },
  {
    id: 5,
    country: 'India',
    clues: [
      { category: 'Science', text: 'The concept of zero as a number was first formalized by mathematicians here' },
      { category: 'Nature', text: 'Home to the wettest inhabited place on Earth — Mawsynram in Meghalaya' },
      { category: 'Culture', text: 'The country\'s railway system carries over 23 million passengers daily' },
      { category: 'Geography', text: 'The seventh-largest country by area, bordered by the Himalayas to the north' },
      { category: 'Landmark', text: 'Famous for the Taj Mahal, built by Emperor Shah Jahan' },
    ],
  },
  {
    id: 6,
    country: 'Australia',
    clues: [
      { category: 'Nature', text: 'Home to quokkas — small marsupials known for their seemingly smiling faces' },
      { category: 'History', text: 'Indigenous Australians have the oldest continuous civilization, spanning 65,000+ years' },
      { category: 'Culture', text: 'Vegemite, a dark spread made from yeast extract, is a national food icon' },
      { category: 'Geography', text: 'Both a country and a continent, surrounded by the Indian and Pacific Oceans' },
      { category: 'Landmark', text: 'Famous for the Sydney Opera House and the Great Barrier Reef' },
    ],
  },
  {
    id: 7,
    country: 'Peru',
    clues: [
      { category: 'Science', text: 'The Nazca Lines — geoglyphs visible only from the air — were created here 2,000 years ago' },
      { category: 'History', text: 'Center of the Inca Empire, the largest empire in pre-Columbian America' },
      { category: 'Food', text: 'Home to over 3,000 varieties of potatoes, the crop\'s place of origin' },
      { category: 'Geography', text: 'Located on the western coast of South America, with Andes mountains running through it' },
      { category: 'Landmark', text: 'Famous for the ancient citadel of Machu Picchu' },
    ],
  },
  {
    id: 8,
    country: 'Norway',
    clues: [
      { category: 'Tradition', text: 'Has a tradition of reading crime novels (Påskekrim) during Easter' },
      { category: 'History', text: 'Vikings from here were the first Europeans to reach North America around 1000 AD' },
      { category: 'Economy', text: 'Manages the world\'s largest sovereign wealth fund, worth over $1.5 trillion' },
      { category: 'Geography', text: 'A Scandinavian country with a coastline carved by thousands of fjords' },
      { category: 'Nature', text: 'Known for the midnight sun and dramatic Northern Lights' },
    ],
  },
  {
    id: 9,
    country: 'Mexico',
    clues: [
      { category: 'Science', text: 'The Chicxulub crater here is linked to the asteroid that caused dinosaur extinction' },
      { category: 'History', text: 'Home to the ancient Aztec capital of Tenochtitlan, built on a lake' },
      { category: 'Culture', text: 'Celebrates Día de los Muertos, honoring deceased loved ones with ofrendas and marigolds' },
      { category: 'Geography', text: 'Bordered by the US to the north and Guatemala and Belize to the south' },
      { category: 'Food', text: 'Birthplace of chocolate, tacos, and tequila' },
    ],
  },
  {
    id: 10,
    country: 'New Zealand',
    clues: [
      { category: 'Nature', text: 'Home to the tuatara — a "living fossil" reptile with a third eye on top of its head' },
      { category: 'History', text: 'In 1893, became the first self-governing country to grant women the right to vote' },
      { category: 'Culture', text: 'The Māori haka is performed as a ceremonial war dance and cultural expression' },
      { category: 'Geography', text: 'An island country in the southwestern Pacific, made of two main islands' },
      { category: 'Landmark', text: 'Filming location for The Lord of the Rings trilogy' },
    ],
  },
  {
    id: 11,
    country: 'South Korea',
    clues: [
      { category: 'Technology', text: 'Has the fastest average internet speed in the world' },
      { category: 'History', text: 'The Korean War armistice in 1953 created the most fortified border on Earth' },
      { category: 'Culture', text: 'The global wave of K-pop and K-dramas originated here' },
      { category: 'Food', text: 'Kimchi, fermented vegetables, is served at nearly every meal' },
      { category: 'Geography', text: 'Occupies the southern half of the Korean Peninsula in East Asia' },
    ],
  },
  {
    id: 12,
    country: 'Morocco',
    clues: [
      { category: 'History', text: 'The University of al-Qarawiyyin here, founded 859 AD, is the oldest existing university' },
      { category: 'Nature', text: 'Has both Saharan desert and snow-capped Atlas Mountains within its borders' },
      { category: 'Culture', text: 'Fez is famous for its ancient leather tanneries using centuries-old techniques' },
      { category: 'Geography', text: 'Located in northwest Africa, just 14 km from Spain across the Strait of Gibraltar' },
      { category: 'Landmark', text: 'Known for its colorful medinas, particularly the blue city of Chefchaouen' },
    ],
  },
  {
    id: 13,
    country: 'Greece',
    clues: [
      { category: 'Science', text: 'Archimedes discovered the principle of buoyancy while bathing here' },
      { category: 'History', text: 'Birthplace of democracy, philosophy, and the Olympic Games' },
      { category: 'Culture', text: 'Has more archaeological museums than any other country in the world' },
      { category: 'Geography', text: 'A Mediterranean country with over 6,000 islands, only 227 inhabited' },
      { category: 'Landmark', text: 'Famous for the Parthenon atop the Acropolis in Athens' },
    ],
  },
  {
    id: 14,
    country: 'Canada',
    clues: [
      { category: 'Nature', text: 'Contains 20% of the world\'s freshwater and more lakes than all other countries combined' },
      { category: 'History', text: 'The Hudson\'s Bay Company, founded 1670, once controlled most of North America\'s fur trade' },
      { category: 'Culture', text: 'Invented basketball, poutine, and the Canadarm used in space' },
      { category: 'Geography', text: 'The second-largest country by area with the longest coastline in the world' },
      { category: 'Landmark', text: 'Famous for Niagara Falls and the CN Tower in Toronto' },
    ],
  },
  {
    id: 15,
    country: 'Turkey',
    clues: [
      { category: 'History', text: 'The ancient city of Troy from Homer\'s Iliad was located within its modern borders' },
      { category: 'Nature', text: 'Pamukkale\'s white travertine terraces of mineral-rich thermal waters are found here' },
      { category: 'Culture', text: 'Turkish coffee fortune telling (tasseography) is a centuries-old tradition' },
      { category: 'Geography', text: 'Straddles two continents, with Istanbul divided by the Bosphorus Strait' },
      { category: 'Landmark', text: 'Home to Hagia Sophia and the Cappadocia hot air balloon landscape' },
    ],
  },
  {
    id: 16,
    country: 'Kenya',
    clues: [
      { category: 'Science', text: 'Some of the oldest known human fossils were discovered near Lake Turkana here' },
      { category: 'Nature', text: 'The Great Wildebeest Migration passes through its Maasai Mara reserve annually' },
      { category: 'Culture', text: 'Dominates world long-distance running — its athletes hold most marathon records' },
      { category: 'Geography', text: 'Located in East Africa, crossed by the equator, with the Great Rift Valley' },
      { category: 'Landmark', text: 'Known for Mount Kilimanjaro views and safari wildlife' },
    ],
  },
  {
    id: 17,
    country: 'Italy',
    clues: [
      { category: 'Science', text: 'Galileo built his telescope here and proved the Earth revolves around the Sun' },
      { category: 'History', text: 'The Roman Empire, centered here, once controlled most of Europe and the Mediterranean' },
      { category: 'Culture', text: 'Contains two independent nations within its borders: Vatican City and San Marino' },
      { category: 'Geography', text: 'A boot-shaped peninsula in southern Europe surrounded by the Mediterranean Sea' },
      { category: 'Food', text: 'Birthplace of pizza, pasta, and espresso' },
    ],
  },
  {
    id: 18,
    country: 'Thailand',
    clues: [
      { category: 'History', text: 'The only Southeast Asian country never colonized by a European power' },
      { category: 'Culture', text: 'The head is considered sacred and feet offensive — touching someone\'s head is taboo' },
      { category: 'Nature', text: 'Home to the world\'s smallest mammal, the bumblebee bat' },
      { category: 'Food', text: 'Famous for Pad Thai, Tom Yum soup, and street food culture' },
      { category: 'Landmark', text: 'Known for ornate Buddhist temples, tropical beaches, and Bangkok\'s Grand Palace' },
    ],
  },
  {
    id: 19,
    country: 'Argentina',
    clues: [
      { category: 'Nature', text: 'Contains Perito Moreno, one of the few glaciers in the world that is still growing' },
      { category: 'History', text: 'Eva Perón (Evita) became one of the most powerful women in the world from here' },
      { category: 'Culture', text: 'Birthplace of tango, which originated in the working-class neighborhoods of Buenos Aires' },
      { category: 'Geography', text: 'Stretches from subtropical north to sub-Antarctic south in South America' },
      { category: 'Sports', text: 'Home of Lionel Messi and Diego Maradona — legends of world football' },
    ],
  },
  {
    id: 20,
    country: 'Switzerland',
    clues: [
      { category: 'Governance', text: 'Has a system of direct democracy where citizens vote on individual laws multiple times a year' },
      { category: 'History', text: 'Maintained armed neutrality through both World Wars' },
      { category: 'Economy', text: 'Geneva hosts the headquarters of the Red Cross, WHO, and CERN' },
      { category: 'Geography', text: 'A landlocked Alpine country in central Europe with four official languages' },
      { category: 'Food', text: 'World-famous for chocolate, cheese, and luxury watches' },
    ],
  },
  {
    id: 21,
    country: 'Colombia',
    clues: [
      { category: 'Nature', text: 'Caño Cristales, the "River of Five Colors," blooms in vibrant hues here' },
      { category: 'History', text: 'Named after Christopher Columbus, though he never actually set foot in the country' },
      { category: 'Culture', text: 'The emerald capital of the world, producing more than half the global supply' },
      { category: 'Geography', text: 'The only South American country with coasts on both the Pacific and Caribbean' },
      { category: 'Food', text: 'Famous for its premium coffee grown in the Andes mountains' },
    ],
  },
  {
    id: 22,
    country: 'Finland',
    clues: [
      { category: 'Culture', text: 'Has more saunas than cars — roughly 3.3 million saunas for 5.5 million people' },
      { category: 'History', text: 'Gained independence from Russia in 1917 and fought the Winter War in 1939' },
      { category: 'Education', text: 'Consistently ranks #1 in global education with no standardized tests until age 16' },
      { category: 'Geography', text: 'Known as the "Land of a Thousand Lakes" (actually 188,000) in Northern Europe' },
      { category: 'Culture', text: 'The official home of Santa Claus is in Rovaniemi in Lapland' },
    ],
  },
  {
    id: 23,
    country: 'Vietnam',
    clues: [
      { category: 'Nature', text: 'Son Doong Cave here is the largest cave passage in the world, with its own weather system' },
      { category: 'History', text: 'The Cu Chi Tunnels — a 250 km underground network — were used during wartime' },
      { category: 'Culture', text: 'Water puppetry, an art form performed on a water stage, originated here 1,000 years ago' },
      { category: 'Food', text: 'Phở, a fragrant noodle soup, is the national dish enjoyed at all hours' },
      { category: 'Landmark', text: 'Known for Ha Long Bay with its thousands of limestone karsts rising from emerald waters' },
    ],
  },
  {
    id: 24,
    country: 'Portugal',
    clues: [
      { category: 'History', text: 'Vasco da Gama sailed from here to discover the sea route to India in 1498' },
      { category: 'Nature', text: 'The Azores islands, in the middle of the Atlantic, belong to this European country' },
      { category: 'Culture', text: 'Fado music, a melancholic genre of folk song, is UNESCO Intangible Cultural Heritage' },
      { category: 'Geography', text: 'The westernmost country in mainland Europe, on the Iberian Peninsula' },
      { category: 'Food', text: 'Famous for pastéis de nata (custard tarts) and port wine' },
    ],
  },
  {
    id: 25,
    country: 'Ethiopia',
    clues: [
      { category: 'Science', text: '"Lucy," the 3.2-million-year-old hominid fossil, was discovered here in 1974' },
      { category: 'History', text: 'Never colonized by a European power, one of only two African nations to remain independent' },
      { category: 'Culture', text: 'Uses a unique calendar that is 7-8 years behind the Gregorian calendar' },
      { category: 'Geography', text: 'A landlocked East African country on the Horn of Africa, home to the Blue Nile source' },
      { category: 'Food', text: 'Birthplace of coffee — legend says a goat herder named Kaldi discovered it' },
    ],
  },
  {
    id: 26,
    country: 'Chile',
    clues: [
      { category: 'Nature', text: 'The Atacama Desert here is the driest non-polar place on Earth — some spots have never recorded rain' },
      { category: 'History', text: 'Easter Island (Rapa Nui) with its mysterious moai statues belongs to this country' },
      { category: 'Science', text: 'Home to the world\'s most powerful telescopes due to clear Atacama skies' },
      { category: 'Geography', text: 'The longest north-to-south country in the world at 4,300 km, but averages only 177 km wide' },
      { category: 'Nature', text: 'Stretches from the driest desert to Patagonian glaciers along the Pacific coast of South America' },
    ],
  },
  {
    id: 27,
    country: 'Ireland',
    clues: [
      { category: 'Nature', text: 'The Giant\'s Causeway features 40,000 interlocking basalt columns from ancient volcanic activity' },
      { category: 'History', text: 'The Great Famine of the 1840s caused its population to drop by 25%' },
      { category: 'Culture', text: 'Halloween originated from the ancient Celtic festival of Samhain celebrated here' },
      { category: 'Geography', text: 'An island nation in the North Atlantic, west of Great Britain' },
      { category: 'Culture', text: 'Known as the Emerald Isle, famous for St. Patrick\'s Day and Guinness' },
    ],
  },
  {
    id: 28,
    country: 'Mongolia',
    clues: [
      { category: 'Nature', text: 'Home to the Przewalski\'s horse, the only truly wild horse species left on Earth' },
      { category: 'History', text: 'Genghis Khan built the largest contiguous land empire in history from here' },
      { category: 'Culture', text: 'Nomadic herders still live in gers (yurts) and practice eagle hunting' },
      { category: 'Geography', text: 'A landlocked country between Russia and China with vast steppes and the Gobi Desert' },
      { category: 'Stat', text: 'The most sparsely populated country in the world with only 2 people per square km' },
    ],
  },
  {
    id: 29,
    country: 'Cuba',
    clues: [
      { category: 'Science', text: 'Developed its own lung cancer vaccine, CimaVax, despite limited resources' },
      { category: 'History', text: 'Site of the 1962 Missile Crisis that nearly triggered nuclear war' },
      { category: 'Culture', text: 'Classic 1950s American cars still roam the streets as everyday transportation' },
      { category: 'Geography', text: 'The largest island in the Caribbean, located 90 miles south of Florida' },
      { category: 'Landmark', text: 'Known for colorful Havana, cigars, salsa music, and rum' },
    ],
  },
  {
    id: 30,
    country: 'Nepal',
    clues: [
      { category: 'Nature', text: 'The only country whose flag is not rectangular — it\'s made of two stacked triangles' },
      { category: 'History', text: 'The birthplace of Siddhartha Gautama (Buddha) in Lumbini around 563 BC' },
      { category: 'Culture', text: 'Home to the Gurkhas, legendary soldiers known for their bravery and kukri knives' },
      { category: 'Geography', text: 'A landlocked country between India and China, home to 8 of the world\'s 14 highest peaks' },
      { category: 'Landmark', text: 'Home to Mount Everest, the tallest mountain on Earth at 8,849 meters' },
    ],
  },
  {
    id: 31,
    country: 'France',
    clues: [
      { category: 'Science', text: 'Marie Curie conducted her Nobel Prize-winning research on radioactivity here' },
      { category: 'History', text: 'The French Revolution of 1789 inspired modern concepts of human rights worldwide' },
      { category: 'Culture', text: 'The most visited country in the world, receiving over 90 million tourists annually' },
      { category: 'Geography', text: 'The largest country in the European Union, known as "L\'Hexagone" for its shape' },
      { category: 'Landmark', text: 'Famous for the Eiffel Tower, the Louvre, and croissants' },
    ],
  },
  {
    id: 32,
    country: 'Madagascar',
    clues: [
      { category: 'Nature', text: '90% of its wildlife is found nowhere else on Earth, including lemurs and baobab trees' },
      { category: 'History', text: 'Settled by Austronesian peoples from Borneo over 2,000 years ago, not mainland Africa' },
      { category: 'Culture', text: 'Famadihana — "turning of the bones" — is a ceremony where ancestors\' remains are rewrapped and danced with' },
      { category: 'Geography', text: 'The fourth-largest island in the world, located off the southeast coast of Africa' },
      { category: 'Nature', text: 'Home to the Avenue of the Baobabs, with 800-year-old trees lining a dirt road' },
    ],
  },
  {
    id: 33,
    country: 'Germany',
    clues: [
      { category: 'Science', text: 'Einstein, Planck, and Heisenberg all developed their revolutionary theories here' },
      { category: 'History', text: 'The Berlin Wall divided this country\'s capital for 28 years until 1989' },
      { category: 'Culture', text: 'Oktoberfest in Munich is the world\'s largest folk festival, attracting 6 million visitors' },
      { category: 'Geography', text: 'The most populous country in the European Union, located in central Europe' },
      { category: 'Landmark', text: 'Known for the Brandenburg Gate, fairy-tale castles, and the Autobahn' },
    ],
  },
  {
    id: 34,
    country: 'Jordan',
    clues: [
      { category: 'History', text: 'The ancient Nabataean city of Petra was lost to the Western world for centuries until 1812' },
      { category: 'Nature', text: 'The Dead Sea on its border is the lowest point on Earth\'s surface at -430m' },
      { category: 'Culture', text: 'Wadi Rum, the "Valley of the Moon," was used to film The Martian and Dune' },
      { category: 'Geography', text: 'A Middle Eastern kingdom bordered by Israel, Iraq, Saudi Arabia, and Syria' },
      { category: 'Landmark', text: 'Famous for the rose-red city of Petra, one of the New Seven Wonders of the World' },
    ],
  },
  {
    id: 35,
    country: 'Costa Rica',
    clues: [
      { category: 'Governance', text: 'Abolished its military in 1948 and redirected the budget to education and healthcare' },
      { category: 'Nature', text: 'Contains 5% of the world\'s biodiversity despite being only 0.03% of Earth\'s surface' },
      { category: 'Culture', text: '"Pura Vida" (pure life) is the national motto used as a greeting and way of life' },
      { category: 'Geography', text: 'A Central American country between Nicaragua and Panama with both Pacific and Caribbean coasts' },
      { category: 'Nature', text: 'Known for cloud forests, volcanoes, colorful toucans, and sea turtle nesting beaches' },
    ],
  },
  {
    id: 36,
    country: 'Spain',
    clues: [
      { category: 'History', text: 'The Alhambra palace in Granada is one of the finest examples of Moorish architecture' },
      { category: 'Culture', text: 'La Tomatina is an annual festival where participants throw 150,000 tomatoes at each other' },
      { category: 'Tradition', text: 'The tradition of an afternoon siesta originated here due to intense midday heat' },
      { category: 'Geography', text: 'Occupies most of the Iberian Peninsula, with the Canary Islands in the Atlantic' },
      { category: 'Food', text: 'Famous for tapas, paella, flamenco dancing, and La Sagrada Família' },
    ],
  },
  {
    id: 37,
    country: 'Russia',
    clues: [
      { category: 'Science', text: 'Launched Sputnik in 1957 and sent the first human, Yuri Gagarin, to space in 1961' },
      { category: 'Nature', text: 'Lake Baikal here contains 20% of the world\'s unfrozen fresh surface water' },
      { category: 'Culture', text: 'The Trans-Siberian Railway spans 9,289 km — the longest railway line in the world' },
      { category: 'Geography', text: 'The largest country in the world by area, spanning 11 time zones' },
      { category: 'Landmark', text: 'Known for the Kremlin, Red Square, and St. Basil\'s Cathedral in Moscow' },
    ],
  },
  {
    id: 38,
    country: 'Bhutan',
    clues: [
      { category: 'Governance', text: 'Measures success by Gross National Happiness instead of GDP' },
      { category: 'Nature', text: 'The only carbon-negative country in the world — its forests absorb more CO₂ than it produces' },
      { category: 'Culture', text: 'Television and internet were not allowed until 1999' },
      { category: 'Geography', text: 'A small Himalayan kingdom between India and China' },
      { category: 'Landmark', text: 'Famous for the Tiger\'s Nest Monastery (Paro Taktsang) perched on a cliff' },
    ],
  },
  {
    id: 39,
    country: 'South Africa',
    clues: [
      { category: 'Nature', text: 'Has three capital cities: Pretoria (administrative), Bloemfontein (judicial), Cape Town (legislative)' },
      { category: 'History', text: 'Nelson Mandela was imprisoned here for 27 years before becoming its first Black president' },
      { category: 'Culture', text: 'Has 11 official languages, more than almost any other country' },
      { category: 'Geography', text: 'Located at the southern tip of Africa where the Atlantic and Indian Oceans meet' },
      { category: 'Landmark', text: 'Known for Table Mountain, Kruger National Park, and Cape of Good Hope' },
    ],
  },
  {
    id: 40,
    country: 'Poland',
    clues: [
      { category: 'History', text: 'The Wieliczka Salt Mine has an entire underground cathedral carved from salt since the 13th century' },
      { category: 'Science', text: 'Nicolaus Copernicus, who proposed the heliocentric model, was born here' },
      { category: 'Culture', text: 'Żubrówka — bison grass vodka — contains a blade of grass from the Białowieża Forest' },
      { category: 'Geography', text: 'A Central European country bordered by Germany, Czech Republic, Slovakia, and others' },
      { category: 'Landmark', text: 'Known for the historic city of Kraków and Auschwitz memorial' },
    ],
  },
  {
    id: 41,
    country: 'Nigeria',
    clues: [
      { category: 'Culture', text: 'Nollywood produces more films annually than Hollywood, making it the second-largest film industry' },
      { category: 'History', text: 'The Benin Bronzes, among Africa\'s greatest artworks, were created here centuries ago' },
      { category: 'Economy', text: 'The largest economy in Africa and the most populous African country with 220+ million people' },
      { category: 'Geography', text: 'Located in West Africa along the Gulf of Guinea, named after the Niger River' },
      { category: 'Culture', text: 'Home to Afrobeats music, with artists like Burna Boy and Wizkid gaining global fame' },
    ],
  },
  {
    id: 42,
    country: 'Sweden',
    clues: [
      { category: 'Culture', text: 'Fika — the tradition of a daily coffee break with pastries — is considered essential to life here' },
      { category: 'Science', text: 'Alfred Nobel, who invented dynamite and established the Nobel Prize, was born here' },
      { category: 'History', text: 'Was a major Viking power, with warriors reaching as far as Constantinople and Baghdad' },
      { category: 'Geography', text: 'The largest Scandinavian country, stretching from subarctic north to temperate south' },
      { category: 'Culture', text: 'Known for IKEA, ABBA, Spotify, and the Midsommar celebration' },
    ],
  },
  {
    id: 43,
    country: 'Romania',
    clues: [
      { category: 'Nature', text: 'The Danube Delta here is Europe\'s largest wetland and a UNESCO Biosphere Reserve' },
      { category: 'History', text: 'Vlad the Impaler, who inspired Bram Stoker\'s Dracula, ruled Wallachia within this country' },
      { category: 'Culture', text: 'The Merry Cemetery in Săpânța has colorful tombstones with humorous epitaphs about the dead' },
      { category: 'Geography', text: 'A southeastern European country with the Carpathian Mountains arcing through its center' },
      { category: 'Landmark', text: 'Known for Transylvania, Bran Castle ("Dracula\'s Castle"), and painted monasteries' },
    ],
  },
  {
    id: 44,
    country: 'Sri Lanka',
    clues: [
      { category: 'Nature', text: 'One of the world\'s top biodiversity hotspots with the highest density of leopards' },
      { category: 'History', text: 'Ancient hydraulic civilization built massive reservoirs (tanks) over 2,000 years ago' },
      { category: 'Culture', text: 'The world\'s oldest known human-planted tree (Sri Maha Bodhi) is found here, planted in 288 BC' },
      { category: 'Geography', text: 'A tear-drop shaped island off the southern tip of India in the Indian Ocean' },
      { category: 'Food', text: 'Known as the "Spice Island" — a major source of cinnamon, tea, and cardamom' },
    ],
  },
  {
    id: 45,
    country: 'Tanzania',
    clues: [
      { category: 'Nature', text: 'The Ngorongoro Crater is the world\'s largest intact volcanic caldera and teems with wildlife' },
      { category: 'History', text: 'Olduvai Gorge here yielded some of the earliest evidence of human ancestors' },
      { category: 'Culture', text: 'Swahili, the most widely spoken African language, has deep roots here' },
      { category: 'Geography', text: 'An East African country bordering Kenya, with Zanzibar islands off its coast' },
      { category: 'Landmark', text: 'Home to Mount Kilimanjaro, Africa\'s tallest peak, and the Serengeti' },
    ],
  },
  {
    id: 46,
    country: 'Netherlands',
    clues: [
      { category: 'History', text: 'The Dutch East India Company (VOC) was the world\'s first publicly traded company in 1602' },
      { category: 'Nature', text: 'About one-third of the country lies below sea level, protected by an elaborate dike system' },
      { category: 'Culture', text: 'Has more bicycles than people — cycling is the primary mode of transportation' },
      { category: 'Geography', text: 'A Western European country known as the Low Countries, bordering Belgium and Germany' },
      { category: 'Landmark', text: 'Famous for windmills, tulips, Amsterdam\'s canals, and Van Gogh' },
    ],
  },
  {
    id: 47,
    country: 'Philippines',
    clues: [
      { category: 'Nature', text: 'The Chocolate Hills — over 1,200 cone-shaped mounds — turn brown in dry season on one island' },
      { category: 'History', text: 'Ferdinand Magellan was killed here in 1521 during the Battle of Mactan' },
      { category: 'Culture', text: 'Celebrates the world\'s longest Christmas season, starting as early as September' },
      { category: 'Geography', text: 'An archipelago of over 7,600 islands in Southeast Asia between the Pacific and South China Sea' },
      { category: 'Landmark', text: 'Known for stunning beaches, jeepneys, and the rice terraces of Banaue' },
    ],
  },
  {
    id: 48,
    country: 'Czech Republic',
    clues: [
      { category: 'Culture', text: 'Has the highest beer consumption per capita in the world — about 140 liters per person per year' },
      { category: 'History', text: 'Prague\'s astronomical clock, installed in 1410, is the oldest still operating in the world' },
      { category: 'Science', text: 'The word "robot" was coined here by Karel Čapek in his 1920 play R.U.R.' },
      { category: 'Geography', text: 'A landlocked Central European country surrounded by Germany, Austria, Poland, and Slovakia' },
      { category: 'Landmark', text: 'Known for Prague Castle, Charles Bridge, and Bohemian crystal' },
    ],
  },
  {
    id: 49,
    country: 'Panama',
    clues: [
      { category: 'Nature', text: 'The only place in the world where you can see the sun rise over the Pacific and set over the Atlantic' },
      { category: 'History', text: 'The famous canal here, completed in 1914, connects the Atlantic and Pacific Oceans' },
      { category: 'Economy', text: 'Uses the US dollar alongside its own balboa and is a global banking hub' },
      { category: 'Geography', text: 'The narrowest point of Central America, connecting North and South America' },
      { category: 'Landmark', text: 'Known for the Panama Canal, a modern skyline, and biodiversity-rich rainforests' },
    ],
  },
  {
    id: 50,
    country: 'Scotland',
    clues: [
      { category: 'Science', text: 'Alexander Graham Bell, inventor of the telephone, and Alexander Fleming, discoverer of penicillin, were born here' },
      { category: 'Nature', text: 'The legend of the Loch Ness Monster has attracted visitors to its famous lake since 565 AD' },
      { category: 'Culture', text: 'Haggis, made from sheep organs mixed with oatmeal, is the national dish' },
      { category: 'Geography', text: 'The northern part of Great Britain, known for highlands, lochs, and rugged coastline' },
      { category: 'Culture', text: 'Famous for bagpipes, kilts, whisky, and Edinburgh Castle' },
    ],
  },
];

export const getPuzzleForDate = (dateStr: string): Puzzle => {
  const date = new Date(dateStr);
  const epoch = new Date('2025-01-01');
  const daysSinceEpoch = Math.floor(
    (date.getTime() - epoch.getTime()) / (1000 * 60 * 60 * 24)
  );
  const index = ((daysSinceEpoch % puzzles.length) + puzzles.length) % puzzles.length;
  return puzzles[index] as Puzzle;
};

export const getTodaysPuzzle = (): Puzzle => {
  const today = new Date().toISOString().split('T')[0] as string;
  return getPuzzleForDate(today);
};
