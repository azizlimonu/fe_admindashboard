import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import React from 'react';
import FlexBetween from './FlexBetween';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  return (
    <GridToolbarContainer>
      <FlexBetween>
        <GridToolbarColumnsButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </FlexBetween>

      <TextField
        label="Search here"
        sx={{ mb: "0.5rem", width: "15rem" }}
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        variant="standard"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setSearch(searchInput);
                  setSearchInput("");
                }}
              >
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </GridToolbarContainer>
  )
}

export default DataGridCustomToolbar;