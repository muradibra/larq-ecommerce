import sideImg3_clean from '../../../assets/img/sideImg3-clean.jpg'

function OnTheGoHydrationSlogan() {
    return (
        <div className="slogan on-the-go-hydration">

            <div className='content-card bg-3'>
                <div className="content-card-label">
                    On-the-go hydration
                </div>
                <h2 className='content-card-title'>
                    Hydration never looked so good
                </h2>
                <p className='content-card-description'>
                    Stylish and sustainable. We'll drink to that.
                </p>
            </div>

            <div className='media-card'>
                <img src={sideImg3_clean} alt="Portable Purification" />
            </div>
        </div>
    )
}

export default OnTheGoHydrationSlogan