class QuestionSet {
  constructor(correctAnswer, availableMedia) {
    this.correctAnswer = correctAnswer;
    this.wrongAnswer1 = this.rollLosingAnswer(availableMedia, [
      this.correctAnswer
    ]);
    this.wrongAnswer2 = this.rollLosingAnswer(availableMedia, [
      this.correctAnswer,
      this.wrongAnswer1
    ]);
    this.selectedAnswerID = null;
  }

  rollNumber(fromInt, toInt) {
    const randomNumber = Math.floor(Math.random() * toInt) + fromInt;
    return randomNumber;
  }

  // Roll a answer, if it is already used try again
  rollLosingAnswer(availableMedia, mediaAlreadyUsded) {
    let losingAnswer = null;
    const mediaAlreadyUsdedID = mediaAlreadyUsded.map(media => media.id);

    // Make sure that losing answer was selected and that it is not the same answer as previously rolled for this question
    while (!losingAnswer || mediaAlreadyUsdedID.includes(losingAnswer.id)) {
      losingAnswer = availableMedia[this.rollNumber(0, availableMedia.length)];
    }
    return losingAnswer;
  }
}

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

  createQuestionObjects() {
    const winningMedia = [...this.winningMedia];
    const questionObjects = winningMedia.map(media => {
      const questionSet = new QuestionSet(media[0], [...this.mediaJSON]);
      return questionSet;
    });

    return questionObjects;
  }
}

export default RollQuestions;
