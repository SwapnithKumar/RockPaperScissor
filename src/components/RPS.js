import React, {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  MainContainer,
  ScoreContainer,
  ScoreCard,
  PlayContainer,
  PlayIconContainer,
  Image,
  RulesButton,
  Button,
  RulesBgContainer,
  RulesImg,
  RulesContainer,
  ResultContainer,
  ResultImagesContainer,
  Para,
} from './styledComponent'

class RPS extends Component {
  state = {
    id: '',
    imgUrl: '',
    oppImgUrl: '',
    score: 0,
    isPlay: true,
    status: '',
  }

  onClickImage = ({id, imageUrl}) => {
    const {choicesList} = this.props
    const opponent = Math.floor(Math.random() * 3)
    const id2 = choicesList[opponent].id
    const oppImgUrl = choicesList[opponent].imageUrl

    let status = ''
    let scoreChange = 0

    if (id === id2) {
      status = 'IT IS DRAW'
    } else if (
      (id === 'ROCK' && id2 === 'SCISSORS') ||
      (id === 'PAPER' && id2 === 'ROCK') ||
      (id === 'SCISSORS' && id2 === 'PAPER')
    ) {
      status = 'YOU WON'
      scoreChange = 1
    } else {
      status = 'YOU LOSE'
      scoreChange = -1
    }

    this.setState(prevState => ({
      isPlay: false,
      oppImgUrl,
      status,
      score: prevState.score + scoreChange,
      imgUrl: imageUrl,
    }))
  }

  renderPlayView = () => {
    const {choicesList} = this.props
    return (
      <PlayContainer>
        {choicesList.map(choice => (
          <PlayIconContainer
            key={choice.id}
            type="button"
            onClick={() =>
              this.onClickImage({
                id: choice.id,
                imageUrl: choice.imageUrl,
              })
            }
            data-testid={`${choice.id.toLowerCase()}Button`}
          >
            <Image src={choice.imageUrl} alt={choice.id} />
          </PlayIconContainer>
        ))}
      </PlayContainer>
    )
  }

  playAgain = () => {
    this.setState({isPlay: true})
  }

  renderResultView = () => {
    const {imgUrl, oppImgUrl, status} = this.state
    return (
      <ResultContainer>
        <ResultImagesContainer>
          <Image src={imgUrl} alt="your choice" />
          <Image src={oppImgUrl} alt="opponent choice" />
        </ResultImagesContainer>
        <p>{status}</p>
        <Button type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </Button>
      </ResultContainer>
    )
  }

  renderRulesView = () => (
    <RulesContainer>
      <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
        {close => (
          <RulesBgContainer>
            <RiCloseLine onClick={() => close()} />
            <div>
              <RulesImg
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </div>
          </RulesBgContainer>
        )}
      </Popup>
    </RulesContainer>
  )

  render() {
    const {score, isPlay} = this.state
    return (
      <MainContainer>
        <ScoreContainer>
          <div>
            <h2>
              Rock <br /> Paper <br /> Scissors
            </h2>
          </div>
          <ScoreCard>
            <Para>Score</Para>
            <Para>{score}</Para>
          </ScoreCard>
        </ScoreContainer>
        {isPlay ? this.renderPlayView() : this.renderResultView()}
        {this.renderRulesView()}
      </MainContainer>
    )
  }
}

export default RPS
