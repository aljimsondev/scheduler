import {ImageSourcePropType} from 'react-native';

export const cardImagesURL = [
  require('../assets/image/bg1.jpg'),
  require('../assets/image/bg2.jpg'),
  require('../assets/image/bg3.jpg'),
  require('../assets/image/bg4.jpg'),
];

export const randomizePhoto = (items: ImageSourcePropType[]) => {
  const itemCount = items.length;
  return items[Math.ceil(Math.random() * itemCount - 1)];
};
