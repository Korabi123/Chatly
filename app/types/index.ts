import { Conversation, Message, User } from "@prisma/client";

export type FullMessageType = Message & {
  sender: User,
  seen: User[]
};

export type FullConversationType = Conversation & {
  //! If anything doesnt work try changing 'user' to users
  users: User[],
  messages: FullMessageType[],
};