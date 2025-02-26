/* eslint-disable @typescript-eslint/no-explicit-any */
import prototypes from '@/helpers/prototypes'

export default class PostTransform {
  protected store = new Map<any, Array<string | symbol>>()

  has(target: any): boolean {
    return this.store.has(target)
  }

  get(target: any): Array<string | symbol> | undefined
  get(target: any, createDefault: () => Array<string | symbol>): Array<string | symbol>
  get(target: any, createDefault?: () => Array<string | symbol>): Array<string | symbol> | undefined {
    if (this.has(target)) {
      return this.store.get(target)
    }

    if (createDefault) {
      return createDefault()
    }
  }

  resolve(target: any): Array<string | symbol> {
    return this.get(target, () => {
      const keys: (string | symbol)[] = []
      this.store.set(target, keys)

      return keys
    })
  }

  add(target: any, key: string | symbol): void {
    this.resolve(target).push(key)
  }

  async execute<T extends { [key: string | symbol]: any }>(model: T): Promise<T> {
    const keys = prototypes(model.constructor)
      .filter((prototype) => ![Function.prototype, Object.prototype].includes(prototype))
      .map((prototype) => this.get(prototype))
      .filter(Boolean)
      .flat() as Array<string | symbol>

    if (keys) {
      const m = model as { [key: string | symbol]: any }
      const promises = keys
        .map((key) => [key, m[key]])
        .filter(([, value]) => value instanceof Promise)
        .map(async ([key, value]) => {
          m[key] = await value
        })

      if (promises.length) {
        await Promise.all(promises)
      }
    }

    return model
  }
}
