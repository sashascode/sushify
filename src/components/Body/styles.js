import styled from "styled-components";

export const BodyContainer = styled.div`
    flex: 0.9;
    background: linear-gradient(#121212,#000 100%);
    height: 100vh;
    padding: 30px;
    overflow-y: overlay;

`
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const HeaderLeft = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    flex: 0.5;
    max-width: 300px;
    min-width: 75px;
    height: 15px;
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
    &:last-child {
        flex-direction: column;
    }

    & h5 {
        color: #fff;
    }

    & img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-left: 5px;
    }

    & div {
        display: flex;
        align-items: center;
        background: rgba(0,0,0,0.5);
        gap: 10px;
        border-radius: 30px;
        width: 170px;
        height: 40px;
        justify-content: left;
        cursor: pointer;
    }

    & ul {
        margin-top: 5px;
        background: rgba(0,0,0,0.5);
        width: 170px;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: #141515;
            border-radius: 5px;
            width: 100%;
        }

        & li {
            list-style: none;
            text-align: center;
            font-size: 13px;
        }

        & button {
            margin-left: -80px;
            line-height: 35px;
            text-decoration: none;
            border: none;
            background-color: transparent;
            color: #fff;
            cursor: pointer;
        }
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
    margin-left: 20px;
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
        background-color: rgba(128, 128, 128, 0.1);
        border-radius: 5px;
        opacity: 0.5;
        /* width: 80%;
        height: 60px; */
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

export const SongInfoII = styled.div`
    display: flex;
    

    
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

//Home Page

export const HomeContainer = styled.div`
    color: #fff;
    & h1 {
        text-align: start;
        width: 100%;
        margin-bottom: 20px;
        font-size: 28px;
    }
`

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
    margin-bottom: 20px;
`

export const CardLarge = styled.div`
    transition: all .5;
    width: 30%;
    display: flex;
    justify-content: space-between;
    background-color: #282828;
    cursor: pointer;
    border-radius: 5px;
    margin: 10px;
    color: #ffff;

    & img {
        width: 70px;
        height: 70px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        object-fit: cover;
    }

    & h4 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        font-size: 15px;
        width: calc(100% - 80px);
    }
`
