import type { Cached, ServiceContext, ClientsConfig } from '@vtex/api'
import { Service, LRUCache } from '@vtex/api'

import { Clients } from './clients'
import { resolvers } from './graphql'

const TIMEOUT_MS = 4000
const defaultClientOptions = {
  retries: 1,
  timeout: TIMEOUT_MS,
}

const memoryCache = new LRUCache<string, Cached>({ max: 1000 })

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>

  // The shape of our State object found in `ctx.state`. This is used as state bag to communicate between middlewares.
  interface State {
    code: number
  }
}

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: defaultClientOptions,
    settings: {
      memoryCache,
    },
  },
}

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  graphql: {
    resolvers: {
      Query: resolvers.Query,
      Mutation: resolvers.Mutation,
    },
  },
  routes: resolvers.Routes,
})
