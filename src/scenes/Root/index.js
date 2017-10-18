/*eslint-disable no-unused-vars*/
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
/*eslint-enable no-unused-vars*/

const Root = ({ token }) => {
  if(!token){
    return <Redirect to="/login"/>
  }
  return <Redirect to="/dashboard"/>
}

const mapStateToProps = (state) => ({
  token: state.auth.token
})

export default connect(mapStateToProps)(Root)