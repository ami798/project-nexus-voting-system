import { useState } from "react";

interface Votes {
  [voterName: string]: string;
}

export default function VoteForm() {
  const [voterName, setVoterName] = useState("");
  const [candidate, setCandidate] = useState("");
  const [message, setMessage] = useState("");
  const [votes, setVotes] = useState<Votes>(
    JSON.parse(localStorage.getItem("votes") || "{}")
  );

  const handleVote = (e: React.FormEvent) => {
    e.preventDefault();
    if (votes[voterName]) {
      setMessage("❌ You already voted!");
      return;
    }
    const newVotes = { ...votes, [voterName]: candidate };
    setVotes(newVotes);
    localStorage.setItem("votes", JSON.stringify(newVotes));
    setMessage(`✅ Vote cast for ${candidate}!`);
    setVoterName("");
    setCandidate("");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">🗳 Online Voting</h1>
      <form onSubmit={handleVote} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={voterName}
          onChange={(e) => setVoterName(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <select
          value={candidate}
          onChange={(e) => setCandidate(e.target.value)}
          className="p-2 border rounded"
          required
        >
          <option value="">-- Select Candidate --</option>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
          <option value="Charlie">Charlie</option>
        </select>
        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Cast Vote
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
