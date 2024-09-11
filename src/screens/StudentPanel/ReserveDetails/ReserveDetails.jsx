
import React from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import moment from "moment";
import {
  useGetDeleteCourseReserve,
  useGetMyCoursesReserve,
} from "../../../core/services/api/user";
import HistoryIcon from "@mui/icons-material/History";
import { toast } from "react-toastify";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
const ReserveDetails = () => {
  // const [label, setLabel] = React.useState('notifications');
  // const handleClick = () => {
  //   setLabel('صدا');
  // };

  const { data, isPending } = useGetMyCoursesReserve();
  // const { id } = useParams();
  // console.log(id, "ddddddddd");
  const DeleteCourseReserve = useGetDeleteCourseReserve();
const dataa=data?.filter((item)=>{return(item?.accept==false)})
// console.log("dataa", dataa)
  // console.log("data", data);
  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "50px 1fr 150px 150px 100px",
          gap: "10px",
          alignItems: "center",
          backgroundColor: "#1976d2",
          color: "white",
          padding: "10px",
        }}
      >
        <Typography variant="body1">تصویر</Typography>
        <Typography variant="body1">نام دوره</Typography>
        <Typography variant="body1">دانشجو</Typography>
        <Typography variant="body1">تاریخ رزرو</Typography>
        <Typography variant="body1">مدیریت</Typography>
      </Box>

      {isPending ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        dataa?.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "grid",
              gridTemplateColumns: "50px 1fr 150px 150px 100px",
              gap: "10px",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <Avatar sx={{ backgroundColor: "#f48fb1" }}>
              <HistoryIcon />
            </Avatar>
            <Typography sx={{ fontSize: "14px" }}>{item.courseName}</Typography>
            <Typography>{item.studentName}</Typography>
            <Typography>
              {moment(item.reserverDate).format("YYYY/MM/DD")}
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              {/* <IconButton component={Link} to={"/"}  sx={{ color: "#f44336" }}>
                <NotificationsIcon />
                
              </IconButton> */}
              <IconButton
                onClick={() => {
                  console.log("itemId", item.reserveId);
                  if (item.reserveId) {
                    DeleteCourseReserve.mutate(item.reserveId, {
                      onSuccess: () => {
                        console.log("dataaamee", item.reserveId);
                        toast.success(" حذف شد!");
                      },
                      onError: (res) => {
                        console.log(
                          "Remove from favorites error response:",
                          res
                        );
                        toast.error("  error");
                      },
                    });
                  }

                  // toast("از صبر و شکیبایی شما سپاسگذاریم")
                }}
                sx={{ color: "#f44336" }}
              >
                <DeleteForeverOutlinedIcon />
              </IconButton>

              <IconButton component={Link} to={"/"} sx={{ color: "#4caf50" }}>
                <LocalGroceryStoreOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default ReserveDetails;
