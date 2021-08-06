import {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import RecommendationComponent from "./Recommendation.component";

const mapStateToProps = state => ({
    isOpen:state.PopupReducer.isOpen
})
const mapDispatchToProps = dispatch => ({
    // changeStatus: state => dispatch(changeStatus(state)),
    // saveSingUpData: singUpDetails => dispatch(saveSingUpData(singUpDetails)),
})

class RecommendationContainer extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired
    }

    state = {
        sliderData:[
            {
                rectangle25:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/rectangle-25@2x.png",
                heading:"OFFER WEEK",
                heading2:"Shirts & Trousers brands",
                subtext:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique adipiscing.",
                heading3:"REDEEM YOUR OFFER CARD",
                overlapGroup2:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/star-1@2x.png",
                heading4:"50%",
            },
            {
                rectangle25:"https://cdn.animaapp.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/rectangle-25-1@2x.png",
                heading:"OFFER WEEK",
                heading2:"Shirts & Trousers brands",
                subtext:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique adipiscing.",
                heading3:"REDEEM YOUR OFFER CARD",
                overlapGroup2:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/star-1@2x.png",
                heading4:"50%",

            },
            {
                rectangle25:"https://cdn.animaapp.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/rectangle-25-2@2x.png",
                heading:"OFFER WEEK",
                heading2:"Shirts & Trousers brands",
                subtext:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique adipiscing.",
                heading3:"REDEEM YOUR OFFER CARD",
                overlapGroup2:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/star-1@2x.png",
                heading4:"50%",

            },



        ]
    }

    render(){
        return <RecommendationComponent
            {...this.props}
            {...this.state}
        />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RecommendationContainer);