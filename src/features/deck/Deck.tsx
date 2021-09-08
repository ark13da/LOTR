import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectLotrDeck } from "../slices/lotrDeckSlice";
import { useFetchDeck } from "../services/useFetchDeck";
import DeckCards from "../deckCards/DeckCards";
import SingleCard from "../singleCard/SingleCard";
import { heroCardprops, heroCardInterface } from "../models/interfaces";
import "./deck.css";


export const Deck = () => {
    // grants read access to state object
    const lotrDeck = useAppSelector(selectLotrDeck);

    // display switch fro single selected Hero card
    const [singleHeroDisplay, setSingleHeroDisplay] = useState<boolean>(false);
    // local state that holds information of single selected hero for singleCard component 
    const [singleHeroProps, setSingleHeroProps] = useState<heroCardprops | null>(null);



    // custom hook that fetches the data from remote server and updates the state
    useFetchDeck();

    // opens single hero card by populating singleHeroProps state
    const openCard = (id: string): void => {
        const heroObject: Array<any> = lotrDeck.deckHeroCards.filter(
            (hero: heroCardInterface) => hero.code === id
        );
        setSingleHeroProps(heroObject[0]);
        setSingleHeroDisplay(true);
    };

    //depopulates singleHeroProps which stops SingleCard component from being rendered and displayed
    const closeCard = (): void => {
        setSingleHeroDisplay(false);
    };

    //conditional rendering in case of errors in fetching the deck
    if (lotrDeck.deckHasError) {
        return (
            <div>
                <p className="deckTiltleText">{lotrDeck.deckError}</p>
            </div>
        )
    };

    //conditional rendering in case of success in fetching the deck
    return (
        <div className="deckContainer">
            <p className="deckTiltleText">{lotrDeck.deckResponse.name}</p>
            <div className="cardsContainer">
                {lotrDeck.deckHeroCards.map((hero: heroCardInterface) => {
                    return (
                        <DeckCards
                            key={hero.code}
                            code={hero.code}
                            imagesrc={hero.imagesrc}
                            openCard={openCard}
                        />
                    )
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
    )
}
