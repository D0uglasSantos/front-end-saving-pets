import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <header
      className={`${
        isScrolled ? 'bg-brown shadow-md' : 'bg-transparent'
      } flex justify-around p-3 fixed w-full z-10 transition-colors ease-out`}
    >
      <Link href="/">
        <Image src="/logo.svg" alt="Logo Saving Pets" width={120} height={84} />
      </Link>
      <ul className="flex items-center gap-6 font-semibold text-base">
        <Link href="/">
          <li
            className={`link ${
              pathname === '/'
                ? 'text-yellow border-b-2 border-yellow'
                : 'text-gray-300 hover:text-white transition-transform hover:scale-110 font-hind-siliguri'
            }`}
          >
            Home
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`link ${
              pathname === '/about'
                ? 'text-yellow border-b-2 border-yellow'
                : 'text-gray-300 hover:text-white transition-transform hover:scale-110 font-hind-siliguri'
            }`}
          >
            Sobre Nós
          </li>
        </Link>
        <Link href="/contact">
          <li
            className={`link ${
              pathname === '/contact'
                ? 'text-yellow border-b-2 border-yellow'
                : 'text-gray-300 hover:text-white transition-transform hover:scale-110 font-hind-siliguri'
            }`}
          >
            Contato
          </li>
        </Link>
        <Link href="/gallery">
          <li
            className={`link ${
              pathname === '/gallery'
                ? 'text-yellow border-b-2 border-yellow'
                : 'text-gray-300 hover:text-white transition-transform hover:scale-110 font-hind-siliguri'
            }`}
          >
            Galeria
          </li>
        </Link>
        <Link href="/report">
          <li
            className={`link ${
              pathname === '/report'
                ? 'text-yellow border-b-2 border-yellow'
                : 'text-gray-300 hover:text-white transition-transform hover:scale-110 font-hind-siliguri'
            }`}
          >
            Denunciar
          </li>
        </Link>
        <Link href="/register">
          <li
            className={`link ${
              pathname === '/register'
                ? 'text-yellow border-b-2 border-yellow'
                : 'text-gray-300 hover:text-white transition-transform hover:scale-110 font-hind-siliguri'
            }`}
          >
            Cadastro
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;
