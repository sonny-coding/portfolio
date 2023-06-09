import connectDB from "@/mongoose/connectDB";
import Blog from "@/mongoose/models/Blog";

const handler = async (req, res) => {
  const {
    method,
    query: { query },
  } = req;

  const errorMessage = "Error has occured";

  try {
    await connectDB();
    if (method !== "GET") return res.status(400).json({ errorMessage });

    const agg = [
      {
        $search: {
          autocomplete: {
            query,
            path: "title",
            fuzzy: {
              maxEdits: 2,
              prefixLength: 1,
              maxExpansions: 256,
            },
          },
        },
      },
      {
        $limit: 20,
      },
      {
        $project: {
          //   _id: 0,
          banner: 0,
          content: 0,
          altText: 0,
          customID: 0,
        },
      },
    ];

    const blogs = await Blog.aggregate(agg);
    // const blogs = results.map((blog) => {
    //   const blogObject = blog.toObject();
    //   blogObject.createdAt = blogObject.createdAt.toDateString();
    //   return blogObject;
    // });

    /* 
      const recentBlogs = recentBlogsResult.map((blog) => {
    const blogObject = blog.toObject();
    blogObject.createdAt = blogObject.createdAt.toDateString();
    return blogObject;
  });
     */

    return res.send(blogs);
  } catch (_) {
    return res.status(400).send({ errorMessage });
  }
};

export default handler;
