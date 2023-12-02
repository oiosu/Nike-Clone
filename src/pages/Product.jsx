import styled from "styled-components"



const Container = styled.div`
    max-width: 90vw;
    height: 90vh;
`


const Wrapper = styled.div`
    height: 100%;
    padding: 50px;
    display: flex;
    flex-direction: row; /* 세로에서 가로로 변경 */
    justify-content: space-between; /* 자식 요소 사이의 간격을 최대화하여 정렬 *

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

const FormContainer = styled.div`
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
    width: 100%; /* Set width to 100% */
    justify-content: space-between; 
    display: flex;
`


const SizeInput = styled.button`
    border: 1px solid black;
    background-color: rgb(255, 255, 255);
    width: 70px; /* Set your desired width */
    height: 50px; /* Set your desired height */
    font-size: 16px; /* Set your desired font size */
    border-radius: 4px;
    cursor: pointer;
    
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px, 0px;
`


const ButtonLogin = styled.button`
    border: 1px solid black;
    background-color: black;
    width: 100%; /* Set your desired width */
    height: 60px; /* Set your desired height */
    color: white;
    font-size: 16px; /* Set your desired font size */
    border-radius: 20px;
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;
`

const ButtonWishList = styled.button`
    border: 1px solid black;
    background-color: rgb(255, 255, 255);
    width: 100%; /* Set your desired width */
    height: 60px; /* Set your desired height */
    font-size: 16px; /* Set your desired font size */
    border-radius: 20px;
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;

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



const Product = () => {


    /*Nar, header Container 바로 밑에넣기 */
    return (
        <Container>d
            <Wrapper>
                <ThumbnailListContainer>
                    <ThumbnailImg src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8e612413-a0a2-4c16-884e-c1e9f3dfaed7/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%BB%AC%EB%A0%89%EC%85%98-%EC%97%AC%EC%84%B1-%ED%95%98%EC%9D%B4-%ED%8C%8C%EC%9D%BC-%ED%94%8C%EB%A6%AC%EC%8A%A4-%ED%95%98%ED%94%84%EC%A7%91-%ED%83%91-pIOgPBLx.png" />
                    <ThumbnailImg src="https://static.nike.com/a/images/t_default/722a8902-899f-4369-b984-0c894ac03332/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%BB%AC%EB%A0%89%EC%85%98-%EC%97%AC%EC%84%B1-%ED%95%98%EC%9D%B4-%ED%8C%8C%EC%9D%BC-%ED%94%8C%EB%A6%AC%EC%8A%A4-%ED%95%98%ED%94%84%EC%A7%91-%ED%83%91-pIOgPBLx.png" />
                    <ThumbnailImg src="https://static.nike.com/a/images/t_default/3652c269-bd5a-4a51-acd2-c672d92da70b/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%BB%AC%EB%A0%89%EC%85%98-%EC%97%AC%EC%84%B1-%ED%95%98%EC%9D%B4-%ED%8C%8C%EC%9D%BC-%ED%94%8C%EB%A6%AC%EC%8A%A4-%ED%95%98%ED%94%84%EC%A7%91-%ED%83%91-pIOgPBLx.png" />
                    <ThumbnailImg src="https://static.nike.com/a/images/t_default/04b12b93-f101-40b6-a6e2-1d6ef464dd36/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%BB%AC%EB%A0%89%EC%85%98-%EC%97%AC%EC%84%B1-%ED%95%98%EC%9D%B4-%ED%8C%8C%EC%9D%BC-%ED%94%8C%EB%A6%AC%EC%8A%A4-%ED%95%98%ED%94%84%EC%A7%91-%ED%83%91-pIOgPBLx.png" />
                    <ThumbnailImg src="https://static.nike.com/a/images/t_default/625805cc-8f53-43ff-b756-88c67303b404/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%BB%AC%EB%A0%89%EC%85%98-%EC%97%AC%EC%84%B1-%ED%95%98%EC%9D%B4-%ED%8C%8C%EC%9D%BC-%ED%94%8C%EB%A6%AC%EC%8A%A4-%ED%95%98%ED%94%84%EC%A7%91-%ED%83%91-pIOgPBLx.png" />
                </ThumbnailListContainer>
                <ImgContainer>
                    <Image src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8e612413-a0a2-4c16-884e-c1e9f3dfaed7/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%BB%AC%EB%A0%89%EC%85%98-%EC%97%AC%EC%84%B1-%ED%95%98%EC%9D%B4-%ED%8C%8C%EC%9D%BC-%ED%94%8C%EB%A6%AC%EC%8A%A4-%ED%95%98%ED%94%84%EC%A7%91-%ED%83%91-pIOgPBLx.png" />
                </ImgContainer>
                <InfoContainer>
                    <ProductCategoryInfo>멤버 전용 제품</ProductCategoryInfo>
                    <Title>나이키 스포츠 웨어 컬렉션</Title>
                    <Desc>
                        여성 하이-파일 플리스 하프집git credential-cache exit 탑
                    </Desc>
                    <Price>155,500 원</Price>
                    <FormContainer>
                        <SizeContainer>
                            <SizeFieldSpan>사이즈 선택</SizeFieldSpan>
                            <SizeGuide>사이즈 가이드</SizeGuide>
                        </SizeContainer>
                        <SizeFormContainer>
                            <SizeInput type="button" value="XS">XS</SizeInput>
                            <SizeInput type="button" value="S" >S</SizeInput>
                            <SizeInput type="button" value="M" >M</SizeInput>
                            <SizeInput type="button" value="L" >L</SizeInput>
                            <SizeInput type="button" value="XL" >XL</SizeInput>

                        </SizeFormContainer>
                        <ButtonContainer>
                            <ButtonLogin>로그인 후 구매하기</ButtonLogin>
                            <ButtonWishList>위시리스트 🤍</ButtonWishList>
                        </ButtonContainer>
                    </FormContainer>
                    <Details>
                        <Summary>사이즈 & 팁</Summary>
                        <MoreInfoP>
                            오버사이즈 핏: 매우 넉넉한 착용감<br />
                            사이즈 가이드
                        </MoreInfoP>
                    </Details>
                    <Details>
                        <Summary>무료 배송 및 반품</Summary>
                        <MoreInfoP>여기에 숨겨진 내용이 들어갑니다.</MoreInfoP>
                    </Details>
                    <Details>
                        <Summary>리뷰 (0)</Summary>
                        <MoreInfoP>리뷰를 남겨주세요.</MoreInfoP>
                    </Details>
                    <Details>
                        <Summary>추가 정보</Summary>
                        <MoreInfoP>
                            상품정보제공고시<br />
                            제조연월: 수입제품으로 각 제품별 입고 시기에 따라 상이하여 정확한 제조연월 제공이 어렵습니다. <br />
                            제조연월을 확인하시려면 고객센터에 문의하시기 바라며, 정확한 제조연월은 배송받으신 제품의 라벨을 참고하시기 바랍니다.
                            A/S 책임자와 전화번호: (유)나이키코리아 온라인 스토어 고객센터 / 080-022-0182<br />
                            세탁방법 및 취급시 주의사항: 자세한 내용은 '자세히 보기' 를 클릭하여 확인 부탁드립니다.<br />
                            미성년자 권리 보호 안내: 자세한 내용은 '자세히 보기' 를 클릭하여 확인 부탁드립니다.<br />
                            품질보증기준: 품질보증기간-1년. 유통 중 손상되었거나 품질에 이상이 있는 제품에 한하여 소비자 피해 보상 규정에 의거 보상하여 드립니다. 단, 제품에 부착되어 있는 사용방법 및 취급 시 주의사항에 따라 제품을 관리해 주시고, 소비자 부주의로 인한 품질 이상 및 변형에 대해서는 책임을 지지 않습니다.
                            제조자/수입품의 경우 수입자를 함께 표기: Nike. Inc / (유)나이키코리아</MoreInfoP>
                    </Details>

                </InfoContainer>
            </Wrapper>
        </Container>
    )
};

export default Product;