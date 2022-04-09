import styled from "styled-components";

const SidebarContainer = styled.div`
    flex: 0.1;
    height: 100vh;
    background-color: #000;
    min-width: 240px;
    color: #fff;
    & img {
        width: 70%;
        padding: 10px;
        margin-right: auto;
    }
    & hr {
        height: .5px;
        width: 80%;
        margin: 10px auto;
        background-color: gray;
        border: none;
    }
`

const PlaylistsContainer = styled.div`
    height: 75vh;
    overflow-y: scroll;
`

const Choices = styled.div`
    display: flex;
    align-items: center;
    color: #BFC0C0;
    height: 35px;
    cursor: pointer;
    gap: 10px;
    margin-left: 20px;
    transition: 300ms color ease-in;
    &:hover {
        color: #fff;
    }
    & p {
        font-size: 14px;
    }
`

export { SidebarContainer, Choices, PlaylistsContainer };