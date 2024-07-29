import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // menu start
  menuWrapper: {
    position: 'fixed',
    width: '100%',
    zIndex: 100,
    top: 0,
    left: 0,
    textAlign: 'center',
    '& .MuiAppBar-root': {
      backgroundColor: 'white',
      color: 'var(--mary--black-85)',
    },
  },
  menuHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 20px',
    background: 'var(--mary--main-color)',
    color: 'white',
    fontWeight: 600,
    fontSize: '1.2rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  },
  // menu end

  // stadard menu start
  standardMenuWrapper: {
    margin: 0,
  },
  menuListItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    justifyContent: 'center',
    padding: '0 20px 20px 20px',
  },
  menuItem: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '.3rem',
      color: 'var(--mary--main-color)',
    },
  },
  menuItemActive: {
    cursor: 'pointer',
    textDecoration: 'underline',
    textUnderlineOffset: '.3rem',
    color: 'var(--mary--main-color)',
  },
  // stadard menu end

  // mobile menu start
  mobileMenuListItem: {
    padding: '48px 48px 16px 16px',
  },
  mobileMenuItemActive: {
    color: 'var(--mary--main-color)',
  },
  // mobile menu end

  // search bar start
  searchWrapper: {
    display: 'flex',
    gap: '12px',
    padding: '32px',
    [theme.breakpoints.down('md')]: {
      gap: '8px',
      padding: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      gap: '6px',
      padding: '16px',
    },
  },
  resultSearch: {
    padding: '4px 32px',
    [theme.breakpoints.down('md')]: {
      padding: '16px 24px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: 16,
    },
  },
  resultItem: {
    display: 'flex',
    alignItems: 'start',
    gap: 8,
    paddingBottom: 16,
  },
  resultImgItem: {
    width: 60,
    borderRadius: 4,
  },
  resultNameItem: {
    fontSize: '1rem',
    cursor: 'pointer',
    textTransform: 'uppercase',
    '&:hover': {
      color: 'var(--mary--main-color)',
      textDecoration: 'underline',
      textUnderlineOffset: '.3rem',
    },
  },
  // search bar end

  // banner start
  bannerWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '32px',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '16px',
    },
  },
  bannerImg: {
    width: '25%',
    borderRadius: '8px 0 0 8px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '240px',
      borderRadius: '8px 8px 0 0',
      objectFit: 'cover',
    },
  },
  bannerOutlineImg: {
    width: '40%',
    objectFit: 'cover',
    maxHeight: '500px',
    borderRadius: '0 8px 8px 0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxHeight: '240px',
      borderRadius: '0 0 8px 8px',
      objectFit: 'cover',
    },
  },
  bannerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'var(--mary--main-color)',
    color: 'white',
    borderRadius: '0 8px 8px 0',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0 0 8px 8px',
      padding: '32px 8px',
    },
  },
  bannerOutlineContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    color: 'var(--mary--main-color)',
    border: '1px solid var(--mary--main-color)',
    borderRight: 'none',
    borderRadius: '8px 0 0 8px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '8px 8px 0 0',
      borderBottom: 'none',
      borderRight: '1px solid var(--mary--main-color)',
      padding: '32px 8px',
    },
  },
  bannerHeading: {
    fontSize: '2.5rem',
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  bannerText: {
    fontSize: '1.5rem',
    fontWeight: 500,
    margin: '6px 0 32px 0',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
      margin: '2px 0 12px 0',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  // banner end

  // footer start
  footerWrapper: {
    color: 'white',
    backgroundColor: 'var(--mary--main-color)',
    padding: '2.5rem 3rem',
    marginTop: '4rem',
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      padding: '16px',
      marginTop: '2rem',
      fontSize: '0.875rem',
    },
  },
  footerBox: {
    display: 'flex',
    flexWrap: 'wrap',
    '& .MuiListItem-root': {
      padding: '4px 0',
    },
  },
  footerBoxItem: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  footerItem: {
    color: 'white',
    textDecoration: 'none',
    margin: '4px 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '.3rem',
    },
  },
  // footer end

  // spacing start
  spacing: {
    width: '100%',
    height: 36,
    [theme.breakpoints.down('md')]: {
      height: 24,
    },
    [theme.breakpoints.down('sm')]: {
      height: 16,
    },
  },
  // spacing end

  // container start
  container: {
    padding: '32px',
    [theme.breakpoints.down('md')]: {
      padding: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '16px',
    },
  },
  // container end

  // list item start
  listItem: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      gap: '16px',
    },
    '&>*': {
      flex: '0 0 calc(25% - 24px)',
      boxSizing: 'border-box',
      [theme.breakpoints.down('md')]: {
        flex: '0 0 calc(50% - 16px)',
      },
      [theme.breakpoints.down('sm')]: {
        flex: '0 0 calc(50% - 8px)',
      },
    },
  },
  // list item end

  // product card start
  priceWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  // product card end
}));

export default useStyles;
