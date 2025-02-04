'use client';

import Image from 'next/image';
import ThemeSwitcher from '../ThemeSwitcher';
import ProfilePic from '../assets/profile-pic.jpg';
import Waves from '../../../public/waves.svg';
import {
  SiGithub,
  SiInstagram,
  SiTwitch,
  SiX,
} from '@icons-pack/react-simple-icons';

export default function ProfileCard() {
  return (
    <div className="align-middle bg-neutral-400 flex flex-row items-center justify-center min-h-screen">
      <ThemeSwitcher />
      <div className="bg-slate-100 dark:bg-slate-900 flex flex-col gap-4 h-[500px] rounded-3xl shadow-lg w-[350px]">
        <div className="align-middle bg-cyan-800 flex flex-col h-[170px] items-center justify-center rounded-t-3xl w-full">
          <Image
            className="absolute h-32 rounded-full shadow-lg top-44 w-32 z-20"
            src={ProfilePic}
            width={300}
            height={300}
            alt="Profile Picture"
          />
        </div>
        <Image
          src={Waves}
          className="absolute overflow-hidden top-[260px] w-[350px] z-1"
          alt="Waves"
          objectFit="cover"
        />
        <div className="flex flex-col gap-2 items-center justify-center mt-7 p-6 top-[300px] z-10">
          <h1 className="font-[family-name:var(--font-geist-sans)] font-bold text-2xl text-slate-800">
            Johanna Doe
          </h1>
          <p className="font-[family-name:var(--font-geist-sans)] text-slate-800">
            Software Engineer
          </p>
          <p className="font-[family-name:var(--font-geist-sans)] text-slate-800 text-xs">
            @doeanna
          </p>
          <div className="align-baseline flex flex-row gap-2 justify-center">
            <SiTwitch className="text-cyan-900" size={16} />
            <SiInstagram className="text-cyan-900" size={16} />
            <SiGithub className="text-cyan-900" size={16} />
            <SiX className="text-cyan-900" size={16} />
          </div>
          <p className="flex font-[family-name:var(--font-geist-sans)] items-center p-3 text-center text-slate-800 text-sm text-wrap">
            Passionate software engineer with over 5 years of experience in
            full-stack development.
          </p>
        </div>
      </div>
    </div>
  );
}
