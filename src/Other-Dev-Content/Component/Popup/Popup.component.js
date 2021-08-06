import {PureComponent} from 'react';
import { Button, Header, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal'
import './popup.css'


class Popup extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired
    }

   

    render(){

        const {isOpen,togglePopup,status,data} = this.props
        return  <Modal
                size="lg"
                show={status}
                onHide={() => togglePopup(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                
                >
                {/* <Modal.Header closeButton >
                    
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling 
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    {data}  
                </Modal.Body>
            </Modal>
    }
}

export default Popup;