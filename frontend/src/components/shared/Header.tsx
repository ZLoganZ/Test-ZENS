const Header = () => {
  return (
    <div className='flex justify-between items-center ps-56 pe-44 py-2.5'>
      <img src='/images/logo.png' alt='logo' className='size-14' />
      <div className='flex justify-center items-center gap-4'>
        <div className='flex flex-col items-end'>
          <p className='text-gray-400 italic text-sm'>Handcrafted by</p>
          <p className='text-sm'>Jim HLS</p>
        </div>
        <img src='/images/avatar.jpg' alt='avatar' className='size-14 rounded-full object-cover' />
      </div>
    </div>
  );
};

export default Header;
