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

  // Product Card
  priceWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
}));

export default useStyles;
