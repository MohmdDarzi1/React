import { createTheme } from "@mui/material/styles";
function muiTheme() {
  let mode = "light";
  let secondaryMain;
  let secondarySecond;
  if (mode === "dark") {
    secondaryMain = "#000";
    secondarySecond = "#eceff117";
  } else if (mode === "light") {
    secondaryMain = "#fff";
    secondarySecond = "#ECEFF1";
  }

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: { main: "#2196F3", light: "skyblue" },
      secondary: { main: secondaryMain, second: secondarySecond },
    },
    typography: {
      fontFamily: "yekan", // تنظیمات فونت
    },
  });

  return theme;
}

export default muiTheme;
