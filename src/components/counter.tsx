import * as React from "react";
import { Button } from "@nextui-org/react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

function Counter() {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div className="grid place-content-center min-h-screen">
      <div className="grid place-content-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="grid place-content-center">
        <h1 className="text-center">Vite + React</h1>
        <Button onPress={() => setCount((count) => count + 1)} color="primary">
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export { Counter };
