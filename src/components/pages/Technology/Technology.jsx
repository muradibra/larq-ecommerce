import React, { useRef } from 'react'
import TechSwiper from './TechSwiper'
import NanoZeroFilterTech from '../ProductDetails/details/NanoZeroFilterTech'
import LarqPurevis from '../ProductDetails/details/LarqPurevis'
import PurevisTech from '../ProductDetails/details/PurevisTech'
import SmartHydration from './SmartHydration'

function Technology() {
    const nanoZeroTechRef = useRef(null);
    const purevisTechRef = useRef(null);
    const smartHydrationRef = useRef(null);

    const scrollToNanoZero = () => {
        if (nanoZeroTechRef.current) {
            nanoZeroTechRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    const scrollToPurevis = () => {
        if (purevisTechRef.current) {
            purevisTechRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    const scrollToHydration = () => {
        if (smartHydrationRef.current) {
            smartHydrationRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }


    return (
        <div className='technology'>
            <TechSwiper
                scrollToNanoZero={scrollToNanoZero}
                scrollToPurevis={scrollToPurevis}
                scrollToHydration={scrollToHydration}
            />

            <div className='nano-zero-section' ref={nanoZeroTechRef}>
                <NanoZeroFilterTech />
            </div>

            <div className='purevis-tech-section' ref={purevisTechRef}>
                <PurevisTech />
            </div>

            <div className='smart-hydration-section' ref={smartHydrationRef}>
                <SmartHydration />
            </div>
        </div>
    )
}

export default Technology