import { Card } from "./Card";
import { cardsContent } from "../content/cardsContent";

export const Cards = () => (
  <div className="space-y-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:space-y-0">
    {cardsContent.map((card) => (
      <Card cardInfo={card} />
    ))}
  </div>
);
