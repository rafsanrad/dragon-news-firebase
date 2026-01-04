import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
//   console.log(news);
  return (
    <div className="space-y-5">
      <img className="w-full h-87.5 object-cover" src={news.image_url} alt="" />
      <h2 className="text-2xl">{news.title}</h2>
      <p>{news.details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        <IoMdArrowRoundBack />
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
