import { PureComponent } from 'react';
import { Container, Menu, Input, Dropdown, Grid } from 'semantic-ui-react';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import Popup from '../Popup/Popup.container';
import Modal from 'react-bootstrap/Modal';
import Singup from '../SinghUp/Singup.container';
import logo from '../../images/logo/logo.png';

class Header extends PureComponent {
  render() {
    const { togglePopup, isOpen } = this.props;
    return (
      <>
        <Popup status={isOpen} data={<Singup />} />

        <div className='group-639' id='header'>
          <Row>
            <Col span={18}>
              <div className='flex-col-5'>
                <div className='logo valign-text-middle quicksand-bold-black-45px'>
                  LOGO
                </div>
                <div className='group-629'>
                  <Navbar expand='sm'>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                      <Nav className='mr-auto'>
                        <Nav.Link href='#home' className='mr-4'>
                          New arrivals
                        </Nav.Link>
                        <Nav.Link href='#link' className='mr-4'>
                          Men
                        </Nav.Link>
                        <Nav.Link href='#link' className='mr-4'>
                          Women
                        </Nav.Link>
                        <Nav.Link href='#link' className='mr-4'>
                          Kids
                        </Nav.Link>
                        <NavDropdown title='Designers' id='basic-nav-dropdown'>
                          <NavDropdown.Item href='#action/3.1'>
                            Men
                          </NavDropdown.Item>
                          <NavDropdown.Item href='#action/3.2'>
                            Women
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href='#action/3.4'>
                            Separated link
                          </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='#link' className='mr-4'>
                          Contemporary
                        </Nav.Link>
                        <Nav.Link href='#link' className='mr-4'>
                          Offers
                        </Nav.Link>
                        <NavDropdown title='More' id='basic-nav-dropdown'>
                          <NavDropdown.Item href='#action/3.1'>
                            Action
                          </NavDropdown.Item>
                          <NavDropdown.Item href='#action/3.2'>
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href='#action/3.3'>
                            Something
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href='#action/3.4'>
                            Separated link
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                  <img
                    className='line-24'
                    src='https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a8e510a2473b1db35c5cb5/img/line-24@2x.png'
                  />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className='flex-col-1'>
                <div className='group-630'>
                  <div className='group-52'>
                    <div className='overlap-group1-3'>
                      <div className='menu'>
                        <img
                          className='vector-8'
                          src='https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a8e510a2473b1db35c5cb5/img/vector@2x.png'
                        />
                        <div className='rupee-indian-1'></div>
                      </div>
                      <div className='india valign-text-middle dmsans-bold-black-18px'>
                        <span>
                          <span className='span0-1 dmsans-bold-black-18px'>
                            {' '}
                            India
                          </span>
                          <span className='span1-1 dmsans-bold-black-20px'>
                            (&nbsp;&nbsp;)
                          </span>
                        </span>
                      </div>
                      <img
                        className='polygon-1'
                        src='https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a8e510a2473b1db35c5cb5/img/polygon-1@2x.png'
                      />
                    </div>
                  </div>
                  <div className='group-195'>
                    <a onClick={() => togglePopup()}>
                      <img
                        className='icon'
                        src='https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a8e510a2473b1db35c5cb5/img/icon@2x.png'
                      />
                    </a>
                    <div className='icon-2'>
                      <img
                        className='vector-2'
                        src='https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a8e510a2473b1db35c5cb5/img/vector-4@2x.png'
                      />
                    </div>
                    <div className='icon-1'>
                      <div className='overlap-group1-4'>
                        <img
                          className='vector-1'
                          src='https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a8e510a2473b1db35c5cb5/img/vector-2@2x.png'
                        />
                        <img
                          className='vector-5'
                          src='https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a8e510a2473b1db35c5cb5/img/vector-3@2x.png'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='group-196'>
                  <div className='overlap-group2-1'>
                    <div className='rectangle-5 border-1px-celeste'></div>
                    <img
                      className='color'
                      src='https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a8e510a2473b1db35c5cb5/img/---color@2x.png'
                    />
                    <input
                      placeholder={'Search for designers, brands and more'}
                      className='form-control subtext-4 valign-text-middle dmsans-normal-star-dust-13px'
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Header;
