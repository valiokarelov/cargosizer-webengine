export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🚛</span>
            <h1 className="text-xl font-bold text-gray-800">CargoSizer WebEngine</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-500">Cargo Fitter</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Calculators</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}