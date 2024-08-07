import { type FC, useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { type Direction, type Position } from "types";
import styles from "./styles";

const GRID_SIZE = 5;

const RobotGrid: FC = () => {
  const [robotDirection, setRobotDirection] = useState<Direction>("NORTH");
  const [robotPosition, setRobotPosition] = useState<Position>({ x: 2, y: 2 });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setRobotDirection("NORTH");
          break;
        case "ArrowRight":
          setRobotDirection("EAST");
          break;
        case "ArrowDown":
          setRobotDirection("SOUTH");
          break;
        case "ArrowLeft":
          setRobotDirection("WEST");
          break;
        case " ":
          moveForward();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [robotDirection, robotPosition]);

  const moveForward = () => {
    setRobotPosition((prevPosition) => {
      let newPosition = { ...prevPosition };
      switch (robotDirection) {
        case "NORTH":
          if (prevPosition.y > 0) newPosition.y -= 1;
          break;
        case "EAST":
          if (prevPosition.x < GRID_SIZE - 1) newPosition.x += 1;
          break;
        case "SOUTH":
          if (prevPosition.y < GRID_SIZE - 1) newPosition.y += 1;
          break;
        case "WEST":
          if (prevPosition.x > 0) newPosition.x -= 1;
          break;
        default:
          break;
      }
      return newPosition;
    });
  };

  const renderGrid = () => {
    const grid = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      const row = [];
      for (let x = 0; x < GRID_SIZE; x++) {
        const isRobotHere = robotPosition.x === x && robotPosition.y === y;
        row.push(
          <Grid
            item
            xs={1}
            key={`${x}-${y}`}
            style={{ border: "1px solid #ccc", position: "relative" }}
            height="40px"
            width="100px"
            sx={styles.gridBackGround}
          >
            {isRobotHere && (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "red",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {robotDirection === "NORTH" && "↑"}
                {robotDirection === "EAST" && "→"}
                {robotDirection === "SOUTH" && "↓"}
                {robotDirection === "WEST" && "←"}
              </Box>
            )}
          </Grid>
        );
      }
      grid.push(
        <Grid container key={y} justifyContent="center">
          {row}
        </Grid>
      );
    }
    return grid;
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      data-testid="robot-grid"
    >
      {renderGrid()}
    </Box>
  );
};

export default RobotGrid;
