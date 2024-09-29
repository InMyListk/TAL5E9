import { Header } from "./header";

type Props = {
  children: React.ReactNode;
};

const Marketinglayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center">
        {children}
      </main>
    </div>
  );
};

export default Marketinglayout;
