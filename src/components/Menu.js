import React from 'react';
import { MobileMenu, StandardMenu } from 'components';
import { useCurrentWidth, isMobileScreen } from 'hooks/useCurrentScreenSize';

function Menu() {
  const currentWidth = useCurrentWidth();
  const isMobile = isMobileScreen(currentWidth);

  return isMobile ? <MobileMenu /> : <StandardMenu />;
}

export default Menu;
