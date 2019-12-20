import React from 'react';
import Section from '../Section/Section';
import './ResultsStage.css';

const ResultsStage = ({ questionsState }) => {
  return (
    <Section headerText="Check your results">
      <p>See which sounds caused you issues</p>
      <table className="results-table">
        <tbody>
          <tr>
            <th className="results-table__cell results-table__cell--head">
              Question
            </th>
            <th className="results-table__cell results-table__cell--head">
              Answer
            </th>
            <th className="results-table__cell results-table__cell--head">
              Replay sound
            </th>
          </tr>
          {questionsState.map((questionsSet, index) => {
            const isCorrect =
              questionsSet.correctAnswer.id.toString() ===
              questionsSet.selectedAnswerID;
            console.log('is correct', isCorrect);
            return (
              <tr key={questionsSet.correctAnswer.id.toString()}>
                <td className="results-table__cell">{index}</td>
                <td className="results-table__cell">
                  {isCorrect ? 'correct' : 'wrong'}
                </td>
                <td className="results-table__cell">
                  <button>PLAY</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Section>
  );
};

export default ResultsStage;
