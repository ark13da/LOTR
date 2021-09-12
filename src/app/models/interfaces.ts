export interface DeckResponseIntf {
  name?: string;
  heroes?: { [key: string]: number; };
}

export interface DeckCardsPropsIntf {
  code: string;
  imagesrc: string;
  openCard: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface HeroCardIntf {
  code: string;
  name: string;
  imagesrc: string;
  type_name: string;
  traits: string;
  text: string;
  flavor: string;
  threat: number;
  willpower: number;
  attack: number;
  defense: number;
  health: number;
}

export interface HeroCardpropsIntf extends HeroCardIntf {
  closeBtn: () => void;
}

export interface LotrDeckStateIntf {
  userInput: number;
  deckBaseUrl: string;
  deckResponseFormat: string;
  HeroCardBaseUrl: string;
  HeroCardResponseFormat: string;
  deckResponse: DeckResponseIntf;
  deckHasError: boolean;
  deckError: string;
  deckHeroCards: HeroCardIntf[];
}
