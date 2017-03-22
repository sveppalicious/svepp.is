import React, {Component} from 'react';
import AtvImg from 'react-atv-img';
import MediaQuery from 'react-responsive';
import BrowserDetection from 'react-browser-detection';
const images = [
    'https://svepp.is/static/media/memphis.png',
    'https://svepp.is/static/media/memphis2.png',
    'https://svepp.is/static/media/text.png',
  ]
const size = {
  big: { width: 680, height: 384 },
  small: { width: 256, height: 154 },
}
const browserHandler = {
  firefox: () =>
    <MediaQuery minDeviceWidth={700}>
        {(matches) => {
            if (matches) {
                return (
                  <AtvImg
                    layers={images}
                    style={size.big}
                    isStatic={true}
                    staticFallback={'https://svepp.is/static/media/flat.png'}
                  />
                );
            } else {
                return (
                  <AtvImg
                    layers={images}
                    style={size.small}
                    isStatic={true}
                    staticFallback={'https://svepp.is/static/media/flat.png'}
                  />
                );
            }
        }}
    </MediaQuery>,
  default: () =>
    <MediaQuery minDeviceWidth={700}>
        {(matches) => {
            if (matches) {
                return (
                  <AtvImg
                    className="Header"
                    layers={images}
                    style={size.big}
                  />
                );
            } else {
                return (
                  <AtvImg
                    layers={images}
                    style={size.small}
                  />
                );
            }
        }}
    </MediaQuery>,
};
class Header extends Component {
    render() {
        return (
          <BrowserDetection>
            { browserHandler }
          </BrowserDetection>
        );
    }
}

export default Header;
