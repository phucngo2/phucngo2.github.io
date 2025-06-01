import { Layout } from "@/components";
import { Experience, Introduction, Projects, Skills } from "@/modules/";

import "./App.css";

function App() {
  return (
    <Layout>
      <Introduction />

      <Experience />

      <Skills />

      <Projects />
    </Layout>
  );
}

export default App;
