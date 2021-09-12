import { DeckCardsPropsIntf } from 'app/models/interfaces';
import 'app/components/DeckCards/DeckCard.css';

const DeckCards = ({ code, openCard, imagesrc }: DeckCardsPropsIntf) => {
  return (
    <div className="deckCard" id={code} onClick={openCard}>
      <img className="deckCardImg" src={`https://ringsdb.com/${imagesrc}`} alt="Hero" />
    </div>
  );
};

export default DeckCards;
