import React from 'react'

import useScreenWidth from '../../../hooks/useScreenWidth'
import ChemicalFreeSvg from '../../lib/ChemicalFreeSvg'
import BrilliantlyClean from '../../lib/BrilliantlyClean'
import HydrationTracking from '../../lib/HydrationTracking'
import EasyReplacement from '../../lib/EasyReplacement'

function PurevisTech() {
    const { screenSize } = useScreenWidth()
    

    return (
        <div className='smart-hydration'>
            {
                screenSize >= 960 ?
                    <div className='desktop'>
                        <div className='left'>
                            <div className='tech'>
                                <h1>Smart Hydration</h1>
                                <p>Track, monitor, and manage your LARQ Pitcher with the LARQ app. Think of it as your very own hydration control center.</p>
                            </div>
                            <div className='chemical-free'>
                                <HydrationTracking />
                                <h2>Hydration tracking</h2>
                                <span>
                                    Track your water intake. Your hydration goal is our hydration goal.
                                </span>
                            </div>
                        </div>
                        <div className='center'>
                            <div className='center-img-wrapper'>
                                <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1676361044/tech-page/app-screen-imperial.png" alt="center" />
                            </div>
                        </div>
                        <div className='right'>
                            <EasyReplacement />
                            <h2>Easy replacements</h2>
                            <span>
                                Intelligent filter life tracking based on your household water consumption so you know exactly when to replace the filter.
                            </span>
                        </div>
                    </div>
                    :
                    <div className="mobile">
                        <div className='tech'>
                            <h1>Smart Hydration</h1>
                            <p>Track, monitor, and manage your LARQ Pitcher with the LARQ app. Think of it as your very own hydration control center.</p>
                        </div>

                        <div className='center-img-wrapper'>
                            <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1676361044/tech-page/app-screen-imperial.png" alt="center" />
                        </div>

                        <div className='chemical-free'>
                            <HydrationTracking />
                            <h2>Hydration tracking</h2>
                            <span>
                                Track your water intake. Your hydration goal is our hydration goal.
                            </span>
                        </div>

                        <div className='right'>
                            <EasyReplacement />
                            <h2>Easy replacements</h2>
                            <span>
                                Intelligent filter life tracking based on your household water consumption so you know exactly when to replace the filter.
                            </span>
                        </div>

                    </div>
            }
        </div>
    )
}

export default PurevisTech