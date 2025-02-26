/**
 * Boolean с защитником типа
 */
const safeBoolean = <T>(value: T | undefined | null): value is T => Boolean(value)

export default safeBoolean
