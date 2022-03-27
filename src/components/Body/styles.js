import styled from "styled-components";

export const BodyContainer = styled.div`
    flex: 0.9;
   
`
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
`
export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 0.5;
    min-width: 75px;
    background-color: #fff;
    color: #181818;
    border-radius: 30px;
    padding: 10px;

    & input {
        border: none;
        width: 100%;
    }

`
export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    & h5 {
        margin-left: 10px;
    }

`
