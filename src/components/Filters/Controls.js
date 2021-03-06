import styled from 'styled-components'
import { Search } from './Search'
import React, { useState, useEffect } from 'react';
import { CustumSelect } from './CustumSelect';

const options = [
    {value:'Africa', label:'Africa'},
    {value:'America', label:'America'},
    {value:'Asia', label:'Asia'},
    {value:'Europe', label:'Europe '},
    {value:'Oceania', label:'Oceania'}
]
const Wrapper = styled.div `
display: flex;
flex-direction :column;
align-items: flex-start;

@media(min-width: 767px){
flex-direction :row;
justify-content: space-between;
align-items: center;
}
`
export const Controls = ({onSearch}) => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(()=>{
        const regionValue = region?.value || '';
        onSearch(search, regionValue);
     
    },[region,search])
    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch} />
            <CustumSelect
            options = {options}
            placeholder='Filter by Region' 
            isClearable
            isSearchable={false}
            value={region}
            onChange={setRegion}
            />
        </Wrapper>

    )
}