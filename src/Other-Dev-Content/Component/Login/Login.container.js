import {PureComponent} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios'
import PropTypes from 'prop-types';
import LoginupComponent from "./Login.comonent";
import {changeStatus} from '../../store/popup/popup.action';


const mapStateToProps = state => ({
    isOpen:state.PopupReducer.isOpen
})
const mapDispatchToProps = dispatch => ({
    changeStatus: state => dispatch(changeStatus(state)),
})

class LoginContainer extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired
    }

    state = {
        isMobileLogin:false,
        isForgetPassword:false
    }

    mobileLogin(){
        this.setState({
            isMobileLogin:true,
        })
    }

    forgetPassword(){
        this.setState({
            isForgetPassword:true,
        })
    }


    render(){
        return <LoginupComponent
                    {...this.props}
                    {...this.state}
                    mobileLogin = {this.mobileLogin.bind(this)}
                    forgetPassword = {this.forgetPassword.bind(this)}
                />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);