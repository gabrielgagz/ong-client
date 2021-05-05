import React from 'react';
import { Redirect, useHistory } from 'react-router';
import './NewsCard.css';

const NewsCard = ({ title, image, id }) => {
  const history = useHistory();
  const viewMore = () => {
    console.log('click');
    history.push(`/news/${id}`);
  };

  return (
    <div className="news-item" onClick={viewMore}>
      <div className="news-img">
        <img src={image} />
      </div>
      <span className="news-title">{title}</span>
    </div>
  );
};

export default NewsCard;
