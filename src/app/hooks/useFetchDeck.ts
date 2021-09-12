import { useEffect } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from 'app/hooks/hooks';
import {
  updateDeckResponse,
  updateDeckHasError,
  updateDeckError,
  updateHeroCards,
  selectLotrDeck,
  emptyHeroCards,
} from 'app/slices/lotrDeckSlice';

export const useFetchDeck = () => {
  const lotrDeck = useAppSelector(selectLotrDeck);
  const dispatch = useAppDispatch();

  // fetch deck and heros data and upate the state each time user enters new search term
  useEffect(() => {
    (async () => {
      const customDeckUrl = lotrDeck.deckBaseUrl + lotrDeck.userInput + lotrDeck.deckResponseFormat;
      try {
        const deckRes = await axios.get(customDeckUrl);
        if (deckRes.data.hasOwnProperty('error')) {
          dispatch(updateDeckHasError(true));
          dispatch(updateDeckError(deckRes.data.error));
        } else if (!deckRes.data.hasOwnProperty('heroes')) {
          dispatch(updateDeckHasError(true));
          dispatch(updateDeckError('Deck is empty!'));
        } else {
          dispatch(updateDeckHasError(false));
          dispatch(updateDeckResponse(deckRes.data));
          dispatch(emptyHeroCards());

          // fetch individual heros:
          const heros = Object.keys(deckRes.data.heroes);
          heros.forEach((hero) => {
            (async () => {
              try {
                const customHeroUrl =
                  lotrDeck.HeroCardBaseUrl + hero + lotrDeck.HeroCardResponseFormat;
                const heroRes = await axios.get(customHeroUrl);
                if (heroRes.data.hasOwnProperty('name')) {
                  dispatch(updateHeroCards(heroRes.data));
                }
              } catch {
                dispatch(updateDeckHasError(true));
                dispatch(updateDeckError('Failed to retrieve data!'));
              }
            })();
          });
        }
      } catch {
        dispatch(updateDeckHasError(true));
        dispatch(updateDeckError('Failed to retrieve data!'));
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lotrDeck.userInput]);
};
