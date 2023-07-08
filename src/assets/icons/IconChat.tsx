import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { globalColor, light } from '@/assets/themes';

const IconChat = ({ focused }: { focused: boolean }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 14H14V12H6V14ZM6 11H18V9H6V11ZM6 8H18V6H6V8ZM2 22V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6L2 22Z"
        fill={focused ? globalColor.primary : light.contents.contentThird}
      />
    </Svg>
  );
};

export default IconChat;
