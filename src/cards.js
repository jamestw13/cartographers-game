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

export const seasonCards = ['Spring', 'Summer', 'Autumn', 'Winter'];

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
  { name: 'Lagoon' },
  { name: 'Frontier Dwelling' },
  { name: 'Mangrove Swamp' },
  { name: 'Coastal Encampment' },
  { name: 'Hillside Terrace' },
  { name: 'Wildwood Garden' },
  { name: 'Settlement' },
  { name: "Kethra's Gates" },
  { name: 'Timber Grove' },
  { name: 'Pasture' },
  { name: 'Woodland Crossroads' },
];

const ambushCards = [
  { name: 'Dragon Inferno' },
  { name: 'Giant Troll Ravage' },
  { name: 'Gorgon Gaze' },
  { name: 'Zombie Plague' },
];

const heroCards = [
  { name: 'Wren the Lioness' },
  { name: 'Dobrik of Lorkheim' },
  { name: 'Dal of Jolev' },
  { name: 'Freyla the True' },
];
