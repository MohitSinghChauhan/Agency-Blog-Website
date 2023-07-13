import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = async ({ params }) => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, explicabo laudantium quasi cupiditate atque expedita dolores qui, at provident deleniti nesciunt amet perspiciatis numquam modi perferendis fuga distinctio reprehenderit mollitia nam inventore! Nihil facere eligendi voluptatum praesentium, magnam dolorem illo.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic rerum adipisci harum quae, accusantium praesentium consequuntur reprehenderit, sit accusamus ullam! Maiores nostrum illum earum dicta repellat doloremque, minima harum quia qui iste dolorem fugiat, explicabo et velit dignissimos eum? Explicabo sapiente nulla temporibus eligendi minus quis nihil, culpa hic neque minima quam, vel corporis voluptatibus enim. Praesentium suscipit architecto commodi magnam ratione natus laudantium? Non fugiat facilis asperiores quaerat eius fuga sequi? Aliquam, in quis, voluptas eos dicta repellendus vitae hic consectetur quidem alias rerum sit cum cupiditate quo quasi dolorum? Excepturi architecto aliquid mollitia et optio exercitationem error rem earum sit facere, molestiae blanditiis. Ullam corporis eligendi culpa enim unde itaque repellat est ipsum cupiditate voluptatum praesentium voluptas, sapiente voluptatem perferendis excepturi quaerat cumque aliquam libero veniam amet, sit nesciunt sint rerum dignissimos? Distinctio, ipsum. Ullam ea excepturi fugit eius expedita repellat repellendus assumenda, sed illo harum nam eaque odit commodi amet velit quisquam accusantium? Optio rerum nemo, expedita, magni ut sit, ducimus velit voluptatibus maiores cumque corporis illo excepturi? Numquam, repellat reprehenderit. Omnis accusamus praesentium assumenda, voluptas ab, doloribus velit quibusdam odio nostrum itaque quo, suscipit recusandae? Dignissimos quisquam harum expedita quam dolore debitis, ex doloribus rerum!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;