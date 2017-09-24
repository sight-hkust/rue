import * as auth from './auth'

const mock = {
  registration: {
    payload: [
      {
        attribute: 'username',
        value: 'defaultMockUser'
      },
      {
        attribute: 'password',
        value: 'p@s5w0rd'
      },
      {
        attribute: 'email',
        value: 'test@sight.ust.hk'
      },
      {
        attribute: 'nickname',
        value: 'Dr Steven'
      },
      {
        attribute: 'role',
        value: 'Doctor'
      }
    ]
  },
  login: {
    payload: {
      username: 'defaultMockUser',
      password: 'p@s5w0rd'
    },
    token: null
  }
}

test('Should fail registration', async () => {
  expect.assertions(1)
  const result = await auth.register(mock.registration.payload, 'invalidToken')
  expect(result.error).toBe('Invalid Registration Authorization Token')
})

test('Should complete registration', async () => {
  expect.assertions(1)
  const result = await auth.register(mock.registration.payload, 'easymedPermittedAccess')
  expect(result.status).toBe(auth.SUCCESS)
})

test('Should login successfully', async () => {
  expect.assertions(1)
  const result = await auth.authenticate(mock.login.payload.username, mock.login.payload.password)
  expect(result.status).toBe(auth.SUCCESS)
})