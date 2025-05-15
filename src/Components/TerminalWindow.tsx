const TerminalWindow = ({ title, children }) => (
  <div className="bg-gray-800 rounded p-4 mb-4 shadow-lg border border-green-400">
    <div className="text-green-300 mb-2">{title}</div>
    <div>{children}</div>
  </div>
);

export default TerminalWindow;
