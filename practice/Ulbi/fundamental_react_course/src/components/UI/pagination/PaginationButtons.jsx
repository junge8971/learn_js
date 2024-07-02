import React from "react";
import CustomButton from "../button/CustomButton";
import classes from "./PaginationButtons.module.css";

export default function PaginationButtons({
  array_of_pages_numbers,
  set_page,
  current_page,
  ...props
}) {
  return (
    <div className={classes.pagination_wrapper}>
      {array_of_pages_numbers.map((page_number) => {
        return (
          <CustomButton
            key={page_number}
            onClick={() => {
              set_page(page_number);
            }}
            className={current_page === page_number ? classes.current_button : ""}
          >
            {page_number}
          </CustomButton>
        );
      })}
    </div>
  );
}
