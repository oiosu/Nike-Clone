# [👟 NikeClone PJT 01](https://cassie1107.github.io/)
> 슈퍼코딩 1차 프로젝트 : 프론트엔드 01 팀

> 팀원들이 실제로 사용하는 서비스, 2주안에 구현이 가능한 규모의 서비스 

### ◾ React, styled-components 

```jsx
npx create-react-app Nike-Clone
```

```jsx
npm start
```

```jsx
npm install styled-components
```

### ◾ Project 목표 
> * 우리가 실제 서비스에서 사용하는 동작을 동일하게 구현할 수 있는가
> * 어떤 기능을 보고 이 기능을 구현하는데 얼마나 걸릴지 일정을 올바르게 산출할 수 있는가
> * 실제 서비스를 바탕으로 동일하게 만들면서 만들어지는 과정을 이해
> * 지금까지 자바스크립트, 리액트에서 배웠던 내용들을 통해 연습
> * 다음부터 진행되는 협업 프로젝트 전 같은 직군끼리 협업 및 요구사항 작성과 일정 산정 연습


### ◾ 개발 이유 
> 나이키 서비스를 클론코딩으로 선택한 이유
>
> 리액트는 컴포넌트 기반 아키텍처를 통해 코드를 재사용하고 유지보수하기 쉽게 만들어 줍니다. 따라서, 저희는 복잡한 UI/UX 구조를 갖는 서비스보다
> 고유한 컴포넌트를 분리하는 기준과 방법을 고민하며 프로젝트를 진행할 수 있는 UI/UX 구조를 갖춘 서비스를 목표로 나이키 홈페이지 클론 코딩을 선택했습니다.



### ◾ 진행 기간
> (2023.11.27(월)~2023.12.08(금))

![image](https://github.com/oiosu/Nike-Clone/assets/99783474/7e6b5f7d-3980-4c6f-a45b-9c4f672e5e0c)


### ◾ Figma 

![image](https://github.com/oiosu/Nike-Clone/assets/99783474/49eefdaf-582f-42bb-ab1b-f43d43b89a44)


---

## Contributors
<a href="https://github.com/oiosu/Nike-Clone/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=oiosu/Nike-Clone" />
</a>

![image](https://github.com/oiosu/Nike-Clone/assets/99783474/c3a35798-31e3-4951-a45b-8cdb7cae18c1)


---


### 👩‍🚀 메인 페이지 주요 기능 

##### 1.  `고객센터 모달` 기능

![image](https://github.com/oiosu/Nike-Clone/assets/99783474/2d9f0043-3652-4c3b-820b-9afe66867851)


```JavaScript
const [isModalVisible, setModalVisible] = useState(false);

  const handleMouseEnter = () => {
    setModalVisible(true);
  };

  const handleMouseLeave = () => {
    setModalVisible(false);
  };

...

<li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          고객센터
          {isModalVisible && (
            <div className="modal">
              <p>🏄‍♂️준비중입니다!</p>
            </div>
          )}
 </li>
```

##### 2. `검색창` 기능

![image](https://github.com/oiosu/Nike-Clone/assets/99783474/aaf583f5-1b7a-4800-86cb-eb5224413337)


```JavaScript
  const [searchQuery, setSearchQuery] = useState("");
  const [relatedSearches, setRelatedSearches] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleDocumentClick = (e) => {
    if (!e.target.closest(".Modal") && isModalVisible) {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isModalVisible]);

  const handleSearchInputChange = (e) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);

    if (newQuery.trim() === "") {
      setModalVisible(false);
    } else {
      const relatedSearchesList = [
        `${newQuery} 신발`,
        `${newQuery} 할인`,
        `${newQuery} 스타일링`,
      ];
      setRelatedSearches(relatedSearchesList);
      setModalVisible(true);
    }
  };

  const handleSearchSubmit = (e) => {
    console.log("검색어: ", searchQuery);
    e.preventDefault();
  };

...

 <form onSubmit={handleSearchSubmit}>
  <input
    className="search"
    type="text"
    placeholder="검색"
    value={searchQuery}
    onChange={handleSearchInputChange}
  />
  {isModalVisible && (
    <Modal className="Modal">
      <ul>
        {relatedSearches.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Modal>
  )}
</form>
```

##### 3. `[swiper]` 자바스크립트 라이브러리 활용한 이미지 반응형 기능

![image](https://github.com/oiosu/Nike-Clone/assets/99783474/be641eec-aece-4170-a93f-548ae0526c57)

##### Swiper

```bash
$ npm i swiper
```

```JavaScript
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
```


##### 4. Button hover

![image](https://github.com/oiosu/Nike-Clone/assets/99783474/4cd32911-b3ba-43b9-bbcf-199db0dba3b7)


```css
  .buy-btn {
    background-color: #000;
    color: #fff;
    padding: 10px;
    border-radius: 30px;
    border-style: none;
    padding-left: 10px;
    padding-right: 10px;
    margin: 10px;
    &:hover {
      background: cornflowerblue;
      color: white;
      transition: 0.5s;
      font-weight: bold;
    }
```



##### 4. TOP Button

![image](https://github.com/oiosu/Nike-Clone/assets/99783474/44adf4da-6f67-45c1-9721-63787ef6d73b)

```JavaScript
import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const ScrollBtn = styled.button`
    width: 80px;
    height: 40px;
    border-radius: 50%;
    margin-left: 1400px;
    font-weight: bold;
`;

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        if (scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ScrollBtn className={isVisible ? 'visible' : 'hidden'} onClick={scrollToTop}>
            Top
        </ScrollBtn>
    );

};

export default ScrollToTopButton;

```


##### 4. React-Share

![image](https://github.com/oiosu/Nike-Clone/assets/99783474/fcc79468-dd26-4370-97b1-5a1a850f3815)

##### React Share

```jsx
npm install react-share
```


```JavaScript
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TwitterShareButton,
    TwitterIcon,
    LineShareButton,
    LineIcon,
} from "react-share";

// currentUrl을 적절한 URL로 정의
const currentUrl = "https://example.com";

const Share = () => {
    return (
        <>
            <FacebookShareButton style={{ marginRight: "20px" }} url={currentUrl}>
                <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
            </FacebookShareButton>
            <FacebookMessengerShareButton style={{ marginRight: "20px" }} url={currentUrl}>
                <FacebookMessengerIcon size={48} round={true} borderRadius={24}></FacebookMessengerIcon>
            </FacebookMessengerShareButton>
            <TwitterShareButton style={{ marginRight: "20px" }} url={currentUrl}>
                <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
            </TwitterShareButton>
            <LineShareButton url={currentUrl}>
                <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
            </LineShareButton>
        </>
    );
}   )}
 </li>
```

---

### 📌 프로젝트를 진행하면서 고민했던 것들 

* 리액트 컴포넌트를 나누는 기준은 따로 있을까 프론트엔드 아키텍처에 대한 고민

Router를 이용하여 페이지가 이동이 가능할 수 있도록 구현을 했을때 다른 페이지에서 메인페이지가 렌더링이
되는 상황이 발생했다. 따라서 다시 메인페이지의 컴포넌트를 구성하여 구현하였고 이슈적인 문제를 해결할 수 있게
되었다 이슈를 해결하는 과정에서 컴포넌트에 대해 더 고민해 볼 수 있었고 다음 프로젝트 진행 시 
컴포넌트를 나누는 기준에 대해 더 고민하여 진행하고자 리액트 컴포넌트를 나누는 기준에 대해 알아보았다.

컴포넌트를 나누는 기준 중 가장 많이 선택되는 이유는 재사용성과 복잡성이라고 한다.
즉 코드가 재사용이 될 가능성이 있다면 새로운 컴포넌트를 만드는 건 좋은 생각이며 코드가 복잡하다면
가독성을 개선하고 유지보수 할 수 있게 만들기 위해 컴포넌트를 분리 할 수 있다고 한다.

컴포넌트를 만들 때 가장 많이 발생는 실수 
(1) 복잡한 컴포넌트를 만든다 
(2) 하나의 컴포넌트에 여러 책임을 추가한다. 
(3) 몇몇 동작하는 부분을 결합하여 컴포넌트를 만든다. 
(4) 비지니스 로직을 컴포넌트에 추가한다. 

[** 참고 자료 (1) 프론트엔드 아키텍처: 컴포넌트를 분리하는 기준과 방법](https://medium.com/@junep/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EB%B6%84%EB%A6%AC%ED%95%98%EB%8A%94-%EA%B8%B0%EC%A4%80%EA%B3%BC-%EB%B0%A9%EB%B2%95-e7cf16bb157a)

[** 참고 자료 (2) 컴포넌트 분리하는 기준과 방법 요약](https://soso01.dev/study/react-article/1/)


* 리액트 상태관리에 대한 고민 

* 홈페이지 라우터 관리는 어떻게 하면 더 효율적일까


