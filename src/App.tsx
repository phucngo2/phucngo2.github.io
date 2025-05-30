import { Layout } from "@/components";
import { Experience } from "@/modules/experience";
import { Introduction } from "@/modules/introduction";
import { Skills } from "./modules/skills";

import "./App.css";

function App() {
  return (
    <Layout>
      <Introduction />

      <Experience />

      <Skills />
    </Layout>
  );
}

export default App;
