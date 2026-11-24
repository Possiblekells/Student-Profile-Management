
import StudentCard from "./StudentCard";

function StudentList({ students, onViewProfile }) {
  return (
    <section>
      <h2>Our Students</h2>

      <div className="student-list" id="students">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onViewProfile={onViewProfile}
          />
        ))}
      </div>
    </section>
  );
}

export default StudentList;
