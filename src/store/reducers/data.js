import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE } from "../actions/types";

const initialState = {
  data: {
    terms: [],
    brandsTerms: [],
    styles: [],
  },
  loading: false,
  error: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        loading: true,
        errors: [],
      };
    }
    case GET_DATA_SUCCESS: {
      const { terms, brandsTerms, styles } = action.payload;
      return {
        ...state,
        loading: false,
        data: {
          terms,
          brandsTerms,
          styles,
        },
        errors: [],
      };
    }
    case GET_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default data;
