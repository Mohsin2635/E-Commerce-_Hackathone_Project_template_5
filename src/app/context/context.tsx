"use client"
import { createContext, useContext, useEffect, useReducer } from "react";
import { sanityUrl } from "../components/GrookQuery";
import reducer from "../reducers/ProductReducer"
import { ProductState } from "../reducers/ProductReducer";


interface AppContextType extends ProductState {
    GetSingleProduct: (slug: string) => void;
}

const initialState: ProductState = {
    isLoading: false,
    isError: false,
    products: [],
    // featureProducts: [],
    isSingleLoading: false,
    singleProduct:{},
}


const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [product, setProducts] = useState<Product[]>([]); 
    // const [loading, setLoading] = useState<boolean>(true); 
    // const [error, setError] = useState<string | null>(null);

    // Fetch data from Sanity using plain fetch
    const fetchData = async () => {
        dispatch({ type: "SET_LOADING" })

        try {
            const response = await fetch(sanityUrl);
            const result = await response.json();
            // console.log("asdjhsdgajhdasj", result.result)
            // if (response.ok) {
            //     setProducts(result.result); // TypeScript will infer type based on state
            // } else {
            //     throw new Error("Failed to fetch data from Sanity");
            // }
            dispatch({ type: "MY_SANITY_DATA", payload: result.result })
            // setLoading(false);
        } catch (err: unknown) { // Specify error type
            console.error("Error fetching data:", err);
            dispatch({ type: "API_ERROR" })
            // setError(err.message);
            // setLoading(false);
        }
    };
    const GetSingleProduct= async (slug:string) => {
        // console.log(slug.toString())

        dispatch({ type: "SET_SINGLE_LOADING" })

        const SingleQuery = encodeURIComponent(`
            *[_type == "product" && _id == "${slug.toString()}"]{
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
      
       const SingSanityUrl: string = `https:${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${SingleQuery}`;
      
        try {
            const res = await fetch(SingSanityUrl);
            const SingleProduct = await res.json();
            // console.log("singleProduct", SingleProduct.result)
            dispatch({ type: "GET_SINGLE_PRODUCT", payload: SingleProduct.result })

        } catch (err:unknown) {
            console.error("Error fetching data:", err);
            dispatch({ type: "SINGLE_ERROR" })
            
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    // Render Component
    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;

    // console.log(state.products.result);

    return (
        <AppContext.Provider value={{ ...state, GetSingleProduct }}>
            {children}
        </AppContext.Provider>

    )
}
// custom Hooks
const useProductContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useProductContext must be used within a AppProvider");
    }
    return context;
};
export { AppProvider,AppContext, useProductContext };