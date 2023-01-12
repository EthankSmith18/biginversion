import React from 'react'

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
  return (
    <div className="card mb-3">
        <h2 className="card-header">{lastName}, {firstName}</h2>
        <div className="card-body">
            <p className="card-text mb-1">Age: {age}</p>
            <p className="card-text mb-1">Hair Color: {hairColor}</p>
        </div>
    </div>
  )
}

export default PersonCard