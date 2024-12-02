import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Faucet: React.FC = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')

        return (
          <Link href="https://faucet.ethena.fi/" rel="noopener noreferrer" target="_blank">
          <button
          className="bg-transparent border border-green-600 hover:bg-green-700
              py-2 px-6 text-green-600 hover:text-white rounded-full font-bold
              transition duration-300 ease-in-out"
          
          type="button"
        >
          USDe Faucet
        </button>
        </Link>
        )
      }}
    </ConnectButton.Custom>
  )
}

export default Faucet