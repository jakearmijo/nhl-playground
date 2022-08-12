import styled from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Col } from '@zendeskgarden/react-grid';

export const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space};
  }
  font-size: 1.15rem;
`;