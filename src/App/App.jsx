import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Articles from "../screens/Articles/Articles";
import Courses from "../screens/Courses/Courses";
import Landing from "../screens/Landing/Landing";

import { createTheme, ThemeProvider } from "@mui/material";

import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux/slices/darkModeSlice";
import CourseDetailPage from "../screens/Courses/CourseDetailPage/CourseDetailPage";
import BlogDetails from "../screens/BlogDetails/BlogDetails";
import StudentPanel from "../screens/StudentPanel/StudentPanel";
import NotFound from "../screens/Landing/404/NotFound";
// import { Home } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const mode = useSelector(selectDarkMode);
  let secondaryMain;
  let secondarySecond;
  let primarySlider;
  let primarySecond;
  let background;
  let redLight;
  let redDark;
  if (mode === "light") {
    primarySecond = "#121212";
    background = "#F2FFF8";
    primarySlider = "#121212";
    redLight = "red";
    redDark = "#fff";
    secondaryMain = "#fff";
    secondarySecond = "#ECEFF1";
  } else if (mode === "dark") {
    primarySecond = "#fff";
    background = "#0D0007";
    primarySlider = "skyblue";
    redLight = "#121212";
    redDark = "red";
    secondaryMain = "#121212";
    secondarySecond = "#eceff117";
  }
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#2196F3",
        second: primarySecond,
        background: background,
        slider: primarySlider,
        redLight: redLight,
        redDark: redDark,
      },
      secondary: { main: secondaryMain, second: secondarySecond },
    },
    typography: {
      fontFamily: "yekan", // تنظیمات فونت
      // fontSize: { lg: 16, md: 12, sm: 10, xs: 7 },
      // padding: 0,
      // margin: "0",
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/blogDetails/:id" element={<BlogDetails />} />
            <Route path="/studentPanel" element={<StudentPanel />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ThemeProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
