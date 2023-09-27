import sideImg2_clean from '../../../assets/img/sideImg2-clean.jpg'

function AtHomePurificationSlogan() {
    return (
        <div className="slogan at-home-purification">

            <div className='content-card bg-2'>
                <div className="content-card-label">
                    At-home purification
                </div>
                <h2 className='content-card-title'>
                    Who said practical had to be boring?
                </h2>
                <p className='content-card-description'>
                    Nano Zero Filter technology delivers better-tasting coffee, tea, smoothies—everything—and looks good doing it.
                </p>
            </div>

            <div className='media-card'>
                <img src={sideImg2_clean} alt="Portable Purification" />
            </div>
        </div>
    )
}

export default AtHomePurificationSlogan