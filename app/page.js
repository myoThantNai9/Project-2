import * as React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl font-bold text-center">Welcome to Pilates Management</h1>
      <br/>
      <br/>
      <div className="grid grid-cols-3 gap-4 m-4">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="membership card"
            height="250"
            image="https://images.squarespace-cdn.com/content/v1/660c8d523d58a264614bb146/93bf4ccf-e5c6-4319-a00f-fad71545af15/our_reformer_pilates_cameron_park.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Members
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href="/member">Manage</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image="https://uicreative.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/02/16070009/auto-draft-854.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Subscription Plans
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href="/plan">Manage</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image="https://www.onlinedegree.com/wp-content/uploads/2017/02/pilates_instructor.jpg"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Trainers
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href="/staff">Manage</Button>
          </CardActions>
        </Card>

        </div>
    </main>
  )
}