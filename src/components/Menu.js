import React from 'react';
import { MobileMenu } from 'components';
import { useCurrentWidth, isMobileScreen } from 'hooks/useCurrentScreenSize';
import useStyles from './styles';
import { WEBSITE_NAME } from 'constants';

function Menu() {
  const classes = useStyles();
  const currentWidth = useCurrentWidth();
  const isMobile = isMobileScreen(currentWidth);

  return isMobile ? (
    <MobileMenu />
  ) : (
    <div className={classes.menuWrapper}>{WEBSITE_NAME}</div>
  );
}

export default Menu;
