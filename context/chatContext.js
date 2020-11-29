import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const [chats, setChats] = useState([
    {
      id: 1,
      key:'asq',
      with: 2,
      messages: [
        { id: 1, content: "Merhaba, nasılsın ?", from: 2 },
        { id: 2, content: "Teşekkür ederim. İyiyim sen nasılsın ?", from: 1 },
        { id: 3, content: "Teşekkür ederim. Bende iyiyim.", from: 2 },
      ],
    },
    {
      id: 2,
      key:'asw',
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 3,
      key:'ase',
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 4,
      key:'asd',
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 5,
      key:'asr',
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 6,
      key:'ast',
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 7,
      key:'asy',
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 8,
      key:'asu',
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 9,
      key:'aso',
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 10,
      key:'asp',
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 11,
      key:'asa',
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 12,
      key:'asg',
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamamm. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 13,
      key:'asf',
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
  ]);
  return (<ChatContext.Provider value={chats}>{children}</ChatContext.Provider>);
}
