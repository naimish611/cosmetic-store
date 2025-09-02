import { Box, TextField } from '@mui/material';
export default function SearchBar({ value, onChange }) {
  return (
    <Box sx={{ my: 2 }}>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search products by name"
        value={value}
        onChange={e => onChange(e.target.value)}
        sx={{
          background: "#fafbfa",
          borderRadius: 2,
        }}
      />
    </Box>
  );
}
