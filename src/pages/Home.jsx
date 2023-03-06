import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/Auth/auth-selectors';

export const HomePage = () => {
  const token = useSelector(selectToken);

  return (
    <Box
      sx={{
        pt: 45,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="text.primary"
        >
          Hello guest! {!token && 'Please sign in/sign up'}
        </Typography>
      </Container>
    </Box>
  );
};