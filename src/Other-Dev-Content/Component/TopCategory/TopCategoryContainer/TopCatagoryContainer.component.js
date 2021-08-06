import {PureComponent} from 'react';
import { Row, Col,Button,Image } from 'antd';
import TopCategoryMenu from "../TopCategoryMenu/TopCategoryMenu.container";
import TopCategorySliderComponent from "../TopCategorySlider/TopCategorySlider.container";
import { Container} from 'semantic-ui-react'
import './topCategory.css';

class TopCatagoryComponent extends PureComponent {

    render() {
        return (
                <div className="overlap-group ">
                    <div className="rectangle-107"></div>
                    <Container>
                            <TopCategoryMenu/>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col span={5}>
                                <div className="preview-1 dmserifdisplay-normal-black-54px">New In</div>
                            </Col>
                            <Col span={19}>
                                <img
                                   className="line-76"
                                   src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/line-76@1x.png"
                                />
                            </Col>
                        </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <TopCategorySliderComponent/>
                    </Row>
                    </Container>
                </div>

        );
    }
}

export default TopCatagoryComponent;

class WebButton extends PureComponent {
    render() {
        const { iconsProps, icons2Props } = this.props;

        return (
            <div className="web-button">
                <div className="icons-1">
                    <Icons src={iconsProps.src} />
                </div>
                <div className="icons border-1px-tobacco-brown">
                    <Icons src={icons2Props.src} className="icons-2" />
                </div>
            </div>
        );
    }
}


class Icons extends PureComponent {
    render() {
        const { src, className } = this.props;

        return (
            <div className={`icons-3 ${className || ""}`}>
                <img className="vector" src={src} />
            </div>
        );
    }
}

const iconsData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/vector-5@2x.png",
};

const icons2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/vector-6@2x.png",
};

const webButtonData = {
    iconsProps: iconsData,
    icons2Props: icons2Data,
};

