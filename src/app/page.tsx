import Menu from "./menu";
import Footer from "./footer";

interface SectionProps {
  className?: string;
}

function Section({ children, className }: React.PropsWithChildren<SectionProps>) {
  return <div className={`${className} flex flex-col items-center justify-center w-full p-10`}>{children}</div>;
}
export default function Home() {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-20">
        <Section className="!pt-0">
          <h1 className="text-4xl mt-0 font-bold text-center text-primary">
            Welcome to Flowbite React
          </h1>
          <p className="text-lg text-customgray text-center mt-4">
            The ultimate Tailwind CSS component library
          </p>
        </Section>

        <Section>
          <img src="https://i.pinimg.com/236x/4f/36/e4/4f36e4a42acb26ef8be5f59e0b61625f.jpg" className="w-full h-auto" alt="Flowbite React" />
        </Section>
        <Section>
          <h1 className="text-4xl mt-0 font-bold text-center text-primary">
            Welcome to Flowbite React
          </h1>
          <p className="text-lg text-center mt-4">
            The ultimate Tailwind CSS component library
          </p>
        </Section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
