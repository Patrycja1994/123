import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage, })=> (
    <div className = {style.statistics__total}>
        <h1 className = {style.statictis__header}> Statistics </h1>
        <ul className = {style.statistics__list}>
            <li>Good: {good} </li>
            <li>Neutral: {neutral} </li>
            <li>Bad: {bad} </li>
            <li>Total: {total} </li>
            <li>Percentage: {positivePercentage} %</li>
        </ul>
    </div>
);

Statistics.propTotypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};