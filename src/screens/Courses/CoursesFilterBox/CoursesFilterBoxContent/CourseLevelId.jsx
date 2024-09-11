import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { usegetCourseLevelId } from "../../../../core/services/api/courses";

const CourseLevelId = ({ level, setCourseLv, CourseLv }) => {
  const { data, isPending, isError } = usegetCourseLevelId();
  console.log(data, "lvl");
  console.log(level, "levelid");
  console.log("setLv", CourseLv);
  return (
    <div>
      {data?.map((level) => (
        <Levelitem
          level={level}
          setCourseLv={setCourseLv}
          CourseLv={CourseLv}
        />
      ))}
    </div>
  );
};

const Levelitem = ({ level, setCourseLv, CourseLv }) => {
  const isChecked = CourseLv.find((item) => item == level?.levelName);
  return (
    <div>
      {/* <FormGroup> */}
        <FormControlLabel 
         sx={{position:"relative",left:"30px", display: "flex", alignItems: "center"}}
         
        control={
        <Checkbox
        style={{ fontSize: "10px !important" }}
        checked={isChecked}
        onChange={(event, checked) => {
          setCourseLv((arr) =>
            arr.find((item) => item.id == level.id)
              ? arr.filter((item) => item.id != level.id)
              : [...arr, level]
          );
        }}
        />
        }

        //  label={level?.levelName}
        label={
          <span style={{ fontSize: "12px" }}>
            {level?.levelName}
          </span>
        }
         />

    </div>
  );
};

export default CourseLevelId;
