
function StudentCard({ student, onViewProfile }) {

  const {
    name,
    email,
    department,
    level,
    image,
    status
  } = student;

  return (
    <div className="student-card">

      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>{email}</p>

      <p>Department: {department}</p>

      <p>Level: {level}</p>

      {/* Conditional rendering */}
      <span className={`status ${status.toLowerCase()}`}>
        {status}
      </span>

      <button onClick={() => onViewProfile(name)}>
        View Profile
      </button>

    </div>
  );
}

export default StudentCard;
