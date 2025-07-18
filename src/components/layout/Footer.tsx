export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">🚛 CargoSizer WebEngine</h3>
            <p className="text-gray-300">
              Advanced 3D cargo optimization platform for efficient trailer loading.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CargoSizer WebEngine. Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}