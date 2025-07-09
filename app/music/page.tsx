import BackLink from "../components/BackLink";
import Image from "next/image";
import archiveData from "content/music.json";

type ArchiveItem = {
  type: string;
  src: string;
  caption?: string;
  link?: string;
};

export const metadata = {
  title: "Music",
  description: "A collection of music by Isaia Huron",
};

export default function Music() {
  return (
    <div className="bg-white text-black min-h-screen p-6">
      <BackLink />
      <h1 className="mb-8 text-2xl font-medium text-center">MUSIC</h1>
      <div className="max-w-3xl mx-auto space-y-10">
        {(archiveData as ArchiveItem[]).map((item, index) => (
          <div key={index} className="w-full space-y-2">
            {item.type === "image" ? (
              <div className="relative group w-full">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.src}
                      alt={item.caption || "Archive image"}
                      width={1200}
                      height={800}
                      style={{ width: "100%", height: "auto" }}
                      className="block w-full h-auto"
                    />
                    {item.caption && (
                      <span className="absolute uppercase inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-lg font-medium px-4 text-center">
                        {item.caption}
                      </span>
                    )}
                  </a>
                ) : (
                  <>
                    <Image
                      src={item.src}
                      alt={item.caption || "Archive image"}
                      width={1200}
                      height={800}
                      style={{ width: "100%", height: "auto" }}
                      className="block w-full h-auto"
                    />
                    {item.caption && (
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-lg font-medium px-4 text-center">
                        {item.caption}
                      </span>
                    )}
                  </>
                )}
              </div>
            ) : (
              <div className="aspect-video">
                <iframe
                  src={item.src}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function BlogPosts() {
//   let allBlogs = getBlogPosts();

//   return (
//     <section>
//       <h1 className="mb-8 text-2xl font-medium">archive</h1>
//       <div>
//         {allBlogs
//           .sort((a, b) => {
//             if (
//               new Date(a.metadata.publishedAt) >
//               new Date(b.metadata.publishedAt)
//             ) {
//               return -1;
//             }
//             return 1;
//           })
//           .map((post) => (
//             <Link
//               key={post.slug}
//               className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
//               href={`/blog/${post.slug}`}
//             >
//               <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
//                 <h2 className="text-black dark:text-white">
//                   {post.metadata.title}
//                 </h2>
//                 <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
//                   {formatDate(post.metadata.publishedAt, false)}
//                 </p>
//               </div>
//             </Link>
//           ))}
//       </div>
//     </section>
//   );
// }
