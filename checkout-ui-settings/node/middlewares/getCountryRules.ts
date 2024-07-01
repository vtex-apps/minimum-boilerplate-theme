import type { AddressRules } from '@vtex/address-form'

interface PromiseType {
  success: boolean
  errorMessage: string
  data: typeof AddressRules | undefined
}

export async function getCountryRules(
  ctx: Context,
  next: () => Promise<PromiseType>
) {
  const {
    vtex: { logger },
  } = ctx

  const { countryCode } = ctx.vtex.route.params

  if (!countryCode) {
    throw new Error(`Error getting request`)
  }

  const parsedCountryCode =
    countryCode !== 'default'
      ? (countryCode as string).toUpperCase()
      : countryCode

  try {
    const { default: rules } = await import(
      `@vtex/address-form/lib/country/${parsedCountryCode}`
    )

    ctx.status = 200
    ctx.set('Cache-Control', 'no-cache')
    ctx.body = {
      success: true,
      errorMessage: '',
      data: rules,
    }
  } catch (error) {
    ctx.status = 404
    ctx.set('Cache-Control', 'no-cache')
    ctx.body = {
      success: false,
      errorMessage: 'Country not found',
      data: {},
    }

    logger.error({
      message: 'getCountryRules-error',
      error,
    })
  }

  return next()
}
