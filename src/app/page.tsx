"use client";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { TransitionPage } from "../components/TransitionPage";
import { Highlights } from "../components/Highlights";
import { BannerCategory } from "../components/BannerCategory";
import { BannerPlans } from "../components/Plans";

export default function Home() {
  return (
    <>
      <Header />
      <TransitionPage />
      <main className="">
        <Banner />
        <Highlights />
        <BannerCategory />
        <BannerPlans />
      </main>
      <Footer />
  </>
  );
}
