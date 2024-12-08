import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="text-4xl text-center justify-center">
          <h2>Facing A Problem?</h2>
          <h1>Its aleady <span>SOLVED</span></h1>
        </div>


        <ol className="px-12 list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Select your Problem
          </li>
          <li>Get The Solutions.</li>
        </ol>
        
        <div className="flex gap-4 items-center flex-col sm:flex-row px-10">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://programming-vikrant.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            Choose Your Problem
          </a>
          
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://programming-vikrant.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Documentation
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://programming-vikrant.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Example Use
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://programming-vikrant.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Contact Us →
        </a>
      </footer>
    </div>
  );
}
