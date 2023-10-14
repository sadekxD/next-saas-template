import { Icons } from "./icons";

export default function Copyrights() {
  return (
    <div className=" py-6">
      <div className="container flex flex-wrap items-center justify-between">
        <p className="text-ghost">All right reserved. © 2023</p>
        <div className="flex items-center gap-4">
          <Icons.facebook width="24" height="24" />
          <Icons.twitter width="24" height="24" />
          <Icons.gitHub width="24" height="24" />
        </div>
      </div>
    </div>
  );
}
