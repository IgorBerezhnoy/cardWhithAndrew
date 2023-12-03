import React from "react";
import { useGetCardsQuery } from "../../service/cards.api";
import { useParams } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

export const Cards = () => {
  let { packId } = useParams<{ packId: string }>();

  const { data, isLoading, error } = useGetCardsQuery(packId ?? "");
  if (isLoading) return <LinearProgress color={"secondary"} />;
  if (error) {
    const err = error as any;
    return <h1>{err.data.info}</h1>;
  }
  console.log(data);
  return (
    <div>
      <h1>Cards</h1>
      <div>
        {data?.cards.map((el) => (
          <div key={el._id}>
            <div>{el.question}</div>
            <div>{el.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
