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
const mountain_background = require('../src/img/icons/mountainBackground.jpg');
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
                <Container1 />
                <Container2 />
                <Container3 />

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




class Left_side extends React.Component {
    render() {
        return (
            <div className=" left-side">
                <div>
                    <img className="mountain" src={mountain_background} alt="mountain" />
                    <img src={glex_cutout} className="aircraft" alt="cl605_aircraft" />
                </div>
            </div>
        );
    }
}




class Right_side extends React.Component {
    render() {
        return (
            <div className="right-side">

                <div className="top-div">
                    <div>
                        <p>
                            <img src={data_range_black} className="margin-30px" alt="calendar" /> {this.props.calendar}
                            <img src={query_builder_black} className="margin-30px" alt="time" /> {this.props.time}
                            <img src={people_black} className="margin-30px" alt="group" /> Passengers:
                        </p>
                    </div>
                </div>


                <div class="middle">
                    <div class="size-15 margin-top60px margin-left20px colorAndFont same-line">
                        <b>{this.props.city1}</b>
                    </div>
                    <div class="size-15 margin-top margin-left310  colorAndFont same-line">
                        <b>{this.props.city2}</b>
                    </div>
                    <img class="flag margin-left20px  same-line " src={this.props.flag1} />
                    <div class="colorAndFont margin-left20px size-25 same-line ">{this.props.contry1}</div>
                    <img class="middle-image same-line margin-left20px margin-right20px " src={airplanemode_active_black} />
                    <div class="colorAndFont same-line size-25">{this.props.contry2}</div>
                    <img class="flag margin-left-20px  same-line" src={this.props.flag2} />
                    <div class="climate">
                        <p>
                            <img src={this.props.climate1} class="margin-left20px" alt="climate1" /><span>{this.props.climateText1}</span> <span class="margin-left200px">{this.props.climateText2}</span>
                            <img src={this.props.climate2} alt="climate2" />
                        </p>
                    </div>
                </div>

                <div class="below">
                    <hr></hr>
                    <div>
                        <div class=" colorAndFont same-line margin-left30px  size-20">
                            <b>ETD: {this.props.etd} loc </b>
                        </div>
                        <div class=" colorAndFont size-20  margin-left280">
                            <b>ETA: {this.props.eta} loc </b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




/*CONTAINER  */



class Container1 extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Left_side />
                    <Right_side time={"10:50"} calendar={"Sep 15, 2016"} flag1={brasil} flag2={paquistao}
                        city1={"S PAULO"} city2={"ISLEMAD"} contry1={" BRA "} contry2={" PAK "} climate1={sun}
                        climate2={moon} climateText1={"28.5C"} climateText2={"17.8C"} etd={"15:05"} eta={"17:30"}
                    />
                </div>
            </div>
        );
    }
}

class Container2 extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Left_side />
                    <Right_side time={"10:50"} calendar={"Sep 28, 2016"} flag1={eua} flag2={uk}
                        city1={"CALIFRNA"} city2={" LNDN "} contry1={" EUA "} contry2={" UK "} climate1={rain}
                        climate2={sun} climateText1={"28.8C"} climateText2={"17.8C"} etd={"22:40"} eta={"16:10"}
                    />
                </div>
            </div>
        );
    }
}




class Container3 extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Left_side />
                    <Right_side time={"05:50"} calendar={"may 01, 2017"} flag1={french} flag2={germany}
                        city1={"MARSELHA"} city2={"BAMBERG"} contry1={" FRE "} contry2={" GER "} climate1={sun}
                        climate2={moon} climateText1={"8.5C"} climateText2={"1.8C"} etd={"2:05"} eta={"3:30"}
                    />
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
