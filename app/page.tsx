import ThemeToggle from "@/app/components/ThemeToggle";

export default function Home() {
  return (
      <div className="prose dark:prose-dark mx-auto">
          <h1 className="text-red-500 dark:text-yellow-500">Welcome to Dark Mode in Next.js</h1>
          <ThemeToggle/>

          <h1 className="text-primary text-lg">
              text primary
          </h1>
          <p className="text-secondary">
              text secondary
          </p>
          <div className="xs:w-[100px] h-[100px] bg-[red] w-[20px]">

          </div>
      </div>
  );
}
