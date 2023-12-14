import React from "react";

import Header from "./Header";
import Content from "./Content";

function Course(props) {
  const courseArr = props.course;

  return (
    <>
      {courseArr.map((course) => (
       <div key={course.id}> 
          <Header header={course.name} />
          
            <ul>
            {course.parts.map((part) => {
              return <Content key={part.id} part={part} />;
            })}
          </ul>
          total of {course.parts.reduce((p, obj) => {return p + obj.exercises}, 0)} exercises
        </div>
      ))}
    </>
  );
}

export default Course;
