import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardimg from '../../img/card.jpg';
import avatar from '../../img/avatar.jpg';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

const useStyles = makeStyles({
  root: {
    maxHeight: 400,
    padding: 10,
    margin:20,
  },
});

export default function CateCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{backgroundColor:"#EAEAFF"}}>
      <button className="text-xs bg-gray-400 text-blue-800 font-bold p-0.5 px-1.5 rounded-lg mb-4">ART</button>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="cart image"
          width=""
          height="160"
          image={cardimg}
          title="Contemplative Reptile"
        />
        {/* Price/Bid<br/>
                <b>$610.23</b> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Example Card
            <span className="bg-blue-500 text-sm p-0.5 rounded-lg float-right"><b>$610.23</b></span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This products are very good!
            This products are very good!
            This products are very good!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <img src={avatar} width="30px" height="30px" alt="avatar" style={{borderRadius:"50%"}}/>
        <Button size="small" color="primary">
          TigerKing
        </Button>
        <div className="text-sm float-right">
        <VisibilityRoundedIcon />
         25
        </div>
      </CardActions>
    </Card>
  );
}
