import FormLoguin from '@/components/loguin/FormLoguin';
import Logo from '@/components/loguin/Logo';

export default function Home() {
  return (
    <main className="flex h-full md:flex-row flex-col items-center w-full">
      <div className="flex flex-col justify-center items-center w-full md:w-1/5">
        <div>
          <Logo />
        </div>
        <h2 className="font-bold text-lg">Log in to your account</h2>
        <div>
          <FormLoguin />
        </div>
      </div>
      <div className="md:flex hidden w-4/5 bg-black h-full"> Banner screen</div>
    </main>
  );
}
