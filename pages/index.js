import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin");
  }, []);

  return <div>heello</div>;
};

export default Home;
