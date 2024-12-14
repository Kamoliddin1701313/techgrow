import React from "react";
import { useParams } from "react-router-dom";

function NewsDetail() {
  const { id } = useParams();
  return <div>salom id {id}</div>;
}

export default NewsDetail;
