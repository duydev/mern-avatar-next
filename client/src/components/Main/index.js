import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../HomePage'
import AboutPage from '../AboutPage'
import NotFoundPage from '../NotFoundPage'

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}

export default Main
