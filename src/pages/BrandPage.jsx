import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  useMediaQuery,
  useTheme,
  Fade,
  IconButton
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import { keyframes } from "@mui/system";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function BrandPage() {
  const { brand } = useParams();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xl"));

  

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    product_type: "",
    price: [0, 100],
    rating: [0, 5],
    search: "",
  });
  const [openFiltersModal, setOpenFiltersModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${BASE_URL}?brand=${brand}`).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [brand]);

  useEffect(() => {
    const result = products.filter(
      (p) =>
        (!filters.product_type || p.product_type === filters.product_type) &&
        Number(p.price || 0) >= filters.price[0] &&
        Number(p.price || 0) <= filters.price[1] &&
        (!p.rating ||
          (p.rating >= filters.rating[0] && p.rating <= filters.rating[1])) &&
        (!filters.search ||
          (p.name &&
            p.name.toLowerCase().includes(filters.search.toLowerCase())))
    );
    setFiltered(result);
  }, [products, filters]);

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 700,
          mb: { xs: 1, sm: 0 },
          fontSize: { xs: "1.3rem", sm: "2rem", md: "2.3rem" },
          background: "linear-gradient(90deg, #ff6a00, #ee0979, #00f0ff)",
          backgroundSize: "200% 200%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: `${gradientAnimation} 4s ease infinite`,
        }}
      >
        {brand.charAt(0).toUpperCase() + brand.slice(1)} Products
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
          padding: "0 3rem",
        }}
      >
        <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 48%" } }}>
          <SearchBar
            value={filters.search}
            onChange={(val) => setFilters((f) => ({ ...f, search: val }))}
          />
          {isSmallScreen && (<IconButton
              color="primary"
              sx={{ mt: 1  , position:"absolute", right:10, top:{
                sm:120,xs:120,md:150
              }}}
              onClick={() => setOpenFiltersModal(true)}
            >
              <FilterListIcon fontSize="large" />
            </IconButton>
            )}
        </Box>

        {isSmallScreen ? (
          <>
            <Dialog
              open={openFiltersModal}
              onClose={() => setOpenFiltersModal(false)}
              fullWidth
            >
              <DialogTitle>Filters</DialogTitle>
              <DialogContent>
                <Filters filters={filters} setFilters={setFilters} />
                <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
                  <Button onClick={() => setOpenFiltersModal(false)}>Close</Button>
                </Box>
              </DialogContent>
            </Dialog>
          </>
        ) : (
          <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 48%" } }}>
            <Filters filters={filters} setFilters={setFilters} />
          </Box>
        )}
      </Box>

      <Typography
        sx={{
          width: "95%",
          mx: "auto",
          textAlign: "center",
          borderBottom: "1px solid black",
          lineHeight: "0.1em",
          mt: 2,
        }}
      ></Typography>

      <Box
        sx={{
          position: "fixed",
          top: "260px",
          left: 0,
          right: 10,
          bottom: 0,
          overflowY: "auto",
          padding: "1rem 3rem",
          "&::-webkit-scrollbar": { width: "8px" },
          "&::-webkit-scrollbar-track": { background: "#f1f1f1", borderRadius: "4px" },
          "&::-webkit-scrollbar-thumb": { background: "#888", borderRadius: "4px" },
          "&::-webkit-scrollbar-thumb:hover": { background: "#555" },
        }}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 300,
              bgcolor: "transparent",
              mt: 6,
            }}
          >
            <CircularProgress size={54} color="primary" />
          </Box>
        ) : filtered.length ? (
          <Fade in timeout={400}>
            <Box>
              <ProductList products={filtered} />
            </Box>
          </Fade>
        ) : (
          <Typography
            align="center"
            color="text.secondary"
            sx={{ mt: 6, fontSize: 18 }}
          >
            No products found.
          </Typography>
        )}
      </Box>
    </Container>
  );
}
