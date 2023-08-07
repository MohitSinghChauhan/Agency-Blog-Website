'use client';
import LoadingSkeleton from '@/components/LoadingSkeleton/LoadingSkeleton';
// import { useEffect, useState } from 'react';
// import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
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

	const session = useSession();
	const router = useRouter();
	console.log(session);

	// const fetcher = (...args) => fetch(...args).then((res) => res.json());
	// const { data, error, isLoading } = useSWR(
	// 	'https://jsonplaceholder.typicode.com/posts/',
	// 	fetcher
	// );
	// if (data) console.log(data);

	// if (isLoading) return <p>Loading...</p>;

	if(session.status === 'loading') return <LoadingSkeleton />;
	if(session.status === 'unauthenticated') {
		router.push('/dashboard/login');
		return <LoadingSkeleton />;
	}

	return <div>Dashboard</div>;
};

export default Dashboard;
