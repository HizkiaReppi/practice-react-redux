import PropTypes from 'prop-types';

const Profile = ({ image, name, role, usernameGithub }) => {
  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex flex-col items-center py-10'>
        <img
          className='w-24 h-24 mb-3 rounded-full shadow-lg'
          src={image}
          alt={name}
        />
        <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
          {name}
        </h5>
        <span className='text-sm text-gray-500 dark:text-gray-400'>{role}</span>
        <div className='flex mt-4 md:mt-6'>
          <a
            href={`https://github.com/${usernameGithub}`}
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  usernameGithub: PropTypes.string.isRequired,
};

export default Profile;
