import {PureComponent} from 'react';
import './product.css'

class ProductComponent extends PureComponent {

    renderProduct(product) {
        console.log(product)
        const { image, name, desc, spanText, price, spanText3, realPrice, discount } = product;

        return (
            <div className="group-217 ml-4">
                <div className="overlap-group" style={{ backgroundImage: `url(${image})` }}>
                    <Icon4 src={'https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/vector-7@2x.png'} />
                </div>
                <div className="content">
                    <div className="title dmsans-bold-cod-gray-16px">{name}</div>
                    <div className="subtitle-1 dmsans-normal-masala-12px">{desc}</div>
                    <div className="subtitle dmsans-normal-white-14px">
                        <span className="span dmsans-normal-cod-gray-14px">{price}</span>
                        <span className="span dmsans-normal-star-dust-14px">{realPrice}</span>
                        <span className="span dmsans-normal-cod-gray-14px">{'spanText3'}</span>
                        <span className="span dmsans-normal-pale-oyster-14px">{discount}</span>
                    </div>
                </div>
            </div>
        );
    }

    productList() {
        const{product} = this.props
        var data = []
        product?.map((value,index)=>{
            data.push(this.renderProduct(value))
        })
        return data

    }

    render(){
        return this.productList()

    }
}

export default ProductComponent;


class Icon4 extends PureComponent {
    render() {
        const { src } = this.props;

        return (
            <div className="icon">
                <img className="vector_product" src={src} />
            </div>
        );
    }
}

const icon4Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/vector-7@2x.png",
};

const group217Data = {
    overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/mask-group-2@2x.png",
    title: "Allen solly",
    subtitle: "Cream three piece suit",
    spanText: "₹3,000 ",
    spanText2: "₹8,000",
    spanText3: " ",
    spanText4: "63% OFF",
    icon4Props: icon4Data,
};

