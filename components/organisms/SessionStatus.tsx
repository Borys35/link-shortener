import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  when: "authenticated" | "unauthenticated";
  replacePath: string;
}

const SessionStatus: FC<Props> = ({ children, when, replacePath }) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && status !== when) router.replace(replacePath);
  }, [status, router, when, replacePath]);

  return <>{status === when && children}</>;
};

export default SessionStatus;
