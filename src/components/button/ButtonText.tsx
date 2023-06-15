import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { light } from '@/assets/themes';

interface ButtonTextProps extends TextProps {
  textColor?: string;
}

const ButtonText = ({
  textColor = light.background,
  children = '텍스트',
  ...rest
}: ButtonTextProps) => {
  return (
    <StButtonText textColor={textColor} {...rest}>
      {children}
    </StButtonText>
  );
};

const StButtonText = styled.Text<ButtonTextProps>`
  color: ${(props) => props.textColor};
`;

export default ButtonText;
