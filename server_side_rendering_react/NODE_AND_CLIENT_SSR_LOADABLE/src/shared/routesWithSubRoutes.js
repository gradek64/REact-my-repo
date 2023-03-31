import React from 'react'
import { Route } from 'react-router-dom'

// Passes `props.routes` to the child component, which must render them as Routes inside a Switch
const RouteWithSubRoutes = (route) => {
  const componentProps = route || {}

  if (route.children) {
    return (
      <Route
        path={route.path}
        children={(props) => <route.children {...props} {...componentProps} routes={route.routes} />}
      />
    )
  }

  return (
    <Route
      path={route.path}
      render={(props) => {
      console.log('props of route compoent', props)
      console.log('route', route)
      console.log('componentProps', componentProps)
      return <route.component {...props} {...componentProps} routes={route.routes} />}}
    />
  )
}

export default RouteWithSubRoutes
