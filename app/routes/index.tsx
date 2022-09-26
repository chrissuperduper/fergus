import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    window.location.href = "/jobs";
  }, []);

  return <div>Loading...</div>;
}
