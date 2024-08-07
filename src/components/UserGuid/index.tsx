import { type FC } from "react";
import { Box, Typography } from "@mui/material";

const UserGuid: FC = () => {
  return (
    <Box>
      <Box mb={2}>
        <Typography variant="h4" gutterBottom>
          Robot Grid Game Instructions
        </Typography>
        <Typography variant="body1">
          Use the arrow keys to change the direction of the robot:
        </Typography>
        <ul>
          <li>Up Arrow (↑): Changes the robot's direction to North.</li>
          <li>Right Arrow (→): Changes the robot's direction to East.</li>
          <li>Down Arrow (↓): Changes the robot's direction to South.</li>
          <li>Left Arrow (←): Changes the robot's direction to West.</li>
        </ul>
        <Typography variant="body1">
          Press the spacebar to move the robot forward in the direction it is
          currently facing.
        </Typography>
      </Box>
    </Box>
  );
};

export default UserGuid;
