import React from 'react';

interface Course {
  id: number;
  name: string;
}

const courses: Course[] = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'ReactJS' },
];

const ListCourse: React.FC = () => {
  return (
    <div className="course-list">
      <h1>Danh sách khóa học</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.id}. {course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListCourse;
