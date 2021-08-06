import {PureComponent} from 'react'
import { Row, Col,Button,Image } from 'antd';

class TopCategoryMenu extends PureComponent {

    renderSideHeading(){
        return (
                <div>
                    <h1 className="preview dmserifdisplay-normal-tobacco-brown-54px">
                        Top
                        <br />
                        Categories
                        <br />
                        2021
                    </h1>
                </div>
        );
    }

    renderManCategory(){
        return(
            <div className="group-646 links">
                <div className="overlap-group1">
                    <div className="group-642">
                        <div className="flex-row-2">
                            <div className="flex-col">
                                <a className="men valign-text-middle dmsans-bold-white-35px">Men</a>
                                <a className="shirts valign-text-middle dmsans-medium-white-18px">Shirts</a>
                                <a className="hoodies-1 valign-text-middle dmsans-medium-white-18px">Hoodies</a>
                            </div>
                            <img
                                className="line-30"
                                src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/line-30@2x.png"
                            />
                        </div>
                        <a className="jeans-chinos valign-text-middle dmsans-medium-white-18px">Jeans &amp; Chinos</a>
                        <a className="t-shirts-shorts valign-text-middle dmsans-medium-white-18px">
                            T-shirts &amp; Shorts
                        </a>
                        <a className="text-1 valign-text-middle dmsans-medium-white-18px">Jackets &amp; Sweatshirts</a>
                        <a className="kurtas valign-text-middle dmsans-medium-white-18px">Kurtas</a>
                        <a className="casual-wear valign-text-middle dmsans-medium-white-18px">Casual wear</a>
                        <a className="formal-wear valign-text-middle dmsans-medium-white-18px">Formal wear</a>
                    </div>
                </div>
            </div>
        )
    }

    renderGirlCategory(){
        return(
            <div className="group-649 links">
                <div className="overlap-group3">
                    <div className="group-643">
                        <div className="flex-row-1">
                            <div className="flex-col-3">
                                <a className="women valign-text-middle dmsans-bold-white-35px">Women</a>
                                <a className="kurtas-suits valign-text-middle dmsans-medium-white-18px">
                                    Kurtas &amp; Suits
                                </a>
                                <a className="ethnic-wear-1 valign-text-middle dmsans-medium-white-18px">Ethnic Wear</a>
                                <a className="name valign-text-middle dmsans-medium-white-18px">Kurtis &amp; Tops</a>
                            </div>
                            <img
                                className="line-30-2"
                                src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/line-30@2x.png"
                            />
                        </div>
                        <a className="leggins-salwars valign-text-middle dmsans-medium-white-18px">
                            Leggins &amp; Salwars
                        </a>
                        <a className="sarees valign-text-middle dmsans-medium-white-18px">Sarees</a>
                        <a className="dress-materials valign-text-middle dmsans-medium-white-18px">Dress Materials</a>
                        <a className="jump-suits valign-text-middle dmsans-medium-white-18px">Jump Suits</a>
                        <a className="shorts-skirts valign-text-middle dmsans-medium-white-18px">Shorts &amp; Skirts</a>
                    </div>
                </div>
            </div>
        );
    }

    renderKidsCategory(){
        return(
            <div className="group-648 links">
                <div className="overlap-group2">
                    <div className="group-644">
                        <div className="flex-row">
                            <a className="kids valign-text-middle dmsans-bold-white-35px">Kids</a>
                            <img
                                className="line-30-1"
                                src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/line-30@2x.png"
                            />
                        </div>
                        <a className="track-pants valign-text-middle dmsans-medium-white-18px">Track pants</a>
                        <a className="t-shirts valign-text-middle dmsans-medium-white-18px">T-Shirts</a>
                        <a className="shorts valign-text-middle dmsans-medium-white-18px">Shorts</a>
                        <a className="hoodies valign-text-middle dmsans-medium-white-18px">Hoodies</a>
                        <a className="trousers valign-text-middle dmsans-medium-white-18px">Trousers</a>
                        <a className="ethnic-wear valign-text-middle dmsans-medium-white-18px">Ethnic Wear</a>
                        <a className="sweatshirts valign-text-middle dmsans-medium-white-18px">Sweatshirts</a>
                        <a className="jeans valign-text-middle dmsans-medium-white-18px">Jeans</a>
                    </div>
                </div>
            </div>
        );
    }

    render(){
        return(
            <>
                <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}>
                    <div className="x6-a5-b40">
                         <Col span={8}>
                            {this.renderSideHeading()}
                         </Col>
                         <Col span={16}>
                            <div className="group-651">
                                {this.renderManCategory()}
                                {this.renderManCategory()}
                                {this.renderManCategory()}
                            </div>
                         </Col>
                    </div>
                </Row>
            </>
        );
    }
}

export default TopCategoryMenu;
