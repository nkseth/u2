import {PureComponent} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios'
import PropTypes from 'prop-types';
import SingupComponent from "./Singup.component";
import {changeStatus} from '../../store/popup/popup.action';
import {saveSingUpData} from '../../store/Singup/singh.action'


const mapStateToProps = state => ({
    isOpen:state.PopupReducer.isOpen
})
const mapDispatchToProps = dispatch => ({
    changeStatus: state => dispatch(changeStatus(state)),
    saveSingUpData: singUpDetails => dispatch(saveSingUpData(singUpDetails)),
})

class SinghContainer extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired
    }

    state = {
        otpStatus:false,
        isLogin:false
    }

    getStart(event){
        const{saveSingUpData} = this.props
        alert('sdsdd')
        saveSingUpData(event)
        this.setState({
            otpStatus:true
        })
    }

    loginStatus(status){
        this.setState({
            isLogin:status
        })
    }

    render(){
        return <SingupComponent
                    {...this.props}
                    {...this.state}
                    getStart={this.getStart.bind(this)}
                    loginStatus={this.loginStatus.bind(this)}
                />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SinghContainer);