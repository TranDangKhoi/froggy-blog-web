import { Pagination } from "antd";
import { debounce } from "lodash";
import { useQuery, useQueryClient } from "react-query";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { adminApi } from "src/apis/admin.apis";
import ArrowLeftIcon from "src/components/Icon/ArrowLeftIcon";
import ArrowRightIcon from "src/components/Icon/ArrowRightIcon";
import EditIcon from "src/components/Icon/EditIcon";
import EllipsisIcon from "src/components/Icon/EllipsisIcon";
import LongArrowDownIcon from "src/components/Icon/LongArrowDownIcon";
import LongArrowUpIcon from "src/components/Icon/LongArrowUpIcon";
import ShowPasswordIcon from "src/components/Icon/ShowPasswordIcon";
import TrashIcon from "src/components/Icon/TrashIcon";
import Popover from "src/components/Popover";
import SkeletonLoading from "src/components/SkeletonLoading";
import { path } from "src/constants/path";
import useStoriesQueryConfig from "src/hooks/useStoriesQueryConfig";

const DashboardUsersPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const queryConfig = useStoriesQueryConfig();
  const { data: storyListData, isLoading: storyListIsLoading } = useQuery({
    queryKey: ["dashboardStories", queryConfig],
    queryFn: () => adminApi.searchStoriesAdmin(queryConfig),
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
    refetchOnMount: false,
  });
  const storyList = storyListData?.data.data.data;
  const userListTotal = storyListData?.data.data.totalRecord;
  const handleChangeCurrentPage = (pageNumber: number) => {
    navigate({
      pathname: path.DASHBOARD_STORIES,
      search: createSearchParams({
        ...queryConfig,
        pageNumber: pageNumber?.toString(),
      }).toString(),
    });
  };
  const handleSearch = debounce((keyword: string) => {
    navigate({
      pathname: path.DASHBOARD_STORIES,
      search: createSearchParams({
        ...queryConfig,
        keyword: keyword,
      }).toString(),
    });
  }, 1000);
  const handleSort = (column: string) => {
    navigate({
      pathname: path.DASHBOARD_STORIES,
      search: createSearchParams({
        ...queryConfig,
        column: column,
        orderBy: queryConfig.column === column && queryConfig.orderBy === "desc" ? "asc" : "desc",
      }).toString(),
    });
  };
  const renderSortArrow = (column: string) => {
    if (queryConfig.column === column) {
      if (queryConfig.orderBy === "asc") {
        return <LongArrowUpIcon />;
      } else {
        return <LongArrowDownIcon />;
      }
    } else {
      return <LongArrowDownIcon opacity={0.2} />;
    }
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tighter">Stories</h1>
          <h2 className="text-xl font-medium text-lightGrey">Manage all of Froggy Blog stories</h2>
        </div>
        <div className="flex items-center gap-4">
          <input
            className="w-72 h-10 px-4 rounded-md border border-gray-200 focus:outline-none"
            placeholder="Search stories"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-7 mx-4 mt-4 gap-4">
        <div className="col-span-1 font-medium cursor-pointer">ID</div>
        <div className="col-span-1 font-medium cursor-pointer">Thumbnail</div>
        <div
          className="col-span-1 font-medium cursor-pointer flex items-center gap-1"
          onClick={() => handleSort("title")}
          aria-hidden
        >
          <span>Title</span>
          {renderSortArrow("title")}
        </div>
        <div
          className="col-span-1 font-medium cursor-pointer flex items-center gap-1"
          aria-hidden
        >
          <span>Author</span>
        </div>
        <div
          className="col-span-1 font-medium cursor-pointer flex items-center gap-1"
          onClick={() => handleSort("updateDate")}
          aria-hidden
        >
          <span>Published at</span>
          {renderSortArrow("updateDate")}
        </div>
        <div className="col-span-1 font-medium cursor-pointer">Topics</div>
        <div className="col-span-1 font-medium cursor-pointer">Actions</div>
      </div>
      {storyListIsLoading && (
        <>
          <SkeletonLoading quantity={10}></SkeletonLoading>
        </>
      )}
      {storyList?.map((story) => (
        <div
          key={story.id}
          className="grid grid-cols-7 gap-4 mt-4 py-2 items-center px-4 rounded-md cursor-pointer bg-white shadow-boxShadow1"
          aria-hidden
        >
          <div className="col-span-1 font-medium cursor-pointer">
            {story.id.substring(0, 7) + "..." + story.id.substring(20, 27)}
          </div>
          <div className="col-span-1 font-medium cursor-pointer">
            <img
              className="w-20 h-20 object-cover"
              src={story.thumbnail}
              alt={story.title}
            />
          </div>
          <div
            className="col-span-1 font-medium cursor-pointer line-clamp-1"
            title={story.title}
          >
            {story.title}
          </div>
          <div className="col-span-1 font-medium cursor-pointer line-clamp-1">{story.author.fullName}</div>
          <div className="col-span-1 font-medium cursor-pointer line-clamp-1">
            {new Date(story?.publishDate as string).toLocaleDateString("en-GB")}
          </div>
          <div className="col-span-1 font-medium cursor-pointer line-clamp-1">
            <Popover
              offsetPx={12}
              as={"div"}
              renderPopover={
                <div className="bg-black bg-opacity-60 py-2 px-4">
                  {story.listTopic.map((topic) => (
                    <div className="font-medium text-white">{topic.topicName}</div>
                  ))}
                </div>
              }
              sameWidthWithChildren
              className="text-normalGreen hover:!text-normalGreenHover"
            >
              Hover to show all
            </Popover>
          </div>
          <div className="col-span-1 font-medium cursor-pointer flex items-center gap-2">
            <Link
              to={`/user/profile/${story.id}`}
              className="flex items-center justify-center w-7 h-7 border border-gray-200 rounded cursor-pointe"
            >
              <ShowPasswordIcon
                width={20}
                height={20}
                color="#6b6b6b"
              ></ShowPasswordIcon>
            </Link>
            <button className="flex items-center justify-center w-7 h-7 border border-gray-200 rounded cursor-pointe">
              <EditIcon
                width={20}
                height={20}
                color="#6b6b6b"
              ></EditIcon>
            </button>
            <button className="flex items-center justify-center w-7 h-7 border border-gray-200 rounded cursor-pointe">
              <TrashIcon
                width={20}
                height={20}
                color="#6b6b6b"
              ></TrashIcon>
            </button>
          </div>
        </div>
      ))}
      <Pagination
        total={userListTotal}
        defaultPageSize={Number(queryConfig.pageSize)}
        jumpNextIcon={<EllipsisIcon></EllipsisIcon>}
        jumpPrevIcon={<EllipsisIcon></EllipsisIcon>}
        prevIcon={<ArrowLeftIcon></ArrowLeftIcon>}
        nextIcon={<ArrowRightIcon></ArrowRightIcon>}
        current={Number(queryConfig.pageNumber)}
        showQuickJumper
        showSizeChanger={false}
        onChange={(page) => handleChangeCurrentPage(page)}
        pageSize={Number(queryConfig.pageSize)}
        locale={{ jump_to: "Jump to page", page: "" }}
      ></Pagination>
    </>
  );
};

export default DashboardUsersPage;
