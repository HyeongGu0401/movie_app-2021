import React from 'react';

function Food({ fav }) {
  return <h3>나는 {fav}을(를) 먹고싶다</h3>;
}

function App() {
  return (
    <div className="App">
      <div>우헹</div>
      <Food fav="kimchi" />
    </div>
  );
}

export default App;
