import { Button as NBButton, Text } from 'native-base';

export type ButtonProps = {
  label: string;
  onPress: () => void;
};

export const Button = (props: ButtonProps) => {
  const { label, onPress } = props;

  return (
    <NBButton
      backgroundColor="brand.primary"
      size="lg"
      borderRadius="8px"
      onPress={onPress}
    >
      <Text fontSize="lg" fontWeight="medium" color="white">
        {label}
      </Text>
    </NBButton>
  );
};
