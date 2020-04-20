import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons'
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 200,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="reservations">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1">
                {'Pesssoas Sentadas: ' + post.pessoasSentadas}
              </Typography>
              <Typography variant="subtitle1" >
                {'Possui Multimidia: ' + post.multimidia}
              </Typography>
              <Typography variant="subtitle1" >
                {'Possui Arcondicionado: ' + post.arcon}
              </Typography>
              <Typography variant="subtitle1" >
                {'Area da Sala: ' + post.areaSala}
              </Typography>
              <Typography variant="subtitle1" >
                {'Localização: ' + post.localizacao}
              </Typography>
            </CardContent>

            <CardActions>
              <IconButton size="small" href="/"><Delete style={{ color: red[900] }} /> </IconButton>
              <IconButton size="small" href="/companies"><Edit /> </IconButton>
            </CardActions>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};