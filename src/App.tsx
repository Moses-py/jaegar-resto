import React from "react";
import { Button } from "./packages/ui-components/button/Button";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Button>Hello World</Button>
    </ThemeProvider>
  );
}

export default App;
