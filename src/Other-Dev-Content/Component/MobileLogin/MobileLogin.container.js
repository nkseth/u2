import {PureComponent} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios'
import PropTypes from 'prop-types';
import MobileLoginComponent from "./MobileLogin.component";
import {changeStatus} from '../../store/popup/popup.action';

const mapStateToProps = state => ({
    singDetails:state.SingUpReducer.singUpDetails
})
const mapDispatchToProps = dispatch => ({
    changeStatus: state => dispatch(changeStatus(state)),
})

class LoginVerificationContainer extends PureComponent{
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
        return <MobileLoginComponent
                    {...this.props}
                    {...this.state}
                />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginVerificationContainer);