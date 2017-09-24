import Parse from './parse'

export const SUCCESS = Symbol('SUCCESS')
export const FAILURE = Symbol('FAILURE')
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
    return { status: user.authenticated()? SUCCESS:FAILURE, session: user.getSessionToken() }
  } catch (error) {
    return { error: error }
  }
}

async function authenticateUsing(token){
  try {
    const user = await Parse.User.become(token)
    return { status: user.authenticated()? SUCCESS:FAILURE, session: user.getSessionToken() }
  } catch (error) {
    return { status: false, error: error }
  }
}

async function deauthenticate(){
  if(Parse.User.authenticated()){
    try {
      await Parse.User.logOut()
      return { status: SUCCESS }
    } catch (error) {
      return { status: FAILURE, error: error }
    }
  }
  else {
    return { status: FAILURE, error: 'User has not been authenticated' }
  }
}

async function register(credentials, token){
  const config = await Parse.Config.get()
  const registrationToken = config.get('registrationAuthorizationToken')
  if(token === registrationToken){
    try {
      const user = new Parse.User()
      credentials.forEach((credential) => { user.set(credential.attribute, credential.value) })
      await user.signUp()
      return { status: user.authenticated()? SUCCESS:FAILURE, session: user.getSessionToken() }
    } catch (error) {
      return { status: FAILURE, error: error }
    }
  }
  return { error: 'Invalid Registration Authorization Token' }
}

export { authenticate, authenticateUsing, deauthenticate, register }