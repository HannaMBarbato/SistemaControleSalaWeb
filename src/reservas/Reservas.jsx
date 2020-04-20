import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Calendar from '../componentes/template/Calendar'
import CardReserva from '../componentes/template/CardReserva'
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#ffb509",
  },
  title: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  floatingButton: {
    position: 'absolute',
    margin: theme.spacing(1),
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  cardCalendar: {
    maxWidth: '50%',
    marginTop: 10,

  },
  cardReserva: {
    maxWidth: '49%',
    display: 'flex',
    position: 'absolute',
    right: theme.spacing(0),
    marginTop: theme.spacing(-65),
  },
  cardReserva: {
    width: '49%',
    position: 'absolute',
    right: theme.spacing(0),
    marginTop: theme.spacing(-65),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    height: 520,
  },
}));

const cardReservas = [
  {
    organizador: 'Hanna MB',
    horaInicio: '15:00',
    horaFim: '16:00',
    descricao: 'Reunião para verificação do prototipo do app pedido pelo cliente'
  },
  {
    organizador: 'Hanna MB',
    horaInicio: '15:00',
    horaFim: '16:00',
    descricao: 'Reunião para verificação do prototipo do app pedido pelo cliente'
  },
  {
    organizador: 'Hanna MB',
    horaInicio: '15:00',
    horaFim: '16:00',
    descricao: 'Reunião para verificação do prototipo do app pedido pelo cliente'
  },
  {
    organizador: 'Hanna MB',
    horaInicio: '15:00',
    horaFim: '16:00',
    descricao: 'Reunião para verificação do prototipo do app pedido pelo cliente'
  },
  {
    organizador: 'Hanna MB',
    horaInicio: '15:00',
    horaFim: '16:00',
    descricao: 'Reunião para verificação do prototipo do app pedido pelo cliente'
  },
  {
    organizador: 'Hanna MB',
    horaInicio: '15:00',
    horaFim: '16:00',
    descricao: 'Reunião para verificação do prototipo do app pedido pelo cliente'
  },
  {
    organizador: 'Hanna MB',
    horaInicio: '15:00',
    horaFim: '16:00',
    descricao: 'Reunião para verificação do prototipo do app pedido pelo cliente'
  },
];

export default function PrimaryAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Reservas
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <div className={classes.cardCalendar}>
        <Calendar />
      </div>

      <div className={classes.cardReserva}>
        <GridList className={classes.gridList} cols={1}>
          <main>
            <Grid container spacing={5} /* className={classes.mainGrid} */>
              {cardReservas.map((post) => (
                <CardReserva key={post.title} post={post} />
              ))}
            </Grid>
          </main>
        </GridList>
      </div>
      
      <div>
        <Fab className={classes.floatingButton} color="secondary" aria-label="add" href="/registerreservations" >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
} 