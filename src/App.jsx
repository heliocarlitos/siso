import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/secction/Header";
function App() {
  return (
    <Router>
      <section className="Raiz">

        <Header />

        <main>
          <Routes>
            {/* <Route path="/" element={< Home/>} /> */}
            {/* <Route path="*" element={< />} /> */}
          </Routes>
        </main>

      </section>
    </Router>
  );
}

export default App;