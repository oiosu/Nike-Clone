import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  useNavigate,
} from "react-router-dom";
import nikeLogo from "./img/nike-logo.png";
// import page
// 이벤트 페이지
import EventMainPage from "../EventPage/EventMainPage";
// 상품 리스트 페이지
import ProductList from "../productList/ProductList";
// 상품 디테일 페이지
import Product from "../ProductDetail/Product";

const MainMenu = styled.nav`
  display: flex;
  flex-flow: row wrap;
  background: #fff;
  width: 100%;
  height: 70px;

  .MainNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .nike_logo {
    margin-left: 130px;
  }

  .logoLogo {
    width: 150px;
    height: 60px;
  }

  .MenuList {
    flex-grow: 1;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 20px;
    margin-right: 40px;
    margin-bottom: 10px;
  }

  .UserMenu {
    margin-right: 20px;
    margin-bottom: 10px;
  }

  input {
    margin-right: 15px;
    visibility: visible;
    background: #f5f5f5;
    color: inherit;
    cursor: text;
  }

  .search {
    background-color: #fff;
    border-radius: 30px;
    height: 20px;
    margin-right: 22px;
  }

  span {
    margin-right: 10px;
    font-size: 14px;
    font-weight: bold;
  }

  button {
    display: inline-block;
    position: relative;
    cursor: pointer;
    border-style: none;
    background-color: #fff;
    font-size: 14px;
    font-weight: bold;
  }

  button:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 4px;
    background-color: #000;
    transition: all 0.5s;
  }
  button:before {
    content: "";
    position: absolute;
    right: 50%;
    bottom: 0;
    width: 0;
    height: 4px;
    background-color: #000;
    transition: all 0.5s;
  }
  button:hover:after {
    width: 50%;
  }
  button:hover:before {
    width: 50%;
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  margin-left: 1080px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 13px;
  z-index: 2;
  height: 18px;
  font-size: 12px;
  font-weight: bold;
`;

const Nav = () => {
  const navigate = useNavigate();
  // 이벤트 페이지
  const navigateEvent = () => {
    navigate("/event");
  };
  // 상품 페이지
  const navigateProduct = () => {
    navigate("/productList");
  };
  // 상품 디테일 페이지
  const navigateDetail = () => {
    navigate("/detail");
  };

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

  return (
    <MainMenu>
      <div className="MainNav">
        <div className="nike_logo">
          <a href="/">
            <img className="logoLogo" src={nikeLogo} alt="Logo" />
          </a>
        </div>
        <div className="MenuList">
          <ul>
            <li>New Releases</li>
            <li>Men</li>
            <li>
              <button onClick={navigateProduct}>p_Woman</button>
            </li>
            <li>Kids</li>
            <li>
              <button onClick={navigateDetail}>P_Detail</button>
            </li>
            <li>SNKRS</li>
            <li>
              <button onClick={navigateEvent}>연말을 위한 선물</button>
            </li>
          </ul>
        </div>

        <div className="UserMenu">
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
        </div>
      </div>
      <Routes>
        <Route path="/event" element={<EventMainPage />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/detail" element={<Product />} />
      </Routes>
    </MainMenu>
  );
};

export default Nav;
