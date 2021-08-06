import {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DesignerProductComponent from "./DesignerProduct.component";
import {changeStatus} from '../../store/popup/popup.action';

const mapStateToProps = state => ({
    singDetails:state.SingUpReducer.singUpDetails
})
const mapDispatchToProps = dispatch => ({
    changeStatus: state => dispatch(changeStatus(state)),
})

class DesignerProductContainer extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired,
        // singUpDetails:PropTypes.object.isRequired
    }

    state={
        isChange:false,
        isCategory:false,
        isItemType:false,
        isColor:false,
        isDiscount:false,
        isFabric:false,
        isSleev:false,
        isLength:false,
        isSize:false,
        isDesign:false,
        isshopBy:false,
        category: [
            { value: 'all', label: 'All' },
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ],
        itemType: [
            { value: 'all', label: 'AllItems' },
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ],
        color: [
            { value: 'brown', label: 'Brown' },
            { value: 'red', label: 'Red' },
            { value: 'black', label: 'Black' }
        ],
        discount: [
            { value: '50', label: '50%' },
            { value: '10', label: '10%' },
            { value: '5', label: '5%' }
        ],
        fabric: [
            { value: 'all', label: 'All' },
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ],
        sleevLength: [
            { value: 'all', label: 'All' },
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ],
        length: [
            { value: 'all', label: 'All' },
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ],
        size: [
            { value: 'all', label: 'All' },
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ],
        design: [
            { value: 'all', label: 'All' },
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ],
        shopBy: [
            { value: 'all', label: 'All' },
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]
    }

    changeMobileNumber(name,status){

         if(name==='price'){
             this.setState({
                 isChange: status
             })
         }
        if(name==='category'){

            this.setState({
                isCategory: status
            })
        }
        else if(name==='itemType'){
            this.setState({
                isItemType: status
            })
        }
        else if(name==='color'){
            this.setState({
                isColor: status
            })
        }
        else if(name==='discount'){
            this.setState({
                isDiscount: status
            })
        }
        else if(name==='fabric'){
            this.setState({
                isFabric: status
            })
        }
        else if(name==='sleevLength'){
            this.setState({
                isSleev: status
            })
        }
        else if(name==='design'){
            this.setState({
                isDesign: status
            })
        }
        else if(name==='size'){
            this.setState({
                isSize: status
            })
        }
        else if(name==='length'){
             this.setState({
                 isLength: status
             })
         }
        else if(name==='shopBy'){
             this.setState({
                 isshopBy: status
             })
         }
    }

    render(){
        return <DesignerProductComponent
                    {...this.props}
                    {...this.state}
                    changeMobileNumber = {this.changeMobileNumber.bind(this)}
               />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DesignerProductContainer);