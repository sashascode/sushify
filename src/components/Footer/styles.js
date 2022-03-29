import styled from 'styled-components'

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100vw;
  background-color: #181818;
  color: #fff;
  display: flex;
  justify-content: space-between;
`
export const FooterLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  max-width: 300px;
  & img {
    height: 50px;
    width: 50px;
    margin-left: 20px;
    margin-right: 20px;
    object-fit: contain;
  }

  & span {
    color: #BFC0C0;
    font-size: 10px;
  }
`

export const FooterCenter = styled.div`
flex: 0.4;
display: flex;
align-items: center;
gap: 20px;
max-width: 300px;
font-size: 25px;
color: #BFC0C0;
&:hover {
  color: #fff;
}
& span {
  font-size: 35px;
  color: #fff;
}
  
`

export const FooterRight = styled.div`
  flex: 0.3;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin-right: 35px;
  max-width: 300px;
  font-size: 18px;
  color: #BFC0C0;
`

export const Input = styled.input`
  -webkit-appearance: none;
  background: #111;
  outline: none;
  border-radius: 15px;
  overflow: hidden;
  height: 10px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    box-shadow: -307px 0 0 300px #1db954;
  }
`
