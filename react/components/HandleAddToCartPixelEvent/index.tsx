import { useRef, useEffect } from 'react'
import { usePixelEventCallback } from 'vtex.pixel-manager'

type IntervalId = ReturnType<typeof setInterval>
type TimeoutId = ReturnType<typeof setTimeout>

function closeMiniCart() {
  const selector = '[class^="vtex-minicart"][class*="closeIconButton"]'

  const closeButton = document.querySelector(selector)

  const event = new CustomEvent('click', {
    bubbles: true,
  })

  closeButton?.dispatchEvent(event)

  return !!closeButton
}

interface HandleAddToCartPixelEventProps {
  waitTimeMS?: number
  intervalMS?: number
  customPixelEventId?: string
}

type PixelConfig = Parameters<typeof usePixelEventCallback>[0]

const HandleAddToCartPixelEvent: React.FC<HandleAddToCartPixelEventProps> = ({
  customPixelEventId,
  intervalMS = 500,
  waitTimeMS = 3000,
}) => {
  const timeoutId = useRef<TimeoutId>()
  const intervalId = useRef<IntervalId>()

  function sleep(time: number) {
    return new Promise((resolve) => {
      timeoutId.current = setTimeout(resolve, time)
    })
  }

  const config: PixelConfig = {
    eventId: customPixelEventId,
    handler: async () => {
      await sleep(waitTimeMS)

      intervalId.current = setInterval(() => {
        const closed = closeMiniCart()

        if (closed && intervalId.current) {
          clearInterval(intervalId.current)
        }
      }, intervalMS)
    },
    eventName: 'addToCart',
  }

  usePixelEventCallback(config)

  // Use the useEffect to clear side effects
  useEffect(() => {
    return () => {
      timeoutId.current && clearTimeout(timeoutId.current)
      intervalId.current && clearInterval(intervalId.current)
    }
  }, [])

  return null
}

export default HandleAddToCartPixelEvent
