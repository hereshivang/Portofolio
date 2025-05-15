const Sidebar = ({ selectedMenu, setSelectedMenu }) => {
  const menuItems = ["about", "projects", "experience"];
  return (
    <div className="w-48 bg-gray-900 p-4 border-r border-green-400">
      {menuItems.map((item) => (
        <div
          key={item}
          className={`cursor-pointer capitalize mb-2 ${selectedMenu === item ? "text-white font-bold" : ""}`}
          onClick={() => setSelectedMenu(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
