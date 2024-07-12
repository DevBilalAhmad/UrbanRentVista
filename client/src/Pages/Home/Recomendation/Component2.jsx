// import React from 'react';

// const Component2 = React.memo(({ query }) => {
//   const getRecommendations = (query) => {
//     // Simulating a recommendation system. Replace this with actual logic.
//     const recommendations = [
//       'apple',
//       'banana',
//       'orange',
//       'grape',
//       'pineapple'
//     ];
//     return recommendations.filter(item => item.includes(query.toLowerCase()));
//   };

//   const recommendations = getRecommendations(query);

//   return (
//     <div className="mt-4">
//       <h2 className="text-xl font-semibold">Query: {query}</h2>
//       <h3 className="text-lg font-medium mt-2">Recommendations:</h3>
//       <ul className="list-disc list-inside">
//         {recommendations.map((item, index) => (
//           <li key={index} className="text-gray-700">{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// });

// export default Component2;



import React, { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';

const ListPage = ({ query }) => {
  const data = useLoaderData();

  const filterPosts = (posts, query) => {
    if (!query) return posts;
    return posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
  };

  return (
    <div className="listPage">
      <div className="listContainer m-8">
        <div className="wrapper">
          <h2 className="text-xl font-semibold">Query: {query}</h2>
          {/* <Filter /> */}
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                filterPosts(postResponse.data, query).map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
