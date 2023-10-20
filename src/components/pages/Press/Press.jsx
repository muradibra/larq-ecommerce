import React from 'react'
import { Link } from 'react-router-dom'

function Press() {
  const pressReviewsArray = [
    {
      title: 'Luxe Digital',
      text: `"In short—we’re looking at the next generation of home-based filtration systems."`
    },
    {
      title: 'Wallpaper*',
      text: `"...the LARQ Pitcher is a great way to cut down on plastic use."`
    },
    {
      title: 'Best Products',
      text: `"You Should Ditch Your Old Water Dispenser For The High-Tech LARQ Pitcher PureVis"`
    },
    {
      title: 'Well+Good',
      text: `“...A good water pitcher is a food gadget that's worth the investment—and we've found just the one.”`,
    },
    {
      title: 'Digital Trends',
      text: `“LARQ’s PureVis water pitcher erased my fears about drinking water from the tap”`
    },
    {
      title: 'Well + Good',
      text: `“This Self-Cleaning Water Bottle Keeps My Water—And Itself—Cool, Clean, and Fresh”`
    },
    {
      title: 'Forbes',
      text: `“Your Water Pitcher Could Be A Source Of Contamination. This New Smart-Home Pitcher Prevents That From Happening”`
    },
    {
      title: 'Digital Trends',
      text: `“The LARQ reusable water bottle made me realize how much money I’ve wasted”`
    },
    {
      title: 'POPSUGAR',
      text: `“I Tried the Self-Cleaning LARQ Water Bottle, and It's 100% Worth the Hype”`
    },
    {
      title: 'The Strategist',
      text: `“What’s the Next Status Water Bottle?” “Three of our experts named the LARQ bottle as one to watch.”`
    },
    {
      title: 'Honest Brand Reviews',
      text: `"LARQ Water Bottle Review"`
    },
    {
      title: 'Luxe Digital',
      text: `"Banish Bacteria And Enjoy Effort-Free Hydration With a LARQ Bottle"`
    },
    {
      title: 'TechCrunch',
      text: `"Self-cleaning water bottle company LARQ raises a $10M Series A"`
    },
    {
      title: 'Esquire',
      text: `"Do Yourself a Kindness and Get a Self-Cleaning, Bacteria-Killing Larq Bottle"`
    },
    {
      title: 'CNN Underscored',
      text: `"After spending some time using the bottle, we’ve become big fans...We love that Larq is helping to rid the oceans of plastic pollution, while providing quality products that don’t add to the plastic pileup."`
    },
    {
      title: 'TODAY',
      text: `"I've been using the Larq bottle for about two months now, and so far I'm extremely impressed."`
    }
  ]

  return (
    <div className='press'>
      <div className="title">
        <h1>We are making a splash</h1>
      </div>

      <div className='press-reviews'>
        {/* <div className='review'>
          <h3>Luxe Digital</h3>
          <p>"In short—we’re looking at the next generation of home-based filtration systems."</p>
          <Link>Read more</Link>
        </div> */}
        {
          pressReviewsArray.map((item, index) => (
            <div key={index} className='review'>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link>Read more</Link>
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default Press