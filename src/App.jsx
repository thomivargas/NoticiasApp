import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import { NoticiasProvider } from './context/NoticiasProvider';

function App() {
  console.log("API Key:", import.meta.env.VITE_API_KEY);
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component="h1" variant='h3'>
            Buscador de Noticias
          </Typography>
        </header>
        <Grid container direction="row" justifyContent='center' alignItems="center">
          <Grid item xs={12} md={8} sm={10}>
            <Formulario />
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent='center' alignItems="center">
          <Grid item xs={10} md={12} sm={7}>
            <ListadoNoticias />
          </Grid>
        </Grid>
      </Container>
    </NoticiasProvider>  
  )
}

export default App
