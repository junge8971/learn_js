import React from "react";

export const useFetching = (callback) => {
  const [is_loading, set_loading] = React.useState(false);
  const [error, set_error] = React.useState("");

  const fetching = async (...args) => {
    try {
      set_loading(true);
      await callback(...args);
    } catch (e) {
      set_error(e.message);
    } finally {
      set_loading(false);
    }
  };

  return [fetching, is_loading, error];
};
