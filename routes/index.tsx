import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import BeepBoop from "../islands/BeepBoop.tsx";
import Themer from "../islands/Themer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <meta class="themer" name="theme-color" content="pink" />
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          TODO: create portfolio
        </p>
        <Counter start={3} />
        <BeepBoop/>
        <Themer/>
      </div>
    </>
  );
}
