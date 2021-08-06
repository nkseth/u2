import {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TopCategoryMenu from "./TopCategoryMenu.component";

const mapStateToProps = state => ({
    isOpen:state.PopupReducer.isOpen
})
const mapDispatchToProps = dispatch => ({
    // changeStatus: state => dispatch(changeStatus(state)),
    // saveSingUpData: singUpDetails => dispatch(saveSingUpData(singUpDetails)),
})

class TopCategoryMenuContainer extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired
    }

    state = {
        otpStatus:false,
        isLogin:false
    }


    render(){
        return <TopCategoryMenu
            {...this.props}
            {...this.state}
        />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TopCategoryMenuContainer);