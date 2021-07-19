import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardimg from '../../img/card1.jpg';
import avatar from '../../img/avatar.jpg';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    padding: 10,
    margin:20,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <button className="text-xs bg-gray-400 text-blue-800 font-bold p-0.5 px-1.5 rounded-lg mb-4">ART</button>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="cart image"
          height="160"
          image={cardimg}
          title="Contemplative Reptile"
        />
        <CardContent style={{display:"flex", justifyContent: "space-between"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Example Card
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                Price/Bid<br/>
                <b>$610.23</b>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display:"flex", justifyContent: "space-between"}}>
        <div class="flex">
        <img src={avatar} width="30px" height="30px" alt="avatar" style={{borderRadius:"50%"}}/>
        <Button size="small" color="primary">
          TigerKing
        </Button>
        </div>
        <div className="text-sm">
        <VisibilityRoundedIcon />
         25
        </div>
      </CardActions>
    </Card>
  );
}
