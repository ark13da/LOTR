import { useState } from 'react';
import { useAppSelector } from 'app/hooks/hooks';
import { selectLotrDeck } from 'app/slices/lotrDeckSlice';
import { useFetchDeck } from 'app/hooks/useFetchDeck';
import DeckCards from 'app/components/DeckCards';
import SingleCard from 'app/components/SingleCard';
import { HeroCardIntf } from 'app/models/interfaces';
import 'app/components/Deck/Deck.css';

const Deck = () => {
  // grants read access to state object
  const lotrDeck = useAppSelector(selectLotrDeck);

  // display switch fro single selected Hero card
  const [singleHeroDisplay, setSingleHeroDisplay] = useState<boolean>(false);
  // local state that holds information of single selected hero for singleCard component
  const [singleHeroProps, setSingleHeroProps] = useState<HeroCardIntf>();

  // custom hook that fetches the data from remote server and updates the state
  useFetchDeck();

  // opens single hero card by populating singleHeroProps state
  const openCard = (e: React.MouseEvent<HTMLElement>) => {
    const heroObject = lotrDeck.deckHeroCards.find(
      (hero: HeroCardIntf) => hero.code === e.currentTarget.id
    );
    setSingleHeroProps(heroObject);
    setSingleHeroDisplay(true);
  };

  // depopulates singleHeroProps which stops SingleCard component from being rendered and displayed
  const closeCard = (): void => {
    setSingleHeroDisplay(false);
  };

  // conditional rendering in case of errors in fetching the deck
  if (lotrDeck.deckHasError) {
    return (
      <div>
        <p className="deckTiltleText">{lotrDeck.deckError}</p>
      </div>
    );
  }

  // conditional rendering in case of success in fetching the deck
  return (
    <div className="deckContainer">
      <p className="deckTiltleText">{lotrDeck.deckResponse.name}</p>
      <div className="cardsContainer">
        {lotrDeck.deckHeroCards.map((hero: HeroCardIntf) => {
          return (
            <DeckCards
              code={hero.code}
              key={hero.code}
              imagesrc={hero.imagesrc}
              openCard={openCard}
            />
          );
        })}
      </div>
      {singleHeroDisplay === true ? (
        <SingleCard
          closeBtn={closeCard}
          name={singleHeroProps!.name}
          code={singleHeroProps!.code}
          imagesrc={singleHeroProps!.imagesrc}
          type_name={singleHeroProps!.type_name}
          traits={singleHeroProps!.traits}
          text={singleHeroProps!.text}
          flavor={singleHeroProps!.flavor}
          threat={singleHeroProps!.threat}
          willpower={singleHeroProps!.willpower}
          health={singleHeroProps!.health}
          attack={singleHeroProps!.attack}
          defense={singleHeroProps!.defense}
        />
      ) : (
        <br />
      )}
    </div>
  );
};

export default Deck;
