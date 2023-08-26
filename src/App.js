import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Autocomplete from "./Autocomplete";

function App() {
  return (
    <ChakraProvider>
      <Box className="App">
        <Autocomplete />
      </Box>
    </ChakraProvider>
  );
}

export default App;
