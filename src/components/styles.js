import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // menu start
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
  // stadard menu end

  // mobile menu start
  mobileMenuListItem: {
    paddingLeft: '16px',
    paddingRight: '48px',
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
  bannerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'var(--mary--main-color)',
    color: 'white',
    borderRadius: '0 12px 12px 0',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0 0 12px 12px',
      padding: '32px 8px',
    },
  },
  // banner end

  // footer start
  footerWrapper: {
    color: '#000000',
    backgroundColor: '#ffffff',
    padding: '3.5rem 2.5rem',
    marginTop: '4rem',
    fontSize: '0.875rem',
  },
  // footer end

  // scroll top button start
  stbWrapper: {
    position: 'fixed',
    bottom: '18px',
    right: '25px',
    padding: '0.5rem',
    borderRadius: '12px',
    backgroundColor: '#1EBDD3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  // scroll top button end
}));

export default useStyles;
