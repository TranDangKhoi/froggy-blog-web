import { ENDPOINTS } from "src/constants/endpoints";
import { TQueryResponse } from "src/types/response.types";
import { TTopics } from "src/types/topic.types";
import http from "src/utils/http";

export const topicApi = {
  getTopics: () => http.get<TQueryResponse<TTopics[]>>(ENDPOINTS.GET_TOPICS),
  getTopicsByKeyword: (keyword: string) =>
    http.get<TQueryResponse<TTopics[]>>(ENDPOINTS.GET_TOPICS, {
      params: { keyword: keyword, orderName: "asc", pageNumber: 1, pageSize: 7 },
    }),
};
