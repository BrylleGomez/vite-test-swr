import { useState } from "react";
import "./App.css";
import { ReactQueryTest } from "./ReactQueryTest";
import { ReactQueryWrapper } from "./ReactQueryWrapper";
import { SWRTest } from "./SWRTest";

function App() {
  const [library] = useState<"swr" | "reactquery">("swr");

  return (
    <>
      {library === "reactquery" ? (
        <ReactQueryWrapper>
          <ReactQueryTest />
        </ReactQueryWrapper>
      ) : (
        <SWRTest />
      )}
    </>
  );
}

export default App;
