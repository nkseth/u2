import {PureComponent} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios'
import PropTypes from 'prop-types';
import FooterComponent from "./Footer.component";
import {changeStatus} from '../../store/popup/popup.action';

const mapStateToProps = state => ({
    isOpen:state.PopupReducer.isOpen
})
const mapDispatchToProps = dispatch => ({
    changeStatus: state => dispatch(changeStatus(state)),
    // saveLoguserDetails: logDetails => dispatch(saveLoguserDetails(logDetails))
})

class FooterContainer extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired
    }

    state={
        singUpStatus:true,
        otpStatus:false
    }

    getStart(){
        alert('sdsdsd')
    }


    render(){
        return <FooterComponent
            {...this.props}
            {...this.state}
            getStart={this.getStart.bind(this)}
        />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FooterContainer);