"use client";
import { Banner } from "./Banner";
import { TransitionPage } from "./TransitionPage";
import { Highlights } from "./Highlights";
import { BannerCategory } from "./BannerCategory";
import { BannerPlans } from "./Plans";
import { Brands } from "./Brands";

export default function Home() {
  return (
    <>
      <TransitionPage />
      <main className="">
        <Banner />
        <Highlights />
        <BannerCategory />
        <BannerPlans />
        <Brands />
      </main>
  </>
  );
}
