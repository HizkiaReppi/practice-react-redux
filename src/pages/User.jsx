import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../redux/slices/userSlice';
import Loading from '../components/Loading';

function UserComponent() {
  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='px-[7.5%]'>
      <h2 className='text-2xl font-semibold mb-3'>User Details</h2>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th
                scope='col'
                className='px-6 py-3'
              >
                Fullname
              </th>
              <th
                scope='col'
                className='px-6 py-3'
              >
                Username
              </th>
              <th
                scope='col'
                className='px-6 py-3'
              >
                Email
              </th>
              <th
                scope='col'
                className='px-6 py-3'
              >
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((data) => (
              <tr
                key={data.id}
                className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'
              >
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  {data.name}
                </th>
                <td className='px-6 py-4'>{data.username}</td>
                <td className='px-6 py-4'>{data.email}</td>
                <td className='px-6 py-4'>
                  {data?.address?.suite +
                    ', ' +
                    data?.address?.street +
                    ', ' +
                    data?.address?.city}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default UserComponent;
