/* eslint-disable @typescript-eslint/no-explicit-any */
import type Transformer from '../Contracts/Transformer'

export default class TransformerStorage {
  protected transformers = new Set()
  protected aliases = new Map()

  register<T extends Transformer<any>>(transformer: T, aliases: string[] = []): void {
    this.transformers.add(transformer)

    if (aliases.length) {
      aliases.forEach((key: any) => {
        this.aliases.set(key, transformer)
      })
    }
  }

  resolve<T extends Transformer<any>>(type: any): T | undefined {
    if (this.aliases.has(type)) {
      return this.aliases.get(type)
    }

    return Array.from<T>(this.transformers.values() as Iterable<T>)
      .reverse()
      .find((item) => item.match(type))
  }
}
