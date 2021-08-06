import {PureComponent} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios'
import PropTypes from 'prop-types';
import HeaderComponent from "./Header.component";
import {changeStatus} from '../../store/popup/popup.action';

const mapStateToProps = state => ({
    isOpen:state.PopupReducer.isOpen
})
const mapDispatchToProps = dispatch => ({
    changeStatus: state => dispatch(changeStatus(state)),
    // saveLoguserDetails: logDetails => dispatch(saveLoguserDetails(logDetails))
})

class HeaderContainer extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired
    }

    state={
        singUpStatus:true,
        otpStatus:false
    }

    togglePopup(status){
        const{changeStatus,isOpen} = this.props
        changeStatus(!isOpen)
        
    }

    getStart(){
        this.setState({
            singUpStatus:false
        })
    }

    render(){
        return <HeaderComponent
                    {...this.props}
                    {...this.state}
                    togglePopup = {this.togglePopup.bind(this)}
                />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);