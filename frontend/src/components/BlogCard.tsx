import { Link } from "react-router-dom";

interface Blog {
  authorName: string
  title: string
  content: string
  id: number
}
function BlogCard({authorName, title, content, id}: Blog) {

  return (
    <div className="max-w-full mx-4 bg-white border border-gray-200 rounded-lg transition-shadow duration-300">
      <div className="mt-4 mx-4 flex items-center">
        <img
          src="https://via.placeholder.com/150"
          alt={`${authorName}'s avatar`}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div  className="ml-3">
          <p className="text-sm font-medium text-gray-700">{authorName}</p>
          <p className="text-sm text-gray-500">Dec 25, 2024</p>
        </div>
      </div>
      <Link  to={`/blogs/${id}`}>
      <div className="p-4">

      
        <h2 className="text-4xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer break-words">
          {title}
        </h2>
        <p className="mt-2 text-gray-600">
          {content.slice(0, 100) + "..."}
        </p>
        </div>
      </Link>
      <div className="text-sm text-gray-500 mx-4 my-2">
        {`${Math.ceil(content.length / 100)} Minutes read`}
      </div>
    </div>
  );
}

export default BlogCard;
