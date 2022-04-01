import styled from "styled-components";

export const BodyContainer = styled.div`
    flex: 0.9;
    background: linear-gradient(#121212,#000 100%);
    height: 100vh;
    padding: 30px;
    overflow-y: overlay;
    &::-webkit-scrollbar{
        display: none;
    }
`
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
`
export const HeaderLeft = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    flex: 0.5;
    max-width: 300px;
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
    margin-right: 25px;
    & h5 {
        color: #fff;
    }

    & img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    & div {
        display: flex;
        align-items: center;
        background-color: #000;
        padding: 10px;
        gap: 10px;
    }

`

export const Info = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 10px;
    color: #fff;
    margin-bottom: 50px;
    & img {
        object-fit: cover;
        width: 12vw;
        height: 12vw;
        margin: 0 20px;
        box-shadow: 0 4px 5px #000;
    }

    & h1 {
        font-size: 80px;
    }

    & h6 {
        font-weight: bold;
    }

    & p {
        font-size: 14px;
        margin-top: 5px;
        color: #BFC0C0;
    }

    & span {
        color: #fff;
        font-size: 14px;
        margin-top: 5px;
    }
`

export const InfoText = styled.div`
    flex: 1;
`

export const Songs = styled.div`
    margin: 10px -20px;
    margin-left: 50px;
`

export const Icons = styled.div`
    color: #fff;
    margin-left: 80px;
`

export const SongRowContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items:center;
    margin-top: 15px;
    z-index: 90;
    color: #fff;

    &:hover {
        cursor: pointer;
        background-color: #000000;
        opacity: 0.5;
    }
    
    & img {
        height: 50px;
        width: 50px;
        object-fit: contain;
    }

    .artist {
        color: #BFC0C0;
        font-size: 12px;
    }

    & h6 {
    font-size: 14px;
    font-weight: 400;
}
`

export const SongInfo = styled.div`

`
export const StartPlaylist = styled.div`
    display: flex;
    gap: 10px;
    align-items:center;
    margin-left: 40px;
    margin-bottom: 40px;
    color: #1db954;
    font-size: 55px;

`
