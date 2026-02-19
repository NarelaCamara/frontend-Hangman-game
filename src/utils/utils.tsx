export enum routes {
  "Menu",
  "Game",
  "Steps",
  "Categories",
}

export enum STATE {
  "START",
  "PLAYING",
  "PAUSE",
  "END",
}

export const LIST_WORDS_1 = ["Tu vieja", "Nose"];
export const LIST_WORDS_2 = ["Tu mama", "Nose"];
export const LIST_WORDS_3 = ["Tu papa", "Nose"];

export interface IGame {
  location: number;
  total: number;
  lifes: number;
  time: number;
}
