import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const MediaCard = ({card}) =>{

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={card}/>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {card.title}
        </Typography>
        <Typography>
          {card.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>{card.button}</Button>
      </CardFooter>
    </Card>
  );
};
 
export default MediaCard