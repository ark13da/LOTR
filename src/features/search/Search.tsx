import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import "./search.css";
import {
    updateUserInput,
    updateDeckError,
    updateDeckHasError,
} from "../slices/lotrDeckSlice";

export const Search = () => {
    const dispatch = useAppDispatch();
    const [userInput, setUserInput] = useState<string>("");
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserInput(e.target.value);
    };
    const userInputUpdateHandler = (
        e: React.KeyboardEvent<HTMLInputElement>
    ): void => {
        if (e.key === "Enter") {
            if (Number(userInput)) {
                dispatch(updateUserInput(Number(userInput)));
            } else {
                dispatch(updateDeckHasError(true));
                dispatch(updateDeckError("Try numerical Ids!"));
            }
        };
    };

    return (
        <div className="searchBox">
            <label className="searchLableText" htmlFor="deckId">
                Search for a decklist here
            </label>
            <input
                id="deckId"
                type="text"
                placeholder="Enter the deck Id"
                onChange={inputHandler}
                onKeyPress={userInputUpdateHandler}
            />
        </div>
    )
};
