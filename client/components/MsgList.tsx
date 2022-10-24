import React, { FC } from "react";
import styled from "styled-components";
import MsgItem from "./MsgItem";
type Props = {};

const UserIds = ["roy", "jay"];
const getRandomUserId = () => UserIds[Math.round(Math.random())];
const msgs = Array(50)
  .fill(0)
  .map((_, index) => ({
    id: index + 1,
    userId: getRandomUserId(),
    timestamp: 123456789123 + index * 1000 * 60,
    text: `${index + 1} mock text`,
  }))
  .reverse();

const MsgList: FC<Props> = (props: Props): JSX.Element => {
  const {} = props;
  return (
    <Messages>
      {msgs.map((item) => (
        <MsgItem key={item.id} {...item} />
      ))}
    </Messages>
  );
};
export default MsgList;
const Messages = styled.ul``;
