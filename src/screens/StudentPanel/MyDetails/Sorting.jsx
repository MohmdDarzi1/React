import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

const Sorting = ({
  currentPage,
  onPageChange,
  onSearchChange,
  searchValue,
  onSelectChange,
  selectValue,
}) => {
  return (
    <FormControl
      onChange={(e) => {
        console.log("page change", e);
        onPageChange(parseInt(e.target.innerText));
      }}
      count={3}
      page={currentPage}
      sx={{ width: "20%" }}
    >
      <Select
        value={selectValue}
        onChange={onSelectChange}
        IconComponent={KeyboardArrowDownRounded} // آیکون فلش
        sx={{
          width: "100%",
          margin: "auto",
          fontSize: { lg: "16px", md: "12px", sm: "8px", xs: "6px" },
          height: { lg: "56px", md: "45px", sm: "35px", xs: "25px" },
          padding: "0",
          "& .MuiSelect-icon": {
            fontSize: { lg: "28px", md: "20px", sm: "16px", xs: "10px" }, // اندازه آیکون فلش
          },
          "& .MuiMenuItem-root": {
            fontSize: { lg: "10px", md: "20px", sm: "16px", xs: "5px" }, // اندازه فونت آپشن‌ها
          },
          "& .MuiSelect-select": {
            fontFamily: "Arial, sans-serif", // فونت انتخاب شده
            marginRight: { lg: 0, md: 0, sm: 0, xs: "-13px" },
          },
        }}
      >
        <MenuItem
          sx={{
            fontSize: { lg: "14px", md: "12px", sm: "10px", xs: "8px" },
          }}
          //   onClick={() => onSelectChange(1)}
          //   // to="#"
          //   variant={selectValue === 1 ? "contained" : "outlined"}
          value={1}
        >
          دانشجو
        </MenuItem>

        <MenuItem
          sx={{
            fontSize: { lg: "14px", md: "12px", sm: "10px", xs: "8px" },
          }}
          //   onClick={() => onSelectChange(2)}
          //   variant={selectValue === 2 ? "contained" : "outlined"}
          value={2}
        >
          نوع دوره
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default Sorting;
