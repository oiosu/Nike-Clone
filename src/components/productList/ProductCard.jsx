import styled from "styled-components";

const ProductCard = (props) => {
  return (
    <Cardbox>
      <Link>
        <Wrapper>
          <Img src={props.src} alt={props.alt} />
          <Title>{props.name}</Title>
          <SubInfo>{props.info}</SubInfo>
          <SubInfo>{props.color}</SubInfo>
          <Price>{props.price}원</Price>
        </Wrapper>
      </Link>
    </Cardbox>
  );
};

export default ProductCard;

const Cardbox = styled.div`
  width: calc(33.33333% - 25px);
  padding: 5px 0;
  vertical-align: baseline;
  margin: 0.5rem;
  margin-bottom: 30px;
  box-sizing: border-box;
`;
const Link = styled.a`
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: block;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  max-width: 650px;
  max-height: 640px;
  object-fit: cover;
  background: #f5f5f5;
`;

const Title = styled.div`
  font-size: 1.1rem;
  margin-top: 10px;
  color: #111111;
  line-height: 1.75;
  font-family: 맑은 고딕;
  font-weight: 900;
`;
const SubInfo = styled.div`
  font-size: 1.1rem;
  color: #8e7b7b;
  font-family: 맑은 고딕;
  font-weight: 550;
  margin-top: 2px;
`;
const Price = styled.div`
  font-size: 1.1rem;
  margin-top: 15px;
  color: #111111;
  line-height: 1.75;
  font-family: 맑은 고딕;
  font-weight: 900;
`;
