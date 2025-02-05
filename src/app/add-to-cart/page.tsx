'use client';

import NavBar from '@/app/NavBar';
import Image from 'next/image';
import RedMain from '@/app/assets/red main.jpg';
import RedVariation01 from '@/app/assets/red variation - 01.jpg';
import RedVariation02 from '@/app/assets/red variation - 02.jpg';
import BlackMain from '@/app/assets/black main.jpg';
import BlackVariation02 from '@/app/assets/black variation - 01.jpg';
import BlackVariation01 from '@/app/assets/black-variation-02.jpg';
import { useState } from 'react';

export default function AddToCart() {
  const redVariationPhotos = [
    {
      id: 1,
      src: RedVariation01,
      alt: 'Red Variation 01',
    },
    {
      id: 2,
      src: RedVariation02,
      alt: 'Red Variation 02',
    },
  ];

  const blackVariationPhotos = [
    {
      id: 1,
      src: BlackVariation01,
      alt: 'Black Variation 01',
    },
    {
      id: 2,
      src: BlackVariation02,
      alt: 'Black Variation 02',
    },
  ];

  const [selectedVariation, setSelectedVariation] = useState('red');
  const [mainPhoto, setMainPhoto] = useState(RedMain);

  const variationPhotos =
    selectedVariation === 'red' ? redVariationPhotos : blackVariationPhotos;

  const handlePhotoClick = (photoSrc) => {
    setMainPhoto(photoSrc);
  };

  return (
    <div className="align-middle bg-slate-300 dark:bg-slate-900 flex flex-col items-center justify-center min-h-screen">
      <NavBar />
      <div className="bg-slate-100 dark:bg-slate-800 flex flex-col gap-4 rounded-3xl shadow-lg w-[820px]">
        <div className="flex flex-row gap-3 items-center justify-center p-6">
          <div className="flex flex-col gap-3">
            {variationPhotos.map((photo) => (
              <div
                key={photo.id}
                className="cursor-pointer flex h-[80px] w-[80px]"
                onClick={() => handlePhotoClick(photo.src)}
              >
                <Image
                  className="rounded-xl shadow-lg"
                  src={photo.src}
                  alt={photo.alt}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-start justify-start">
            <div className="flex h-[300px] w-[300px]">
              <Image
                className="rounded-xl shadow-lg"
                src={mainPhoto}
                alt="Main"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start ml-3">
            <h1 className="dark:text-[#E50E51] font-[family-name:var(--font-geist-sans)] font-bold text-2xl text-[#5F021F] uppercase">
              Gucci
            </h1>
            <h2 className="dark:text-slate-300 font-[family-name:var(--font-geist-sans)] font-bold text-slate-700 uppercase">
              Gucci Jackie 1961 small shoulder bag
            </h2>
            <p className="dark:text-slate-200 font-[family-name:var(--font-geist-sans)] text-slate-800 text-sm">
              The Gucci Jackie 1961 is crafted from fine leather which
              highlights its craftsmanship, crescent shape, and sleek
              silhouette. This small size comes with a leather strap and
              additional green and red Web strap for different styling options.
            </p>
            <p className="dark:text-slate-200 font-[family-name:var(--font-geist-sans)] font-bold text-lg text-slate-800">
              $12,300
            </p>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <p className="dark:text-slate-200 font-[family-name:var(--font-geist-sans)] text-slate-800 text-sm">
                Variations:
              </p>
              <div className="flex flex-row gap-2 justify-start">
                <button
                  name="red"
                  onClick={() => {
                    setSelectedVariation('red');
                    setMainPhoto(RedMain);
                  }}
                  className={`${
                    selectedVariation === 'red'
                      ? 'border border-slate-400 shadow-lg'
                      : ''
                  } dark:text-slate-200 font-[family-name:var(--font-geist-sans)] font-bold p-2 rounded-lg text-slate-800`}
                >
                  Red Leather
                </button>
                <button
                  name="black"
                  onClick={() => {
                    setSelectedVariation('black');
                    setMainPhoto(BlackMain);
                  }}
                  className={`${
                    selectedVariation === 'black'
                      ? 'border border-slate-400 shadow-lg'
                      : ''
                  } dark:text-slate-200 font-[family-name:var(--font-geist-sans)] font-bold p-2 rounded-lg  text-slate-800`}
                >
                  Black Leather
                </button>
              </div>
              <div className="flex mt-3 w-full">
                <button className="bg-cyan-700 dark:bg-cyan-500 dark:text-slate-950 flex font-[family-name:var(--font-geist-sans)] font-bold justify-center p-2 rounded-lg text-slate-100 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
