import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Cadastrar Administrador da Empresa
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="nome" label="Nome" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="email" label="Email" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="senha" label="Senha" type="password" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}