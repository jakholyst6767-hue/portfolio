export default function NotFound() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-9xl font-extrabold text-pink-500 animate-bounce mb-6">404</h1>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Ups! Strona zaginęła 😅</h2>
      <p className="text-gray-300 mb-2">Wygląda na to, że ta strona wzięła wolne albo się schowała...</p>
      <p className="text-gray-400 mb-6 italic">Może porwały ją kosmiczne koty 🐱🛸</p>
      <p className="text-gray-400 mb-8">Nie martw się, jeszcze nic nie zginęło na dobre!</p>
      <a
        href="/"
        className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
      >
        Wróć na start
      </a>
    </div>
  );
}