import { useState } from "react";

import { Button } from "../UI/Buttons/Button";
import { Modal } from "../UI/Modal/Modal";

export const EffectSection = () => {
  const [isModalDisplaced, setModalDisplaced] = useState(false);

  const openModal = () => setModalDisplaced(true);
  return (
    <section>
      <h2>Effects</h2>
      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={isModalDisplaced}>
        <h3>Заголовок</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          pariatur ipsa molestiae optio dolore cumque nobis quasi, quaerat porro
          quibusdam natus magni rem eveniet, recusandae iure tempore. Rem, sequi
          nam.
        </p>
        <Button onClick={() => setModalDisplaced(false)}>Закрыть</Button>
      </Modal>
    </section>
  );
};
