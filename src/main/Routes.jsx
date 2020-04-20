import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../user/Login'
import CadastroUsuario from '../user/CadastrarUsuario'
import LayoutCadastrarEmpresa from '../empresa/LayoutCadastrarEmpresa'
import CrudSalas from '../salas/CrudSala'
import CadastrarSala from '../salas/CadastrarSalaLayout'
import Reservas from '../reservas/Reservas'
import CadastrarReserva from '../reservas/CadastrarReserva'


export default props => 
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/users' component={CadastroUsuario} />
        <Route path='/companies' component={LayoutCadastrarEmpresa} />
        <Route path='/meetingroom' component={CrudSalas}/>
        <Route path='/registermeetingroom' component={CadastrarSala}/>
        <Route path='/reservations' component={Reservas}/>
        <Route path='/registerreservations' component={CadastrarReserva}/>
        <Redirect from='*' to='/' />
    </Switch>