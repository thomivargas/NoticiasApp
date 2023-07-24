import useNoticias from "../hooks/useNoticias"
import { Grid, Typography } from "@mui/material"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Noticia from "./Noticia";

const ListadoNoticias = () => {
    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();
    const totalPaginas = Math.ceil(totalNoticias / 20);
  return (
    <>
        <Typography variant='h4' sx={{textAlign: 'center', marginY: 5}}>
            Ultimas Noticias
        </Typography>
        <Grid container spacing={2}>
            {noticias.map((noticia) => (
                <Noticia key={noticia.url} noticia={noticia} />
            ))}
        </Grid>
        <Stack 
            spacing={2}
            sx={{
                marginY: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Pagination 
                count={totalPaginas} 
                color="primary" 
                onChange={handleChangePagina}
                page={pagina}
            />
        </Stack>
    </>
  )
}

export default ListadoNoticias
