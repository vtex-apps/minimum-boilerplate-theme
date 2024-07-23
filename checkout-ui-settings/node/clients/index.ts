import { IOClients } from '@vtex/api'

import { SaveVB } from './server-settings'
// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get server() {
    return this.getOrSet('server', SaveVB)
  }
}

