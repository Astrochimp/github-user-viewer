import { Link } from "react-router-dom";

export function NotFound() {

  return (
    <div className="flex flex-row">
      <div className="text-3xl text-slate-100 justify-center p-20">
        No user selected
        <p className="py-10">
          <Link to="/">Go back</Link>
        </p>
      </div>
    </div>
  );
}
