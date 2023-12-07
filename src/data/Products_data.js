const clothesData=[
    {
        id: 1,
        src:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/231ba759-8a37-48ad-9722-1eb00043856f/lab-%EC%97%AC%EC%84%B1-%ED%94%8C%EB%A6%AC%EC%8A%A4-%ED%8C%AC%EC%B8%A0-HpvL30iB.png",
        alt:"",
        name: "나이키 스우시 미디엄 서포트",
        info: "여성 패드 스포츠 브라",
        color: "7개 색상",
        price: 49000,
        discount:35,
        date: new Date('2022-05-17 10:20:30')
    },
    {
        id: 2,
        src:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35e4fce7-7a32-471b-836a-4fe3595426a7/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%BB%AC%EB%A0%89%EC%85%98-%EC%97%AC%EC%84%B1-%ED%95%98%EC%9D%B4-%ED%8C%8C%EC%9D%BC-%ED%94%8C%EB%A6%AC%EC%8A%A4-%ED%95%98%ED%94%84%EC%A7%91-%ED%83%91-pIOgPBLx.png",
        alt:"",
        name: "나이키 스포츠 웨어 컬렉션",
        info: "여성 하이-파일 플리스 하프집",
        color: "4개 색상",
        price: 219000,
        discount:35,
        date: new Date('2022-06-17 10:10:30')
    },
    {
        id: 3,
        src:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b2f2471-a473-489f-ac2f-606f96ab3c6a/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%97%AC%EC%84%B1-%EB%A6%AC%EB%B2%84%EC%84%9C%EB%B8%94-%EC%9D%B8%EC%A1%B0-%ED%8D%BC-%EB%B4%84%EB%B2%84-%EC%9E%AC%ED%82%B7-EK478hYy.png",
        alt:"",
        name: "나이키 스포츠웨어",
        info: "여성 리버서블 인조 퍼 봄버 재킷",
        color: "3개 색상",
        price: 85000,
        discount:35
    },
    {
        id: 4,
        src:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b72b95f1-d640-4bf7-b658-0ce4d4a81531/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%ED%81%B4%EB%9F%BD-%ED%94%8C%EB%A6%AC%EC%8A%A4-%EC%97%AC%EC%84%B1-%EB%AF%B8%EB%93%9C%EB%9D%BC%EC%9D%B4%EC%A6%88-%EC%99%80%EC%9D%B4%EB%93%9C-%EB%A0%88%EA%B7%B8-%EC%8A%A4%EC%9B%BB%ED%8C%AC%EC%B8%A0-dHqW3CSs.png",
        alt:"",
        name: "나이키 스포츠웨어 클럽 플러스",
        info: "여성 미드라이즈 와이드 레그 스윗팬츠",
        color: "3개 색상",
        price: 85500,
        discount:35,
        date: new Date('2022-11-17 10:20:30')
    },
    {
        id: 5,
        src:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2b1a720a-e30f-4d9a-8d6b-04f67d6819b0/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%97%90%EC%84%BC%EC%85%9C-%EC%97%AC%EC%84%B1-%ED%95%98%EC%9D%B4%EC%9B%A8%EC%9D%B4%EC%8A%A4%ED%8A%B8-%EC%99%80%EC%9D%B4%EB%93%9C-%EB%A0%88%EA%B7%B8-%ED%8C%AC%EC%B8%A0-ALGC9vmM.png",
        alt:"",
        name: "나이키 스포츠웨어 에센셜",
        info: "여성 하이웨이스트 와이드 레그 팬츠",
        color: "2개 색상",
        price: 95000,
        discount:35,
        date: new Date('2023-11-17 10:15:30')
    },
    {
        id: 6,
        src:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e2fccc6d-bd48-4cc2-8e45-c003dc4f6d43/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%97%AC%EC%84%B1-%EC%B9%B4%EB%9D%BC-%ED%95%98%EC%9D%B4%ED%8C%8C%EC%9D%BC-%EC%9E%AC%ED%82%B7-SbKnjT0o.png",
        alt:"",
        name: "나이키 스포츠웨어",
        info: "여성 카라 하이파일 재킷",
        color: "2개 색상",
        price: 119000,
        discount:35,
        date: new Date('2023-10-17 10:20:30')
    }
    ,
    {
        id: 7,
        src:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/81f15dfb-47cb-498e-8ff6-e5563f452891/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%ED%81%B4%EB%9E%98%EC%8B%9D-%ED%8C%A8%EB%94%A9-%EC%97%AC%EC%84%B1-%EC%8D%A8%EB%A7%88-%ED%95%8F-%EB%A3%A8%EC%A6%88-%ED%95%8F-%ED%9B%84%EB%93%9C-%EC%9E%AC%ED%82%B7-qvz6nPhT.png",
        alt:"",
        name: "나이키 스포츠웨어 클래식 패딩",
        info: "여성 써마 핏 루즈 핏 후드 재킷",
        color: "3개 색상",
        price: 169000,
        discount:35,
        date: new Date('2023-12-20 10:20:30')
    },
    {
        id: 8,
        src:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ff64c43c-66a7-49e7-808d-ba1b5ac683fe/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%ED%94%BC%EB%8B%89%EC%8A%A4-%ED%94%8C%EB%A6%AC%EC%8A%A4-%EC%97%AC%EC%84%B1-%ED%95%98%EC%9D%B4%EC%9B%A8%EC%9D%B4%EC%8A%A4%ED%8A%B8-%EC%99%80%EC%9D%B4%EB%93%9C-%EB%A0%88%EA%B7%B8-%EC%8A%A4%EC%9B%BB%ED%8C%AC%EC%B8%A0-y0TNETOV.png",
        alt:"",
        name: "나이키 스포츠웨어 피닉스 플러스",
        info: "여성 하이웨이스트 와이드 레그 스웻팬츠",
        color: "2개 색상",
        price: 89000,
        discount:35,
        date: new Date('2023-11-15 10:20:30')
    },
    {
        id: 9,
        src:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b69fe0d2-22ba-4610-9ceb-47e7890d2baa/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%97%AC%EC%84%B1-%EC%9E%AC%ED%82%B7-zBPLPxHd.png",
        alt:"",
        name: "나이키 스포츠웨어",
        info: "여성 재킷",
        color: "2개 색상",
        price: 199000,
        discount:35,
        date: new Date('2023-12-17 10:20:30')
    }
]
export default clothesData