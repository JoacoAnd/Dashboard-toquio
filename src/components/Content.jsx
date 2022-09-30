import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home';
import ErrorNotFound from './ErrorNotFound';
import Usuarios from './Usuarios';
import Productos from './Productos';
import Categorias from './Categorias';

function Content() {
  return (
    <div className='content-div'>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/productos">
                <Productos />
            </Route>
            <Route path="/usuarios">
                <Usuarios />
            </Route>
            <Route path="/categorias">
                <Categorias />
            </Route>
            <Route>
                <ErrorNotFound />
            </Route>
        </Switch>
    </div>
  )
}

export default Content