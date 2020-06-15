import { IUser } from "./userInterface";

export const randomInt = (min: number, max: number): number =>
  min + Math.floor((max - min) * Math.random());

export const usersList: Array<IUser> = [
  { id: randomInt(1000, 100000), name: "Rodrigo", tech: "React" },
  { id: randomInt(1000, 100000), name: "Oscar", tech: "Spring" },
  { id: randomInt(1000, 100000), name: "Lucas", tech: "Unity" },
  { id: randomInt(1000, 100000), name: "Omar", tech: "Net Core" },
  { id: randomInt(1000, 100000), name: "Adrian", tech: "Laravel" }
];
