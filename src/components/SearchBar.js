import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TextField from '@mui/material/TextField';
import useStyles from './styles';
import { list2 } from 'pages/Home/mocks';
import { isPhoneScreen, useCurrentWidth } from 'hooks/useCurrentScreenSize';
import useDebounce from 'hooks/useDebounce';
import { removeAccents } from 'utils';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onClose }) => {
  const classes = useStyles();
  const currentWidth = useCurrentWidth();
  const isPhone = isPhoneScreen(currentWidth);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/products/1');
    onClose();
  };

  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  useDebounce(
    () => {
      setFiltered(
        !search
          ? []
          : list2.filter((d) =>
              removeAccents(d.productName)
                .toLowerCase()
                .includes(search.toLowerCase())
            )
      );
    },
    [list2, search],
    300
  );

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div>
      <div className={classes.searchWrapper}>
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          sx={{ flex: 1 }}
          size={isPhone ? 'small' : 'medium'}
          onChange={handleSearch}
        />
        <IconButton
          edge="end"
          color="inherit"
          aria-label="close-search"
          onClick={onClose}
        >
          <CloseRoundedIcon
            fontSize="large"
            sx={(theme) => ({
              color: 'rgba(0,0,0,0.6)',
              fontSize: '1.9rem',
              [theme.breakpoints.down('sm')]: {
                fontSize: '1.4rem',
              },
            })}
          />
        </IconButton>
      </div>
      {filtered.length > 0 && (
        <div className={classes.resultSearch}>
          {filtered.map((item) => (
            <div className={classes.resultItem} key={item.productName}>
              <img
                className={classes.resultImgItem}
                alt={item.productName}
                src={item.imageSrc}
              />
              <div className={classes.resultNameItem} onClick={handleNavigate}>
                {item.productName}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
