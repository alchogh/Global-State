import { useState } from "react";
import Context from "../context/Context";
import Redux from "../redux/Redux";
import UserReducer from "../useReducer/UseReducer";
import * as S from "./Main.style";

interface Tab {
  id: number;
  title: string;
}

function Main() {
  const [currentTab, setCurrentTab] = useState("useReducer");

  return (
    <S.Container>
      <S.Header>
        {TAB_ARR.map((list: Tab) => {
          return (
            <S.Title
              key={list.id}
              onClick={() => {
                setCurrentTab(list.title);
              }}
              isSelected={currentTab === list.title}
            >
              {list.title}
            </S.Title>
          );
        })}
      </S.Header>
      <S.Content>{COMPONENTS[currentTab]}</S.Content>
    </S.Container>
  );
}

export default Main;

const TAB_ARR: Tab[] = [
  { id: 1, title: "useReducer" },
  { id: 2, title: "context" },
  { id: 3, title: "redux" },
];

const COMPONENTS: Record<string, JSX.Element> = {
  useReducer: <UserReducer />,
  context: <Context />,
  redux: <Redux />,
};
