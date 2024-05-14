import Profile from '../components/Profile';
import { members } from '../constants/member';

const Homepage = () => {
  return (
    <div className='px-[7.5%]'>
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
  );
};

export default Homepage;
