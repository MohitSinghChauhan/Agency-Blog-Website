'use client';
import LoadingSkeleton from '@/components/LoadingSkeleton/LoadingSkeleton';
import { useEffect, useState } from 'react';
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

	// State to track which images had loadrrors
	const [errorImages, setErrorImages] = useState([]);
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

		// Validation checks
		if (!title || !desc || !content) {
			alert('Title, Description, Image URL and Content are required.');
			return;
		}

		if (!isValidURL(img)) {
			alert('Image URL is not valid.');
			return;
		}

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

	// Function to check if a string is a valid URL
	function isValidURL(url) {
		const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
		return pattern.test(url);
	}

	if (session.status === 'loading') return <LoadingSkeleton />;
	if (session.status === 'unauthenticated') {
		router.push('/dashboard/login');
		return <LoadingSkeleton />;
	}

	// Function to handle image load errors for a specific post
	const handleImageError = (postId) => {
		// Update the state to indicate that an error occurred for this post's image
		setErrorImage(postId);
	};

	// Function to handle image load errors
	// Function to mark a specific post's image as having an error
	const setErrorImage = (postId) => {
		setErrorImages((prevErrorImages) => [...prevErrorImages, postId]);
	};

	if (session.status === 'authenticated')
		return (
			<div className={styles.container}>
				<div className={styles.posts}>
					{isLoading
						? 'loading'
						: data?.map((post) => (
								<div className={styles.post} key={post._id}>
									<a href={`/blog/${post._id}`}>
										<div className={styles.imgContainer}>
											{(!errorImages.includes(post._id) && (
												<Image
													src={post.img}
													alt=''
													width={200}
													height={100}
													onError={() => handleImageError(post._id)}
												/>
											)) || (
												<Image
													src='https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png'
													alt=''
													width={200}
													height={100}
												/>
											)}
										</div>
										<h2 className={styles.postTitle}>{post.title}</h2>
									</a>
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
