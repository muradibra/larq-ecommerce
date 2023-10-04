import React from 'react'
import ApastropheSvg from '../../../lib/ApastropheSvg'
import { AiFillStar } from 'react-icons/ai'
import larq_bottle_insulated from '../../../../assets/videos/larq-bottle-insulated_promo-card_anim_v.mp4'

function ReviewsAndPromos() {
  return (
    <div className='reviews-and-promos'>

      <div className='great-water-bottle'>
        <ApastropheSvg color="#fff" />
        <div className='text'>
          <h1>Great Water Bottle!</h1>
          <div className='stars'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span>Mara M.</span>
          </div>

          <div className='review-text'>
            I've been traveling a ton and hate drinking water from the tap in hotels and public restrooms/water fountains. I definitely feel safe drinking the water after it's been cleaned with the LARQ water bottle!
          </div>
        </div>
      </div>

      <div className='card-promo'>
        <div className='card-promo-content'>
          <h1>Self-cleaning & worry-free</h1>
          <p>Powerful PureVis™ technology activates at the touch of a button and every 2 hours to eliminate harmful bacteria such as E. Coli.</p>
        </div>
        <div className="card-promo-video">
          <video muted loop autoPlay playsInline title="Self-cleaning &amp; worry-free" className="cardPromo_videoEl">
            <source src={larq_bottle_insulated} type="video/mp4" />
            {/* <source src="https://res.cloudinary.com/larq/video/upload/v1651574332/assets/spa/v2/content/product/text-media/larq-bottle-insulated_promo-card_anim_v.mp4" type="video/webm" />
            <source src="https://res.cloudinary.com/larq/video/upload/v1651574332/assets/spa/v2/content/product/text-media/larq-bottle-insulated_promo-card_anim_v.mp4" type="video/mp4" />
            <source src="https://res.cloudinary.com/larq/video/upload/v1651574332/assets/spa/v2/content/product/text-media/larq-bottle-insulated_promo-card_anim_v.mp4" type="video/ogg" /> */}
          </video>
        </div>
      </div>

      <div className='card-promo custom'>
        <div className='card-promo-content'>
          <h1>Smarter, cleaner, better</h1>
          <p>More hygienic than regular reusable bottles.</p>
        </div>
        <div className="card-promo-img">
          <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_600/v1651005821/assets/spa/v2/content/product/text-media/larq-bottle-insulated_promo-card_v2.png" alt="" />
        </div>
      </div>

      <div className='promo-wrapper'>
        <div className="card-promo-img">
          <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1571138657/assets/spa/presentation/LARQ_Product-page_450x370_2x.jpg" alt="Keep your cool" />
        </div>
        <div className="card-promo-content">
          <h3>Keep your cool</h3>
          <p>Or keep things toasty. Double-wall vacuum insulation keeps your water cold for 24 hours and hot for 12.</p>
        </div>
      </div>

    </div >
  )
}

export default ReviewsAndPromos