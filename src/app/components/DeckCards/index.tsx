import { deckCardsProps } from "app/models/interfaces";
import "app/components/DeckCards/DeckCard.css";

const DeckCards = (props: deckCardsProps) => {
  return (
    <div
      className="deckCard"
      onClick={() => props.openCard(props.code)}
    >
      <img
        className="deckCardImg"
        src={`https://ringsdb.com/${props.imagesrc}`}
        alt="Hero"
      />
    </div>
  )
}

export default DeckCards
