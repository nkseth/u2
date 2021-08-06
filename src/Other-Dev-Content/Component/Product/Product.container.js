import {PureComponent} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios'
import PropTypes from 'prop-types';
import ProductComponent from "./Product.component";
import {changeStatus} from '../../store/popup/popup.action';


const mapStateToProps = state => ({
    isOpen:state.PopupReducer.isOpen
})
const mapDispatchToProps = dispatch => ({
    changeStatus: state => dispatch(changeStatus(state)),
})

class ProductContainer extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired
    }

    state = {
        isMobileLogin:false,
        isForgetPassword:false,
        product:[
            {
                name:'Product 1',
                desc:'Cream three piece suit',
                price:'₹3,000 ',
                realPrice:'₹8,000',
                discount:'63%',
                image:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/mask-group-2@2x.png"
            },
            {
                name:'Product 2',
                desc:'Cream three piece suit',
                price:'₹3,000 ',
                realPrice:'₹8,000',
                discount:'63%',
                image:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/mask-group-2@2x.png"

            },
            {
                name:'Product 3',
                desc:'Cream three piece suit',
                price:'₹3,000 ',
                realPrice:'₹8,000',
                discount:'63%',
                image:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/mask-group-2@2x.png"

            },
            {
                name:'Product 4',
                desc:'Cream three piece suit',
                price:'₹3,000 ',
                realPrice:'₹8,000',
                discount:'63%',
                image:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/mask-group-2@2x.png"

            },
            {
                name:'Product 5',
                desc:'Cream three piece suit',
                price:'₹3,000 ',
                realPrice:'₹8,000',
                discount:'63%',
                image:"https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/img/mask-group-2@2x.png"
            }
        ]
    }

    render(){
        return <ProductComponent
            {...this.props}
            {...this.state}
        />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);