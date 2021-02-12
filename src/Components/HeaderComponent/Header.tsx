import React from 'react';
import { } from 'react-native';
import { Container, AppName, Avatar } from './HeaderStyle';
import { useEffect } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
// import { Container } from './styles';

const HeaderComponent: React.FC = () => {

  useEffect(() => {

  }, [])

  const [loaded] = useFonts({
    EnglishMedium: require('../../font/EnglishMedium.otf'),
  });

  if (!loaded) {
    return null;
  }
  return <Container>
    <EvilIcons name="search" size={36} color="white" />
    <AppName style={{ fontFamily: 'EnglishMedium', fontSize:20 }} >NIGHTLY</AppName>
    <Avatar source={require('../../assets/avat.png')} />
  </Container>
}

export default HeaderComponent;