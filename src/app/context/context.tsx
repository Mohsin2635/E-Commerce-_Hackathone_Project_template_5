"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import { sanityUrl } from "../components/GrookQuery";
import reducer from "../reducers/ProductReducer";
import { ProductState  } from "../reducers/ProductReducer";

// Define AppContextType with better TypeScript support
interface AppContextType extends ProductState {
  GetSingleProduct: (slug: string) => void;
}

const initialState: ProductState = {
  isLoading: false,
  isError: false,
  products: [],
  isSingleLoading: false,
  singleProduct: null,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Refactored fetchData function with better error handling and type safety
  const fetchData = async () => {
    dispatch({ type: "SET_LOADING" });

    try {
      const response = await fetch(sanityUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data from Sanity");
      }
      const result = await response.json();
      dispatch({ type: "MY_SANITY_DATA", payload: result.result });
    } catch (err: unknown) {
      console.error("Error fetching data:", err);
      dispatch({ type: "API_ERROR" });
    }
  };

  // Refactored GetSingleProduct with better error handling and query formatting
  const GetSingleProduct = async (slug: string) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    const query = encodeURIComponent(`
      *[_type == "product" && _id == "${slug}"]{
        _id,
        rating,
        reviewsCount,
        title,
        price,
        dicountPercentage,
        description,
        isNew,
        tags,
        productImage {
          asset->{
            _ref,
            url
          }
        }
      }
    `);

    const sanityUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`;

    try {
      const res = await fetch(sanityUrl);
      if (!res.ok) {
        throw new Error("Failed to fetch single product data");
      }
      const SingleProduct = await res.json();
      dispatch({ type: "GET_SINGLE_PRODUCT", payload: SingleProduct.result[0] });
    } catch (err: unknown) {
      console.error("Error fetching single product:", err);
      dispatch({ type: "SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, GetSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook to access context
const useProductContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useProductContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, AppContext, useProductContext };
