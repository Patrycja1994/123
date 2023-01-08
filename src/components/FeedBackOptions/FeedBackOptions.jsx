import PropTypes from 'prop-types';
import style from './FeedBackOptions.module.css';

export const FeedBackOptions = ({ options, onLeaveFeedback}) => {
    return  (
    <div>
        {Object.keys(options).map(option => {
            return (
                <button
                className= {style.feedback__button}
                key={option}
                type="button"
                name={option}
                onClick={onLeaveFeedback}
                >
                    {option}

                </button>
            );
        })}
    </div>
    );
};

    FeedBackOptions.propTypes = {
        options: PropTypes.object.isRequired,
        onLeaveFeeack: PropTypes.func.isRequired,
    };
