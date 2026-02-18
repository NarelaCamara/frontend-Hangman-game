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

export const LIST_WORDS = ["Tu vieja", "Nose"];

export interface IGame {
  location: number;
  total: number;
  lifes: number;
  time: number;
}
