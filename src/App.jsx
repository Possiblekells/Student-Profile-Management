
import NavBar from "./NavBar";
import StudentList from "./StudentList";


const students = [
  {
    id: 1,
    name: "Possible Kells",
    email: "possible@gmail.com",
    department: "Computer Science",
    level: "200 Level",
    image: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/336900593_972214237279545_8367593942112490104_n.jpg?stp=dst-jpg_tt6&cstp=mx756x1008&ctp=s756x1008&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sH-CaX0fX28Q7kNvwGt87K8&_nc_oc=AdqmS5uIXwtsMdd3CqfvDRaSoL-AnL_olgpqHSgY829Zn0JlHOgPy23J8CWwFhlIGEs&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=DB-oWaCEvKYy6hxvh2quFA&_nc_ss=7b389&oh=00_AQR5rKdrnqQ4OP9lnSURIpcVS6J99mCxjWLK_o0RMHdiqA&oe=6B0B2381",
    status: "Active"
  },
  {
    id: 2,
    name: "Kelvin Funds",
    email: "kelvin@gmail.com",
    department: "Software Engineering",
    level: "300 Level",
    image: "https://harris.uchicago.edu/sites/default/files/inline-images/J.%20Vinegar%20profile.jpg",
    status: "Pending"
  },
  {
    id: 3,
    name: "Prince Joshua",
    email: "josh@gmail.com",
    department: "Cyber Security",
    level: "100 Level",
    image: "https://scontent-los4-1.xx.fbcdn.net/v/t1.6435-9/156531732_3780727391962716_4500272766207007543_n.jpg?stp=dst-jpg_tt6&cstp=mx960x1440&ctp=s960x1440&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Gtw7__0hHx8Q7kNvwHYdjno&_nc_oc=AdpXyznqWg5C3dDhI1JUZlzgkTeT4Qr7kMMmKlGVMJZXhijV0Q7_Ggs9t_Zi0xc8jaE&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=OjeEgvqhA8QV09ZOZP81sg&_nc_ss=7b389&oh=00_AQRPFmpM6cKy_UZZFYcKr9zwIye8Jr8UXDoeQlZzsdNnQA&oe=6B2CB031",
    status: "Inactive"
  },
  {
    id: 4,
    name: "Chris ManU",
    email: "chris@gmail.com",
    department: "Information Technology",
    level: "400 Level",
    image: "https://business.appstate.edu/sites/default/files/styles/asu_news_full/public/asu_news/student-profile-javon-nathaniel.jpg?itok=-KyYkUKf",
    status: "Active"
  }
];

function App() {

  function handleViewProfile(studentName) {
  alert(`You are viewing ${studentName}'s profile`);
}

  return (
    <div>
      <NavBar />

      <h1>Student Profile Management</h1>

      <StudentList students={students} onViewProfile={handleViewProfile} />
    </div>
  );
}

export default App;
