import { useState } from "react";

export default function MinimalistCheckbox() {
  const [mockVotes, setMockVotes] = useState([
    { name: "Bulbasauro", votes: 25 },
    { name: "Charmander", votes: 15 },
    { name: "Skirtle", votes: 10 },
  ]);

  const totalVotes = mockVotes.reduce((sum, option) => sum + option.votes, 0);

  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  const handleVote = (name: string) => {
    setMockVotes((prevVotes) =>
      prevVotes.map((option) =>
        option.name === name
          ? { ...option, votes: option.votes + 1 } // Incrementa o voto
          : option
      )
    );
    setSelectedPokemon(name);
  };

  return (
    <div className="flex w-full max-w-screen-lg items-center flex-col p-6">
      <div className="text-4xl font-bold w-full">
        Which Pokémon do you choose?
      </div>
      <div className="text-gray-600 mt-4 w-full">
        Your first Pokémon will impact on your whole journey, choose wisely!
      </div>
      <div className="mt-4 w-full">
        {mockVotes.map((option) => {
          const percentage = ((option.votes / totalVotes) * 100).toFixed(0);

          return (
            <div
              key={option.name}
              className={`flex w-full justify-between items-center p-4 mt-4 rounded-lg cursor-pointer ${
                selectedPokemon === option.name ? "bg-blue-100" : "bg-gray-100"
              } hover:bg-blue-200 transition`}
              onClick={() => handleVote(option.name)}
            >
              <div className="flex items-center w-full">
                <div className="relative w-6 h-6">
                  <input
                    type="checkbox"
                    id={option.name}
                    name="pokemon"
                    value={option.name}
                    checked={selectedPokemon === option.name}
                    onChange={() => handleVote(option.name)}
                    className="hidden"
                  />
                  <div
                    className={`w-6 h-6 border-2 border-gray-400 rounded-md flex items-center justify-center ${
                      selectedPokemon === option.name
                        ? "bg-blue-500 text-white"
                        : "bg-transparent"
                    }`}
                  >
                    {selectedPokemon === option.name && ""}
                  </div>
                </div>
                <label
                  htmlFor={option.name}
                  className="ml-3 text-sm font-medium cursor-pointer"
                >
                  {option.name}
                </label>
              </div>
              <div className="text-sm font-semibold">{percentage}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
