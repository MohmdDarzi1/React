import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TextDetails = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",

        justifyContent: "center",
        widows: { lg: "1280px", md: "900px", sm: "600px", xs: "300px" },
        height: "505px",
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          gap: "12px",

          width: { lg: "840px", md: "800px", sm: "600px", xs: "300px" },
          height: "505px",
          marginTop: "20px",
        }}
      >
        <Typography
          sx={{ width: "100%", textAlign: "right", fontSize: "24px" }}
        >
          {/* چگونه اموزش ببینیم ؟ */}
          {data?.detailsNewsDto?.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontSize={{ lg: "16px", md: "14px", sm: "12px", xs: "10px" }}
        >
          {/* قبل از هر چیزی باید بدانیم که نمیشه یک روند یا روش خاصی رو برای همه
          افراد که ذهنیت های متفاوتی هم از هم دارند، در نظر گرفت. ولی خب هدف
          تمامی این افراد آموزش دیدن و رسیدن به درک عمیقی از اون مطلب است ولی
          آیا برای تمامی افراد آموزش دیدن به این جا ختم میشود و همه به درک عمیقی
          از اون مطلب میرسند؟ قطعا خیر. در ادامه به نحوه رسیدن به درک عمیق مطلب،
          مناسب برای تمامی افراد صحبت خواهیم کرد. مثال: فرض کنید شما در حال
          خواندن یک کتاب هستید، در صفحه 30 یک چیزی را متوجه نشدین. در حالت عادی
          شما به یک صفحه قبل میروید و دوباره خواندن را شروع میکنید و فرض کنید در
          صفحه 40 هم دقیقا همین اتفاق میافتد و به یک صفحه قبل برمیگردید و دوباره
          خواندن را شروع میکنید و تا رسیدن به آخرین صفحه این کتاب این چرخه بارها
          و بارها اتفاق میافتد. نکته و البته جواب ما اینجاست که شما اگر در صفحه
          30 نکته را متوجه نشدین، برای رسیدن به درک عمیق باید به جای صفحه قبلی،
          به صفحه 1 کتاب برگردین و کتاب را از اول دوباره بخوانید، دوباره اگر در
          صفحه 50 نکته ای را متوجه نشدین، دوباره کتاب را از اول شروع کنید. شما
          تا پایان این کتاب به درک عمیق اون مطلبی که قرار بود آموزش ببینید
          میرسید. */}
          {data?.detailsNewsDto?.describe}
        </Typography>
        <Box
          sx={{
            width: { lg: "820px", md: "800px", sm: "600px", xs: "300px" },
            height: "56px",
            // border: "1px solid #ccc",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "primary.main",
              borderRadius: "100px",
              marginTop: "10px",
            }}
          ></Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              width: "820px",

              height: "56px",
              fontSize: { lg: "16px", md: "13px", sm: "10px", xs: "10px" },
              fontWeight: 500,
              textAlign: "right",
            }}
          >
            <Typography
              sx={{
                display: "contents",
                width: "100px",
                color: "primary.main",
              }}
            >
              {" "}
              {/* افزایش انرژی: */}
              {data?.detailsNewsDto.newsCatregoryName}
            </Typography>
            {/* کافئین به‌عنوان یک محرک عصبی عمل می‌کند و با ورود به جریان خون،
            کافئین به مغز می‌رود و سیستم عصب مرکزی را تحریک می‌کند. این احتشام
            ممکن است احساس افزایش انرژی و کاهش خستگی را در شما به ارمغان بیاورد. */}
            {data?.detailsNewsDto.googleDescribe}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { lg: "820px", md: "800px", sm: "600px", xs: "300px" },
            height: "56px",

            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "primary.main",
              borderRadius: "100px",
              marginTop: "10px",
            }}
          ></Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              width: "820px",
              height: "56px",
              fontSize: { lg: "16px", md: "13px", sm: "10px", xs: "10px" },
              fontWeight: 500,
              textAlign: "right",
            }}
          >
            <Typography
              sx={{
                display: "contents",
                width: "100px",
                color: "primary.main",
              }}
            >
              {" "}
              {/* افزایش هوشیاری: */}
              {data?.detailsNewsDto.newsCatregoryName}
            </Typography>
            {/* مصرف قهوه می‌تواند تمرکز و هوشیاری شمارا بهبود بخشد. کافئین می‌تواند
            عملکرد مغزی را بهبود دهد و به شما کمک کند در موقعیت‌های مختلف ازجمله
            مطالعه، کار، و مذاکره بهتر عمل کنید. */}
              {data?.detailsNewsDto.googleDescribe}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { lg: "820px", md: "800px", sm: "600px", xs: "300px" },
            height: "56px",

            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "primary.main",
              borderRadius: "100px",
              marginTop: "10px",
            }}
          ></Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              width: "820px",
              height: "56px",
              fontSize: { lg: "16px", md: "13px", sm: "10px", xs: "10px" },
              fontWeight: 500,
              textAlign: "right",
            }}
          >
            <Typography
              sx={{
                display: "contents",
                width: "100px",
                color: "primary.main",
              }}
            >
              {" "}
              {/* افزایش سطح انرژی بدن: */}
              {data?.detailsNewsDto.newsCatregoryName}
            </Typography>
            {/* کافئین می‌تواند به افزایش سطح هورمون‌هایی مانند اپینفرین (آدرنالین)
            کمک کند. این هورمون‌ها به تنظیم مقدار قند خون و افزایش فعالیت قلب و
            عروق کمک می‌کنند، که نتیجه آن افزایش انرژی و تحرک در بدن است. */}
              {data?.detailsNewsDto.miniDescribe}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TextDetails;
