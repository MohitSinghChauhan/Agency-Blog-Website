'use client';
import LoadingSkeleton from '@/components/LoadingSkeleton/LoadingSkeleton';
// import { useEffect, useState } from 'react';
import useSWR from 'swr';
import styles from './page.module.css';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Dashboard = () => {
	//* Old way of fetching data
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

	//NEW WAY TO FETCH DATA
	const fetcher = (...args) => fetch(...args).then((res) => res.json());

	const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const title = e.target[0].value;
		const desc = e.target[1].value;
		const img = e.target[2].value;
		const content = e.target[3].value;

		try {
			await fetch('/api/posts', {
				method: 'POST',
				body: JSON.stringify({
					title,
					desc,
					img,
					content,
					username: session.data.user.name,
				}),
			});
			mutate();
			e.target.reset();
		} catch (err) {
			console.log(err);
		}
	};

	const handleDelete = async (id) => {
		try {
			await fetch(`/api/posts/${id}`, {
				method: 'DELETE',
			});
			mutate();
		} catch (err) {
			console.log(err);
		}
	};

	if (session.status === 'loading') return <LoadingSkeleton />;
	if (session.status === 'unauthenticated') {
		router.push('/dashboard/login');
		return <LoadingSkeleton />;
	}

	if (session.status === 'authenticated')
		return (
			<div className={styles.container}>
				<div className={styles.posts}>
					{isLoading
						? 'loading'
						: data?.map((post) => (
								<div className={styles.post} key={post._id}>
									<div className={styles.imgContainer}>
										<Image src={post.img} alt='' width={200} height={100} />
									</div>
									<h2 className={styles.postTitle}>{post.title}</h2>
									<span className={styles.delete} onClick={() => handleDelete(post._id)}>
										X
									</span>
								</div>
						  ))}
				</div>
				<form className={styles.new} onSubmit={handleSubmit}>
					<h1>Add New Post</h1>
					<input type='text' placeholder='Title' className={styles.input} />
					<input type='text' placeholder='Desc' className={styles.input} />
					<input type='text' placeholder='Image' className={styles.input} />
					<textarea placeholder='Content' className={styles.textArea} cols='30' rows='10'></textarea>
					<button className={styles.button}>Send</button>
				</form>
			</div>
		);
};

export default Dashboard;
