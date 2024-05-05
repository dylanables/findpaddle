import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css';
import { Link, useNavigate } from 'react-router-dom';
import handleNewCompare from '../../routes/Compare';

function SearchBar({use, handleCompare}) {

  const[paddles, setPaddles] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const getPaddles = async ()=>{
      try {
        const res = await axios.get("https://findpaddle-api.onrender.com/api/paddle");
        setPaddles(res.data);
        console.log(paddles);
      } catch(err) {
        console.log(err);
      }
    };
    getPaddles();
  }, []);

  let inputLabel = "";
  if (use === "compare") {
    inputLabel = "Add paddle to compare";
  } else {
    inputLabel = "Search for a paddle";
  }

  return (
    <Autocomplete
      freeSolo={use === "compare" ? false : true}
      id="paddle-select-search"
      sx={{ width: 1000 }}
      options={paddles || []}
      getOptionLabel={(option) => option.title || "No paddles found" }
      autoHighlight
      onChange={(e, option) => {
        if (use === "search" && option.slug) {
          navigate(`paddle/${option.slug}`);
        } else if (use === "compare" && option) {
          handleCompare(option);
        }
      }}
      onClick={(e, option) => {
        if (use === "search" && option.slug) {
          navigate(`paddle/${option.slug}`);
        } else if (use === "compare" && option) {
          handleCompare(option);
        }
      }}
      renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
                loading="lazy"
                width="20"
                srcSet={`${option.img} 2x`}
                src={option.img}
                alt=""
            />
            {option.title}
          </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={inputLabel}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}

export default SearchBar