import Home from "./pages/Home";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
const Licencia = lazy(() => import("./pages/Licencia.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/licencia_a2"
        element={
          <Suspense fallback={<>Loading...</>}>
            <ScrollToTop />
            <Licencia clase="a2" />
          </Suspense>
        }
      />
      <Route
        path="/licencia_b1"
        element={
          <Suspense fallback={<>Loading...</>}>
            <ScrollToTop />
            <Licencia clase="b1" />
          </Suspense>
        }
      />
      <Route
        path="/licencia_c1"
        element={
          <Suspense fallback={<>Loading...</>}>
            <ScrollToTop />
            <Licencia clase="c1" />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
