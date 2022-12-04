import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.sizes.normal};
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: ${p => p.theme.sizes.normal};
  height: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[1]}px;
  margin-top: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.blue};
  box-shadow: ${p => p.theme.shadows.normal};

  :focus-visible {
    outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.blue};
    outline-offset: 1px;
  }
`;

export const Label = styled.label`
  width: ${p => p.theme.sizes.normal};
`;

export const Button = styled.button`
  box-shadow: ${p => p.theme.shadows.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.blue};
  border-radius: ${p => p.theme.radii.normal};
  height: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[3]}px;
  cursor: pointer;
  :hover {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.blue};
  }
  transition: color 250ms linear, background-color 250ms linear;
`;
