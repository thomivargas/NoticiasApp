import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material';


const Noticia = ({noticia}) => {
    const { urlToImage, url, title, description, source } = noticia;

  return (
    <Grid item md={6} lg={4}>
        <Card>
            <CardActions>
                <Link href={url} target='_blank' variant='button' sx={{textDecoration:'none'}}>
                    {urlToImage &&(
                        <CardMedia
                            component='img'
                            image={urlToImage}
                            alt={title}
                            height='250'
                        />
                    )}
                </Link>
            </CardActions>
                <CardContent>
                    <Typography gutterBottom variant='body1' color="error">
                        {source.name}
                    </Typography>
                    <Typography variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link 
                        href={url} 
                        textAlign={'center'} 
                        width={'100%'} 
                        target='_blank' 
                        variant='button' 
                        sx={{textDecoration:'none'}}
                    >
                        Ver Noticia
                    </Link>
                </CardActions>
        </Card>
    </Grid>
  )
}

export default Noticia
