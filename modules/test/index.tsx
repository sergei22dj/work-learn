// views
import { Button, Card, CardDescription, CardText, CardWrapper, CardTitle, CardImg, Wrapper, CardSmall } from './views';

const Test = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <Card>
          <CardImg src='/static/images/test/OncomingTaxi.svg' />
          <CardText>
            <CardTitle>Транспорт </CardTitle>
            <CardDescription>
              Здесь вы можете получить услуги связанные с перевозками, регистрацией авто, страхования и растоможки авто
              за границу.
            </CardDescription>
          </CardText>
        </Card>
        <Card>
          <CardImg src='/static/images/test/ManDetective.svg' />
          <CardText>
            <CardTitle>документы гражданства внж </CardTitle>
            <CardDescription>Здесь вы можете получить услуги связанные с вашим перебыванием в Польше.</CardDescription>
          </CardText>
        </Card>
        <Card>
          <CardImg src='/static/images/test/FamilyManWomanGirl.svg' />
          <CardText>
            <CardTitle>приглашения и переезд в польшу </CardTitle>
            <CardDescription>
              Подавайтесь на основние бизнес, туризма или работы для получение документов необходымых в Польше
            </CardDescription>
          </CardText>
        </Card>
        <Button>Проконсультироваться бесплатно</Button>
      </CardWrapper>

      <CardWrapper>
        <CardSmall>
          <CardImg src='/static/images/test/CardIndexDividers.svg' />
          <CardText>
            <CardTitle>Лицензия и разрешения </CardTitle>
            <CardDescription>
              Здесь вы можете получить лицензию на пасожирсике первозки Такси или разрешение на международные перевозки.
            </CardDescription>
          </CardText>
        </CardSmall>

        <CardSmall>
          <CardImg src='/static/images/test/Briefcase.svg' />
          <CardText>
            <CardTitle>Предпринимательство</CardTitle>
            <CardDescription>
              Создание фирмы, внесение изменений или прекращение собственного дела и помощь в документов-все это
              доступно в этой категории.
            </CardDescription>
          </CardText>
        </CardSmall>

        <CardSmall>
          <CardImg src='/static/images/test/FlagUkraine.svg' />
          <CardText>
            <CardTitle>VISA, Бежанство в Польше</CardTitle>
            <CardDescription>
              Создание фирмы, внесение изменений или прекращение собственного дела и помощь в документов-все это
              доступно в этой категории.
            </CardDescription>
          </CardText>
        </CardSmall>
      </CardWrapper>
    </Wrapper>
  );
};
export default Test;
