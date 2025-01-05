export const scoringCards = [
  { name: 'Faunlost Thicket' },
  { name: 'Heart of the Forest' },
  { name: 'Sleepy Valley' },
  { name: 'Deepwood' },
  { name: 'Gnomish Colony' },
  { name: 'Outer Enclave' },
  { name: 'Caravansary' },
  { name: 'Traylo Monastery' },
  { name: 'Banded Hills' },
  { name: 'Starlit Sigil' },
  { name: 'Silos' },
  { name: 'Dwarvenholds' },
  { name: "Ulem's Wallow" },
  { name: 'Jorekburg' },
  { name: 'Craylund' },
  { name: 'Clawsgrave Peaks' },
];

export const seasonCards = [
  { name: 'Spring', threshold: 8, edicts: ['A', 'B'] },
  { name: 'Summer', threshold: 7, edicts: ['B', 'C'] },
  { name: 'Autumn', threshold: 7, edicts: ['C', 'D'] },
  { name: 'Winter', threshold: 6, edicts: ['D', 'A'] },
];

export const edictCards = ['A', 'B', 'C', 'D'];

export const getExploreDeck = () => {
  const ambushCard = ambushCards[Math.floor(Math.random() * ambushCards.length)];
  const heroCard = heroCards[Math.floor(Math.random() * heroCards.length)];
  const exploreDeck = exploreCards.concat(ambushCard, heroCard);

  // shuffle the explore deck
  for (let i = exploreDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [exploreDeck[i], exploreDeck[j]] = [exploreDeck[j], exploreDeck[i]];
  }

  return exploreDeck;
};

const exploreCards = [
  { name: 'Lagoon', time: 1, types: ['water'] },
  { name: 'Frontier Dwelling', time: 2, types: ['village', 'farm'] },
  { name: 'Mangrove Swamp', time: 2, types: ['forest', 'water'] },
  { name: 'Coastal Encampment', time: 2, types: ['village', 'water'] },
  { name: 'Hillside Terrace', time: 2, types: ['farm', 'water'] },
  { name: 'Wildwood Garden', time: 2, types: ['forest', 'farm'] },
  { name: 'Settlement', time: 1, types: ['village'] },
  { name: "Kethra's Gates", time: 0, types: ['forest', 'village', 'farm', 'water', 'monster'] },
  { name: 'Timber Grove', time: 1, types: ['forest'] },
  { name: 'Pasture', time: 1, types: ['farm'] },
  { name: 'Woodland Crossroads', time: 2, types: ['forest', 'village'] },
];

const ambushCards = [
  { name: 'Dragon Inferno', time: 0 },
  { name: 'Giant Troll Ravage', time: 0 },
  { name: 'Gorgon Gaze', time: 0 },
  { name: 'Zombie Plague', time: 0 },
];

const heroCards = [
  { name: 'Wren the Lioness', time: 0 },
  { name: 'Dobrik of Lorkheim', time: 0 },
  { name: 'Dal of Jolev', time: 0 },
  { name: 'Freyla the True', time: 0 },
];
