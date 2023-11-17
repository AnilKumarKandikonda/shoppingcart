import React from "react";
import { Route, Routes } from "react-router-dom";
import { pageRoutes } from './routes/routes';
import Layout from "./PageLayout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route>
          {pageRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={route.component}
              key={idx}
              exact={true}
            />
          ))}
        </Route>
      </Routes>
    </Layout>

  );
}

export default App;
