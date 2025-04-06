import { Linking } from 'react-native';

export const openMap = (latitude, longitude) => {
  const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
  Linking.openURL(url)
    .then(() => console.log('Map opened successfully'))
    .catch(err => console.error('Error opening map:', err));
};

