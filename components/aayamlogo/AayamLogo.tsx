/* eslint-disable prettier/prettier */
import React from 'react';
import { Image } from 'react-native';
import { styles } from '../../styles/style';

const AayamLogo = () => {
  return <Image style={styles.tinyLogo} source={require('../../assets/logo/logo1.jpg')} />;
};

export default AayamLogo;
