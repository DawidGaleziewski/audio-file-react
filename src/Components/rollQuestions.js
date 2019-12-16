class RollQuestions {
  constructor(mediaJSON, numberOfQuestions) {
    this.mediaJSON = mediaJSON;
    this.numberOfQuestions = numberOfQuestions;
    this.winningMedia = this.rollWinningMedia();
  }

  rollNumber(fromInt, toInt) {
    const randomNumber = Math.floor(Math.random() * toInt) + fromInt;
    return randomNumber;
  }

  rollWinningMedia() {
    const availableMedia = [...this.mediaJSON];
    const rolledMedia = [];

    for (let i = 0; i < this.numberOfQuestions; ++i) {
      rolledMedia.push(
        availableMedia.splice(this.rollNumber(0, availableMedia.length), 1)
      );
    }
    return rolledMedia;
  }

  // Roll a answer, if it is already used try again
  rollLosingAnswer(mediaJSON, usedMediaInQuestionID){
    
  }

  createQuestionObjects() {
    const winningMedia = [...this.winningMedia];
    const questionObjects = winningMedia.map(media=> {
        const questionObject ={
            correctAnswer: media,
            wrongAnswer_1: 
        }
    })

  }
}

export default RollQuestions;
