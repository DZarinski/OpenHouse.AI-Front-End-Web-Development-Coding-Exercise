import { Box, ChakraProvider, Grid, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Home } from "./pages";

const queryClient = new QueryClient();

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Home />
        </Grid>
      </Box>
    </QueryClientProvider>
  </ChakraProvider>
);
