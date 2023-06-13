import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="my-12 px-6 mx-auto min-h-[100vh]">
      <p
        className="text-3xl text-center dark:text-white"
      >
        Hello and Welcome 👋&nbsp;
        <span
          className="whitespace-nowrap"
        >
          I'm <span className="font-bold">Jerry</span>.
        </span>
      </p>
      <Posts />
    </main>
  )
} 
