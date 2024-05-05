import React from 'react';
import baniere from '../assets/header_background.jpg';

class BannerFin extends React.Component {
  render() {
    return (
      <img src={baniere} className="banner_fin" alt="banner" />
    );
  }
}

export default BannerFin;
