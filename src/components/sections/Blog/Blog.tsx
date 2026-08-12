import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Blog.module.css';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    image: '/images/blog-1.png',
  },
  {
    id: 2,
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    image: '/images/blog-2.png',
  },
  {
    id: 3,
    title: 'Revamping the Membership Model with Triathlon Australia',
    image: '/images/blog-3.png',
  },
];

export const Blog: React.FC = () => {
  return (
    <section id="faq" className={styles.blogSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Caring is the new marketing</h2>
          <p className={styles.subtitle}>
            The Nextcent blog is the best place to read about the latest membership insights,
            trends and more. See who's joining the community, read about how our community are
            increasing their membership income and lot's more.​
          </p>
        </div>

        <div className={styles.grid}>
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className={styles.cardItem}>
              {/* Blog Image */}
              <div className={styles.imageWrapper}>
                <img src={post.image} alt={post.title} className={styles.cardImg} />
              </div>

              {/* Floating Card Overlay */}
              <div className={styles.overlayContent}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <a href="#read" className={styles.readMoreBtn}>
                  <span>Readmore</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
