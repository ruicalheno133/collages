import React from "react";
import AOS from "aos";
import {FaInstagram, FaGlobe, FaBehance} from "react-icons/fa";

const collageList = [
    {bkg: '#05808F', src: '/collages/collages/surfing.jpg', name: 'Waving', artist: 'Rui Calheno', type: 'abstract'},
    {bkg: 'black', src: '/collages/collages/rose_2.jpg', name: 'Rose', artist: 'Rui Calheno', type: 'abstract'},
    {bkg: 'white', src: '/collages/collages/floral.jpg', name: 'Floral', artist: 'Rui Calheno', type: 'abstract'},
    {bkg: '#FFFDE3', src: '/collages/collages/kids.jpg', name: 'Kids', artist: 'Rui Calheno', type: 'humour'},
    {bkg: 'white', src: '/collages/collages/all_america.jpg', name: 'All American', artist: 'Rui Calheno', type: 'humour'},
    {bkg: 'black', src: '/collages/collages/flowing.jpg', name: 'Flowing', artist: 'Rui Calheno', type: 'abstract'},
    {bkg: '#744F5C', src: '/collages/collages/peeking.jpg', name: 'Peeking', artist: 'Rui Calheno', type: 'humour'},
    {bkg: '#FFF1F0', src: '/collages/collages/dreaming.jpg', name: 'Dreaming', artist: 'Rui Calheno', type: 'abstract'},
    {bkg: '#E7D6BA', src: '/collages/collages/high_voltage.jpg', name: 'High Voltage', artist: 'Rui Calheno', type: 'abstract'},
    {bkg: '#515151', src: '/collages/collages/surveillance.jpg', name: 'Surveillance', artist: 'Rui Calheno', type: 'humour'},
    {bkg: '#E0AB81', src: '/collages/collages/alors_on_danse.jpg', name: 'Alors on danse', artist: 'Rui Calheno', type: 'abstract'},
    {bkg: '#FFF2C3', src: '/collages/collages/next_time.jpg', name: 'Next time...', artist: 'Rui Calheno', type: 'abstract'},
]

class CollageDisplay extends React.Component {

    constructor() {
        super();
        this.state = {
            filter: 'all',
            currentPage: 1
        }
        this._filter = this._filter.bind(this)
    }

    _filter(type) {
        this.setState({filter: type})
        window.scrollTo(0, window.innerHeight * 1.3)    
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            const newPage = Math.floor(window.pageYOffset/ (window.innerHeight * 1.2)) 
            this.setState({currentPage: newPage})
        })
    }

    componentWillUnmount() {
    }

    render() {

        AOS.init()

        const collages = collageList.filter(item => {
            return this.state.filter === 'all' || item.type === this.state.filter
        } ).map((item, index) => {
            let infoSide = "collage-info-left "
            if (index % 2 === 0) { infoSide = "collage-info-right " }

            return  (
            <div>
            <div className="collage-wrapper" style={{backgroundColor: item.bkg}}>
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <img src={item.src} className="collage" />
                </div>
                <div className={infoSide}>
                    <p className="name"><b>Name:</b> {item.name} </p>
                    <p className="artist"><b>Artist:</b> {item.artist}</p>
                    <p className="socialMedia">
                        <a className="link" href="https://instagram.com/ruicalheno133" target="_blank" >
                            <FaInstagram className="icon" />
                        </a>
                        {/*
                        <FaGlobe className="icon"/>
                        <FaBehance className="icon"/>
                        */}
                    </p>
                </div>
            </div>

        </div>
            )
        })

        return (
            <div>
                <div className="collage-wrapper" style={{backgroundColor: 'white'}}>
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <h2 className="intro">
                        Showcasing my digital collage work
                        <p className="scroll">SCROLL</p>
                    </h2>
                </div>
            </div>
                {collages}
                <div className="filters">

                    <a className={'filter ' + (this.state.filter === 'all' ? 'selected' : '')} 
                        onClick={()=> this._filter('all')}
                    >
                        All
                    </a>
                    <a className={'filter ' + (this.state.filter === 'abstract' ? 'selected' : '')} 
                        onClick={()=> this._filter('abstract')}
                    >
                        Abstract
                    </a>
                    <a className={'filter ' + (this.state.filter === 'humour' ? 'selected' : '')} 
                        onClick={()=> this._filter('humour')}
                    >
                        Humour
                    </a>
                </div>
                <div className="pages">
                    <span className="currentPage">
                    {this.state.currentPage}
                    </span> / 
                    <span className="totalPages">
                        {collages.length}
                    </span>

                </div>
            </div>
        )
    }
}

export default CollageDisplay
