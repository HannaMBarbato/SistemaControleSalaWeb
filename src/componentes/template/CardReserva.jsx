import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import IconDelete from '@material-ui/icons/Delete'
import { IconButton } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        backgroundColor: "#ffb509",
    },
    title: {
        fontSize: 16,
    },
    cardDetails: {
        display: 'flex',
    },
}));

export default function SimpleCard(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <Grid item xs={12}>
            <Card className={classes.root}>
                <div className={classes.cardDetails}>
                    <CardContent className={classes.organizador}>
                        <Typography component="h2" variant="h6">
                            {post.horaInicio}
                        </Typography>
                        <Typography component="h2" variant="h6">
                            {post.horaFim}
                        </Typography>
                    </CardContent>

                    <CardContent>
                        <Typography variant="h6">
                            {post.organizador}
                        </Typography>
                        <Typography className={classes.title}>
                            {post.descricao}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <IconButton size="small"><IconDelete style={{ color: red[900] }} /> </IconButton>
                    </CardActions>
                </div>
            </Card>
        </Grid>
    );
}

SimpleCard.propTypes = {
    post: PropTypes.object,
};