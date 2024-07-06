import { Fragment, useState } from "react";

import { EffectSection } from "./components/Effects/EffectSection";
import { FeedBackSections } from "./components/FeedBack/FeedBackSection";
import { Header } from "./components/Header/Header";
import { ContentSelector } from "./components/Navigation/ContentSelector";
import { OurDifferencesSection } from "./components/Teaching/OurDifferencesSection";
import { TeachingSection } from "./components/Teaching/TeachingSection";
import { PageIntro } from "./components/UI/PageIntro/PageIntro";

export const App = () => {
  const registeredContent = [
    {
      type: "teaching",
      title: "Обучение",
      component: (
        <>
          <TeachingSection />
          <OurDifferencesSection />
        </>
      ),
    },
    {
      type: "feedback",
      title: "Обратная связь",
      component: <FeedBackSections />,
    },
    { type: "effect", title: "Ефект", component: <EffectSection /> },
  ];
  const [visibleContent, setVisibleContent] = useState("teaching");

  return (
    <>
      <Header />
      <PageIntro />

      <ContentSelector
        setVisibleContent={setVisibleContent}
        registeredContent={registeredContent}
        visibleContent={visibleContent}
      />

      <main>
        {registeredContent.map((content) =>
          visibleContent === content.type ? (
            <Fragment key={content.type}>{content.component}</Fragment>
          ) : null
        )}
      </main>
    </>
  );
};
