import Icon from '@/shared/constants/Icon';


const Header = () => {
  return (
    <header className="w-full h-[72px] sticky top-0 flex items-center justify-between py-12 px-24 ">
      <h1 className="text-xl font-semibold">Running</h1>
      <nav className="flex gap-4 text-sm">
        <Icon.Hamberger />
      </nav>
    </header>
  );
};

export default Header;



