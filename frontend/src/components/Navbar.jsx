import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav className='p-4 bg-blue-600 text-white flex justify-between'>
    <h1 className='text-xl font-bold'>SkillSwap</h1>
    <div className='space-x-4'>
      <Link to='/'>Home</Link>
      <Link to='/skills'>Skills</Link>
      <Link to='/profile'>Profile</Link>
    </div>
  </nav>
);

export default Navbar;