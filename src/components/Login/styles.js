import styled from "styled-components"

const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #000;

    & img {
        width: 100%;
    }
`

const LoginButton = styled.a`
    padding: 20px;
    border-radius: 90px;
    text-decoration: none;
    color: #fff;
    background-color: #1db954;
    text-transform: uppercase;
    font-weight: 600;
`

export {LoginContainer, LoginButton}