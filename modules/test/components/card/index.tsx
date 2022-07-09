import { Card, CardDescription, CardImg, CardText, CardTitle } from '@md-modules/test/views';
import { FC } from 'react';
interface Props {
  title: string;
  description: string;
  imgUrl: string;
  small?: boolean;
}
const CardComponent: FC<Props> = ({ small, title, description, imgUrl }) => {
  return (
    <Card small={small}>
      <CardImg src={imgUrl} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardText>
    </Card>
  );
};
export default CardComponent;
