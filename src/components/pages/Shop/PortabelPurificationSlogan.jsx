import sideImg1_clean from '../../../assets/img/sideImg1-clean.jpg'


function PortabelPurificationSlogan() {
    return (
        <div className="slogan portable-purification">

            <div className='content-card bg-1'>
                <div className="content-card-label">
                    Portable purification
                </div>
                <h2 className='content-card-title'>
                    Make refills a breeze
                </h2>
                <p className='content-card-description'>
                    PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience on the go.
                </p>
            </div>

            <div className='media-card'>
                <img src={sideImg1_clean} alt="Portable Purification" />
            </div>
        </div>
    )
}

export default PortabelPurificationSlogan