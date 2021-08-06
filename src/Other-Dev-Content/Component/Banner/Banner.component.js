import {PureComponent} from 'react';
import { Layout } from 'antd';
import BannerImage from'../../images/banner.png'
import { Image } from 'semantic-ui-react'
import {  Modal ,Icon,Button,Header} from 'semantic-ui-react'
import './banner.css'
const {Content } = Layout;



class  Banner extends PureComponent{
    render(){
        return<>
                 <Image className='mt-5 banner' src={BannerImage} fluid />
            </>
    }
}

export default Banner;