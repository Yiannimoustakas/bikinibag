import React from 'react'
import { ThemeProvider } from 'styled-components';
import Meta from '../Meta';
import { theme } from '../../../lib/theme';
import {
  StyledPage,
  GlobalStyle,
} from './styled/Page';

const Page = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          {props.children}
        </StyledPage>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default Page;
