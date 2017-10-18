import Parse from './parse'
import { constructErrorFromParseError } from 'services/api/utils/error'

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
    throw constructErrorFromParseError(error)
  }
}

async function authenticateUsing(token){
  try {
    const user = await Parse.User.become(token)
    return { status: user.authenticated()? SUCCESS:FAILURE, session: user.getSessionToken() }
  } catch (error) {
    throw constructErrorFromParseError(error)
  }
}

async function deauthenticate(){
  if(Parse.User.authenticated()){
    try {
      await Parse.User.logOut()
      return { status: SUCCESS }
    } catch (error) {
      throw constructErrorFromParseError(error)
    }
  }
  else {
    throw new Error('User has not been authenticated')
  }
}

async function register(credentials, token){
  console.log(credentials)
  console.log(`token:${token}`)
  const config = await Parse.Config.get()
  const registrationToken = config.get('registrationAuthorizationToken')
  if(token === registrationToken){
    const user = new Parse.User()
    credentials.forEach((credential) => { user.set(credential.attribute, credential.value) })
    try {
      await user.signUp()
      return { status: user.authenticated()? SUCCESS:FAILURE, session: user.getSessionToken() }
    } catch (error) {
      throw constructErrorFromParseError(error)
    }
  }
  throw new Error('Invalid Registration Authorization Token')
}

export { authenticate, authenticateUsing, deauthenticate, register }
