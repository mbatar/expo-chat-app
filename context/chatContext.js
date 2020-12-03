import React, { createContext, useState } from "react";
import * as Random from 'expo-random';

export const ChatContext = createContext();

export default function ChatContextProvider({ children }) {
  const [manageMessageShown, setManageMessageShown] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const customResponses = [
    "Bu gün ne oldu biliyor musun ?",
    "Çok mutluyummmmmmmm.....",
    "Yarın bi işimiz var bilgin olsun.",
    "Nerede kaldın ya ?",
    "Tamam habeleşiriz",
    "Cevap verecek misin ?",
  ];
  const [chats, setChats] = useState([
    {
      id: 1,
      key: "asq",
      with: 2,
      messages: [
        { id: 1, content: "Merhaba, nasılsın ?", from: 2 },
        { id: 2, content: "Teşekkür ederim. İyiyim sen nasılsın ?", from: 1 },
        { id: 3, content: "Teşekkür ederim. Bende iyiyim.", from: 2 },
      ],
    },
    {
      id: 2,
      key: "asw",
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 3,
      key: "ase",
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 4,
      key: "asd",
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 5,
      key: "asr",
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 6,
      key: "ast",
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 7,
      key: "asy",
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 8,
      key: "asu",
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 9,
      key: "aso",
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 10,
      key: "asp",
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 11,
      key: "asa",
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 12,
      key: "asg",
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamamm. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
    {
      id: 13,
      key: "asf",
      with: 3,
      messages: [
        { id: 1, content: "İşe gidiyorum.", from: 3 },
        { id: 2, content: "Tamam. Dikkat et.", from: 1 },
        { id: 3, content: "Ederim.", from: 3 },
      ],
    },
  ]);

  const getMessagesByChatId = (chatId) => {
    return chats.filter((chat) => chat.id == chatId)[0].messages.reverse();
  };
  const _setManageMessageShown = (isShown, message) => {
    setManageMessageShown(isShown);
    setSelectedMessage(message);
  };
  const createMessage = (chatId, message) => {
    setChats((chats) => {
      return chats.map((chat) => {
        if (chat.id === chatId) {
          return {
            ...chat,
            messages: [
              ...chat.messages,
              { id: Random.getRandomBytes(1024), content: message, from: 1 },
            ],
          };
        } else {
          return chat;
        }
      });
    });
    setTimeout(() => {
      setChats((chats) => {
        return chats.map((chat) => {
          if (chat.id === chatId) {
            return {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  id: chat.messages.length + 1,
                  content:
                    customResponses[
                      Math.floor(Math.random() * (customResponses.length - 1))
                    ],
                  from: 2,
                },
              ],
            };
          } else {
            return chat;
          }
        });
      });
    }, 1000);
  };
  const deleteMessage = () => {
    setChats(
      chats.map((chat) => {
        if (chat.id === selectedMessage.parentId) {
          return {
            ...chat,
            messages: chat.messages.filter(
              (message) => message.id !== selectedMessage.messageId
            ),
          };
        } else {
          return chat;
        }
      })
    );
    setManageMessageShown(false);
    setSelectedMessage(null);
  };
  return (
    <ChatContext.Provider
      value={{
        chats,
        manageMessageShown,
        _setManageMessageShown,
        deleteMessage,
        createMessage,
        getMessagesByChatId,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
