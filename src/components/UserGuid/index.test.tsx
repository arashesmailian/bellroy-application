import "@testing-library/jest-dom"; // Ensure this is imported if not already in setup file
import { render, screen } from "@testing-library/react";
import UserGuid from "./index";

test("renders Robot Grid Game Instructions", () => {
  render(<UserGuid />);

  expect(screen.getByText("Robot Grid Game Instructions")).toBeInTheDocument();
});

test("renders arrow key instructions", () => {
  render(<UserGuid />);

  expect(
    screen.getByText("Use the arrow keys to change the direction of the robot:")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Up Arrow (↑): Changes the robot's direction to North.")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Right Arrow (→): Changes the robot's direction to East.")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Down Arrow (↓): Changes the robot's direction to South.")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Left Arrow (←): Changes the robot's direction to West.")
  ).toBeInTheDocument();
});

test("renders spacebar instruction", () => {
  render(<UserGuid />);

  expect(
    screen.getByText(
      "Press the spacebar to move the robot forward in the direction it is currently facing."
    )
  ).toBeInTheDocument();
});
