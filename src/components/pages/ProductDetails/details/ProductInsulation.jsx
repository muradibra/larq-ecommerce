import React from 'react'
import { PiWarningCircleFill } from 'react-icons/pi'

function ProductInsulation({ product }) {
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
                    product.insulation?.map((item, index) => (
                        <div key={index}>
                            <label className='insulation-label' htmlFor={item.label}>
                                <div className='img-wrapper'>
                                    <img src={item.icon} alt={item.label} />
                                </div>
                                <div className='type'>
                                    <p>{item.label}</p>
                                    <span>{item.description}</span>
                                </div>

                                <span>
                                    <PiWarningCircleFill />
                                </span>

                            </label>
                            <input type="radio" name="insulation" id={item.label} defaultChecked={index === 0} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductInsulation