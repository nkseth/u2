import {PureComponent} from 'react';
import { Container} from 'semantic-ui-react'
import Select from 'react-select'
import {Row,Col,Radio,Space,Checkbox} from 'antd'
import Collapse from 'react-bootstrap/Collapse'
import ProductContainer from "../Product/Product.container";
import './designer_product.css';

class DesignerProductComponent extends PureComponent {

    state={
        open:false
    }

    renderCategory(){
        const{changeMobileNumber,isCategory,category} = this.props
        return(
            <div className='filterWrap'>
                <div className="flex-row">
                    <Row className='priceTitle'>
                        <Col span={12}>
                            <div onClick={(()=>changeMobileNumber('category',!isCategory))} className="item-title-2 inter-bold-cod-gray-14px">Category</div>
                        </Col>
                        <Col span={12}>
                            <div className="icon-11">
                                <img
                                    onClick={(()=>changeMobileNumber('category',!isCategory))}
                                    className={isCategory ? 'activePriceList vector':'vector'}
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/vector-7@2x.png"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className='priceTitle'>
                    <Col>
                        <Collapse in={isCategory}>
                            <div id="example-collapse-text">
                                <Radio.Group  value={2}>
                                    <Space direction="vertical">
                                        {category?.map((value,index)=>
                                            <Checkbox value={1}>{value.label}</Checkbox>
                                        )}
                                    </Space>
                                </Radio.Group>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        )
    }

   renderItemType(){
       const {isItemType,changeMobileNumber,itemType} = this.props
       return(
           <div className='filterWrap'>
               <div className="flex-row">
                   <Row className='priceTitle'>
                       <Col span={12}>
                           <div onClick={(()=>changeMobileNumber('itemType',!isItemType))} className="item-title-2 inter-bold-cod-gray-14px">Item Type</div>
                       </Col>
                       <Col span={12}>
                           <div className="icon-11">
                               <img
                                   onClick={(()=>changeMobileNumber('itemType',!isItemType))}
                                   className={isItemType ? 'activePriceList vector':'vector'}
                                   src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/vector-7@2x.png"
                               />
                           </div>
                       </Col>
                   </Row>
               </div>
               <Row className='priceTitle'>
                   <Col>
                       <Collapse in={isItemType}>
                           <div id="example-collapse-text">
                               <Radio.Group  value={2}>
                                   <Space direction="vertical">
                                       {itemType?.map((value,index)=>
                                           <Checkbox value={1}>{value.label}</Checkbox>
                                       )}
                                   </Space>
                               </Radio.Group>
                           </div>
                       </Collapse>
                   </Col>
               </Row>
           </div>
       )
   }

    renderColor(){
        const {isColor,changeMobileNumber,color} = this.props
        return(
            <div className='filterWrap'>
                <div className="flex-row">
                    <Row className='priceTitle'>
                        <Col span={12}>
                            <div onClick={(()=>changeMobileNumber('color',!isColor))} className="item-title-2 inter-bold-cod-gray-14px">Color</div>
                        </Col>
                        <Col span={12}>
                            <div className="icon-11">
                                <img
                                    onClick={(()=>changeMobileNumber('color',!isColor))}
                                    className={isColor ? 'activePriceList vector':'vector'}
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/vector-7@2x.png"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className='priceTitle'>
                    <Col>
                        <Collapse in={isColor}>
                            <div id="example-collapse-text">
                                <Radio.Group  value={2}>
                                    <Space direction="vertical">
                                        {color?.map((value,index)=>
                                            <Checkbox value={1}>{value.label}</Checkbox>
                                        )}
                                    </Space>
                                </Radio.Group>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        )
    }

    renderDiscount(){
        const {isDiscount,changeMobileNumber,discount} = this.props
        return(
            <div className='filterWrap'>
                <div className="flex-row">
                    <Row className='priceTitle'>
                        <Col span={12}>
                            <div onClick={(()=>changeMobileNumber('discount',!isDiscount))} className="item-title-2 inter-bold-cod-gray-14px">Discount</div>
                        </Col>
                        <Col span={12}>
                            <div className="icon-11">
                                <img
                                    onClick={(()=>changeMobileNumber('discount',!isDiscount))}
                                    className={isDiscount ? 'activePriceList vector':'vector'}
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/vector-7@2x.png"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className='priceTitle'>
                    <Col>
                        <Collapse in={isDiscount}>
                            <div id="example-collapse-text">
                                <Radio.Group  value={2}>
                                    <Space direction="vertical">
                                        {discount?.map((value,index)=>
                                            <Checkbox value={1}>{value.label}</Checkbox>
                                        )}
                                    </Space>
                                </Radio.Group>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        )
    }

    renderFabric(){
        const {isFabric,changeMobileNumber,fabric} = this.props
        return(
            <div className='filterWrap'>
                <div className="flex-row">
                    <Row className='priceTitle'>
                        <Col span={12}>
                            <div onClick={(()=>changeMobileNumber('fabric',!isFabric))} className="item-title-2 inter-bold-cod-gray-14px">Fabric</div>
                        </Col>
                        <Col span={12}>
                            <div className="icon-11">
                                <img
                                    onClick={(()=>changeMobileNumber('fabric',!isFabric))}
                                    className={isFabric ? 'activePriceList vector':'vector'}
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/vector-7@2x.png"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className='priceTitle'>
                    <Col>
                        <Collapse in={isFabric}>
                            <div id="example-collapse-text">
                                <Radio.Group  value={2}>
                                    <Space direction="vertical">
                                        {fabric?.map((value,index)=>
                                            <Checkbox value={1}>{value.label}</Checkbox>
                                        )}
                                    </Space>
                                </Radio.Group>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        )
    }

    renderSize(){
        const {isSize,changeMobileNumber,size} = this.props
        return(
            <div className='filterWrap'>
                <div className="flex-row">
                    <Row className='priceTitle'>
                        <Col span={12}>
                            <div onClick={(()=>changeMobileNumber('size',!isSize))} className="item-title-2 inter-bold-cod-gray-14px">Size</div>
                        </Col>
                        <Col span={12}>
                            <div className="icon-11">
                                <img
                                    onClick={(()=>changeMobileNumber('size',!isSize))}
                                    className={isSize ? 'activePriceList vector':'vector'}
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/vector-7@2x.png"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className='priceTitle'>
                    <Col>
                        <Collapse in={isSize}>
                            <div id="example-collapse-text">
                                <Radio.Group  value={2}>
                                    <Space direction="vertical">
                                        {size?.map((value,index)=>
                                            <Checkbox value={1}>{value.label}</Checkbox>
                                        )}
                                    </Space>
                                </Radio.Group>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        )
    }

    renderSleevLength(){
        const {isSleev,changeMobileNumber,sleevLength} = this.props
        return(
            <div className='filterWrap'>
                <div className="flex-row">
                    <Row className='priceTitle'>
                        <Col span={12}>
                            <div onClick={(()=>changeMobileNumber('sleevLength',!isSleev))} className="item-title-2 inter-bold-cod-gray-14px">Sleev Length</div>
                        </Col>
                        <Col span={12}>
                            <div className="icon-11">
                                <img
                                    onClick={(()=>changeMobileNumber('sleevLength',!isSleev))}
                                    className={isSleev ? 'activePriceList vector':'vector'}
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/vector-7@2x.png"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className='priceTitle'>
                    <Col>
                        <Collapse in={isSleev}>
                            <div id="example-collapse-text">
                                <Radio.Group  value={2}>
                                    <Space direction="vertical">
                                        {sleevLength?.map((value,index)=>
                                            <Checkbox value={1}>{value.label}</Checkbox>
                                        )}
                                    </Space>
                                </Radio.Group>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        )
    }

    renderLength(){
        const {isLength,changeMobileNumber,length} = this.props
        return(
            <div className='filterWrap'>
                <div className="flex-row">
                    <Row className='priceTitle'>
                        <Col span={12}>
                            <div onClick={(()=>changeMobileNumber('length',!isLength))} className="item-title-2 inter-bold-cod-gray-14px">Length</div>
                        </Col>
                        <Col span={12}>
                            <div className="icon-11">
                                <img
                                    onClick={(()=>changeMobileNumber('length',!isLength))}
                                    className={isLength ? 'activePriceList vector':'vector'}
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/vector-7@2x.png"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className='priceTitle'>
                    <Col>
                        <Collapse in={isLength}>
                            <div id="example-collapse-text">
                                <Radio.Group  value={2}>
                                    <Space direction="vertical">
                                        {length?.map((value,index)=>
                                            <Checkbox value={1}>{value.label}</Checkbox>
                                        )}
                                    </Space>
                                </Radio.Group>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        )
    }

    renderdesign(){
        const {isDesign,changeMobileNumber,design} = this.props
        return(
            <div className='filterWrap'>
                <div className="flex-row">
                    <Row className='priceTitle'>
                        <Col span={12}>
                            <div onClick={(()=>changeMobileNumber('design',!isDesign))} className="item-title-2 inter-bold-cod-gray-14px">Dessign</div>
                        </Col>
                        <Col span={12}>
                            <div className="icon-11">
                                <img
                                    onClick={(()=>changeMobileNumber('design',!isDesign))}
                                    className={isDesign ? 'activePriceList vector':'vector'}
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/vector-7@2x.png"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className='priceTitle'>
                    <Col>
                        <Collapse in={isDesign}>
                            <div id="example-collapse-text">
                                <Radio.Group  value={2}>
                                    <Space direction="vertical">
                                        {design?.map((value,index)=>
                                            <Checkbox value={1}>{value.label}</Checkbox>
                                        )}
                                    </Space>
                                </Radio.Group>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        )
    }

    renderShopBy(){
        const {isshopBy,changeMobileNumber,shopBy} = this.props
        return(
                <div className='filterWrap'>
                    <div className="flex-row">
                        <Row className='priceTitle'>
                            <Col span={18}>
                                <div onClick={(()=>changeMobileNumber('shopBy',!isshopBy))} className="item-title-2 inter-bold-cod-gray-14px">Shop by occasion</div>
                            </Col>
                            <Col span={6}>
                                <div className="icon-11">
                                    <img
                                        onClick={(()=>changeMobileNumber('shopBy',!isshopBy))}
                                        className={isshopBy ? 'activePriceList vector':'vector'}
                                        src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/vector-7@2x.png"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row className='priceTitle'>
                        <Col>
                            <Collapse in={isshopBy}>
                                <div id="example-collapse-text">
                                    <Radio.Group  value={2}>
                                        <Space direction="vertical">
                                            {shopBy?.map((value,index)=>
                                                <Checkbox value={1}>{value.label}</Checkbox>
                                            )}
                                        </Space>
                                    </Radio.Group>
                                </div>
                            </Collapse>
                        </Col>
                    </Row>
                </div>
        )
    }

   renderPriceRange(){

       const{changeMobileNumber,isChange} = this.props
       return(
            <div className='filterWrap'>
                <div className="flex-row">
                    <Row className='priceTitle'>
                        <Col span={12}>
                            <div onClick={(()=>changeMobileNumber('price',!isChange))} className="item-title-2 inter-bold-cod-gray-14px">Price</div>
                        </Col>
                        <Col span={12}>
                            <div className="icon-11">
                                <img
                                    onClick={(()=>changeMobileNumber('price',!isChange))}
                                    className={isChange ? 'activePriceList vector':'vector'}
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/vector-7@2x.png"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className='priceTitle'>
                    <Col>
                        <Collapse in={isChange}>
                            <div id="example-collapse-text">
                                <Radio.Group  value={2}>
                                    <Space direction="vertical">
                                        <Radio value={1}><span className='priceRange'>₹3000 to ₹6,000</span> <span className='otherAmt'>(900)</span></Radio>
                                        <Radio value={2}><span className='priceRange'>₹10,000 to ₹15,000</span> <span className='otherAmt'>(300)</span></Radio>
                                        <Radio value={3}><span className='priceRange'>₹20,000 to ₹30,000</span> <span className='otherAmt'>(100)</span></Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        )
   }

    renderSiderFilter(){
        return(
                <div className="overlap-group2">
                    <div className="filter-bar"></div>
                    <div className="group-661">
                        {/*<div className="group-203">*/}
                        <Row style={{width:'100%'}} className='filterRow'>
                            <Col span={12} >
                                <div className="filter-1 ml-4 dmserifdisplay-normal-cod-gray-20px">Filter</div>
                            </Col>
                            <Col span={12}>
                                <div className="clear-all float-right mr-4 ">Clear all</div>
                            </Col>
                        </Row>
                        {this.renderCategory()}
                        {this.renderPriceRange()}
                        {this.renderItemType()}
                        {this.renderColor()}
                        {this.renderDiscount()}
                        {this.renderFabric()}
                        {this.renderSize()}
                        {this.renderSleevLength()}
                        {this.renderLength()}
                        {this.renderdesign()}
                        {this.renderShopBy()}

                    </div>
                </div>
            )
    }

    renderNavigationPath(){
        return(
                <div className='navigationPath'>
                    <Row>
                        <Col>
                            <div className='ml-5'>
                                Designers Home / Men / Designer Profile
                            </div>
                        </Col>
                    </Row>
                </div>
        );
    }

    renderProduct(){

    }

    render() {
        return (
                <Container >
                  <div className="filter">
                        {this.renderNavigationPath()}
                              <Row className='designerComponentRow'>
                                  <Col span={6}>
                                      <div className="group-678">
                                          <div className="overlap-group12">
                                              <div className="group-662">
                                                  {this.renderSiderFilter()}
                                              </div>
                                          </div>
                                      </div>
                                  </Col>
                                  <Col  span={18} >
                                      <div className='backgroundContainer'>
                                          <Row className="backgroundImage">
                                              <Col span={10}>
                                                      <div className="group-7200" >
                                                          <img
                                                              className="mask-group-1"
                                                              src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/mask-group-1@2x.png"
                                                          />
                                                      </div>
                                              </Col>
                                              <Col span={14}>
                                                  <div className='designer_details'>
                                                      <div className='designer_name'>
                                                          Designer Name
                                                      </div>
                                                      <div className='designer_description'>
                                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                          when an unknown printer took a galley of type and scrambled
                                                      </div>
                                                  </div>
                                              </Col>
                                          </Row>
                                      </div>
                                      <div></div>
                                      <ProductContainer/>
                                  </Col>
                              </Row>
                        </div>
                </Container>
        );
    }
}

export default DesignerProductComponent;

// class Content extends PureComponent {
//
// }


class Icon extends PureComponent {
    render() {
        const { src, className } = this.props;

        return (
            <div className={`icon-6 ${className || ""}`}>
                <img className="vector" src={src} />
            </div>
        );
    }
}


class Icon2 extends PureComponent {
    render() {
        const { overlapGroup6, className } = this.props;

        return (
            <div className={`icon-10 ${className || ""}`}>
                <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup6})` }}>
                    <img
                        className="vector-1"
                        src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a8e510a2473b1db35c5cb5/img/vector-22@2x.png"
                    />
                </div>
            </div>
        );
    }
}

const iconData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/vector-8@2x.png",
};

const contentData = {
    iconProps: iconData,
};

const icon2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/vector-8@2x.png",
};

const content2Data = {
    iconProps: icon2Data,
};

