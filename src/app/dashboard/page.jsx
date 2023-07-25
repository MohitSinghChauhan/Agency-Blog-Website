'use client';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const Dashboard = () => {
	// const [data, setData] = useState([]);
	// const [err, setErr] = useState(false);
	// const [isLoading, setIsLoading] = useState(false);

	// useEffect(()=>{
	//   const getBlogData = async function getBlogData() {
	//     setIsLoading(true);
	//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
	//       next: { revalidate: 10 },
	//     });

	//     if (!res.ok) {
	//       return notFound();
	//     }

	//     const data = await res.json();
	//     setData(data);
	//   }
	//   getBlogData();
	//   setIsLoading(false);
	// },[])

	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, error, isLoading } = useSWR(
		'https://jsonplaceholder.typicode.com/posts/',
		fetcher
	);
	if (data) console.log(data);

	if (isLoading) return <p>Loading...</p>;

	return <div>Dashboard</div>;
};

export default Dashboard;
