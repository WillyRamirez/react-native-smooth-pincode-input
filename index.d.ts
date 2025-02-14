declare module "react-native-smooth-pincode-input" {
  import React from 'react';
  import { ViewStyle, TextStyle } from 'react-native';

  export interface SmoothPinCodeInputProps {
    codeLength?: number;
    value: string;
    onTextChange: (code: string) => void;
    onFulfill?: (code: string) => void;
    cellStyle?: ViewStyle;
    cellStyleFocused?: ViewStyle;
    cellTextStyle?: TextStyle;
    restrictToNumbers?: boolean;
    autoFocus?: boolean;
    // ... add any other props that your fork supports
  }

  const SmoothPinCodeInput: React.FC<SmoothPinCodeInputProps>;

  export default SmoothPinCodeInput;
}
