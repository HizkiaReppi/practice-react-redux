import PropTypes from 'prop-types';

const Input = ({ type, id, className, placeholder, ...props }) => {
  const baseClasses =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ease-in-out';

  return (
    <input
      type={type}
      id={id}
      className={`${baseClasses} ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  placeholder: '',
};

export default Input;
