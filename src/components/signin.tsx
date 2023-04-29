import { useSession, signIn, signOut } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        Signed in as {session.user?.email} <br />
        {/*  eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      Not signed in <br />
      {/*  eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
