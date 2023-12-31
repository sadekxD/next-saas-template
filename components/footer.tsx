import { Icons } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container">
        <div className="grid gap-8 md:gap-0 md:grid-cols-5">
          <div className="col-span-2">
            <Icons.logo width="26" height="26" />
            <h1 className="text-xl font-bold mt-4">OptiFlow</h1>
            <div className="flex items-center gap-4 mt-4">
              <Icons.twitter width="24" height="24" />
              <Icons.gitHub width="24" height="24" />
            </div>
          </div>
          <div className="col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            <ul className="flex flex-col gap-2">
              <li className="font-medium text-ghost">Products</li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="font-medium text-ghost">Categories</li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="font-medium text-ghost">Company</li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="font-medium text-ghost">Info</li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
