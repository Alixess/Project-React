import React, { useContext } from "react";
import RowItem from "../../Components/RowItem/RowItem";
import { myContext } from "../../Context/MyContext";
import style from "./table.module.scss";

export default function Table() {
  const { setDataServer, dataServer } = useContext(myContext);
  const handleDelete = (id) => {
    setDataServer(dataServer.filter((item) => item.id !== id));
  };

  const handleEdit = (id, english, transcription, russian) => {
    setDataServer(
      dataServer.map((item) => {
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
      {dataServer.map((item) => (
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
