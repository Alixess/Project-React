import React from "react";
import RowItem from "../../Components/RowItem/RowItem";
import style from "./table.module.scss";

export default function Table({ data, setData }) {
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id, english, transcription, russian) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          item.english = english;
          item.transcription = transcription;
          item.russian = russian;
        }
        return item;
      })
    );
  };

  return (
    <div className={style.container}>
      {data.map((item) => (
        <RowItem
          {...item}
          key={item.id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}
