import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './pages/Home/home';
import SignupView from './pages/Sign-up/SignupView';
import PageNotFound from './pages/PageNotFound/PageNotFound';
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={home} />
        <Route path='/signup' exact component={SignupView} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>


  )
}
