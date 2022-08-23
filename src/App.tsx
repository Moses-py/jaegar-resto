import React from "react";
import { Homepage } from "./pages/home/Homepage";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
