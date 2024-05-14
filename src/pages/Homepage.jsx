import { useSelector } from 'react-redux';
import Profile from '../components/Profile';
import { members } from '../constants/member';

const Homepage = () => {
  const currentCounter = useSelector((state) => state.counter.value);
  const totalUserData = useSelector((state) => state.user.data);
  const totalTodos = useSelector((state) => state.todos.todos);

  return (
    <div className='px-[7.5%] mb-10'>
      <div>
        <h1 className='text-2xl font-semibold text-center'>
          7Teen | Group 17 | B Morning
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
          {members.map((member, index) => (
            <Profile
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              usernameGithub={member.usernameGithub}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className='text-xl font-semibold text-center'>Dashboard</h2>
        <div className='flex justify-center mt-5'>
          <table className='w-[576px] text-sm text-center text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3'
                >
                  Current Counter
                </th>
                <th
                  scope='col'
                  className='px-6 py-3'
                >
                  Total User Data
                </th>
                <th
                  scope='col'
                  className='px-6 py-3'
                >
                  Total Todo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white dark:bg-gray-900 border-b dark:border-gray-700'>
                <th className='px-6 py-4'>{currentCounter}</th>
                <td className='px-6 py-4'>{totalUserData.length}</td>
                <td className='px-6 py-4'>{totalTodos.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
