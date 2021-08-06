import {PureComponent} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios'
import PropTypes from 'prop-types';
import PopupComponent from "./Popup.component";
import {changeStatus} from '../../store/popup/popup.action';


const mapStateToProps = state => ({
    isOpen:state.PopupReducer.isOpen
})
const mapDispatchToProps = dispatch => ({
    changeStatus: state => dispatch(changeStatus(state)),

    // forgotPassword: state => dispatch(forgotPassword(state)),
    // saveLoguserDetails: logDetails => dispatch(saveLoguserDetails(logDetails))
})

class PopupContainer extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired
    }

    togglePopup(status){
        const {changeStatus} = this.props
        changeStatus(status)
    }

    render(){
        return <PopupComponent
                    {...this.props}
                    togglePopup = {this.togglePopup.bind(this)}
                />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PopupContainer);