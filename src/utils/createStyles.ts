import { SxProps, Theme } from "@mui/material";

const createStyles = <T>(styles: Record<keyof T, SxProps<Theme>>) => {
  return styles;
};

export default createStyles;
