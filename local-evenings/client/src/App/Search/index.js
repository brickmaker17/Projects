import React, { Component } from 'react';
import List from '../Search/List/';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    height: 100vh;
`;

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    

`;

class Search extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                search: ""
            }
        }
    }
    //write handle change here
    handleSearch = (e) => {
        let { value } = e.target;
        this.setState({
            inputs: {
                search: value
            }
        })
        
    }
    render() {
        let { search } = this.state.inputs;
        return (
            <Wrapper>
                <StyledForm>
                    <input 
                        value={search} 
                        name="search" 
                        type="text" 
                        placeholder="Search Event name or description" 
                        onChange={this.handleSearch} 
                    />
                </StyledForm>
                <List search={search} />
            </Wrapper>
        )
    }
}

export default Search;