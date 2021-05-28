import { Chain } from './types'
import { chains } from './chains'

export { ChainName, ChainId } from './enums'
export { chains }

const getById = (id: number): Chain | undefined => chains[id]

const getByName = (name: string): Chain | undefined =>
  Object.values(chains).find(chain => chain.name === name) || {}

const get = (idOrName: string | number): Chain | undefined =>
  typeof idOrName === 'number' ? getById(idOrName) : getByName(idOrName)

export default {
  getById,
  getByName,
  get
}