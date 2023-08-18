import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { FullConversationType } from "../types";
import { User } from "@prisma/client";

const useOtherUser = (conversation: FullConversationType | {
  //! IF ANYTHING DOESNT WORK TRY CHANGING THE 'user' TO users
  
  users: User[];
}) => {
  const session = useSession();

  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;

    //! IF ANYTHING DOESNT WORK TRY CHANGING 'user' TO users
    const otherUser = conversation.users.filter((user) => user.email !== currentUserEmail);

    return otherUser[0];
  }, [session?.data?.user?.email, conversation.users]);

  return otherUser;
};

export default useOtherUser