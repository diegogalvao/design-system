import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Button extends React.Component {
  render() {
    let {
      children,
      style,
      size,
      type,
      className,
      disabled
    } = this.props;

    let classes = classnames(
        'button',
      {
        [`-${style}`]: style,
        [`-${size}`]: size,
        '-disabled': disabled
      }
    );


    return (
      <button type={type} className={classes}>
        {children}
      </button>
    );
  }
}

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
};

Button.defaultProps = {
  size: 'medium',
  type: 'button',
  disabled: false,
};

export default Button;