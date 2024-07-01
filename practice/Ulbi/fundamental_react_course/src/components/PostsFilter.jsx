import React from "react";
import CustomInput from "./UI/input/CustomInput";
import CustomSelect from "./UI/select/CustomSelect";

export default function PostFilter({ filter_posts, set_filter_posts, ...props }) {
  return (
    <div>
      <CustomInput
        placeholder="поиск"
        type="text"
        value={filter_posts.search_value}
        onChange={(event) =>
          set_filter_posts({
            ...filter_posts,
            search_value: event.target.value,
          })
        }
      ></CustomInput>

      <CustomSelect
        value={filter_posts.post_order}
        onChange={(search_value) =>
          set_filter_posts({ ...filter_posts, post_order: search_value })
        }
        default_value={"Сортировка по"}
        options={[
          { value: "title", name: "Сортировать по названию" },
          { value: "body", name: "Сортировать по описанию" },
        ]}
      ></CustomSelect>
    </div>
  );
}
