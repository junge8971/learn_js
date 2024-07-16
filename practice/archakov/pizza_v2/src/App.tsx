import { Header } from "@/components/Header/Header";
import { PageWrapper } from "@/components/UI/PageWrapper/PageWrapper.";

import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <PageWrapper>
      <Header />
      <MainPage />
    </PageWrapper>
  );
}

export default App;
