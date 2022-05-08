import axios from "axios";

export const GET_USER = "GET_USER";
export const getUser = () => {
  return async (dispatch) => {
    var json = await axios.get("http://localhost:3001/users");
    return dispatch({
      type: "GET_USER",
      payload: json.data,
    });
  };
};

export function getProducts() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/products");
    return dispatch({
      type: "GET_PRODUCTS",
      payload: json.data,
    });
  };
}
export const CLEAN_FILTER = "CLEAN_FILTER";
export function cleanFilter() {
  return {
    type: "CLEAN_FILTER",
    payload: {},
  };
}

export function getDetail(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/products?name=" + name);

      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCategories() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/categories");
      return dispatch({
        type: "GET_CATEGORIES",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postProducts(payload) {
  return async function () {
    const response = await axios.post(
      "http://localhost:3001/postProduct",
      payload
    );
    return response;
  };
}

export function postUser(payload) {
  return async function () {
    let postUser = await axios.post("http://localhost:3001/postUser", payload);
    return postUser;
  };
}

export const filterByCategory = (category) => {
  return async (dispatch) => {
    var json = await axios.get(
      "http://localhost:3001/productCategory?category=" + category
    );
    return dispatch({
      type: "FILTER_BY_CATEGORY",
      payload: json.data,
    });
  };
};

export function getProductsByName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/products?name=" + name);
      return dispatch({
        type: "GET_PRODUCTS_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByBrand(payload) {
  return {
    type: "FILTER_BY_BRAND",
    payload,
  };
}
export function filterByPrice(payload) {
  return {
    type: "FILTER_BY_PRICE",
    payload,
  };
}
export const FILTER_BY_BRANDFILTER = "FILTER_BY_BRANDFILTER";
export function filterByBrandCategoriesFilter(payload) {
  return {
    type: FILTER_BY_BRANDFILTER,
    payload,
  };
}

export function cleanDog() {
  return {
    type: "CLEAN_DOGS",
    payload: {},
  };
}

export function orderProducts(payload) {
  return {
    type: "ORDER_PRODUCTS",
    payload,
  };
}

export function darkMode(payload) {
  return {
    type: "DARKMODE",
    payload: payload,
  };
}

export function getShops() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/getPayments");
      return dispatch({
        type: "GET_SHOPS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getShopById(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/getPayments?id=" + id);
      return dispatch({
        type: "GET_SHOP_BY_ID",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function setCurrentPage(payload) {
  return {
    type: "SET_CURRENT_PAGE",
    payload: payload,
  };
}

export function postCategory(payload) {
  return async function () {
    const response = await axios.post(
      "http://localhost:3001/postCategory",
      payload
    );
    return response;
  };
}
export function postBuyCart(payload) {
  return async function () {
    const response = await axios.post(
      "http://localhost:3001/Checkout",
      payload
    );
    console.log(response.data)
    return response.data;
  };
}

export function deleteCategory(id) {
  return async function (dispatch) {
    try {
      const json = await axios.delete(
        "http://localhost:3001/deleteCategory/" + id
      );
      return dispatch({
        type: "DELETE_CATEGORY",
        payload: json.data,
      });
    } catch (error) {
      console.log("catch: " + error);
    }
  };
}

export function deleteProduct(id) {
  return async function (dispatch) {
    try {
      const json = await axios.delete(
        "http://localhost:3001/deleteProduct/" + id
      );
      return dispatch({
        type: "DELETE_PRODUCT",
        payload: json.data,
      });
    } catch (error) {
      console.log("catch: " + error);
    }
  };
}

export function updateProduct(id, payload) {
  console.log(id)
  console.log(payload)
  return async function(dispatch) {
      try {
          const json = await axios.put('http://localhost:3001/updateProduct/' + id, payload)
          return dispatch({
              type: "UPDATE_PRODUCT",
              payload: json.data
          })
      } catch (error) {
          console.log('catch: ' + error);
      }
  }
}

export function sortUsersByLastName(payload) {
  return {
    type: "ORDER_USER_BY_LASTNAME",
    payload,
  };
}

// export function filterUsresByValue(payload) {
//   return {
//     type: "FILTER_USER_BY_VALUE",
//     payload,
//   };
// }

export function sortOrderByEmail(payload) {
  return {
    type: "ORDER_ORDER_BY_EMAIL",
    payload,
  };
}

export function sortOrderByAmount(payload) {
  return {
    type: "ORDER_ORDER_BY_AMOUNT",
    payload,
  };
}