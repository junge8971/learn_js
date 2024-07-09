import {
  ChangeEvent,
  DragEvent,
  FC,
  MouseEvent,
  useRef,
  useState,
} from "react";

export const ExampleEvent: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (event: DragEvent<HTMLDivElement>) => {
    console.log("Сам себя дёрни");
  };
  const dropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
  };
  const drawWithPreventHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={changeHandler}
        placeholder="Управляемый"
      />
      <input ref={inputRef} type="text" placeholder="Не управляемый" />

      <button onClick={clickHandler}>Тык</button>

      <div
        draggable
        onDrag={dragHandler}
        style={{ width: 200, height: 200, background: "red" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={drawWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "green" : "red",
          marginTop: 20,
        }}
      ></div>
    </div>
  );
};
