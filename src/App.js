import React from 'react';
import fakeData from './fakeData/courses';
import Main from './components/Main/Main';
import { useState } from 'react';

function App() {
  const [courses, setCourses] = useState(fakeData);

  return (
    <div className="container">
      <div className="row">
        {
          courses.map(course => 
          <div className="col-md-4">
            <Main course={course}></Main>
          </div>)
        }
      </div>
    </div>
  );
}

export default App;
