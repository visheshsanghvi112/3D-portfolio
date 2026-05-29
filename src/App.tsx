import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer  = lazy(() => import("./components/MainContainer"));
const Projects       = lazy(() => import("./components/Projects"));

import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          {/* ── Home ── */}
          <Route
            path="/"
            element={
              <LoadingProvider>
                <Suspense>
                  <MainContainer>
                    <Suspense>
                      <CharacterModel />
                    </Suspense>
                  </MainContainer>
                </Suspense>
              </LoadingProvider>
            }
          />

          {/* ── All Projects ── */}
          <Route
            path="/projects"
            element={
              <Suspense fallback={<div style={{ background: "#0a0a0a", minHeight: "100vh" }} />}>
                <Projects />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
