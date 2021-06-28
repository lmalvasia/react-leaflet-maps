import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './ExpandingSection.module.css';

interface IExpandingSectionProps {
  label: string;
  children: React.ReactNode
}

const ExpandingSection: React.FC<IExpandingSectionProps> = ({
  label,
  children,
}) => {
  const [isExpanding, setExpanding] = useState(false);
  const iconStyles = classnames(styles.angleDown, {
    [styles.angleDownExpanded]: isExpanding,
  });

  return (
    <div className={styles.expandingSectionContainer}>
      <div className={styles.labelContainer} onClick={() => setExpanding(!isExpanding)}>
        <FontAwesomeIcon icon={faAngleRight} className={iconStyles} />
        {label}
      </div>
      {isExpanding && (
        children
      )}
    </div>
  );
};

ExpandingSection.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ExpandingSection;
