import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './pages/Home/home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>


  )
}
