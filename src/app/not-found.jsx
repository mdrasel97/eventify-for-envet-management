export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="mt-2 text-lg text-gray-600">Page not found.</p>
      <a
        href="/"
        className="mt-4 rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go Home
      </a>
    </div>
  );
}
