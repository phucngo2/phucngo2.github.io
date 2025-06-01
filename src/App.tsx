import { Layout } from "@/components";
import {
  Certification,
  Experience,
  Introduction,
  Projects,
  Skills,
} from "@/modules/";

import "./App.css";

function App() {
  return (
    <Layout>
      <Introduction />

      <Experience />

      <Skills />

      <Projects />

      <Certification />
    </Layout>
  );
}

export default App;
