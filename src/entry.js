/**
 * Bootstrap
 */
{
  const errors = [
    () => { if (!global.window) throw new Error('Missing window object') }
  ].reduce((errors, check, index) => {
    try {
      check()
    } catch (error) {
      errors.push({
        index,
        error
      })
    }
    return errors
  }, [])

  if (errors.length) {
    for (const e of errors) {
      console.error(`check ${e.index}: ${e.error.message}`, e.error)
    }
    throw new Error('Error occured during bootstrap - see console for details')
  }
}
