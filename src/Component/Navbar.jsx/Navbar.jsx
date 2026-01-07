import useTheme from "../../Hook/useTheme/useTheme";


const Navbar = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <nav className="p-4 flex justify-between items-center bg-base-200">
      <h1 className="font-bold text-xl">My Website</h1>
      <button className="btn btn-sm" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
};

export default Navbar;
