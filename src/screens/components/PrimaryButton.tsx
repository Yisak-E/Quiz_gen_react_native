import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native';

type PrimaryButtonProps = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

const PrimaryButton = ({ label, onPress, disabled }: PrimaryButtonProps): React.JSX.Element => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 16,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    backgroundColor: '#93c5fd',
  },
  label: {
    color: '#f8fafc',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default PrimaryButton;
