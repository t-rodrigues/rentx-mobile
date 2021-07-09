import styled from 'styled-components/native';

type Props = {
  active: boolean;
};

export const Container = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 3px;
  margin-right: 8px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
`;
