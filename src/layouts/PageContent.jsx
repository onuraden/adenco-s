import React from 'react'
import Home from '../pages/Home'
import { Switch, Route } from 'react-router-dom'
import Shop from '../pages/Shop'

function PageContent() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </div>
  )
}

export default PageContent