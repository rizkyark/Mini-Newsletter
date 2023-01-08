import axios from "../../utils/axios";

export const getAllPosts = (page, limit) => {
  return {
    type: "GET_ALL_POSTS",
    payload: axios.get(`posts?page=${page}&per_page=${limit}`),
  };
};

export const getSinglePost = (slug) => {
  return {
    type: "GET_POST_BY_SLUG",
    payload: axios.get(`posts/${slug}`),
  };
};
