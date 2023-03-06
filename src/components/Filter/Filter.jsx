import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

export default function Filter() {
  const dispatch = useDispatch();

  const changeInput = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TextField
        id="standard-required"
        label="Filter"
        type="text"
        variant="standard"
        onChange={changeInput}
      />
    </Box>
  );
}