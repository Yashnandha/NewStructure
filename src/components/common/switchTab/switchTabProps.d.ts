interface SwitchTabProps {
  data: string[];
  activeColor?: string;
  inactiveColor?: string;
  onPress?: (i: number) => void;
}

interface animatedButtonProps {
  data: string[];
  onClick: (i: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  onButtonPress?: (i: number) => void;
}
