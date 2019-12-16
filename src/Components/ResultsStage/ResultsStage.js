import React from 'react';
import Section from '../Section/Section';
import './ResultsStage.css';

const ResultsStage = () => {
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
          <tr>
            <td className="results-table__cell">1</td>
            <td className="results-table__cell">false</td>
            <td className="results-table__cell">
              <button>PLAY</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

export default ResultsStage;
