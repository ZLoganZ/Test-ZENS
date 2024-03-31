const Header = () => {
  return (
    <div className='flex justify-between items-center lg:ps-56 lg:pe-44 px-5 py-2.5'>
      <img src='/images/logo.png' alt='logo' className='lg:size-14 size-10' />
      <div className='flex justify-center items-center lg:gap-4 gap-2'>
        <div className='flex flex-col items-end'>
          <p className='text-gray-500/90 italic text-sm'>Handcrafted by</p>
          <p className='text-sm'>Jim HLS</p>
        </div>
        <img src='/images/avatar.jpg' alt='avatar' className='lg:size-14 size-10 rounded-full object-cover' />
      </div>
    </div>
  );
};

export default Header;
