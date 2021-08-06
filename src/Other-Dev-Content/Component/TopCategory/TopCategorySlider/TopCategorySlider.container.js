import {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TopCategorySlider from "./TopCategorySlider.component";

const mapStateToProps = state => ({
    isOpen:state.PopupReducer.isOpen
})
const mapDispatchToProps = dispatch => ({
    // changeStatus: state => dispatch(changeStatus(state)),
    // saveSingUpData: singUpDetails => dispatch(saveSingUpData(singUpDetails)),
})

class TopCategorySliderContainer extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired
    }

    state = {
        sliderData:[
            {
                productName:'Leggins &amp; Salwars',
                image:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/mask-group-3@2x.png"
            },
            {
                productName:'Leggins &amp; Salwars',
                image:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/mask-group-6@2x.png"
            },
            {
                productName:'Leggins &amp; Salwars',
                image:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/mask-group-3@2x.png"
            },
            {
                productName:'Leggins &amp; Salwars',
                image:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/mask-group-6@2x.png"
            },
            {
                productName:'Leggins &amp; Salwars',
                image:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/mask-group-3@2x.png"
            },
            {
                productName:'Leggins &amp; Salwars',
                image:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/mask-group-6@2x.png"
            },
            {
                productName:'Leggins &amp; Salwars',
                image:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/mask-group-3@2x.png"
            },
            {
                productName:'Leggins &amp; Salwars',
                image:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60abaa4eed779ba64954df21/img/mask-group-6@2x.png"
            },
        ]
    }

    render(){
        return <TopCategorySlider
            {...this.props}
            {...this.state}
        />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TopCategorySliderContainer);