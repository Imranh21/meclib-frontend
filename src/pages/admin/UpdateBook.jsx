import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "../../axios/axios";

const UpdateBook = () => {
  const bookid = useParams();

  const getABook = async () => {
    const {
      data: { data },
    } = await Axios.get(`/book/${bookid.id}`);

    console.log(data);
  };
  useEffect(() => {
    getABook();
  }, []);
  return <div>UpdateBook</div>;
};

export default UpdateBook;
