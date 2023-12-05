import { useState } from "react";
import styled from "styled-components";
import { productData } from "../data/ProductDetailData";


const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column; 
    max-width: 90vw;
    height: 90vh;
`


const Wrapper = styled.div`
    height: 100%;
    padding: 50px;
    display: flex;
    flex-direction: row; /* 세로에서 가로로 변경 */
    justify-content: flex-start; /* 왼쪽 정렬로 수정 */
    align-items: stretch; /* 세로 정렬을 늘려줌 */
    gap: 20px; /* 간격 설정 */
`;




const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; /* 부모 요소를 기준으로 자식 요소를 위치시키기 위해 필요 */
`;

const ThumbnailListContainer = styled.div`
    flex: 0.6; /* 전체 가로/세로 영역의 60%를 차지하도록 설정 */
    display: flex;
    flex-direction: column; /* 세로로 정렬 */
    gap: 10px; /* 썸네일 간의 간격 설정 */
    height: 100%; /* 부모 컨테이너의 높이를 상속 */
    align-items: flex-end; /* 자식 수직 중앙 정렬을 위한 설정 */
    padding: 0px 25px;

`;

const ThumbnailImg = styled.img`
    width: 80px;  /* 원하는 가로 크기 */
    height: 80px; /* 원하는 세로 크기 */
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        border: 1px solid black;
    }
`



const Image = styled.img`
    width: 100%;
    max-width: 650px; /* 최대 가로 넓이 설정 */
    height: auto;  /*세로 크기 자동 조절 details 누르면 이미지가 내려감. */
    margin-left: auto;
    margin-right: auto;
    /*height: 90vh;*/
    object-fit: cover;
    border-radius: 8px;
    position: absolute; /* 부모 요소를 기준으로 위치를 조정할 수 있도록 설정 */
    top: 0; /* 부모 요소의 위쪽에 위치하도록 설정 */
    
 
`;



const InfoContainer = styled.div`
    flex:1;
    padding: 0px 60px;
    max-width: 500px;
    margin: 30px;
`


const ProductCategoryInfo = styled.h5`
    color: rgb(153, 46, 0);
    font-weight: 600;
`

const Title = styled.h1`
    font-weight: 200;

`;

const Desc = styled.p`
    margin: 20px 0px;

`;

const Price = styled.span`
    font-weight: 500;
    font-size: 16px;
`;

const ImageContainer = styled.div`
    position: relative;
   
`

const FieldsetImg = styled.fieldset`
     border: none; /* 검은색 선 스타일 제거 */
     margin-left: 0px;
   
`

const MainThumbnailImg = styled.div`
    display: flex;
    gap:8px;
`


const FormContainer = styled.form`
`

const SizeContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const SizeGuide = styled.a`
`

const SizeFieldSpan = styled.span`
`


const SizeFormContainer = styled.div`
    margin-top: 30px;
    margin-left: 6px;
    width: 100%; /* Set width to 100% */
    justify-content: space-between; 
    display: flex;
`


const SizeInput = styled.button`
    border: 1px solid rgba(0, 0, 0, 0.1); /* 어두운 테두리 색상 */
    background-color: rgb(255, 255, 255);
    width: 70px; 
    height: 50px; 
    font-size: 16px; 
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        border: 1px solid black;
        font-weight: 550;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px, 0px;
`


const ButtonLogin = styled.button`
    border: 1px solid #808080;
    background-color: black;
    width: 100%; 
    height: 60px; 
    color: white;
    font-size: 16px; 
    border-radius: 20px;
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;
    &:hover {
        border: 1px solid white;
        font-weight: 550;
    }
`

const ButtonWishList = styled.button`
    border: 1px solid rgba(0, 0, 0, 0.1); /* 어두운 테두리 색상 */
    background-color: rgb(255, 255, 255);
    width: 100%; 
    height: 60px; 
    font-size: 16px; 
    border-radius: 20px;
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;
    &:hover {
        border: 1px solid black;
        font-weight: 550;
    }

`

const Details = styled.details`
    border-top: 1px solid #ddd;
    margin-top: 20px;
    font-size:20px;
    cursor: pointer;
`

const Summary = styled.summary`
    outline: none;
    user-select: none;
    list-style: none; 
    padding: 28px 0px;
`

const MoreInfoP = styled.p`

`

const DetailImgWrapper = styled.div`    
    display: flex;
    flex-direction: column; /* 세로로 정렬로 변경 */
    width: 100%; /* 창의 가로 넓이를 100%로 설정 */
    transition: margin-top 0.3s ease-in-out;
    margin-top: ${({ isOpen }) => (isOpen ? '150px' : '100px')};
`



const DetailImgContainer = styled.div`
    display: flex; /* 이미지들을 가로로 나열하기 위해 flex 속성 추가 */
    gap: 10px;
    position: relative;
    width: 100%; /* 원하는 너비 설정 */
    height: auto; /* 원하는 높이 설정 또는 고정된 높이 사용 */
    flex-direction: row;
    justify-content: center; /* 자식 가로 중앙 정렬 */
    align-items: center; /* 자식 세로 중앙 정렬 */
    margin-left: 150px;
    margin-right:150px;
    margin-bottom:150px;
 

 
`

const DetailImage = styled.img`
    width:  100%;
    max-width: 100%; /* 이미지가 컨테이너를 벗어나지않게 최대 너비 설정 */
    height: 100%;
    border-radius: 8px;
    max-width: 650px;
    max-height: 820px;
`




const Product = () => {


    // 폼 데이터를 관리하기 위한 상태 훅 사용
    const [selectedSize, setSelectedSize] = useState('');
    const [productId, setProductId] = useState('000001');
    const [selectedProductId, setSelectedProductId] = useState('000001');
    const [isReviewOpen, setIsReviewOpen] = useState(false);


    // 폼 제출 처리
    const handleSubmit = (event) => {
        event.preventDefault();

        // TODO: 서버로 폼 데이터를 보내는 로직 추가
        console.log('상품 ID:', productId);
        console.log('선택된 사이즈:', selectedSize);
        console.log('productData', productData);

        // 폼 데이터를 서버로 보내는 로직을 추후 추가 해야할 부분
    };

    const handleClickThumbnail = (productId) => {
        setSelectedProductId(productId);
    };

    /*Nar, header Container 바로 밑에넣기 */
    return (
        <Container>
            <Wrapper>
                <ThumbnailListContainer>

                    {productData.map((product) => (
                        product.thumbnails.map((thumbnailUrl) => (
                            <ThumbnailImg key={thumbnailUrl} src={thumbnailUrl}
                                onClick={() => handleClickThumbnail(product.id)}
                            />
                        ))
                    ))}
                </ThumbnailListContainer>
                <ImgContainer>
                    <Image src={productData.find((p) => p.id === selectedProductId)?.thumbnails[0]} />
                </ImgContainer>
                <InfoContainer>
                    <ProductCategoryInfo>멤버 전용 제품</ProductCategoryInfo>
                    <Title>나이키 스포츠 웨어 컬렉션</Title>
                    <Desc>
                        여성 하이-파일 플리스 하프집 탑
                    </Desc>
                    <Price>155,500 원</Price>
                    <ImageContainer>
                        <FieldsetImg>
                            <MainThumbnailImg>
                                <ThumbnailImg src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/35e4fce7-7a32-471b-836a-4fe3595426a7/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%BB%AC%EB%A0%89%EC%85%98-%EC%97%AC%EC%84%B1-%ED%95%98%EC%9D%B4-%ED%8C%8C%EC%9D%BC-%ED%94%8C%EB%A6%AC%EC%8A%A4-%ED%95%98%ED%94%84%EC%A7%91-%ED%83%91-pIOgPBLx.png" />
                                <ThumbnailImg src="https://static.nike.com/a/images/t_PDP_144_v1/f_auto/a76ab7e5-3f8b-495e-8c6c-bb12f9f877da/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%BB%AC%EB%A0%89%EC%85%98-%EC%97%AC%EC%84%B1-%ED%95%98%EC%9D%B4-%ED%8C%8C%EC%9D%BC-%ED%94%8C%EB%A6%AC%EC%8A%A4-%ED%95%98%ED%94%84%EC%A7%91-%ED%83%91-pIOgPBLx.png" />
                            </MainThumbnailImg>
                        </FieldsetImg>
                    </ImageContainer>
                    <FormContainer onSubmit={handleSubmit}>
                        <input
                            type="hidden"
                            name="productId"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                        />
                        <SizeContainer>
                            <SizeFieldSpan>사이즈 선택</SizeFieldSpan>
                            <SizeGuide>사이즈 가이드</SizeGuide>
                        </SizeContainer>
                        <SizeFormContainer>
                            <SizeInput type="button"
                                id="sizeXS"
                                value="XS"
                                checked={selectedSize === 'XS'}
                                onClick={() => setSelectedSize('XS')}>XS</SizeInput>
                            <SizeInput type="button"
                                id="S"
                                value="S"
                                checked={selectedSize === 'S'}
                                onClick={() => setSelectedSize('S')} >S</SizeInput>
                            <SizeInput
                                type="button"
                                id="M"
                                value="M"
                                checked={selectedSize === 'M'}
                                onClick={() => setSelectedSize('M')} >M</SizeInput>
                            <SizeInput
                                type="button"
                                id="L"
                                value="L"
                                checked={selectedSize === 'L'}
                                onClick={() => setSelectedSize('L')}>L</SizeInput>
                            <SizeInput
                                type="button"
                                id="XL"
                                value="XL"
                                checked={selectedSize === 'XL'}
                                onClick={() => setSelectedSize('XL')} >XL</SizeInput>

                        </SizeFormContainer>
                        <ButtonContainer>
                            <ButtonLogin type="submit">로그인 후 구매하기</ButtonLogin>
                            <ButtonWishList>위시리스트 🤍</ButtonWishList>
                        </ButtonContainer>
                    </FormContainer>
                    <Details onClick={() => setIsReviewOpen(!isReviewOpen)}>
                        <Summary>사이즈 & 팁</Summary>
                        <MoreInfoP>
                            오버사이즈 핏: 매우 넉넉한 착용감<br />
                            사이즈 가이드
                        </MoreInfoP>
                    </Details>
                    <Details onClick={() => setIsReviewOpen(!isReviewOpen)}>
                        <Summary>무료 배송 및 반품</Summary>
                        <MoreInfoP>여기에 숨겨진 내용이 들어갑니다.</MoreInfoP>
                    </Details>
                    <Details onClick={() => setIsReviewOpen(!isReviewOpen)}>
                        <Summary>리뷰 (0)</Summary>
                        <MoreInfoP>리뷰를 남겨주세요.</MoreInfoP>
                    </Details>
                    <Details onClick={() => setIsReviewOpen(!isReviewOpen)}>
                        <Summary>추가 정보</Summary>
                        <MoreInfoP>
                            상품정보제공고시<br />
                            제조연월: 수입제품으로 각 제품별 입고 시기에 따라 상이하여 정확한 제조연월 제공이 어렵습니다. <br />
                        </MoreInfoP>
                    </Details>
                </InfoContainer>


            </Wrapper>

            <DetailImgWrapper isOpen={isReviewOpen}>
                <DetailImgContainer>
                    <DetailImage src={productData.find((p) => p.id === selectedProductId)?.thumbnails[0]} />
                    <DetailImage src={productData.find((p) => p.id === selectedProductId)?.thumbnails[1]} />
                </DetailImgContainer>
            </DetailImgWrapper>

        </Container>
    )
};

export default Product;


