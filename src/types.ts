export type Direction = "NORTH" | "EAST" | "SOUTH" | "WEST";

export const directions: Direction[] = ["NORTH", "EAST", "SOUTH", "WEST"];

export interface Position {
  x: number;
  y: number;
}
