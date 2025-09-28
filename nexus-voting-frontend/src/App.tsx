import VoteForm from "./components/VoteForm";
import Results from "./components/Results";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <VoteForm />
      <Results />
    </div>
  );
}
