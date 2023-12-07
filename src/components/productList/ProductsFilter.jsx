import React, {useState} from 'react';
import styled from "styled-components"

const ProductsFilter = (props) => {
    const dropdownChangeHandler = (e) => {
        props.onChangeFilter(e.target.value);
    };
    return (
        <FilterControl>
            <CategoryLabel>여성 의류(40)</CategoryLabel>
            <FilterSelect value={props.selected} onChange={dropdownChangeHandler}>
                <option hidden value='정렬기준'>정렬기준: ⅴ</option>
                <option value='추천순'>추천순</option>
                <option value='최신순'>최신순</option>
                <option value='높은 가격순'>높은 가격순</option>
                <option value='낮은 가격순'>낮은 가격순</option>
            </FilterSelect>
        </FilterControl>
    );
};

export default ProductsFilter;


const FilterControl = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0.3rem 0;
`;

const CategoryLabel = styled.div`
    font-Size: 1.4rem;
    font-weight: 549;
    padding: 0.5rem 0.5rem;
`;

const WrapperSelect =styled.select`
`;

const FilterSelect =styled.select`
    font: inherit;
    font-Size: 1rem;
    margin: 0rem 1.7rem;
    padding: 0.5rem 3rem;
    font-weight: 300;
    border:none;
    text-align: right;
    background-color: white;
    padding: 0px 6px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
`;