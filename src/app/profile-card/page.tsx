'use client';

import Image from 'next/image';
import ProfilePic from '../assets/profile-pic.jpg';
import Waves from '../../../public/waves.svg';
import {
  SiGithub,
  SiInstagram,
  SiTwitch,
  SiX,
} from '@icons-pack/react-simple-icons';
import NavBar from '../NavBar';

export default function ProfileCard() {
  return (
    <div className="align-middle bg-slate-300 dark:bg-slate-900 flex flex-col items-center justify-center min-h-screen">
      <NavBar />
      <div className="bg-slate-100 dark:bg-slate-800 flex flex-col gap-4 h-[500px] rounded-3xl shadow-lg w-[350px]">
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
          <h1 className="dark:text-slate-200 font-[family-name:var(--font-geist-sans)] font-bold text-2xl text-slate-800">
            Johanna Doe
          </h1>
          <p className="dark:text-slate-200 font-[family-name:var(--font-geist-sans)] text-slate-800">
            Software Engineer
          </p>
          <p className="dark:text-slate-200 font-[family-name:var(--font-geist-sans)] text-slate-800 text-xs">
            @doeanna
          </p>
          <div className="align-baseline flex flex-row gap-2 justify-center">
            <SiTwitch className="dark:text-cyan-400 text-cyan-900" size={16} />
            <SiInstagram
              className="dark:text-cyan-400 text-cyan-900"
              size={16}
            />
            <SiGithub className="dark:text-cyan-400 text-cyan-900" size={16} />
            <SiX className="dark:text-cyan-400 text-cyan-900" size={16} />
          </div>
          <p className="dark:text-slate-200 flex font-[family-name:var(--font-geist-sans)] items-center p-3 text-center text-slate-800 text-sm text-wrap">
            Passionate software engineer with over 5 years of experience in
            full-stack development.
          </p>
        </div>
      </div>
    </div>
  );
}
