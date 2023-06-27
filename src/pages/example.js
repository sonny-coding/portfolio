import { useEffect, useState } from "react";

const MyComponent = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("url");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // display data
  return <div>{data}</div>;
};
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Profile() {
  const { data, error } = useSWR("/api/profile-data", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
}

export default MyComponent;
