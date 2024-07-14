import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // menu start
  menuWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    border: '1px solid #999',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      paddingTop: '12px',
    },
  },
  // menu end

  // mobile menu start
  mobileMenuWrapper: {
    '& .MuiAppBar-root': {
      backgroundColor: 'white',
      color: 'var(--mary--black-85)',
    },
  },
  mobileMenuListItem: {
    paddingLeft: '16px',
    paddingRight: '48px',
  },
  // mobile menu end

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
