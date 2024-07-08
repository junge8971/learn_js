import { Fragment, useCallback, useMemo, useState } from "react";

import { EffectSection } from "./components/Effects/EffectSection";
import { FeedBackSections } from "./components/FeedBack/FeedBackSection";
import { Header } from "./components/Header/Header";
import { ContentSelector } from "./components/Navigation/ContentSelector";
import { OurDifferencesSection } from "./components/Teaching/OurDifferencesSection";
import { TeachingSection } from "./components/Teaching/TeachingSection";
import { PageIntro } from "./components/UI/PageIntro/PageIntro";

export const App = () => {
  const registeredContent = useMemo(
    () => [
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
    ],
    []
  );
  const [visibleContent, setVisibleContent] = useState("teaching");

  const contentsOfPages = useMemo(
    () => (
      <main>
        {registeredContent.map(
          (content) =>
            visibleContent === content.type && (
              <Fragment key={content.type}>{content.component}</Fragment>
            )
        )}
      </main>
    ),
    [registeredContent, visibleContent]
  );

  const setVisibleContentCallback = useCallback(
    (value) => setVisibleContent(value),
    []
  );

  return (
    <>
      <Header />
      <PageIntro />

      <ContentSelector
        setVisibleContent={setVisibleContentCallback}
        registeredContent={registeredContent}
        visibleContent={visibleContent}
      />

      {contentsOfPages}
    </>
  );
};
