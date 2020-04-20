import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fundo from '../imagem/fundo.jpg'
import Paper from '@material-ui/core/Paper';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

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
    const [selectedDate, setSelectedDate] = React.useState(new Date(/* '2014-08-18T21:11:54' */));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Paper className={classes.root} style={{ backgroundImage: `url(${Fundo})` }}>
            {<img style={{ display: 'none' }} src={Fundo} alt="fundo" />}
            <div className={classes.overlay} />
            <Grid container component="main" className={classes.root}>
                <Container component="main" maxWidth="xs" className={classes.container}>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Cadastrar Reservas
                        </Typography>

                        <form className={classes.form} noValidate>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        id="nomeOrganizador"
                                        label="Organizador:"
                                        name="nomeOrganizador"
                                        autoComplete="nomeOrganizador"
                                    />
                                </Grid>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid item xs={12} sm={6}>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="data"
                                            label="Data"
                                            format="dd/MM/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Grid>

                            <Grid >
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    id="descricao"
                                    label="Descrição:"
                                    name="descricao"
                                    fullWidth
                                />
                            </Grid>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <Grid item xs={12} sm={6}>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="horaInicio"
                                            label="Hora Inicial"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="horaFim"
                                            label="Hora Final"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </MuiPickersUtilsProvider>

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