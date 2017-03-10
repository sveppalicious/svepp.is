import React, {Component} from 'react';
import logo from './logo.svg';
import AtvImg from 'react-atv-img';
import MediaQuery from 'react-responsive';
const images = [
    'https://svepp.is/static/media/memphis.png',
    'https://svepp.is/static/media/memphis2.png',
    'https://svepp.is/static/media/text.png',
  ]
class Header extends Component {
    render() {
        return (
            <MediaQuery minDeviceWidth={700}>
                {(matches) => {
                    if (matches) {
                        return (<AtvImg layers={images} isStatic={false} style={{
                            width: 680,
                            height: 384
                        }}/>);
                    } else {
                        return (<AtvImg layers={images} isStatic={false} style={{
                            width: 320,
                            height: 190
                        }}/>);
                    }
                }}
            </MediaQuery>
        );
    }
}

export default Header;
