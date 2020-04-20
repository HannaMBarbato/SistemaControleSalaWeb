import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuBarra from '../componentes/template/MenuBarra'

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Cadastrar Empresa
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nome"
            name="nome"
            label="Nome"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="complemento"
            name="complemento"
            label="Complemento"
            helperText="Estado/Cidade/Bairro"
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dominio"
            name="dominio"
            label="Dominio"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MenuBarra title="Tipo" item="Matriz" itemdois="Filial" ></MenuBarra>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}