import Parse from './parse'

/*
  authenticate the user using username and password
  async/await is a new pattern adopted in ES2016,
  functions that returns a promise can be resolved
  inline with `await` keyword, which vastly improves
  the workflow during development avoided using `then`
*/
async function authenticate(username, password){
  try {
    const user =  await Parse.User.logIn(username, password)
    return { authenticated: user.authenticated(), session: user.getSessionToken() }
  } catch (error) {
    return { error: error }
  }
}

async function authenticateUsing(token){
  try {
    const user = await Parse.User.become(token)
    return { authenticated: user.authenticated(), session: user.getSessionToken() }
  } catch (error) {
    return { authenticated: false, error: error }
  }
}

async function deauthenticate(){
  if(Parse.User.authenticated()){
    try {
      await Parse.User.logOut()
      return { deauthenticated: true }
    } catch (error) {
      return { deauthenticated: false, error: error }
    }
  }
  else {
    return { deauthenticated: false, error: 'User has not been authenticated' }
  }
}

async function register(credentials, token){
  const config = await Parse.Config.get()
  const registrationToken = config.get('registrationAuthorizationToken')
  if(token === registrationToken){
    try {
      const user = new Parse.User()
      credentials.map((credential) => { user.set(credential.attribute, credential.value) })
      await user.signUp()
      return { authenticated: user.authenticated(), session: user.getSessionToken() }
    } catch (error) {
      return { authenticated: false, error: error }
    }
  }
  return { error: 'Invalid Registration Authorization Token' }
}

export { authenticate, deauthenticate, register }