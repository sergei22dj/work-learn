// views
import { Button, CardLWrapper, CardRWrapper, ErrorMessage, Wrapper } from './views';
// components
import CardComponent from './components/card';
const Test = () => {
  return (
    <>
      <Wrapper>
        <CardLWrapper>
          <CardComponent
            title='Транспорт'
            description='Здесь вы можете получить услуги связанные с перевозками, регистрацией авто, страхования и растоможки авто
              за границу.'
            imgUrl='/static/images/test/OncomingTaxi.svg'
          />

          <CardComponent
            title='документы гражданства внж '
            description='Здесь вы можете получить услуги связанные с вашим перебыванием в Польше.'
            imgUrl='/static/images/test/ManDetective.svg'
          />

          <CardComponent
            title='приглашения и переезд в польшу'
            description='Подавайтесь на основние бизнес, туризма или работы для получение документов необходымых в Польше'
            imgUrl='/static/images/test/FamilyManWomanGirl.svg'
          />
          <Button>Проконсультироваться бесплатно</Button>
        </CardLWrapper>

        <CardRWrapper>
          <CardComponent
            small={true}
            title='Лицензия и разрешения'
            description='Здесь вы можете получить лицензию на пасожирсике первозки Такси или разрешение на международные перевозки.'
            imgUrl='/static/images/test/CardIndexDividers.svg'
          />

          <CardComponent
            small={true}
            title='Предпринимательство'
            description='Создание фирмы, внесение изменений или прекращение собственного дела и помощь в документов-все это
          доступно в этой категории.'
            imgUrl='/static/images/test/Briefcase.svg'
          />

          <CardComponent
            small={true}
            title='VISA, Бежанство в Польше'
            description='Создание фирмы, внесение изменений или прекращение собственного дела и помощь в документов-все это
          доступно в этой категории.'
            imgUrl='/static/images/test/FlagUkraine.svg'
          />
        </CardRWrapper>
      </Wrapper>
      <ErrorMessage>Sorry, your devise is not supported :(</ErrorMessage>
    </>
  );
};
export default Test;
