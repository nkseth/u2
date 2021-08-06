import {PureComponent} from 'react';
import Carousel from 'nuka-carousel';
import { Container} from 'semantic-ui-react'
import './celebrity.css'
import heart from "../../images/calebrity/vector-7@2x.png";

class CelebrityStyleComponent extends PureComponent{
    render(){
        const{sliderData} = this.props
        return(
                <Container>
                    <div className='mb-3' >
                        <h2 className="celebrityHeading"><span className='celebrity  mr-3' >Celebrity</span><span className='style'>Style</span></h2>
                    </div>
                    <div className="celebrityImages mb-5">
                        <Carousel
                            slidesToShow={6}
                            speed={200}
                            autoplay={true}dmsans-normal-star-dust-14px
                            cellSpacing={600}
                            // autoplayReverse={true}
                        >
                            {sliderData.map((value,index)=>
                                <div className="flex-col-2">
                                    <a >
                                        <img
                                         onClick={(()=>alert('sdds'))}
                                        src={heart}
                                        className='heart'
                                        />
                                    </a>
                                    <img
                                        className="celebrityImage"
                                        src={value.image}
                                    />
                                    <div className="celebrityPrice mt-3">
                                        <div className="content">
                                            <div className="title dmsans-bold-cod-gray-16px">Celebrity style</div>
                                            <div className="subtitle dmsans-normal-masala-12px">Custome made Design</div>
                                            <div className="subtitle-1 dmsans-normal-white-14px">
                                                <span className="span dmsans-normal-cod-gray-14px">₹6000 </span>
                                                <span className="span offer">₹8499</span>
                                                <span className="span dmsans-normal-cod-gray-14px">&nbsp;</span>
                                                <span className="span offer dmsans-normal-pale-oyster-14px">63% OFF</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Carousel>
                        
                    </div>
                </Container>
        );
    }
}

export default CelebrityStyleComponent;