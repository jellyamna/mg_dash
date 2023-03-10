import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Components from "./components/Components";
import StepsMigrasi from "./components/StepsMigrasi";
import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <StepsMigrasi /> */}
      <Components />
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}

export default App;
