import React from 'react';
import fakeData from './fakeData/courses';
import Main from './components/Main/Main';

function App() {
  const courses = fakeData;
  console.log(courses);
  return (
    <div className="container">
      <div className="row">
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
