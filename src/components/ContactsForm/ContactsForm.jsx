import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/Contacts/contactAction';
import { selectContacts } from 'redux/selectors';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const formSubmit = newContact => {
    const isExist = contacts.find(
      cont =>
        cont.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
    );
    if (isExist) {
      return alert(`${newContact.name} is already in contacts`);
    } else if (
      (newContact.name.trim() === '', newContact.number.trim() === '')
    ) {
      return alert('Заполните все поля');
    }
    dispatch(addContacts(newContact));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    formSubmit({ name, number, id: nanoid() });
    setName('');
    setNumber('');
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          onChange={handleChange}
          required
          id="standard-required"
          label="Name"
          name="name"
          value={name}
          type="text"
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          required
          id="standard-number"
          label="Number"
          name="number"
          value={number}
          type="number"
          variant="standard"
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Add contact
        </Button>
      </Box>
    </Container>
  );
};