// Dependencies
import React from 'react'

import { OrderForm } from 'vtex.order-manager'

// Styles
import styles from './styles.css'

const { useOrderForm } = OrderForm

const LoginMobile = () => {
  const {
    orderForm: { loggedIn, clientProfileData },
  } = useOrderForm() ?? {}

  return (
    <div className={styles.loginMobileWrapper}>
      <div className={styles.userWrapper}>
        <ul>
          <li>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1979_15047)">
                <path
                  d="M24.4853 7.51471C22.2188 5.24823 19.2053 4 16 4C12.7947 4 9.78119 5.24823 7.51471 7.51471C5.24823 9.78119 4 12.7947 4 16C4 19.2053 5.24823 22.2188 7.51471 24.4853C9.78119 26.7518 12.7947 28 16 28C19.2053 28 22.2188 26.7518 24.4853 24.4853C26.7518 22.2188 28 19.2053 28 16C28 12.7947 26.7518 9.78119 24.4853 7.51471ZM9.20807 24.1233C9.60431 20.7139 12.5356 18.0815 16 18.0815C17.8263 18.0815 19.5436 18.7931 20.8354 20.0847C21.9268 21.1762 22.6151 22.6013 22.7921 24.1231C20.9519 25.6643 18.5825 26.5938 16 26.5938C13.4175 26.5938 11.0483 25.6645 9.20807 24.1233ZM16 16.6332C13.9904 16.6332 12.3553 14.998 12.3553 12.9885C12.3553 10.9787 13.9904 9.34375 16 9.34375C18.0096 9.34375 19.6447 10.9787 19.6447 12.9885C19.6447 14.998 18.0096 16.6332 16 16.6332ZM24.0024 22.9344C23.6441 21.4897 22.8969 20.1576 21.8297 19.0905C20.9655 18.2262 19.943 17.5778 18.8279 17.1715C20.1684 16.2624 21.051 14.7265 21.051 12.9885C21.051 10.2034 18.785 7.9375 16 7.9375C13.215 7.9375 10.949 10.2034 10.949 12.9885C10.949 14.7274 11.8323 16.2639 13.174 17.1728C12.148 17.5467 11.1986 18.1248 10.3818 18.8857C9.19891 19.9873 8.3775 21.3919 7.99664 22.9333C6.38367 21.0739 5.40625 18.649 5.40625 16C5.40625 10.1586 10.1586 5.40625 16 5.40625C21.8414 5.40625 26.5938 10.1586 26.5938 16C26.5938 18.6495 25.616 21.075 24.0024 22.9344Z"
                  fill="#27272A"
                />
              </g>
              <defs>
                <clipPath id="clip0_1979_15047">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(4 4)"
                  />
                </clipPath>
              </defs>
            </svg>
            {loggedIn ? (
              <span>Hello, {clientProfileData?.firstName} </span>
            ) : (
              <a href="/account">Minha conta</a>
            )}
          </li>
          <li>
            <a href="/account#/wishlist">Meus favoritos</a>
          </li>
          <li>
            <a href="/account">Minha conta</a>
          </li>
          <li>
            <a href="/central-de-ajuda">Fale conosco</a>
          </li>
          <li>
            <a href="/logout">Sair</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LoginMobile
