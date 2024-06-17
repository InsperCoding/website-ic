
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Component() {
  return (
    <main className="bg-primary flex min-h-screen w-full items-center justify-center">
    <form className="rounded-lg flex w-1/3 w-max-md flex-col gap-4 bg-secondary p-10 ml-1/2">
      <div>
        <img src="/vercel.svg" alt="Vercel Logo" className="w-25 p-10 h-auto mx-auto" />
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button className="bg-primary" type="submit">Submit</Button>
    </form>
    </main>
  );
}
