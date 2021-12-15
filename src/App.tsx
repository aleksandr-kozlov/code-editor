import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from "./auth/AuthProvider";
import CustomThemeProvider from "./theme/CustomThemeProvider";
import Routes from "./routes/Routes";
import Loading from "./components/common/Loading/Loading";

function App() {
  return (
      <Router>
        <AuthProvider>
          <CustomThemeProvider>
              <Suspense fallback={<Loading/>}>
                <Routes/>
              </Suspense>
          </CustomThemeProvider>
        </AuthProvider>
      </Router>
  );
}

export default App;
