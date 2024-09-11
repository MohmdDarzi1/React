import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { useGetTechnologies } from "../../../../core/services/api/courses";

const Technologies = ({ dastebandi, setTechnologie, Technologie }) => {
  const { data, isPending, isError } = useGetTechnologies();
  //   console.log("tec", data[0].techName);
  console.log(dastebandi, "dasdas");
  console.log("Technologie", Technologie);
  return (
    <div>
      {data?.map((dastebandi) => (
        <TechItem
          dastebandi={dastebandi}
          Technologie={Technologie}
          setTechnologie={setTechnologie}
        />
      ))}
    </div>
  );
};

const TechItem = ({ dastebandi, Technologie, setTechnologie }) => {
  const isChecked = Technologie.find((item) => item == dastebandi.techName);
  return (
    <FormControlLabel
      sx={{ position: "relative", left: "30px" }}
      control={
        <Checkbox
          style={{ fontSize: "50px !important" }}
          checked={isChecked}
          onChange={(event, checked) => {
            setTechnologie((arr) =>
              arr.find((item) => item.id == dastebandi.id)
                ? arr.filter((item) => item.id != dastebandi.id)
                : [...arr, dastebandi]
            );
          }}
        />
      }
      // label={
      //   <span style={{ fontSize:"12px", lineHeight: "1"}}>
      //     {dastebandi?.techName}
      //   </span>
      // }
      label={dastebandi.techName}
    />
  );
};

export default Technologies;
