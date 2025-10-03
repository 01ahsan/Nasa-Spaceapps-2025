export default function SearchBox({ search, setSearch }) {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search planet..."
      className="border p-2 rounded w-full max-w-sm mb-4"
    />
  );
}
