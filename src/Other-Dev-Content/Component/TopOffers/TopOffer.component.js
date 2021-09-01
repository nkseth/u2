import {PureComponent} from 'react';
import { Container} from 'semantic-ui-react'
import { Row, Col,Button,Image } from 'antd';
import Carousel from 'nuka-carousel';
import topOfferImage from '../../images/topoffer/Group.png'
import './topoffer.css'
class TopOffer extends PureComponent{
    renderTitle(){
        return(
            <div className="offer_flex-row">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12}>
                        <h1 className=" offer_offertext-1">Top offer of the season</h1>
                    </Col>
                    <Col span={12}>
                    <img
                        className="offer_divider"
                        src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/divider@1x.png"
                    />
                    </Col>
                </Row>
            </div>
        )
    }

    renderCards() {
        const {sliderData} = this.props
        return (

                    <div className="offer_flex-row-3">
                        {sliderData?.map((value,index)=>
                            <div className="offer_group-97">
                                <div className="offer_overlap-group-1">
                                    <div className="offer_overlap-group" style={{borderRadius:'5px',backgroundImage:`url(${value.image})`}}>
                                        <div className="offer_overlay-text-2 dmserifdisplay-normal-white-30px">Happy 20% off</div>
                                    </div>
                                    <div className="offer_flex-row-1">
                                        <div className="offer_text- dmsans-bold-cod-gray-16px">
                                            Kurtas, Sarees &amp;
                                            <br />
                                            more Brands
                                        </div>
                                        <div className="offer_icon-1">
                                            <img
                                                className="offer_vector-1"
                                                src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/vector-28@2x.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
        );
    }

    render(){
        return(
                <div style={{backgroundImage:`url(${topOfferImage})`,height:'639px'}}>
                    <Container>
                        <div className="offer_group-974">
                            {this.renderTitle()}
                            {this.renderCards()}
                        </div>
                    </Container>
                </div>
        )
    }
}

export default TopOffer;
