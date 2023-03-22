import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Box,
} from "@material-ui/core";
import { Search as SearchIcon, Room as RoomIcon } from "@material-ui/icons";

function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log(`Searching for ${searchText} near ${location}`);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent={"space-between"} className="banner-search-box" style={{ background: "white", padding: "20px 20px 10px 20px", borderRadius: "2px" }}>
      <TextField className="search-input"
        placeholder="Job Title or Keywords"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField className="search-input"

        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RoomIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search My Job
      </Button>
    </Box>
  );
}

export default SearchBox;
