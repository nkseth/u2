import {PureComponent} from 'react';
import { Container } from 'semantic-ui-react'
import {Row,Col} from 'antd'
import './footer.css'
import {SignupSchema} from "../../utils/ValidationSchema";
import {generateForm} from "../../utils/formgenerator";
import { Formik, Form, Field } from 'formik';
import {Buttons} from "../../utils/buttons";

class Footer extends PureComponent{
    renderContactWithUs(){
        const{getStart} =this.props
        const formField = [
            {
                label: 'Enter email*',
                name: 'email',
                type: 'text',
            },
        ];
        return(
            <div className="footer_flex-col-1">
                <h1 className="footer_title dmserifdisplay-normal-tobacco-brown-54px">Logo</h1>
                <div className="footer_write-email-with-us dmserifdisplay-normal-cod-gray-20px">Write email with us</div>
                <div className="group-704">
                    <Formik
                        enableReinitialize={true}
                        // initialValues={
                        //     {
                        //         fullName: '',
                        //         email: '',
                        //         phone: '',
                        //         password:''
                        //     }
                        // }
                        onSubmit={((event)=>{getStart(event)})}
                        validationSchema={SignupSchema}
                        // innerRef={innerForm}
                    >
                        {({ errors, touched }) => (
                            <Form className="login__form" >
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                    {generateForm(formField,errors)}
                                </Row>

                                <div className="getStart mt-4">
                                    {Buttons({type:'submit',name:'Submit'})}
                                </div>
                            </Form>
                        )}
                    </Formik>

                </div>
            </div>
        )
    }

    renderUsefullLink(){
        return(
            <div className="footer_flex-col-3">
                <div className="footer_useful-links dmserifdisplay-normal-cod-gray-20px">Useful Links</div>
                <div className="footer_text-1 dmsans-normal-masala-16px">
                    <a>About us</a>
                    <br />
                    <a>Contact us</a>
                    <br />
                    <a>FAQ</a>
                    <br />
                    <a>Blog</a>
                    <br />
                    <a>Careers</a>
                    <br />
                    <a>Sitemap</a>
                    <br />
                    <a>Store Locator</a>
                </div>
            </div>
        )
    }

    renderBuyingGiude(){
        return(
            <div className="footer_flex-col-2">
                <div className="footer_buying-guide dmserifdisplay-normal-cod-gray-20px">Buying Guide</div>
                <p className="footer_text-2 dmsans-normal-masala-16px">
                    <a>Gift Card</a>
                    <br />
                    <a>Coupon Code &amp; Offers T&amp;C</a>
                    <br />
                    <a>Returns &amp; Exchanges</a>
                    <br />
                    <a>Shipping &amp; Delivery</a>
                    <br />
                    <a>Payment Options</a>
                    <br />
                    <a>Give Us Feedback</a>
                    <br />
                    <a>Order Customization</a>
                </p>
            </div>
        )
    }

    renderPolicies(){
        return(
                <>
                    <div className="footer_group-703">
                        <div className="footer_policies dmserifdisplay-normal-cod-gray-20px">Policies</div>
                        <p className="footer_text-4 dmsans-normal-masala-16px">
                            <a>Terms &amp; Conditions</a>
                            <br />
                            <a>Security &amp; Privacy</a>
                            <br />
                            <a>Purchase Order Policy</a>
                        </p>
                        <div className="footer_group-700">
                        <div className="footer_phone-call-1-1">
                            <div className="footer_group-1"></div>
                        </div>
                        <div className="footer_flex-col">
                            <div className="footer_talk-to-us dmserifdisplay-normal-black-20px">Talk to us</div>
                            <div className="footer_text-5 dmsans-normal-masala-16px">
                                +919663406663
                                <br />
                                +917762989531
                            </div>
                        </div>
                    </div>
                    </div>

                </>
        )
    }

    renderSocialIcons(){
        return(
            <>
                <div className="footer_group-702">
                    <div className="footer_connect-with-us dmserifdisplay-normal-black-20px">Connect with us</div>
                    <div className="footer_group-701">
                        <div className="footer_instagram-1">
                            <img
                                className="footer_vector-2"
                                src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/vector-18@2x.png"
                            />
                        </div>
                        <div className="footer_facebook-1">
                            <div className="footer_group-3">
                                <img
                                    className="footer_vector-4"
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a902eba2473b1db35c5d08/img/vector-9@2x.png"
                                />
                            </div>
                        </div>
                        <div className="footer_linkedin-1">
                            <div className="footer_group">
                                <img
                                    className="footer_vector"
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a902eba2473b1db35c5d08/img/vector-11@2x.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    renderButtonsForApp(){
        return(
            <div className="footer_flex-col-4">
                <div className="footer_text-6 dmserifdisplay-normal-black-20px">Experience U2 App on Mobile</div>
                <div className="footer_flex-row-3">
                    <img
                        className="footer_x80cc455a-92d2-4-4-googleplay-1"
                        src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a902eba2473b1db35c5d08/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google-play-1@2x.png"
                    />
                    <img
                        className="footer_bc5e11ad-0250-4-1-applestore-1"
                        src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a902eba2473b1db35c5d08/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple-store-1@2x.png"
                    />
                    <div className="footer_group-705">
                        <div className="footer_overlap-group3">
                            <div className="footer_group-2">
                                <img
                                    className="footer_vector-1"
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a902eba2473b1db35c5d08/img/vector-14@2x.png"
                                />
                                <img
                                    className="footer_vector-3"
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a902eba2473b1db35c5d08/img/vector-13@2x.png"
                                />
                            </div>
                            <div className="footer_original">ORIGINAL</div>
                        </div>
                    </div>
                    <p className="footer_text-7">
                                    <span className="span0">
                                      100% ORIGINAL
                                      <br />
                                    </span>
                        <span className="footer_span1 "> guarantee for all products at U2.com</span>
                    </p>
                </div>
            </div>
        )
    }

    renderpopuklarSearch(data,className=''){
        const {
            text8,
        } = data;

        return (
            <div className={`group-707 ${className || ""}`}>
                <div className="footer_overlap-group1">
                    <p className="footer_text-8 dmsans-normal-masala-16px">{text8}</p>

                </div>
            </div>
        );
    }

    renderPopularSearch(){
        return(
                <>
                    <div className="footer_flex-row">
                        <Row>
                            <Col span={5}>
                                <div className="footer_popular-searches dmserifdisplay-normal-cod-gray-20px">Popular searches</div>
                            </Col>
                            <Col span={19}>
                                <img
                                    className="footer_line-77"
                                    src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a902eba2473b1db35c5d08/img/line-77@1x.png"
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="footer_group-709">
                       <Row>
                           <Col>
                                {this.renderpopuklarSearch(group707Data)}
                           </Col>
                            <Col>
                                {this.renderpopuklarSearch(group7072Data,"footer_group-708")}
                            </Col>
                       </Row>
                    </div>
                    <img
                        className="footer_line-78-1"
                        src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a902eba2473b1db35c5d08/img/line-78@1x.png"
                    />

                    <p className="footer_text-10 dmsans-normal-masala-16px">© 2021 U2.com All rights reserved.</p>
                </>
        )
    }

    render() {
        return (
                <div className="footer_group-710">
                    <div className="footer_overlap-group">
                        <Container>
                            <div className="footer_group-706">
                                <div className="footer_flex-row-1">
                                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='footerMenuRow'>
                                        <Col span={6}>
                                            {this.renderContactWithUs()}
                                        </Col>
                                        <Col span={4}>
                                            {this.renderUsefullLink()}
                                        </Col>
                                        <Col span={5}>
                                            {this.renderBuyingGiude()}
                                        </Col>
                                        <Col span={5}>
                                            {this.renderBuyingGiude()}
                                        </Col>
                                        <Col span={4}>
                                            {this.renderPolicies()}
                                        </Col>
                                    </Row>
                                </div>
                                <div className="footer_flex-row-2">
                                    {this.renderSocialIcons()}
                                    {this.renderButtonsForApp()}

                                </div>
                                {this.renderPopularSearch()}
                            </div>
                        </Container>
                    </div>
                </div>
        );
    }
}

export default Footer;




const group707Data = {
    text8: "Sherwani | Track Pants | Blazers | Sweaters For Men | Men Wedding Dresses | Kurta Pajama | Raincoats | Shorts | Trousers | Waistcoat | Inner Wear | Nightwear | Jeans | Shirts | Jogger Jeans | Men Suits | T Shirts | Sweatshirts | Jackets For Men | Tracksuits | Ripped Jeans | Ethnic Wear | Hoodies | Raksha Bandhan Gifts",

};

const group7072Data = {
    text8: "Sherwani | Track Pants | Blazers | Sweaters For Men | Men Wedding Dresses | Kurta Pajama | Raincoats | Shorts | Trousers | Waistcoat | Inner Wear | Nightwear | Jeans | Shirts | Jogger Jeans | Men Suits | T Shirts | Sweatshirts | Jackets For Men | Tracksuits | Ripped Jeans | Ethnic Wear | Hoodies | Raksha Bandhan Gifts",
};

