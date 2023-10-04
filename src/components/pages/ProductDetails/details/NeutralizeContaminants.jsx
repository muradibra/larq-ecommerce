import React from 'react'

function NeutralizeContaminants() {
    return (
        <div className='neutralize'>


            <div className='video-wrapper'>
                <video width="960" poster="https://res.cloudinary.com/larq/video/upload/c_scale,q_auto,w_960/v1/assets/spa/v2/content/product/pitcher/LARQ-Pitcher_Step-2_1920_opt.jpg" aria-label="Animated video showing how contaminants are neutralized" muted="" loop="" autoPlay playsInline="" title="Neutralize contaminants" className="cardBody_videoEl">
                    <source src="https://res.cloudinary.com/larq/video/upload/c_scale,q_auto,w_960/v1/assets/spa/v2/content/product/pitcher/LARQ-Pitcher_Step-2_1920_opt.webm" type="video/webm" />
                    <source src="https://res.cloudinary.com/larq/video/upload/c_scale,q_auto,w_960/v1/assets/spa/v2/content/product/pitcher/LARQ-Pitcher_Step-2_1920_opt.mp4" type="video/mp4" />
                    <source src="https://res.cloudinary.com/larq/video/upload/c_scale,q_auto,w_960/v1/assets/spa/v2/content/product/pitcher/LARQ-Pitcher_Step-2_1920_opt.ogv" type="video/ogg" />
                </video>
            </div>
            <div className='text'>
                <div className="title">
                    <h2>Neutralize contaminants</h2>
                </div>
                <div className="description">
                    <p>Proprietary PureVis technology improves the quality of your water by preventing bio-contaminant* growth. Learn more.</p>

                    <p>*In lab testing, PureVis™ inhibits and deactivates naturally occurring heterotrophic bacteria that may cause odor and impact the taste of water compared to non-UV treated water pitchers.</p>
                </div>
            </div>



        </div>
    )
}

export default NeutralizeContaminants