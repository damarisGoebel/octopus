import Header from "../components/Header/header";
import Product from "./product";

export default function Home() {
  return (
    <main>
      <div className="home">
        <Header />
        <Product />
      </div>
    </main>
  );
}
