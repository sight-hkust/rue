import { constructErrorFromParseError } from 'services/api/utils/error'

describe('constructErrorFromParseError', ()=>{
  it('constructs an error from a normal error', ()=>{
    const teapotString = 'I am a teapot.'
    const originalError = new Error(teapotString)
    const error = constructErrorFromParseError(originalError)
    expect(error).toBeInstanceOf(Error)
    expect(error).not.toBe(originalError)
    expect(typeof error.message).toBe('string')
    expect(error.message).toEqual(teapotString)
  })

  it('constructs an error from an aggregate error', ()=>{
    const teapotStrings = ['I am a teapot.', 'I am fat.']
    // hopefully this is similar enough
    const originalError = new Error()
    originalError.errors = teapotStrings.map((str)=>new Error(str))
    const error = constructErrorFromParseError(originalError)
    expect(error).toBeInstanceOf(Error)
    expect(error).not.toBe(originalError)
    expect(typeof error.message).toBe('string')
    expect(error.message).toEqual(`[1]. ${teapotStrings[0]}\n[2]. ${teapotStrings[1]}`)
  })

  it('constructs an error from a nested aggregate error', ()=>{
    const teapotStrings = ['I am a teapot.', 'I am fat.', 'I am short.']
    // hopefully this is similar enough
    const originalError = new Error()
    const nestedError = new Error()
    nestedError.errors = [
      new Error(teapotStrings[1]),
      new Error(teapotStrings[0]),
      new Error(teapotStrings[2]),
    ]
    originalError.errors = [
      new Error(teapotStrings[0]),
      nestedError,
    ]
    const error = constructErrorFromParseError(originalError)
    expect(error).toBeInstanceOf(Error)
    expect(error).not.toBe(originalError)
    expect(typeof error.message).toBe('string')
    expect(error.message).toEqual([
      `[1]. ${teapotStrings[0]}`,
      `[2]. ${teapotStrings[1]}`,
      `[3]. ${teapotStrings[0]}`,
      `[4]. ${teapotStrings[2]}`,
    ].join('\n'))
  })
})
