export const path = {
  HOMEPAGE: "/",
  PROFILE: "/user/profile",
  DASHBOARD: "/dashboard",
  ANONYMOUS_PROFILE: "/user/profile/:userId",
  SETTING: "/user/setting",
  NEWSTORY: "/new-story",
  EDIT_STORY: "/edit-story/:storyId",
  STORY_DETAIL: "/:storyId",
  EDIT_PROFILE: "/user/profile/edit",
  EXPORE_TOPICS: "/explore-topics",
  SEARCH: "/search",
  TAG: "/tag/:slug",
} as const;
