export default function PlanetTable({ data }) {
  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-2 py-1">Name</th>
          <th className="border px-2 py-1">Radius (Re)</th>
          <th className="border px-2 py-1">Mass (Me)</th>
          <th className="border px-2 py-1">Orbital Period (days)</th>
          <th className="border px-2 py-1">Distance (pc)</th>
          <th className="border px-2 py-1">Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((p, idx) => (
          <tr key={idx} className="hover:bg-gray-100">
            <td className="border px-2 py-1">{p.pl_name}</td>
            <td className="border px-2 py-1">{p.pl_rade}</td>
            <td className="border px-2 py-1">{p.pl_bmasse}</td>
            <td className="border px-2 py-1">{p.pl_orbper}</td>
            <td className="border px-2 py-1">{p.sy_dist}</td>
            <td className="border px-2 py-1">{p.detectability_score.toFixed(3)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
