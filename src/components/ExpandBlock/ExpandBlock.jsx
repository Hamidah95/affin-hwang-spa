import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForever";
import useCollapse from "react-collapsed";
import "./expandBlock.css";

export default function ExpandBlock(props) {
  const { title, onClickDelete, children } = props;
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <div className="block">
      <button className="btn toggle" {...getToggleProps()}>
        <span>{title}</span>
        <DeleteForeverOutlinedIcon
          onClick={onClickDelete}
          aria-hidden="true"
        ></DeleteForeverOutlinedIcon>
      </button>
      <section {...getCollapseProps()}>{children}</section>
    </div>
  );
}
