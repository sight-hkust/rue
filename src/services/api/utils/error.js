
function* yieldNestedErrors(parseError) {
  if(parseError.errors){
    // if there are nested errors, yield each one of them
    for(const err of parseError.errors)
      yield* yieldNestedErrors(err)
  }else{
    // if nothing nested, just yield the argument
    yield parseError
  }
}

/**
 * Create an Error from the given Parse.Error, handling specially the
 * AGGREGATE_ERROR that have multiple nested errors.
 * @arg {Parse.Error} parseError Error to be converted
 * @returns {Error} Normal Error that has a message
 */
export function constructErrorFromParseError(parseError){
  if(parseError.errors){
    return new Error(Array.from(yieldNestedErrors(parseError)).map(
      (e, i) => `[${i + 1}]. ${e.message}`
    ).join('\n'))
  }
  return new Error(parseError.message)
}
