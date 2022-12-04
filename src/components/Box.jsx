import styled from 'styled-components';
import {
  color,
  flexbox,
  layout,
  space,
  typography,
  border,
  shadow,
} from 'styled-system';

export const Box = styled('div')(
  color,
  space,
  layout,
  typography,
  flexbox,
  border,
  shadow
);
