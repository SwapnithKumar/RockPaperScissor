import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  color: #fff;
`

export const ScoreContainer = styled.div`
  border: solid 1px #fff;
  border-radius: 8px;
  padding: 22px;
  font-family: 'Bree Serif';
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  height: 30vh;
  margin: 0px;
`

export const ScoreCard = styled.div`
  background-color: #fff;
  padding: 18px;
  border-radius: 12px;
  width: 10vw;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  font-family: 'Roboto';
`

export const PlayContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const PlayIconContainer = styled.button`
  height: 120px;
  width: 120px;
  margin-right: 80px;
  margin-left: 80px;
  margin-top: 40px;
  cursor: pointer;
  background: transparent;
  border: none;
`

export const Image = styled.img`
  height: 120px;
  width: 120px;
`

export const ResultContainer = styled(PlayIconContainer)`
  display: flex;
  width: 50vw;
  flex-direction: column;
  align-items: center;
`

export const ResultImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Button = styled.button`
  background-color: #fff;
  height: 40px;
  width: 100px;
  border-radius: 6px;
  font-family: Roboto;
  cursor: pointer;
`

export const RulesButton = styled(Button)`
  align-self: flex-end;
`
export const RulesContainer = styled.div`
  align-self: flex-end;
`

export const RulesBgContainer = styled.div`
  background-color: #fff;
  padding: 12px;
`

export const RulesImg = styled.img`
  height: 500px;
  width: 500px;
`

export const Para = styled.p`
  font-family: 'Roboto';
`
