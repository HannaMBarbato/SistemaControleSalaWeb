import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuBarra from '../componentes/template/MenuBarra'
import Fundo from '../imagem/fundo.jpg'
import Paper from '@material-ui/core/Paper';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.wises.com.br/">
        Wise Systems
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    backgroundImage: `url(${Fundo})`,
    backgroundRepeat: 'no-repeat',
  },
  container: {
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: '5%',
    marginBottom: '5%',
    position: 'relative',

  },
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#ffb509",
  },
  form: {
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#ffb509",
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} style={{ backgroundImage: `url(${Fundo})` }}>
      {<img style={{ display: 'none' }} src={Fundo} alt="fundo" />}
      <div className={classes.overlay} />
      <Grid container component="main" className={classes.root}>
        <Container component="main" maxWidth="xs" className={classes.container}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastrar Usuário
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="nome"
                    name="Nome"
                    variant="outlined"
                    required
                    fullWidth
                    id="Nome"
                    label="Nome"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="senha"
                    label="Senha"
                    type="password"
                    id="senha"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MenuBarra title="Tipo" item="Admin do Sistema" itemdois="Comum" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MenuBarra title="Empresa" item="Empresa 1" />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Cadastrar
          </Button>
            </form>
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Container>
      </Grid>
    </Paper>
  );
}