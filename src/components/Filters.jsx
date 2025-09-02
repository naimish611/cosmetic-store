import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Box,
  Typography,
} from "@mui/material";

const types = [
  "",
  "blush",
  "bronzer",
  "eyebrow",
  "eyeliner",
  "eyeshadow",
  "foundation",
  "lip_liner",
  "lipstick",
  "mascara",
  "nail_polish",
];

export default function Filters({ filters, setFilters }) {
  const fixedWidth = "100%";
  // const fixedWidth = 200;

  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Box sx={{ width: !filters.product_type ? 200 : fixedWidth }}>
            <FormControl fullWidth size="medium">
              <InputLabel>Product Type</InputLabel>
              <Select
                value={filters.product_type}
                label="Product Type"
                onChange={(e) =>
                  setFilters((f) => ({ ...f, product_type: e.target.value }))
                }
              >
                <MenuItem value="">All</MenuItem>
                {types.slice(1).map((type) => (
                  <MenuItem key={type} value={type}>
                    {type.replace("_", " ").toUpperCase()}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item>
          <Box sx={{ width: fixedWidth }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Price Range (₹{filters.price[0]} - ₹{filters.price[1]})
            </Typography>
            <Slider
              value={filters.price}
              onChange={(e, v) => setFilters((f) => ({ ...f, price: v }))}
              valueLabelDisplay="auto"
              min={0}
              max={100}
            />
          </Box>
        </Grid>

        <Grid item>
          <Box sx={{ width: fixedWidth }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Rating Range ({filters.rating[0]} - {filters.rating[1]})
            </Typography>
            <Slider
              value={filters.rating}
              onChange={(e, v) => setFilters((f) => ({ ...f, rating: v }))}
              valueLabelDisplay="auto"
              min={0}
              max={5}
              step={0.1}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
