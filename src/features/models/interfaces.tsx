export interface deckResponse {
    name?: string,
    heroes?: { [key: string]: number },
};

export interface deckCardsProps {
    code: string,
    imagesrc: string,
    openCard: Function,
};

export interface heroCardInterface {
    code: string,
    name: string,
    imagesrc: string,
    type_name: string,
    traits: string,
    text: string,
    flavor: string,
    threat: number,
    willpower: number,
    attack: number,
    defense: number,
    health: number,
};

export interface heroCardprops extends heroCardInterface {
    closeBtn: Function,
};


export interface lotrDeckState {
    userInput: number,
    deckBaseUrl: string,
    deckResponseFormat: string,
    HeroCardBaseUrl: string,
    HeroCardResponseFormat: string,
    deckResponse: deckResponse,
    deckHasError: boolean,
    deckError: string,
    deckHeroCards: Array<heroCardInterface>,
};
