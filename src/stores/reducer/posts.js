const initialState = {
  data: [],
  post: [],
  isLoading: false,
  isError: false,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POSTS_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "GET_ALL_POSTS_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.posts,
      };
    }
    case "GET_ALL_POSTS_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
      };
    }
    case "GET_POST_BY_SLUG_PENDING":
      return {
        ...state,
        post: [],
        isLoading: true,
        isError: false,
        message: "",
      };

    case "GET_POST_BY_SLUG_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        post: action.payload.data.posts,
      };

    case "GET_POST_BY_SLUG_REJECTED":
      return {
        ...state,
        post: [],
        isLoading: false,
        isError: true,
      };
    default: {
      return state;
    }
  }
};

export default posts;
