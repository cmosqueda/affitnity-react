// react import
import { Link } from "react-router-dom";
import DateComponent from "@/custom-components/DateComponent";

//import assets
import HeroImage from "../../assets/image/hero_image.jpg";

// import useAuth
import { useAuth } from "@/AuthContext";

// home hero
export default function HomeHero() {
  const { user } = useAuth();
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/api/user/profile/', {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem('access_token')}`, // Assuming JWT is stored in localStorage
  //         },
  //       });
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // if (!user) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <div className="relative h-100 mt-5 flex items-center justify-center md:h-150">
        {/* background image */}
        <img
          src={HeroImage}
          className="absolute w-full h-full object-cover filter brightness-50"
          alt="Hero Background"
        />

        {/* hero info container */}
        <div className="relative z-10 text-snow-white space-y-2.5 mx-5 my-auto flex flex-col items-center justify-center md:space-y-6">
          <p className="font-dmsans font-medium text-sm md:text-lg">Start your fitness and diet routine plan</p>
          <h1 className="font-medium text-2xl md:text-5xl">
            Welcome,{" "}
            <span className="text-brand">
              {user?.first_name ? `${user.first_name} ${user.last_name}` : user?.username || "Guest"}
            </span>
          </h1>
          <DateComponent />
          <Link
            to="/"
            className="inline-flex bg-brand font-dmsans text-moss-black p-2 text-sm rounded-lg md:p-3 md:text-base hover:bg-amber-700 hover:text-snow-white"
          >
            Today's Routine
          </Link>
        </div>
      </div>
    </>
  );
}
