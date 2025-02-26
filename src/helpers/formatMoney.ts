import isEmpty from '@/helpers/isEmpty'
import toNumber from '@/helpers/toNumber'

export default function (value: string | number | null | undefined): string | null {
  if (isEmpty(value)) {
    return null
  }

  let val: number = toNumber(value)

  if (typeof value === 'string') {
    val = toNumber(value.replace(',', '.'))
  }

  return new Intl.NumberFormat(undefined, {
    style: 'decimal',
    minimumFractionDigits: 2,
  }).format(val)
}
