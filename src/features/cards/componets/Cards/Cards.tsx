import React, { ChangeEvent } from "react";
import { useAddCardMutation, useGetCardsQuery } from "../../service/cards.api";
import { useParams } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import { ArgCreateCardType } from "../../service/cards.api.types";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Pagination } from "@mui/material";
import s from "./styles.module.css";

export const Cards = () => {
  let { packId } = useParams<{ packId: string }>();
  const { data, isLoading, error, refetch } = useGetCardsQuery(packId ?? "");
  const [addCard, { isLoading: Loading }] = useAddCardMutation();
  if (isLoading || Loading) return <LinearProgress color={"secondary"} />;
  if (error) {
    const err = error as any;
    return <h1>{err.data.info}</h1>;
  }
  const addCardHandler = () => {
    if (packId) {
      const newCard: ArgCreateCardType = {
        cardsPack_id: packId,
        question: "🐱 question " + nanoid(),
        answer: "🐙 answer " + nanoid(),
      };
      addCard(newCard)
        .unwrap()
        .then((res) => {
          const cardQuestion = res.newCard.question;
          toast.success(`Карточка ${cardQuestion} успешно добавлена`);
        })
        .catch((err) => {
          toast.error(err.data.error);
        });
    }
  };
  const changePageHandler = (event: ChangeEvent<unknown>, page: number) => {
    console.log("page: ", page);
  };
  return (
    <div>
      <button onClick={refetch}>получить свежие данные</button>
      <h1>Cards</h1>
      <button onClick={addCardHandler}>add card</button>
      <div>
        {data &&
          data.cards.map((card) => {
            return (
              <div className={s.container} key={card._id}>
                <div>
                  <b>Question: </b>
                  <p>{card.question}</p>{" "}
                </div>
                <div>
                  <b>Answer: </b>
                  <p>{card.answer}</p>{" "}
                </div>
              </div>
            );
          })}
      </div>
      <Pagination
        count={data && data.cardsTotalCount}
        onChange={changePageHandler}
      />
    </div>
  );
};
