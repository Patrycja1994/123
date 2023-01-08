import PropTypes from 'prop-types';
import style from './FeedBackOptions.module.css';

export const FeedBackOptions = ({ options, onLeaveFeedBack}) => {
    return  (
    <div>
        {options.map(option => {
            return (
                <button
                className= {style.feedback__button}
                key={option}
                type="button"
                name={option}
                onClick={onLeaveFeedBack}
                >
                    {option}

                </button>
            )
        })}
    </div>
    );
};

    FeedBackOptions.propTypes = {
        options: PropTypes.object.isRequired,
        onLeaveFeedBack: PropTypes.func.isRequired,
    };
