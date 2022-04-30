const initialState = {
  allProducts: [],
  productsFiltered: [],
  products: [],
  users: [],
  userOne: [],
  productDetail: [],
  filteredByCategory: [],
  brand: [],
  filter: [],
  allBrands: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
        productDetail: [],
      };
    case "POST_PRODUCT":
      return {
        ...state,
        allProducts: action.payload,
      };
    case "GET_USER":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        productDetail: action.payload,
        products: [],
      };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        products: action.payload,
        productDetail: [],
        productsFiltered: action.payload,
        filteredByCategory: action.payload,
      };
    case "GET_PRODUCTS_BY_NAME":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        productDetail: [],
      };
    case "POST_USER":
      return {
        ...state,
        userOne: action.payload,
      };
    case "FILTER_BY_BRAND":
      return {
        ...state,

        filter: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
