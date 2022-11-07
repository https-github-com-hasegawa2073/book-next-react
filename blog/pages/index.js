import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
      </main>
      <Footer></Footer>
    </>
  );
}
