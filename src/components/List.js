import React from 'react';

const List = ({ items }) => {
  const list = items.map((item) => {
    return (
      <div
        onClick={item.onChange}
        key={item.id}
        className="p-3 mb-4 bg-blue-900 text-white rounded-md cursor-pointer hover:bg-blue-800"
      >
        {item.content}
      </div>
    );
  });

  return <div>{list}</div>;
};

export default List;
