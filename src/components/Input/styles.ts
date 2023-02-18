import { InputLeftAddon as NBInputLeftAddon } from 'native-base';
import DefaultFeather from '@expo/vector-icons/Feather';
import styled from 'styled-components/native';

export const InputLeftAddon = styled(NBInputLeftAddon).attrs({
  w: '20%',
  backgroundColor: 'white',
  borderColor: 'muted.300',
  borderTopLeftRadius: '8px',
  borderBottomLeftRadius: '8px',
})``;

export const Feather = styled(DefaultFeather).attrs(({ theme }) => ({
  color: theme.colors?.muted[400],
  size: 24,
}))``;
