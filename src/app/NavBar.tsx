import { ChevronLeft } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="absolute left-4 top-4">
        <button
          className="dark:text-slate-200 flex flex-row text-slate-800"
          onClick={() => window.history.back()}
        >
          <ChevronLeft /> Back
        </button>
      </div>
      <ThemeSwitcher />
    </div>
  );
}
