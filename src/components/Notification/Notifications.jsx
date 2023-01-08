import PropTypes from 'prop-types';
import style from './Notification.module.css';

export const Notification = ({ message }) => {
     return <div className={style.notification}> {message} </div>
};

Notification.propTotypes = {
    message: PropTypes.string.isRequired,
}