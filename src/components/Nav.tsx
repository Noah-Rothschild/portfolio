export default function Nav() {
  return (
    <nav className="bg-white fixed top-0 w-full flex items-center justify-between py-4 gap-3">
      <a className="font-comfortaa text-lg font-bold text-gray-900 hover:text-gray-700 transition-colors duration-200" href="#hero">Noah Rothschild</a>
      <div className="flex items-center gap-4">
        <a className="font-comfortaa text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors duration-200" href="#projects">Projects</a>
        <a className="font-comfortaa text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors duration-200" href="#about">About</a>
        <a className="font-comfortaa text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors duration-200" href="#contact">Contact</a>
      </div>

      <div className="absolute top-full left-0 w-full h-4 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
    </nav>
  );
}