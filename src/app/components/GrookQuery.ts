
// GROQ Query to fetch data from Sanity
// get all products
const query = encodeURIComponent(`
        *[_type == "product"]{
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

export const sanityUrl: string = `https:${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`;

