import {PureComponent} from 'react';
import { Container} from 'semantic-ui-react'
import { Row, Col,Button,Image } from 'antd';
import './recom.css';

class RecommendationComponent extends PureComponent {

    renderTitle(){
        return(
            <div className="recomm_group-235">
                <h1 className="recomm_heading-4 dmserifdisplay-normal-cod-gray-54px text-center">
                    <span className='allText mr-4'>All</span>
                    <span className="recomm_span2 ">That You Want</span>
                </h1>
                <p className="recomm_body dmsans-normal-cod-gray-16px">Under a budget &amp; Top offers</p>
            </div>
        )
    }

    renderCard(){
        const{sliderData} = this.props
        return(
                <>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                        {sliderData?.map((value,index)=>
                            <Col span={8} className='CardColumn'>
                                <div className={`recomm_all-that-you-want recomm_all-that-you-want-1`}>
                                    <div className="recomm_overlap-group">
                                        <img className="recomm_rectangle-25" src={value.rectangle25} />
                                        <div className="recomm_group-230">
                                            <div className="recomm_group-229">
                                                <div className="recomm_group-227">
                                                    <div className="recomm_heading-2 dmsans-bold-pale-oyster-12px">{value.heading}</div>
                                                    <div className="recomm_heading-3 dmsans-medium-cod-gray-18px">{value.heading2}</div>
                                                </div>
                                                <p className="recomm_subtext recomm_valign-text-middle dmsans-normal-slate-gray-14px">{value.subtext}</p>
                                            </div>
                                            <div className="recomm_heading-1 dmsans-bold-tobacco-brown-12px">{value.heading3}</div>
                                        </div>
                                        <div className="recomm_group-228">
                                            <div className="recomm_overlap-group1" style={{ backgroundImage: `url(${value.overlapGroup2})` }}>
                                                <div className="recomm_heading dmserifdisplay-normal-white-20px">{value.heading4}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                         )}
                    </Row>
                </>
        )
    }
    render() {
        return (
            <div className="recomm_group-485">
                    <Container>
                        {this.renderTitle()}
                        <div className="recomm_group-494">
                            {this.renderCard()}
                        </div>
                    </Container>
            </div>
        );
    }
}

export default RecommendationComponent;