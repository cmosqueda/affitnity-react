import { Link } from "react-router-dom";

function UserPlan() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-8 py-4 bg-[#f9f9ff] shadow-md">
        <div className="text-2xl font-bold text-black">
          A<span className="text-yellow-500">fit</span>nity
        </div>
        <div className="flex space-x-6 text-[16px]">
          <Link to="/" className="text-black hover:text-gray-600">
            Home
          </Link>
          <Link to="#" className="text-orange-500 font-medium hover:text-orange-600">
            My Plan
          </Link>
          <Link to="/#" className="text-blue-600 font-medium hover:text-blue-700">
            Workout Gallery
          </Link>
          <Link to="#" className="text-black hover:text-gray-600">
            Services
          </Link>
          <Link to="#" className="text-black hover:text-gray-600">
            Contacts
          </Link>
        </div>
        <div className="flex items-center space-x-2 border border-black rounded-[12px] px-3 py-1 bg-white">
          {/* u can change the profile picture by change number and u also change into womem */}
          <img src="https://randomuser.me/api/portraits/men/78.jpg" alt="User Avatar" className="w-8 h-8 rounded-full object-cover" />
          <span className="text-sm font-medium text-black">Mike Philip</span>
        </div>
      </nav>

      {/* main content */}
      <div className="pt-24 px-4 bg-[#f9f9ff] min-h-screen">
        {/* date schedule (cubes)*/}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-14 h-14 bg-white border-2 border-black rounded-[12px] flex items-center justify-center text-center">
            <p>
              Sun
              <br />1
            </p>
          </div>

          <div className="w-14 h-14 text-white bg-black border-2 border-black rounded-[12px] flex items-center justify-center text-center">
            <p>
              Mon
              <br />2
            </p>
          </div>

          <div className="w-14 h-14 bg-white border-2 border-black rounded-[12px] flex items-center justify-center text-center">
            <p>
              Tue
              <br />3
            </p>
          </div>

          <div className="w-14 h-14 bg-white border-2 border-black rounded-[12px] flex items-center justify-center text-center">
            <p>
              Wed
              <br />4
            </p>
          </div>

          <div className="w-14 h-14 bg-white border-2 border-black rounded-[12px] flex items-center justify-center text-center">
            <p>
              Thu
              <br />5
            </p>
          </div>

          <div className="w-14 h-14 bg-white border-2 border-black rounded-[12px] flex items-center justify-center text-center">
            <p>
              Fri
              <br />6
            </p>
          </div>

          <div className="w-14 h-14 bg-white border-2 border-black rounded-[12px] flex items-center justify-center text-center">
            <p>
              Sat
              <br />7
            </p>
          </div>
        </div>

        {/* Exercise Card - aligned left */}
        <div className="flex flex-wrap gap-3 justify-start">
          {/* Card 1 */}
          <div className="w-80 rounded-xl overflow-hidden shadow-lg bg-white">
            <img className="w-full h-120 object-cover" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1" alt="Burpees Exercise" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Burpees</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-yellow-500 text-white text-xs font-medium px-2 py-1 rounded-full">Strength Workout</span>
                <span className="bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded-full">16 reps • 3 sets</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-80 rounded-xl overflow-hidden shadow-lg bg-white">
            <img className="w-full h-120 object-cover" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1" alt="Burpees Exercise" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Burpees</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-yellow-500 text-white text-xs font-medium px-2 py-1 rounded-full">Strength Workout</span>
                <span className="bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded-full">16 reps • 3 sets</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-80 rounded-xl overflow-hidden shadow-lg bg-white">
            <img className="w-full h-120 object-cover" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1" alt="Burpees Exercise" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Burpees</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-yellow-500 text-white text-xs font-medium px-2 py-1 rounded-full">Strength Workout</span>
                <span className="bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded-full">16 reps • 3 sets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Meal Plan - Full Width Section pero dili ma full width fuck ay ma full ma siya kong daghan execrise ibutang sa execrise card */}
        {/* Breakfast */}
        <div className="w-full bg-[#f6f6fb] py-6">
          <div className="max-w-full px-6 pb-3">
            <h2 className="text-lg font-medium text-black mb-4">
              Meal Plan - <span className="text-orange-500">Monday</span>
            </h2>

            <div className="flex items-center justify-between bg-green-100 border border-green-300 rounded-xl p-4 w-full shadow-sm">
              {/* Left Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-black mb-2">
                  Oatmeal with Chia and <br /> Berries
                </h3>

                <div className="flex items-center gap-4 mb-2 text-sm text-green-800">
                  <div className="flex items-center gap-1">
                    <span>2 Serves</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span> 1 bows</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <span className="bg-red-200 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">123kcal</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Carbs: 123g</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Protein: 123g</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">Fat: 12g</span>
                </div>

                <div className="mt-3">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs font-semibold">Breakfast</span>
                </div>
              </div>

              {/* Right Image */}
              <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2" alt="Meal" className="w-48 h-28 rounded-lg object-cover ml-6" />
            </div>
          </div>

          {/* Lunch */}
          <div className="max-w-full px-6 pb-3">
            <div className="flex items-center justify-between bg-green-100 border border-green-300 rounded-xl p-4 w-full shadow-sm">
              {/* Left Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-black mb-2">
                  Grilled Chicken with
                  <br /> Quinoa Salad
                </h3>

                <div className="flex items-center gap-4 mb-2 text-sm text-green-800">
                  <div className="flex items-center gap-1">
                    <span>2 Serves</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>All meals</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <span className="bg-red-200 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">123kcal</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Carbs: 123g</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Protein: 123g</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">Fat: 12g</span>
                </div>

                <div className="mt-3">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs font-semibold">Lunch</span>
                </div>
              </div>

              {/* Right Image */}
              <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2" alt="Meal" className="w-48 h-28 rounded-lg object-cover ml-6" />
            </div>
          </div>

          {/* dinner */}
          <div className="max-w-full px-6 pd-3">
            <div className="flex items-center justify-between bg-green-100 border border-green-300 rounded-xl p-4 w-full shadow-sm">
              {/* Left Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-black mb-2">
                  Baked Salmon with Steamed
                  <br /> Vegetables
                </h3>

                <div className="flex items-center gap-4 mb-2 text-sm text-green-800">
                  <div className="flex items-center gap-1">
                    <span>2 Serves</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>All meals</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <span className="bg-red-200 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">123kcal</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Carbs: 123g</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Protein: 123g</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">Fat: 12g</span>
                </div>

                <div className="mt-3">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs font-semibold">Dinner</span>
                </div>
              </div>

              {/* Right Image */}
              <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2" alt="Meal" className="w-48 h-28 rounded-lg object-cover ml-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPlan;
