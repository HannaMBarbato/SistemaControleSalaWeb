import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FeaturedPost from './FeaturedPost';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fundo from '../imagem/fundo.jpg'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: "#ffb509",
    alignItems: 'center',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  floatingButton: {
    position: 'fixed',
    margin: theme.spacing(2),
    bottom: theme.spacing(0),
    right: theme.spacing(0),
  },
}));

const featuredPosts = [
  {
    title: 'Conselho Jedi',
    pessoasSentadas: '12',
    multimidia: 'Sim',
    arcon: 'Não',
    areaSala: '20.00',
    localizacao: '1º andar',
    image: Fundo,
    imageText: 'Sala Conselho Jedi',
  },
  {
    title: 'Conselho Jedi',
    pessoasSentadas: '12',
    multimidia: 'Sim',
    arcon: 'Não',
    areaSala: '20.00',
    localizacao: '1º andar',
    image: Fundo,
    imageText: 'Sala Conselho Jedi',
  },
  {
    title: 'Conselho Jedi',
    pessoasSentadas: '12',
    multimidia: 'Sim',
    arcon: 'Não',
    areaSala: '20.00',
    localizacao: '1º andar',
    image: Fundo,
    imageText: 'Sala Conselho Jedi',
  },
  {
    title: 'Conselho Jedi',
    pessoasSentadas: '12',
    multimidia: 'Sim',
    arcon: 'Não',
    areaSala: '20.00',
    localizacao: '1º andar',
    image: Fundo,
    imageText: 'Sala Conselho Jedi',
  },
  {
    title: 'Conselho Jedi',
    pessoasSentadas: '12',
    multimidia: 'Sim',
    arcon: 'Não',
    areaSala: '20.00',
    localizacao: '1º andar',
    image: Fundo,
    imageText: 'Sala Conselho Jedi',
  },
  {
    title: 'Conselho Jedi',
    pessoasSentadas: '12',
    multimidia: 'Sim',
    arcon: 'Não',
    areaSala: '20.00',
    localizacao: '1º andar',
    image: Fundo,
    imageText: 'Sala Conselho Jedi',
  },
  {
    title: 'Conselho Jedi',
    pessoasSentadas: '12',
    multimidia: 'Sim',
    arcon: 'Não',
    areaSala: '20.00',
    localizacao: '1º andar',
    image: Fundo,
    imageText: 'Sala Conselho Jedi',
  },
  {
    title: 'Conselho Jedi',
    pessoasSentadas: '12',
    multimidia: 'Sim',
    arcon: 'Não',
    areaSala: '20.00',
    localizacao: '1º andar',
    image: Fundo,
    imageText: 'Sala Conselho Jedi',
  },
];


export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Salas
          </Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Container maxWidth="lg" >
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>

      <div>
        <Fab className={classes.floatingButton} color="secondary" aria-label="add" href="/registermeetingroom" >
          <AddIcon />
        </Fab>
      </div>
    </React.Fragment>
  );
}