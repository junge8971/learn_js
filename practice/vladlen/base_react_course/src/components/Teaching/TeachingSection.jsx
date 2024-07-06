import { WayToTeach } from "./WayToTeach";

export const TeachingSection = () => {
  const ways = [
    {
      title: "Заголовк 1",
      description: "Описание 1",
    },
    {
      title: "Заголовк 2",
      description: "Описание 2",
    },
  ];
  return (
    <section>
      <h3>Наш подход к обучению</h3>

      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
};
