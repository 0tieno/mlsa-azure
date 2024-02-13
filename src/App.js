import React from 'react';

function App() {
   // Get the current date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <div className="header-greeting">
      Hello Techies! 😍<br />
      Current Date: {formattedDate}<br />
      Current Time: {formattedTime}
    </div>
  );
}

export default App;
