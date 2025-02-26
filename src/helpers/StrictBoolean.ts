/**
 * Предикат для Boolean
 */
const StrictBoolean = <T>(arg: T | null | undefined): arg is T => Boolean(arg)

export default StrictBoolean
