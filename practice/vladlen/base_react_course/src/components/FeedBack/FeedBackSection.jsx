import { useEffect, useState } from "react";

import {
  validateEmail,
  validateUsername,
} from "../../tools/validation/validationTools";
import { Button } from "../UI/Buttons/Button";
import { Textarea } from "../UI/forms/inputs/Textarea";
import { TextInput } from "../UI/forms/inputs/TextInput";
import classes from "./FeedBackSections.module.css";

export const FeedBackSections = () => {
  const [usernameField, setUsernameField] = useState({
    value: "",
    error: false,
  });
  const [emailField, setEmailField] = useState({
    value: "",
    error: false,
  });
  const [messageField, setMessageFiled] = useState({
    value: "",
    error: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    console.log("Валидируем форму");
    const getArrayWithInvalidFields = () =>
      [usernameField, emailField, messageField].filter(
        (field) => field.error === true || !field.value
      );
    setIsFormValid(() => getArrayWithInvalidFields().length === 0);
  }, [usernameField, emailField, messageField]);

  const updateUsernameField = (event) => {
    const value = event.target.value;
    setUsernameField({ value: value, error: !validateUsername(value) });
  };

  const updateEmailField = (event) => {
    const value = event.target.value;
    setEmailField({ value: value, error: !validateEmail(value) });
  };
  const updateMessageField = (event) => {
    const value = event.target.value;
    setMessageFiled({ value: value, error: value.trim() === "" });
  };

  return (
    <section>
      <h2>Обратная связь</h2>
      <p>Свяжитесь с нами по любым вопросам и предложениям</p>
      <form className={classes.form}>
        <TextInput
          type="text"
          placeholder="Ваше имя"
          value={usernameField.value}
          error={usernameField.error}
          onChange={(event) => updateUsernameField(event)}
        />
        <TextInput
          type="email"
          placeholder="Ваш email"
          value={emailField.value}
          error={emailField.error}
          onChange={(event) => updateEmailField(event)}
        />
        <Textarea
          placeholder="Текст сообщения"
          rows="5"
          value={messageField.value}
          error={messageField.error}
          onChange={updateMessageField}
        />
        <Button type="submit" disabled={!isFormValid}>
          Отправить
        </Button>
      </form>
      <div>
        <h3>Контакты</h3>
        <p>Email: 123@example.com</p>
        <p>Телефон: +123 456 7890</p>
      </div>
    </section>
  );
};
