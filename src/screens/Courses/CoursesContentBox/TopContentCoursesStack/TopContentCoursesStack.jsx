// import { KeyboardArrowDownRounded } from "@mui/icons-material";
// import { FormControl, MenuItem, Select, styled } from "@mui/material";
// import { Box, Stack } from "@mui/system";
// import React from "react";
// import Search from "../../../../components/common/Search";
// import { useSelector } from "react-redux";
// import { handleCoursesSearch } from "../../../../redux/slices/allCoursesSlice";

// const SelectContentBox = styled(Box)({
//   width: "20%",
// });
// const ViewContentBox = styled(Box)({ width: "15%" });
// const TopContentCoursesStack = ({
//   onSearchChange,
//   searchValue,
//   onSelectChange,
//   selectValue,
// }) => {
//   return (
//     <Stack
//       // border={"1px solid green"}
//       sx={{ height: { lg: "56px", md: "45px", sm: "35px", xs: "25px" },backgroundColor:"secondaryMain" }}
//       flexDirection={"row-reverse"}
//       justifyContent={"space-around"}
//     >
//       <SelectContentBox>
//         <FormControl sx={{ width: "100%" }}>
//           <Select
//             value={selectValue}
//             onChange={onSelectChange}
//             defaultValue={10}
//             IconComponent={KeyboardArrowDownRounded} // آیکون فلش
//             sx={{
//               width: "100%",
//               margin: "auto",
//               fontSize: { lg: "16px", md: "12px", sm: "8px", xs: "6px" },
//               height: { lg: "56px", md: "45px", sm: "35px", xs: "25px" },
//               padding: "0",
//               "& .MuiSelect-icon": {
//                 fontSize: { lg: "28px", md: "20px", sm: "16px", xs: "10px" }, // اندازه آیکون فلش
//               },
//               "& .MuiMenuItem-root": {
//                 fontSize: { lg: "10px", md: "20px", sm: "16px", xs: "5px" }, // اندازه فونت آپشن‌ها
//               },
//               "& .MuiSelect-select": {
//                 fontFamily: "Arial, sans-serif", // فونت انتخاب شده
//                 marginRight: { lg: 0, md: 0, sm: 0, xs: "-13px" },
//               },
//             }}
//           >
//             <MenuItem
//               sx={{
//                 fontSize: { lg: "14px", md: "12px", sm: "10px", xs: "8px" },
//               }}
//               value={1}
//             >
//               محبوب ترین ها
//             </MenuItem>

//             <MenuItem
//               sx={{
//                 fontSize: { lg: "14px", md: "12px", sm: "10px", xs: "8px" },
//               }}
//               value={2}
//             >
//               جدیدترین
//             </MenuItem>
//             {/* <MenuItem
//               sx={{
//                 fontSize: { lg: "14px", md: "12px", sm: "10px", xs: "8px" },
//               }}
//               value={3}
//             >
//            گران ترین ها
//             </MenuItem> */}
//           </Select>
//         </FormControl>
//       </SelectContentBox>

//       <Search
//         width={"70%"}
//         height={"100%"}
//         placeholder={"چی میخوای یاد بگیری؟؟"}
//         onChange={onSearchChange}
//         value={searchValue}
//       />
//       {/* <ViewContentBox></ViewContentBox> */}
//     </Stack>
//   );
// };

// export default TopContentCoursesStack;

import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { FormControl, MenuItem, Select, styled } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Search from "../../../../components/common/Search";

const SelectContentBox = styled(Box)({
  width: "20%",
  padding: "4px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  // background: "linear-gradient(145deg, #f0f0f3, #cacaca)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  fontSize: {
    lg: "16px",
    md: "12px",
    sm: "8px",
    xs: "6px",
  },
  height: {
    lg: "56px",
    md: "45px",
    sm: "35px",
    xs: "25px",
  },
  borderRadius: "8px",
  // backgroundColor: "text.secondary",
  // color:"text.secondary",

  "& .MuiSelect-icon": {
    // color:"text.secondary",
    fontSize: {
      lg: "28px",
      md: "20px",
      sm: "16px",
      xs: "10px",
    },
  },
  "& .MuiMenuItem-root": {
    // color:"text.secondary",
    fontSize: {
      lg: "14px",
      md: "12px",
      sm: "10px",
      xs: "8px",
    },
  },
  "& .MuiSelect-select": {
    fontFamily: "Arial, sans-serif",
    padding: "8px",
    "&:focus": {
      backgroundColor: "#F2FFF8",
      // color:"text.secondary",
    },
  },
  transition: "all 0.3s ease",
  "&:hover": {
    // color:"text.secondary",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
  },
}));

const TopContentCoursesStack = ({
  onSearchChange,
  searchValue,
  onSelectChange,
  selectValue,
}) => {
  return (
    <Stack
      sx={{
        height: { lg: "56px", md: "45px", sm: "35px", xs: "25px" },
        // backgroundColor: "secondaryMain",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "0 16px",
      }}
      flexDirection={"row-reverse"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <SelectContentBox>
        <FormControl sx={{ width: "100%" }}>
          <StyledSelect
            sx={{ color: "text.secondary" }}
            value={selectValue}
            onChange={onSelectChange}
            defaultValue={10}
            IconComponent={KeyboardArrowDownRounded}
          >
            <MenuItem value={1}>محبوب ترین ها</MenuItem>
            <MenuItem value={2}>جدیدترین</MenuItem>
          </StyledSelect>
        </FormControl>
      </SelectContentBox>

      <Search
        width={{lg:"280%",md:"150%"}}
        height={"100%"}
        placeholder={"چی میخوای یاد بگیری؟؟"}
        onSearchChange={onSearchChange}
        value={searchValue}
        sx={{
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      />
    </Stack>
  );
};

export default TopContentCoursesStack;
