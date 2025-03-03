import React from "react";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header
        title="Expense Tracker"
        description="Track your expenses easily"
      />
      <main>
        <h2>Your Expenses</h2>
      </main>
    </div>
  );
};

export default App;
