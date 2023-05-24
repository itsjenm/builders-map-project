import { Box, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useValue } from "../../context/ContextProvider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ProjectFilter() {
  const {
    state: { houseFilter },
    dispatch,
  } = useValue();
  const fixedOptions = [topHouses[6]];
//   const [value, setValue] = useState([...fixedOptions, topHouses[13]]);

  // return (
  //   <Box sx={{ mt: 5 }}>
  //     <Typography>Filter by house: {houseFilter}</Typography>
  //     <Autocomplete
  //       multiple
  //       id="fixed-tags-demo"
  //       value={houseFilter}
  //       onChange={(event, newValue) => dispatch({type: 'HOUSE_FILTER', payload: newValue})}
  //       options={topHouses}
  //       getOptionLabel={(option) => option.title}
  //       renderTags={(tagValue, getTagProps) =>
  //         tagValue.map((option, index) => (
  //           <Chip
  //             label={option.titletop}
  //             {...getTagProps({ index })}
  //             disabled={fixedOptions.indexOf(option) !== -1}
  //           />
  //         ))
  //       }
  //       style={{width: 200}}
  //       renderInput={(params) => (
  //           <TextField {...params} label="Pick a house" placeholder="Favorites" />
  //       )}
  //     />
  //   </Box>
  // );
}

const topHouses = [
  { title: "Erevald" },
  { title: "Spectreseek" },
  { title: "Alterok" },
  { title: "Gaudmire" },
];
