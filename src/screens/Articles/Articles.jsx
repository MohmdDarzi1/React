import { Box } from "@mui/system";
import PaginationComponent from "../../components/common/PaginationComponent";

import ArticlesHeroSection from "./ArticlesHeroSection/ArticlesHeroSection";
import ArticlesContent from "./ArticlesContent";
import ArticlesTopBox from "./ArticlesTopBox";
import { useGetTopNews } from "../../core/services/api/News";
import { useEffect, useState } from "react";
import Loader from "../../components/common/Loader";

const Articles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchValue, setSearchValue] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectValue, setSelectValue] = useState();

  const { data, isPending, isError } = useGetTopNews(
    searchValue,
    currentPage,
    selectValue
  );
  // useEffect(() => {
  //   console.log("data", data);
  // }, [data]);
  const onSelectChange = (value) => {
    setSelectValue(value);
    // اعمال تغییرات بر اساس مقدار انتخاب شده
  };
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        // position={"relative"}
        bgcolor={"primary.background"}
        color={"text.primary"}
        sx={{ width: { lg: "1240px", xs: "300px", sm: "600px", md: "900px" } }}
      >
        <ArticlesHeroSection />
        <ArticlesTopBox
          onSearchChange={(e) =>
            setSearchValue(e.target.value ? e.target.value : undefined)
          }
          searchValue={searchValue}
          //  const onSelectChange={(value) => {
          //     setSelectValue(value);
          //   }}
          // selectValue={selectValue}

          selectValue={selectValue}
          onSelectChange={onSelectChange}
        />

        {isPending ? (
          <Loader />
        ) : (
          <ArticlesContent data={data?.news} isPending={isPending} />
        )}
        <PaginationComponent
          totalCount={data?.totalCount}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Box>
    </Box>
  );
};

export default Articles;
