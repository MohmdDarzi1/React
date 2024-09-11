import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { usegetCourseType } from "../../../../core/services/api/courses";

const CourseTypes = ({ noeClass, CourseType, setCourseType }) => {
  const { data, isPending, isError } = usegetCourseType();
  console.log(data, "typee");
  console.log(noeClass, "classs");
  return (
    <div>
      {data?.map((noeClass) => (
        <Typeitem
          noeClass={noeClass}
          CourseType={CourseType}
          setCourseType={setCourseType}
        />
      ))}
    </div>
  );
};

const Typeitem = ({ noeClass, CourseType, setCourseType }) => {
  const isChecked = CourseType.find((item) => item == noeClass?.typeName);
  return (
    <div>
      {/* <RadioGroup
            aria-labelledby="column-radio-buttons-group-label"
            name="column-radio-buttons-group"
          > */}
      <FormControlLabel
       sx={{position:"relative",left:"30px"}}
        value="15"
        control={
          <Radio
            style={{ fontSize: "50px !important" }}
            checked={isChecked}
            onChange={(event, checked) => {
              setCourseType((arr) =>
                arr.find((item) => item.id == noeClass.id)
                  ? arr.filter((item) => item.id != noeClass.id)
                  : [...arr, noeClass],
                  console.log("nane",setCourseType)
              );
            }}
          />
        }
        label={
          <span style={{ fontSize: "12px" }}>
            {noeClass?.typeName}
          </span>
        }
        // label={noeClass.typeName}
      />

      {/* </RadioGroup> */}
    </div>
  );
};

export default CourseTypes;
