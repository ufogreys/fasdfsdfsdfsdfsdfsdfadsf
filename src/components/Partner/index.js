import styled from 'styled-components'
import blizzard from "../../assets/images/blizzard.png"
import c98 from '../../assets/images/c98.png'
import crypto from '../../assets/images/crypto.png'
import fpt from '../../assets/images/fpt.png'
import gateio from '../../assets/images/gateio.png'
import gbv from '../../assets/images/gbv.png'
import guildfi from '../../assets/images/guildfi.png'
import hashed from '../../assets/images/hashed.png'
import impossible from '../../assets/images/impossible.png'
import istari from '../../assets/images/istari.png'
import k300 from '../../assets/images/k300.png'
import kucoin from '../../assets/images/kucoin.png'
import kyber from '../../assets/images/kyber.png'
import mexc from '../../assets/images/mexc.png'
import ngc from '../../assets/images/ngc.png'
import snz from '../../assets/images/snz.png'
import tpx from '../../assets/images/tpx.png'
import vanda from '../../assets/images/vanda.png'
import deo from '../../assets/images/deo.png'
import ecomobi from '../../assets/images/ecomobi.png'
import ahamove from '../../assets/images/ahamove.png'
import redline from '../../assets/images/redline.png'
import dwf from '../../assets/images/dwf.png'
import oig from '../../assets/images/oig.png'
import pencil from '../../assets/images/pencil.png'
import matchbox from '../../assets/images/matchbox.png'
import ld from '../../assets/images/ld.png'
import { useState } from 'react'
const Wrap = styled.div`
    > .title {
@@ -99,43 +78,12 @@ export default function Partner() {
        <Wrap>
            <h3 className='title'>Honored to be accompanied with</h3>
            <div>
                <img src={fpt} alt='' />
                <img src={hashed} alt='' />
                <img src={c98} alt='' />
                <img src={guildfi} alt='' />
                <img src={crypto} alt='' />
                <img src={ld} alt='' />
            </div>
            <div>
            <img src={matchbox} alt='' />
                <img src={istari} alt='' />
                <img src={impossible} alt='' />
                <img src={gbv} alt='' />
                <img src={kucoin} alt='' />
                <img src={mexc} alt='' />
                <img src={gateio} alt='' />
                <img src={ecomobi} alt='' />
                <img src={kyber} alt='' />
                <img src={ngc} alt='' />
            </div>
            {open ? (
                <>
                    <div>
                        <img src={kucoin} alt='' />
                        <img src={snz} alt='' />
                        <img src={k300} alt='' />
                        <img src={blizzard} alt='' />
                        <img src={mexc} alt='' />
                    </div>
                    <div>
                        <img src={gateio} alt='' />
                        <img src={tpx} alt='' />
                        <img src={vanda} alt='' />
                        <img src={deo} alt='' />
                        <img src={ecomobi} alt='' />
                    </div>
                    <div>
                        <img src={ahamove} alt='' />
                        <img src={redline} alt='' />
                        <img src={dwf} alt='' />
                        <img src={oig} alt='' />
                        <img src={pencil} alt='' />
                    </div>
                    <p>and many others</p>
                </>
