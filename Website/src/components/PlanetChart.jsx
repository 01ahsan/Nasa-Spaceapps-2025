import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function PlanetChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="pl_name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="detectability_score" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  );
}
