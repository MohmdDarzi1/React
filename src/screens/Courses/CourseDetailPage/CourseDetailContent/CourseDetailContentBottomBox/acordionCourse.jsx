import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import CustomizedAccordions from "./acordionCourse";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
  
    expandIcon={<AddIcon sx={{ display: "none" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// const StyledAccordionSummary = styled(Accardio)({
//   "& .MuiAccordionSummary-expandIconWrapper": { display: "none" },
// });

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        display: {lg:"flex",md:"flex",sm:"flex",xs:"none"},
        justifyContent: "center",
        flexDirection: "column",
        width: { lg: "779px", md: "700px", sm: "480px", xs: "280px" },
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "10px",
              //   width: {lg:"779px",md:"500px",sm:"480px",xs:"250px"},
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                height: "56px",
                backgroundColor: "primary.main",
                borderRadius: "20px",
                
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "16px", md: "15px", sm: "13px", xs: "12px" },
                  lineHeight: "45px",
                  marginRight: "10px",
                  color:"#F2FFF8"
                }}
              >
                {/* <AddIcon /> */}
                 فصل دوم: react چیست؟
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "16px", md: "15px", sm: "13px", xs: "12px" },
                  lineHeight: "45px",
                  color: "#fff",
                  marginLeft: "10px",
                }}
              >
                20 mins
                <AccessTimeIcon sx={{ marginRight: "10px" }} />
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
           
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                height: "56px",
                backgroundColor: "#ECEFF1",
                borderRadius: "20px",
               
              }}
            >
              <Box
                sx={{
                  // width: "132px",
                  width:"100%",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "33px",
                    width: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    height: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    borderRadius: "100px",
                    backgroundColor: "primary.main",
                    textAlign: "center",
                    marginTop: "11px",
                    marginRight: "20px",
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                  }}
                >
                  1
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                    lineHeight: "55px",
                    marginRight: "10px",
                    color: "#333",
                  }}
                >
                اموزش ریداکس
                </Typography>
              </Box>
              <Box
                sx={{
                    width: "100%",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "10px",
                    },
                    lineHeight: "55px",
                    color: "#333",
                  }}
                >
                  46 mins
                  <AccessTimeIcon
                    sx={{ marginTop: "15px", marginRight: "10px" }}
                  />
                </Typography>
                <Button sx={{ marginTop: "20px" }}>
                  {" "}
                  <FileDownloadIcon sx={{ fontSize: "20px" }} />{" "}
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                height: "56px",
                backgroundColor: "#ECEFF1",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  // width: "132px",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "33px",
                    width: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    height: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    borderRadius: "100px",
                    backgroundColor: "primary.main",
                    textAlign: "center",
                    marginTop: "11px",
                    marginRight: "20px",
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                  }}
                >
                  1
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                    lineHeight: "55px",
                    marginRight: "10px",
                    color: "#333",
                  }}
                >
             اموزش استیت ها
                </Typography>
              </Box>
              <Box
                sx={{
                  // width: "187px",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "10px",
                    },
                    lineHeight: "55px",
                    color: "#333",
                  }}
                >
                  6 mins
                  <AccessTimeIcon
                    sx={{ marginTop: "20px", marginRight: "10px" }}
                  />
                </Typography>
                <Button sx={{ marginTop: "20px" }}>
                  {" "}
                  <FileDownloadIcon sx={{ fontSize: "20px" }} />{" "}
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                height: "56px",
                backgroundColor: "#ECEFF1",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  // width: "187px",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "33px",
                    width: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    height: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    borderRadius: "100px",
                    backgroundColor: "primary.main",
                    textAlign: "center",
                    marginTop: "11px",
                    marginRight: "20px",
                  }}
                >
                  2
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                    lineHeight: "55px",
                    marginRight: "10px",
                    color: "#333",
                  }}
                >
                 اموزش کانتکست
                </Typography>
              </Box>
              <Box
                sx={{
                  // width: "100%",
                  // height: "26px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "10px",
                    },
                    lineHeight: "55px",
                    color: "#333",
                  }}
                >
                  2 hrs 40 mins
                  <AccessTimeIcon
                    sx={{ marginTop: "15px", marginRight: "10px" }}
                  />
                </Typography>
                <Button>
                  <FileDownloadIcon sx={{ fontSize: "20px" }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "10px",
              //   width: {lg:"779px",md:"600px",sm:"480px",xs:"250px"},
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                height: "56px",
                backgroundColor: "primary.main",
                borderRadius: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "16px", md: "15px", sm: "13px", xs: "12px" },
                  lineHeight: "45px",
                  marginRight: "10px",
                  color:"#F2FFF8"
                }}
              >
                 فصل اول: next چیست؟
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "16px", md: "15px", sm: "13px", xs: "12px" },
                  lineHeight: "45px",
                  color: "#fff",
                  marginLeft: "10px",
                }}
              >
                56 mins
                <AccessTimeIcon sx={{ marginRight: "10px" }} />
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                height: "56px",
                backgroundColor: "#ECEFF1",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  // width: "132px",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "33px",
                    width: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    height: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    borderRadius: "100px",
                    backgroundColor: "primary.main",
                    textAlign: "center",
                    marginTop: "11px",
                    marginRight: "20px",
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                  }}
                >
                  1
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                    lineHeight: "55px",
                    marginRight: "10px",
                    color: "#333",
                  }}
                >
                  javaScript
                </Typography>
              </Box>
              <Box
                sx={{
                  // width: "187px",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "10px",
                    },
                    lineHeight: "55px",
                    color: "#333",
                  }}
                >
                  56 mins
                  <AccessTimeIcon
                    sx={{ marginTop: "15px", marginRight: "10px" }}
                  />
                </Typography>
                <Button sx={{ marginTop: "20px" }}>
                  {" "}
                  <FileDownloadIcon sx={{ fontSize: "20px" }} />{" "}
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                height: "56px",
                backgroundColor: "#ECEFF1",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  // width: "132px",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "33px",
                    width: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    height: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    borderRadius: "100px",
                    backgroundColor: "primary.main",
                    textAlign: "center",
                    marginTop: "11px",
                    marginRight: "20px",
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                  }}
                >
                  1
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                    lineHeight: "55px",
                    marginRight: "10px",
                    color: "#333",
                  }}
                >
                  اموزش next
                </Typography>
              </Box>
              <Box
                sx={{
                  // width: "187px",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "10px",
                    },
                    lineHeight: "55px",
                    color: "#333",
                  }}
                >
                  50 mins
                  <AccessTimeIcon
                    sx={{ marginTop: "15px", marginRight: "10px" }}
                  />
                </Typography>
                <Button sx={{ marginTop: "20px" }}>
                  {" "}
                  <FileDownloadIcon sx={{ fontSize: "20px" }} />{" "}
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                height: "56px",
                backgroundColor: "#ECEFF1",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  // width: "187px",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "33px",
                    width: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    height: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    borderRadius: "100px",
                    backgroundColor: "primary.main",
                    textAlign: "center",
                    marginTop: "11px",
                    marginRight: "20px",
                  }}
                >
                  2
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                    lineHeight: "55px",
                    marginRight: "10px",
                    color: "#333",
                  }}
                >
              اموزش تایپ اسکریپت
                </Typography>
              </Box>
              <Box
                sx={{
                  // width: "100%",
                  // height: "26px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "10px",
                    },
                    lineHeight: "55px",
                    color: "#333",
                  }}
                >
                  2 hrs 40 mins
                  <AccessTimeIcon
                    sx={{ marginTop: "20px", marginRight: "10px" }}
                  />
                </Typography>
                <Button>
                  <FileDownloadIcon sx={{ fontSize: "20px" }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "10px",
              //   width: {lg:"779px",md:"600px",sm:"480px",xs:"250px"},
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                height: "56px",
                backgroundColor: "primary.main",
                borderRadius: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "16px", md: "15px", sm: "13px", xs: "12px" },
                  lineHeight: "45px",
                  marginRight: "10px",
                  color:"#F2FFF8"
                }}
              >
                {/* <AddIcon />  */}
                فصل اول: Html چیست؟
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "16px", md: "15px", sm: "13px", xs: "12px" },
                  lineHeight: "45px",
                  color: "#fff",
                  marginLeft: "10px",
                }}
              >
                56 mins
                <AccessTimeIcon sx={{ marginRight: "10px" }} />
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                height: "56px",
                backgroundColor: "#ECEFF1",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  // width: "132px",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "33px",
                    width: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    height: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    borderRadius: "100px",
                    backgroundColor: "primary.main",
                    textAlign: "center",
                    marginTop: "11px",
                    marginRight: "20px",
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                  }}
                >
                  1
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                    lineHeight: "55px",
                    marginRight: "10px",
                    color: "#333",
                  }}
                >
                  تگ html javaScript
                </Typography>
              </Box>
              <Box
                sx={{
                  // width: "187px",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "10px",
                    },
                    lineHeight: "55px",
                    color: "#333",
                  }}
                >
                  56 mins
                  <AccessTimeIcon
                    sx={{ marginTop: "15px", marginRight: "10px" }}
                  />
                </Typography>
                <Button sx={{ marginTop: "20px" }}>
                  {" "}
                  <FileDownloadIcon sx={{ fontSize: "20px" }} />{" "}
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                height: "56px",
                backgroundColor: "#ECEFF1",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  // width: "132px",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "33px",
                    width: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    height: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    borderRadius: "100px",
                    backgroundColor: "primary.main",
                    textAlign: "center",
                    marginTop: "11px",
                    marginRight: "20px",
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                  }}
                >
                  1
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                    lineHeight: "55px",
                    marginRight: "10px",
                    color: "#333",
                  }}
                >
                  اموزش  javaScript
                </Typography>
              </Box>
              <Box
                sx={{
                  // width: "187px",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "10px",
                    },
                    lineHeight: "55px",
                    color: "#333",
                  }}
                >
                  56 mins
                  <AccessTimeIcon
                    sx={{ marginTop: "20px", marginRight: "10px" }}
                  />
                </Typography>
                <Button sx={{ marginTop: "20px" }}>
                  {" "}
                  <FileDownloadIcon sx={{ fontSize: "20px" }} />{" "}
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                height: "56px",
                backgroundColor: "#ECEFF1",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  // width: "187px",
                  height: "26px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "33px",
                    width: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    height: { lg: "32px", md: "32px", sm: "27px", xs: "27px" },
                    borderRadius: "100px",
                    backgroundColor: "primary.main",
                    textAlign: "center",
                    marginTop: "11px",
                    marginRight: "20px",
                  }}
                >
                  2
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "12px",
                    },
                    lineHeight: "55px",
                    marginRight: "10px",
                    color: "#333",
                  }}
                >
                  تگ html
                </Typography>
              </Box>
              <Box
                sx={{
                  // width: "100%",
                  // height: "26px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "13px",
                      xs: "10px",
                    },
                    lineHeight: "55px",
                    color: "#333",
                  }}
                >
                  2 hrs 40 mins
                  <AccessTimeIcon
                    sx={{ marginTop: "15px", marginRight: "10px" }}
                  />
                </Typography>
                <Button>
                  <FileDownloadIcon sx={{ fontSize: "20px" }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>

        {/* </AccordionDetails> */}
      </Accordion>
    </Box>
  );
}
