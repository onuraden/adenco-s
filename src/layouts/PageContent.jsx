import React from 'react'
import Home from '../pages/Home'
import { Switch, Route } from 'react-router-dom'
import Shop from '../pages/Shop'
import ProductDetail from '../pages/ProductDetail'

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
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  )
}

export default PageContent