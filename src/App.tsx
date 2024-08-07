import { type FC } from "react";
import { Box } from "@mui/material";
import RobotGrid from "components/RobotGrid";
import UserGuid from "components/UserGuid";
import "./main.css";

const App: FC = () => {
  return (
    <Box>
      <UserGuid />
      <RobotGrid />
    </Box>
  );
};

export default App;
