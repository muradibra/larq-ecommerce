import React, { useState } from 'react'
import { PiWarningCircleFill } from 'react-icons/pi'
import InsulatedIcon from '../../../lib/InsulatedIcon'
import NonInsulatedIcon from '../../../lib/NonInsulatedIcon'

function ProductInsulation({ product, insulation, setInsulation }) {
    // const [insulation, setInsulation] = useState("")


    return (
        product.insulation?.length > 0 &&
        <div className='insulation'>
            <div className='insulation-title'>
                <div className='title'>Insulation</div>
                <div className="learn-more">
                    <span>Learn more</span>
                </div>
            </div>

            <div className='insulation-types'>
                {
                    product.insulation.map((item, index) => (
                        <button 
                            key={index}
                            className={`btn ${item.label === insulation ? "active" : ""}`}
                            onClick={() => setInsulation(item.label)}
                        >
                            {
                                item.label === "Insulated" ?
                                    <InsulatedIcon /> :
                                    <NonInsulatedIcon />
                            }
                            <div className='text'>
                                <p>{item.label}</p>
                                <span>{item.description}</span>
                            </div>

                            <div>
                                <PiWarningCircleFill />
                            </div>
                        </button>
                    ))
                }

                {/* <div className='insulated'>
                    <button>
                        <InsulatedIcon />
                        <div>
                            <p>Insulated</p>
                            <span>24 hours cold and 12 hot</span>
                        </div>
                        <div>
                            <PiWarningCircleFill />
                        </div>
                    </button>
                </div> */}

                {/* <div className='non-insulated'>
                    <button>
                        <NonInsulatedIcon />
                        <div>
                            <p>Non-insulated</p>
                            <span>Light as air</span>
                        </div>
                        <div>
                            <PiWarningCircleFill />
                        </div>
                    </button>
                </div> */}

            </div>
        </div>
    )
}

export default ProductInsulation