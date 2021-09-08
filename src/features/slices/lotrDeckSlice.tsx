import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { lotrDeckState, heroCardInterface, deckResponse } from "../models/interfaces";

const initialState: lotrDeckState = {
  userInput: 13,
  deckBaseUrl: "https://ringsdb.com/api/oauth2/deck/load/",
  deckResponseFormat: "?_format=json",
  HeroCardBaseUrl: "https://ringsdb.com/api/public/card/",
  HeroCardResponseFormat: ".json",
  deckResponse: {},
  deckHasError: true,
  deckError: "",
  deckHeroCards: [],
}

export const lotrDeckSlice = createSlice({
  name: "lotrDeck",
  initialState,
  reducers: {
    updateUserInput: (state, action: PayloadAction<number>) => {
      state.userInput = action.payload
    },
    updateDeckResponse: (state, action: PayloadAction<deckResponse>) => {
      state.deckResponse = action.payload
    },
    updateDeckHasError: (state, action: PayloadAction<boolean>) => {
      state.deckHasError = action.payload
    },
    updateDeckError: (state, action: PayloadAction<string>) => {
      state.deckError = action.payload
    },
    updateHeroCards: (state, action: PayloadAction<heroCardInterface>) => {
      state.deckHeroCards = [...state.deckHeroCards, action.payload]
    },
    emptyHeroCards: (state) => {
      state.deckHeroCards = []
    },
  },
})

//action
export const {
  updateDeckHasError,
  updateDeckError,
  updateHeroCards,
  updateUserInput,
  updateDeckResponse,
  emptyHeroCards,
} = lotrDeckSlice.actions

//selector
export const selectLotrDeck = (state: RootState) => state.lotrDeck

export default lotrDeckSlice.reducer
