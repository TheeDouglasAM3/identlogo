import React, { ReactElement } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Pacients from './pages/Pacients'

function Routes(): ReactElement {
  return (
    <BrowserRouter>
      <Route path="/" component={Dashboard} exact />
      <Route path="/pacients" component={Pacients} />
    </BrowserRouter>
  )
}

export default Routes
