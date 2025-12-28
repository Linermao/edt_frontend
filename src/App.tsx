import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline } from "@mui/material";
import { ApolloProvider } from "@apollo/client";
import { useCreateApolloClient } from "./components/apolloProvider/useCreateApolloClient";
import { ToastProvider } from "./components/toastProvider/ToastProvider";
import { Router } from "./components/router/Router";

const style = {
  display: 'grid',
  height: '100vh',
  width: '100vw',
};

function App() {
    const theme = createTheme({
        palette: {
        mode: "light",
        },
    });

    const apolloClient = useCreateApolloClient();

    return (
        <ApolloProvider client={apolloClient}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ToastProvider>
                        <div style={style}>
                            <Router />
                        </div>
                    </ToastProvider>
                </ThemeProvider>
            </BrowserRouter>
        </ApolloProvider>
    );
};

export default App;
