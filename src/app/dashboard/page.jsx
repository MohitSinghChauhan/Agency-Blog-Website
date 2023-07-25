'use client';
import { useEffect, useState } from 'react';

const Dashboard = () => {
	const [data, setData] = useState([]);
	const [err, setErr] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    const getBlogData = async function getBlogData() {
      setIsLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
        next: { revalidate: 10 },
      });
    
      if (!res.ok) {
        return notFound();
      }
    
      const data = await res.json();
      setData(data);
    }
    getBlogData();
    setIsLoading(false);
  },[])

	return <div>Dashboard</div>;
};

export default Dashboard;
