import {PureComponent} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios'
import PropTypes from 'prop-types';
import OtpComponent from "./Otpsingup.compnent";
import {changeStatus} from '../../store/popup/popup.action';

const mapStateToProps = state => ({
    singDetails:state.SingUpReducer.singUpDetails
})
const mapDispatchToProps = dispatch => ({
    changeStatus: state => dispatch(changeStatus(state)),
})

class OtpContainer extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired,
        // singUpDetails:PropTypes.object.isRequired
    }

    state={
        isChange:false
    }

    togglePopup(status){
        const {changeStatus} = this.props
        changeStatus(status)
    }

    changeMobileNumber(){
        this.setState({
            isChange:true
        })
    }

    render(){
        return <OtpComponent
                    {...this.props}
                    {...this.state}
                    changeMobileNumber = {this.changeMobileNumber.bind(this)}
                />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OtpContainer);