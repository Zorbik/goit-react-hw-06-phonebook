import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  justify-content: space-between;
  align-items: center;
  margin-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes[1]}px;
`;
