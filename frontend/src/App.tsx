import FlashcardArray from "./components/FlashcardArray/FlashcardArray";
import React from "react";

const deck = {
    id: "nsh19mt",
    title: "First Deck",
    author: "Santhosh",
    description: "This is the first deck",
    cards: [
      {
        id: 1,
        frontHTML: "<p>What is the <u>capital</u> of Alaska?</p>",
        backHTML: "Juneau",
        options: ["Juneau", "Anchorage", "Fairbanks"],
      },
      {
        id: 2,
        frontHTML: "What is the capital of California?",
        backHTML: "Sacramento",
        options: ["Sacramento", "Los Angeles", "San Francisco"],
      },
      {
        id: 3,
        frontHTML: "What is the capital of New York?",
        backHTML: "Albany",
        options: ["Albany", "New York", "Buffalo"],
      },
      {
        id: 4,
        frontHTML: "What is the capital of Florida?",
        backHTML: "Tallahassee",
        options: ["Tallahassee", "Orlando", "Jacksonville"],
      },
      {
        id: 5,
        frontHTML: "What is the capital of Texas?",
        backHTML: "Austin",
        options: ["Austin", "Houston", "San Antonio"],
      },
      {
        id: 6,
        frontHTML: "What is the capital of New Mexico?",
        backHTML: "Santa Fe",
        options: ["Santa Fe", "Albuquerque", "Las Cruces"],
      },
      {
        id: 7,
        frontHTML: "What is the capital of Arizona?",
        backHTML: "Phoenix",
        options: ["Phoenix", "Tucson", "Mesa"],
      },
    ],
  };

const App = () => {
    return (
        <div>
            <FlashcardArray cards={deck.cards} />
        </div>
    );
}

export default App;