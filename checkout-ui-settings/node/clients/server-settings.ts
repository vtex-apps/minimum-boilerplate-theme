/* eslint-disable @typescript-eslint/no-explicit-any */
import type { InstanceOptions, IOContext } from '@vtex/api'
import { AppClient } from '@vtex/api'

export class SaveVB extends AppClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(`vtex.checkout-ui-settings-server@0.x`, ctx, options)
  }

  public saveVB = async (data: any) => {
    await this.http
      .post('/_v/checkout-ui-custom/savevb', data, {
        headers: { 'content-type': 'application/json' },
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}
