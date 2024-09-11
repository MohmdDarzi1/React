import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../../components/common/ButtonComponent";
import LeftDetails from "./LeftDetails";
import MassageDetails from "./MassageDetails";
import RightDetails from "./RightDetails";

const AppDetails = () => {
  const navigate = useNavigate();
  return (
    <Stack
      direction={{ lg: "column", md: "column", sm: "column" }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      width={{ lg: "1280px", md: "600px", sm: "400px", xs: "300px" }}
      // height={"860px"}
      margin={"auto"}
      // border={"1px solid #ccc"}
      // backgroundColor="white"
      marginTop={"50px"}
    >
      <MassageDetails />
      <Stack
        direction="row"
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        width={"1280px"}
        // height={"560px"}
        //   border={"1px solid #ccc"}
      >
        <RightDetails />
        <LeftDetails />
      </Stack>
      <ButtonComponent
        // height={"50px"}
        width={{ lg: "10%", xs: "30%" }}
      //  height={"50px"}
        onClick={() => navigate("/articles")}
        text={"مشاهده همه"}
      />
    </Stack>
  );
};

export default AppDetails;
