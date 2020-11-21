import React from 'react';
import PrincipalPage from './components/PrincipalPage'
import LogIn from './components/LogIn'

function App(props) {
  const auth = props.auth

  if (auth.isLoaded) {
    return (
      <PrincipalPage />
    )
  } else {
    return (
      <LogIn />
    )
  }
}

export default App;
