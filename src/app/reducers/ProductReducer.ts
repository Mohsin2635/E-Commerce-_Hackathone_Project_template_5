import { Product } from "../components/Product_Image";
// State type

export interface ProductState {
  isLoading: boolean;
  isError: boolean;
  products: Product[];
  singleProduct:  Product | null; 
  isSingleLoading: boolean;
}

// Action types
interface SetLoadingAction {
  type: "SET_LOADING";
}

interface MySanityDataAction {
  type: "MY_SANITY_DATA";
  payload: Product[]; // Refine this based on product structure
}

interface ApiErrorAction {
  type: "API_ERROR";
}

interface SetSingleLoadingAction {
  type: "SET_SINGLE_LOADING";
}

interface GetSingleProductAction {
  type: "GET_SINGLE_PRODUCT";
  payload: Product // Refine this based on single product structure
}

interface SingleErrorAction {
  type: "SINGLE_ERROR";
}

// Action type union
type ProductAction =
  | SetLoadingAction
  | MySanityDataAction
  | ApiErrorAction
  | SetSingleLoadingAction
  | GetSingleProductAction
  | SingleErrorAction;

// Reducer function
const ProductReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "MY_SANITY_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };
    case "API_ERROR":
      return {
        ...state,
        isError: true,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "GET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        isError: false,
        singleProduct: action.payload,
      };
    case "SINGLE_ERROR":
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export default ProductReducer;
