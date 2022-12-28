import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  Button,
  TextField,
} from "@mui/material";
import { useEffect } from "react";

const SearchForm = ({initId, initCategory}) => {
  const [category, setCategory] = useState(initCategory || "people");
  const [id, setId] = useState(initId);
  let navigate = useNavigate();
  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };
  const handleIdChange = (e) => {
    setId(e.target.value);
    
  };
  useEffect(()=>{
    if (initId && initId !== id) {
      setId(initId)
    }
    if (initCategory && initCategory !== category) {
      setCategory(initCategory)
    }

  },[initId, initCategory])
  return (
    <div style={{ paddingTop: 20 }}>
      <Box
        sx={{
          display: "flex",
          m: "auto",
          p: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormControl sx={{ m: 1, p: 1 }}>
          <InputLabel id="demo-simple-select-label">Search for</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Search for"
            onChange={handleSelectChange}
          >
            <MenuItem value={"people"}>people</MenuItem>
            <MenuItem value={"planets"}>planets</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, p: 1 }}>
          <TextField
            required
            id="outlined-required"
            label="ID "
            defaultValue={id}
            type={"number"}
            onChange={handleIdChange}
          />
        </FormControl>
        <FormControl sx={{ m: 2, p: 1 }}>
          <Button onClick={()=>{
            navigate(`/${category}/${id}`)
          }} variant="contained">Search</Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default SearchForm;
