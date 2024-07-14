import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function GroupCard({
  imageSrc,
  path,
  groupName,
  groupDescription,
}) {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <Card>
      <CardMedia sx={{ height: 180 }} image={imageSrc} title={groupName} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {groupName}
        </Typography>
        <Typography variant="body2">{groupDescription}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleNavigate(path)}>
          View more
        </Button>
      </CardActions>
    </Card>
  );
}
