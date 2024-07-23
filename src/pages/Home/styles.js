import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '32px',
    [theme.breakpoints.down('md')]: {
      padding: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '16px',
    },
  },

  // Group List
  listGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '48px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      gap: '18px',
    },
    [theme.breakpoints.down('sm')]: {
      gap: 0,
    },
    '&>*': {
      flex: '0 0 calc(33.3333% - 32px)',
      boxSizing: 'border-box',
      [theme.breakpoints.down('sm')]: {
        flex: 'unset',
        width: '100%',
        marginBottom: '24px',
      },
    },
  },

  // View All
  viewAllContainer: {
    margin: '40px 0',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: '20px 0',
    },
  },
}));

export default useStyles;
