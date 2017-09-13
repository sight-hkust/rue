import * as auth from './auth'

test('Should fail registration', async () => {
  expect.assertions(1)
  const token = await auth.register('default', 'password')
  expect(token.error).toBe('Invalid Registration Authorization Token')
})

// test('Should complete registration', async () => {
// 	expect.assertions(1)
// 	const token = await auth.register('default', 'password', 'easymedPermittedAccess')
// 	expect(token).toBeDefined()
// })

// test('Should login successfully', async () => {
// 	expect.assertions(1)
// 	const token = await auth.authenticate('default', 'password')
// 	expect(token).toBeDefined()
// 	console.log(token)
// })