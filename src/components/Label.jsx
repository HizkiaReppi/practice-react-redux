import PropTypes from 'prop-types';

const Label = ({ htmlFor, className, children, ...props }) => {
  const baseClasses =
    'block mb-2 text-sm font-medium text-gray-900 dark:text-white';

  return (
    <label
      htmlFor={htmlFor}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Label.defaultProps = {
  className: '',
};

export default Label;
