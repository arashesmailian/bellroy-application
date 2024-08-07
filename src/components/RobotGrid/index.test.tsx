import { render, screen, fireEvent } from "@testing-library/react";
import RobotGrid from "./index";
import "@testing-library/jest-dom";

describe("RobotGrid Component", () => {
  test("renders the grid with the robot in the initial position", () => {
    render(<RobotGrid />);
    const grid = screen.getByTestId("robot-grid");
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveTextContent("↑"); // Robot initially facing NORTH
  });

  test("moves the robot to the correct position and direction on ArrowRight key press", () => {
    render(<RobotGrid />);
    const grid = screen.getByTestId("robot-grid");

    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(grid).toHaveTextContent("→"); // Robot facing EAST

    fireEvent.keyDown(window, { key: " " });
    expect(grid).not.toHaveTextContent("↑"); // Robot should have moved
    expect(grid).toHaveTextContent("→");
  });

  test("moves the robot to the correct position and direction on ArrowDown key press", () => {
    render(<RobotGrid />);
    const grid = screen.getByTestId("robot-grid");

    fireEvent.keyDown(window, { key: "ArrowDown" });
    expect(grid).toHaveTextContent("↓"); // Robot facing SOUTH

    fireEvent.keyDown(window, { key: " " });
    expect(grid).not.toHaveTextContent("↑"); // Robot should have moved
    expect(grid).toHaveTextContent("↓");
  });

  test("changes robot direction on ArrowLeft key press", () => {
    render(<RobotGrid />);
    const grid = screen.getByTestId("robot-grid");

    fireEvent.keyDown(window, { key: "ArrowLeft" });
    expect(grid).toHaveTextContent("←"); // Robot facing WEST
  });

  test("changes robot direction on ArrowUp key press", () => {
    render(<RobotGrid />);
    const grid = screen.getByTestId("robot-grid");

    fireEvent.keyDown(window, { key: "ArrowUp" });
    expect(grid).toHaveTextContent("↑"); // Robot facing NORTH
  });

  test("does not move robot out of grid boundaries", () => {
    render(<RobotGrid />);
    const grid = screen.getByTestId("robot-grid");

    // Move robot to the top-left corner
    fireEvent.keyDown(window, { key: "ArrowLeft" });
    fireEvent.keyDown(window, { key: " " });
    fireEvent.keyDown(window, { key: "ArrowUp" });
    fireEvent.keyDown(window, { key: " " });

    // Try to move beyond the grid boundaries
    fireEvent.keyDown(window, { key: "ArrowUp" });
    fireEvent.keyDown(window, { key: " " });
    expect(grid).toHaveTextContent("↑"); // Robot should not move out of bounds
  });
});
