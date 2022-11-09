import Container from "components/container";
import Footer from "components/footer";
import Header from "components/header";
import Hero from "components/hero";
import Layout from "components/layout";
import Meta from "components/meta";

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  );
}
