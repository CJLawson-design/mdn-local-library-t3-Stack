import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
     <Head>
       <title> HOME | LOCAL LIBRARY</title>
       <meta
        name="description"
        content="Rubilding MDN local library with T3-Stack"
       />
     </Head>
    </>
  );
};

export default Home;
