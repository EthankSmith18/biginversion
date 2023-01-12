import React from "react";
import PersonCard from "./components/PersonCard";
import people from "./data/people";

const App = () => {
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Big Inversion</h2>
          {people.map((person, idx) => (
            <PersonCard
              firstName={person.firstName}
              lastName={person.lastName}
              age={person.age}
              hairColor={person.hairColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
