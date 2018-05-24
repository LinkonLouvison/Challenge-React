import React from 'react';
import ReactDOM from 'react-dom';
/* ARCHIVE WITH STYLES */
import './index.css';



/* ICONS   */
const airport_icon = require('../src/img/icons/airport-icon.png');
const cloud_moon = require('../src/img/icons/cloud_moon.png');
const glex_cutout = require('../src/img/icons/GLEX-cutout.png');
const airplanemode_active_black = require('../src/img/icons/ic_airplanemode_active_black_24px.svg');
const data_range_black = require('../src/img/icons/ic_date_range_black_24px.svg');
const home_black = require('../src/img/icons/ic_home_black_24px.svg');
const people_black = require('../src/img/icons/ic_people_black_24px.svg');
const query_builder_black = require('../src/img/icons/ic_query_builder_black_24px.svg');
const sunny_black = require('../src/img/icons/ic_wb_sunny_black_24px.svg');
const moon = require('../src/img/icons/moon.png');
const mountain_background = require('../src/img/icons/mountain-background.jpg');
const rain = require('../src/img/icons/rain.png');
const sun = require('../src/img/icons/sun.png');
const vistajetLogo = require('../src/img/icons/vistajet-logo.svg');
const vistalogo = require('../src/img/icons/vistaLogo.png');
const vistalogo2 = require('../src/img/icons/vistaLogo2.png');

/*FLAGS   */
const brasil = require('../src/img/flags/brasil.jpg');
const eua = require('../src/img/flags/eua.png');
const french = require('../src/img/flags/french.png');
const germany = require('../src/img/flags/germany.jpg');
const paquistao = require('../src/img/flags/paquistao.jpg');
const uk = require('../src/img/flags/uk.jpg');









/* FIRST HEADER OF THE PAGE WITH VISTAJET LOGO*/
class Header1 extends React.Component {
    render() {
        return (

            <header className="header-white">
                <img className="vistajet-logo" src={vistajetLogo} />
            </header>

        );
    }
}


/*SECOND HEADER OF THE PAGE WITH HOME  AND TITLE*/
class Header2 extends React.Component {
    render() {
        return (

            <header className="header-grey">
                <img src={home_black} />
                <span className="header-quotes">My Quotes</span>
            </header>

        );
    }
}



/* BODY WITH CONTAINERS */
class Body extends React.Component {
    render() {
        return (

            <div>
                <h1>My Quotes</h1>
                <Container />
                <Container />
                <Container />

            </div>
        );
    }
}


/*FOOTER OF THE PAGE  */
class Footer extends React.Component {
    render() {
        return (
            <footer>Developed by Linkon Louvison</footer>
        );
    }
}


/*CONTAINER  */
class Container extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="mountain left-side">
                        <div>
                            <img src={glex_cutout} className="aircraft" alt="cl605_aircraft" />
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="top-div">
                            <div className="colorAndFont">
                            <img className="margin-30px"src={data_range_black}/> 
                            <p>Aug 6, 2016</p>

                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}








/* BUILDING THE PAGE WITH THE COMPONENTS CREATED */
class Page extends React.Component {
    render() {
        return (

            <div className="background">
                <Header1 />
                <Header2 />
                <Body />
                <Footer />
            </div>

        );
    }
}












// ========================================

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
