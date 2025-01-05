export const ExploreCard = ({ card, isActive }) => {
  return (
    <div className={`card ${isActive ? 'active-card' : ''}`}>
      <div>{card.name}</div>
      <div>{card.time}</div>
    </div>
  );
};
