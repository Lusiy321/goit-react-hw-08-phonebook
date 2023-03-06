import { Navigation } from './Navigation/Navigation';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { AuthNav } from './AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/Auth/auth-selectors';

import AppBar from '@mui/material/AppBar';
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[300],
    },
    secondary: {
      main: '#f44436',
    },
  },
});

export const Header = () => {
  const token = useSelector(selectToken);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Grid container justifyContent="space-between">
          <Navigation />
          {token ? <AuthMenu /> : <AuthNav />}
        </Grid>
      </AppBar>
    </ThemeProvider>
  );
};