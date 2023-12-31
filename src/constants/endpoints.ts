export const TOPIC_ENDPOINTS = {
  GET_TOPICS: "/api/topic/search",
  ADD_NEW_TOPIC: "/api/topic/save",
  DELETE_TOPIC: "/api/topic/delete",
} as const;

export const AUTH_ENDPOINTS = {
  LOGIN: "/login",
  REGISTER: "/register",
  LOGOUT: "/api/logout",
  REFRESH_TOKEN: "/refreshToken",
  GET_ME: "/api/user/me",
  UPDATE_ME: "/api/user/profile/update",
  SEARCH_USERS: "/api/user/search",
  GET_ANONYMOUS_PROFILE: "/api/user/findById",
} as const;

export const CHART_ENDPOINTS = {
  GET_CHART_DATA: "/api/user/chart",
  GET_DASHBOARD_CHART_DATA: "/api/dashboard",
};

export const ADMIN_ENDPOINTS = {
  GET_OVERVIEW: "/api/dashboard/total",
  SEARCH_USER_ADMIN: "/api/user/searchAdmin",
  GET_REPORTS: "/api/report/search",
  ADD_ROLE_TO_USER: "/api/role/addRole",
};

export const IMAGE_ENPOINTS = {
  GET_IMAGE_DEFAULT: "/api/image/get/f581b622-adb3-40e1-b09b-1bd80a9697f7.jpg",
  UPLOAD_IMAGE: "/api/image/upload",
} as const;

export const STORY_ENDPOINTS = {
  GET_RECENT_STORIES: "/api/post/search",
  GET_TRENDING_STORIES: "/api/post/trending",
  GET_PENDING_STORIES: "/api/post/me/postWaitApproval",
  GET_STORIES_BY_TOPIC_ID: "/api/post/findByTopicId",
  CREATE_NEW_STORY: "/api/post/save",
  UPDATE_STORY: "/api/post/save",
  GET_STORY_BY_ID: "/api/post/findById",
  GET_STORIES_BY_USER_ID: "/api/post/findPostByUserId",
  SEARCH_STORIES: "/api/post/search",
  GET_FAVORITE_STORIES: "/api/post/findPostUserSaved",
  SAVE_STORY_TO_FAVORITES: "/api/user/savePost",
} as const;

export const COMMENT_ENDPOINTS = {
  COMMENT: "/api/comment/save",
  GET_COMMENTS_BY_POST_ID: "/api/comment/search",
  GET_COMMENTS_COUNT: "/api/comment/count",
  REPORT_COMMENT: "/api/report/saveOrUpdate",
  DELETE_COMMENT: "api/comment/delete",
};
export const LIKE_ENDPOINTS = {
  GET_LIKES_COUNT: "/api/like/count",
  TOGGLE_LIKE: "/api/like",
};
