import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/blog";
import { Icon } from "@/components";

export function Blogs() {
  const posts = getBlogPosts();
  return (
    <section className="py-10 border-t border-border container-main mx-auto">
      <div className="grid grid-cols-1 justify-self-center md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white flex flex-col max-w-[590px]">
            {post.thumbnail && (
               <Link href={`/resources/blog/${post.slug}`} className="block relative w-full mb-4">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={590}
                  height={300}
                  className="object-cover mx-auto h-[300px] w-full"
                />
                <div className="absolute left-0 bottom-0 flex items-start justify-between p-5 border-t border-white/30 bg-[rgba(227,227,227,0.30)] backdrop-blur-md w-full">
                  <div className="flex flex-col items-start">
                    <span className="leading-5 font-semibold text-sm text-white">{post.authors?.join(', ')}</span>
                    <span className="leading-5 font-normal text-sm text-white">{post.date}</span>
                  </div>
                  <span className="leading-5 font-semibold text-sm text-white">{post.tag}</span>
                </div>
              </Link>
            )}

            <h2 className="text-lg font-semibold leading-7">
              <Link href={`/resources/blog/${post.slug}`} className="hover:underline">
                  {post.title}
              </Link>
            </h2>
            <p className="text-text-tertiary-600 text-base font-normal leading-6 line-clamp-3 mb-5 grow">
                {post.excerpt || "Click to read more..."}
            </p>
            <Link 
              href={`/resources/blog/${post.slug}`}
              className="text-base font-semibold leading-6 text-black flex items-center gap-2 hover:underline"
              >
              Read Post
              <Icon name="arrow-up-right" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}