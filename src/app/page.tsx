'use client';
import ProfileCard from '@public/profile-card.svg';
import AddToCart from '@public/add-to-cart.svg';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';

export default function Home() {
  return (
    <section className="bg-slate-200 dark:bg-slate-900 min-h-screen">
      <ThemeSwitcher />
      <div className="gap-4 grid grid-cols-1 items-center justify-center lg:grid-cols-3 md:grid-cols-2 p-4">
        <div className="align-middle flex flex-col items-center justify-center p-3">
          <p className="dark:text-slate-200 font-[family-name:var(--font-geist-sans)] text-center text-slate-800">
            Day 01
          </p>
          <div className="flex group h-[300px] p-4 w-[300px]">
            <a href="/profile-card">
              <Image
                src={ProfileCard}
                alt="Profile Card"
                className="group-hover:shadow-2xl rounded-3xl"
              />
            </a>
          </div>
          <div className="flex items-center justify-center mt-14 p-4">
            <p className="dark:text-slate-200 flex font-[family-name:var(--font-geist-sans)] font-bold justify-center text-2xl text-center text-slate-800">
              Profile Card
            </p>
          </div>
        </div>
        <div className="align-middle flex flex-col items-center justify-center p-3">
          <p className="dark:text-slate-200 font-[family-name:var(--font-geist-sans)] text-center text-slate-800">
            Day 02
          </p>
          <div className="flex group h-[300px] p-4 w-[500px]">
            <a href="/add-to-cart">
              <Image
                src={AddToCart}
                alt="Add to Cart"
                className="group-hover:shadow-2xl rounded-3xl"
              />
            </a>
          </div>
          <div className="flex items-center justify-center mt-14 p-4">
            <p className="dark:text-slate-200 flex font-[family-name:var(--font-geist-sans)] font-bold justify-center text-2xl text-center text-slate-800">
              Add to Cart
            </p>
          </div>
        </div>
        {/* Add more elements here if needed */}
      </div>
    </section>
  );
}
