# 👟 NikeClone PJT 01
> 슈퍼코딩 1차 프로젝트 : 프론트엔드 01 팀

> 팀원들이 실제로 사용하는 서비스, 2주안에 구현이 가능한 규모의 서비스 

### ◾ React, JavaScript, styled-components 

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


### ScrollToTop

```jsx
npm install react-scroll-up-button
```

### Router

```jsx
npm i react-router-dom
```

### Styled-components

```jsx
npm install styled-components
```

### Swiper

```bash
$ npm i swiper
```

### React Share

```jsx
npm install react-share
```

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
