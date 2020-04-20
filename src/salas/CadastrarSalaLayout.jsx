import React from 'react';
import Button from '@material-ui/core/Button';
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
        width: '100%', // Fix IE 11 issue.

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
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Cadastrar Sala
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="nome"
                                        label="Nome:"
                                        name="nome"
                                        autoComplete="nome"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        id="localizacao"
                                        label="Localizacao:"
                                        name="localizacao"
                                        autoComplete="localizacao"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        name="pessoaSentada"
                                        label="Pessoa Sentada:"
                                        type="number"
                                        id="pessoaSentada"
                                        autoComplete="number"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        name="areaSala"
                                        label="Area da Sala:"
                                        type="number"
                                        id="areaSala"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MenuBarra title="Tem Arcondicionado" item="Sim" itemdois="Não" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MenuBarra title="Tem Multimídia" item="Sim" itemdois="Não" />
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
                        <Box mt={8}>
                            <Copyright />
                        </Box>
                    </div>
                </Container>
            </Grid>
        </Paper >
    );
}