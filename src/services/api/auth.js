import Parse from './parse'

async function authenticate(username, password){
  try {
    const user =  await Parse.User.logIn(username, password)
    return user.getSessionToken()
  } catch (error) {
    return { error: error }
  }
}

async function deauthenticate(){
  try {
    await Parse.User.logOut()
    return { deauthenticated: true }
  } catch (error) {
    return { deauthenticated: false, error: error }
  }
}

async function register(username, password, token){
  const config = await Parse.Config.get()
  const registrationToken = config.get('registrationAuthorizationToken')
  if(token === registrationToken){
    try {
      const user = await Parse.User.signUp(username, password)
      return user.getSessionToken()
    } catch (error) {
      return { error: error }
    }
  }
  return { error: 'Invalid Registration Authorization Token' }
}

export { authenticate, deauthenticate, register }