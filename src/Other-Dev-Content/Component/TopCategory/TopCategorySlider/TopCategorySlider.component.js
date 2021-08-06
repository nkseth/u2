import {PureComponent} from 'react';
import Carousel from 'nuka-carousel';

class TopCategorySliderComponent extends PureComponent{
    render(){
        const{sliderData} = this.props
        return(
            <div className="group-652 mt-5">
                <Carousel
                    slidesToShow={6}
                    speed={200}
                    autoplay={true}
                    cellSpacing={400}
                >
                {sliderData.map((value,index)=>
                    <div className="flex-col-2">

                        <img
                            className="mask-group-1"
                            src={value.image}
                        />
                        <div className="overlap-group-1">
                            <div className="name-1 dmsans-medium-black-16px">{value.productName}</div>
                        </div>
                    </div>
                )}
                </Carousel>
            </div>
        );
    }
}

export default TopCategorySliderComponent;