import { Box, useMediaQuery } from "@mui/material";
import Header from "components/Header";
import ProductCard from "components/ProductCard";
import { useGetProductsQuery } from "state/api";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isLargeScreen = useMediaQuery("(min-width: 1000px)");

  if (!data && isLoading) return "Loading";
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See Your Product List" />

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{
          "& > div": { gridColumn: isLargeScreen ? undefined : "span 4" },
        }}
      >
        {data?.map((item) => (
          <ProductCard
            key={item._id}
            _id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            rating={item.rating}
            category={item.category}
            supply={item.supply}
            stat={item.stat[0]}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Products;