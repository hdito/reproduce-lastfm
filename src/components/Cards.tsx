import { Card } from "./Card";
import { cardsContent } from "../content/cardsContent";

export const Cards = () => (
  <div className="my-4 space-y-4">
    {cardsContent.map((card) => (
      <Card cardInfo={card} />
    ))}
  </div>
);
