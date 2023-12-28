import styled from 'styled-components'
import Container from '../Container'
import Card from './Card'

import Backdrop1 from '../../assets/images/backdrop__1.png'
import Backdrop2 from '../../assets/images/backdrop__2.png'
import Backdrop3 from '../../assets/images/backdrop__3.png'

import AuraLogo from '../../assets/images/aura.svg'
import HoroscopeLogo from '../../assets/images/horoscope.svg'
import PyxisLogo from '../../assets/images/pyxis.svg'
import SeekHypeLogo from '../../assets/images/seekhype.png'
import HaloTradeLogo from '../../assets/images/Halotrade.svg'
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export default function Spotlight() {
  return (
    <Container>
      <Wrap>
        <Card id='aura_scan' backdrop={Backdrop1} logo={AuraLogo} onClick={() => window.open('https://explorer.fortresschain.finance/')}>
          <p className='title'>FortressChain Scan</p>
          <p className='description'>The next generation blockchain explorer for FortressChain Network.</p>
          <p className='text__color'>Experience →</p>
        </Card>
        <Card
          id='pyxis_safe'
          backdrop={Backdrop1}
          logo={PyxisLogo}
          onClick={() => window.open('https://wallet.fortresschain.finance/')}>
          <p className='title'>Wallet FortressChain</p>
          <p className='description'>Multi-signature and fine-grain access control asset management tool.</p>
          <p className='text__color'>Experience →</p>
        </Card>
        <Card
          id='horoscope'
          backdrop={Backdrop1}
          logo={HoroscopeLogo}
          onClick={() => window.open('https://info.fortresschain.finance')}>
          <p className='title'>Data Info</p>
          <p className='description'>An indexing service to provide real-time data for FortressChain ecosystem.</p>
          <p className='text__color'>Experience →</p>
        </Card>
        <Card
          id='seekhype'
          backdrop={Backdrop2}
          logo={SeekHypeLogo}
          onClick={() => window.open('https://nft.fortress.finance/')}>
          <p className='title'>FortressNFT</p>
          <p className='description'>
            Enhance your seamless NFT experience while enjoying utility with premier Web3 brands
          </p>
          <p className='text__color'>Experience →</p>
        </Card>
        <Card
          id='halotrade'
          backdrop={Backdrop3}
          logo={HaloTradeLogo}
          onClick={() => window.open('https://bridge.fortresschain.finance/')}>
          <p className='title'>Whale Trade</p>
          <p className='description'>The first DEX Multichain built on FortressChain Network, and other Chains to swap, farm and earn.</p>
          <p className='text__color'>Experience →</p>
        </Card>
      </Wrap>
    </Container>
  )
}
