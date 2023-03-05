import Nav from "../nav/Nav";
import Main from "../main/Main";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
