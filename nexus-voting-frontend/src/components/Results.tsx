export default function Results() {
  const votes: { [voterName: string]: string } =
    JSON.parse(localStorage.getItem("votes") || "{}");

  const counts: { [candidate: string]: number } = {};
  Object.values(votes).forEach((c) => {
    counts[c] = (counts[c] || 0) + 1;
  });

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded mt-6">
      <h2 className="text-xl font-bold mb-4 text-center">📊 Voting Results</h2>
      <ul className="space-y-2">
        {Object.keys(counts).length === 0 && <li>No votes yet.</li>}
        {Object.entries(counts).map(([candidate, count]) => (
          <li key={candidate} className="flex justify-between border-b pb-2">
            <span>{candidate}</span>
            <span>{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
