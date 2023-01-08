import PropTypes from 'prop-types';
import style from './Section.module.css';

export const Section = ({ title, children }) => (
    <section className={style.feedback}>
        <h2 className={style.feedback__title}> {title}</h2>
        {children}
    </section> 
)

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};