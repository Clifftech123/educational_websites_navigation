import React from 'react'
import cardImageOne from '../../IMAGES/cardIMageOne.jpg'
import Student from '../../IMAGES/Student (1).jpg'
import Marketing from '../../IMAGES/Marketing.jpg'
import { FaChevronDown } from "react-icons/fa";

const HomePagesCards =() => {
  return (
		<>
			{/* CARD SECTION  */}
			<div className="p-10 py-24  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
				{/* FIRST CARD  */}
				<div className="rounded overflow-hidden   hover:shadow-2xl  bg-white shadow-lg">
					<img
						className="w-full shadow-lg 2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
						src={cardImageOne}
						alt="Programing"
					/>
					<div className="px-6 py-4">
						<div className="font-bold  font-Poppins text-xl text-G_Purple mb-2">
							Programing
						</div>
						<p className="text-gray-700 text-base mb-5">
							Learning to code not only allows you to give machines
							instructions, but it also teaches you abstract thinking and
							problem-solving. In fact, problem-solving skills and creativity
							are key to becoming a successful computer programmer. Of course,
							you'll also need to know some coding languages to apply your
							knowledge.
						</p>
             <small className ="text-G_Purple font-medium "> Click Button below to view all the variable website to learn  marketing </small>
					</div>
					<div className=" flex text-center justify-center  px-6 pt-4 pb-2">
						<button
							type="button"
							className="  p-4 w-full  text-center justify-center align-middle px-6 pt-2.5 pb-2 bg-G_Purple text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
						>
							<span className="text-lg">
								{" "}
								<FaChevronDown />
							</span>
							See more
						</button>
					</div>
				</div>

				{/* SECOND CARD */}
				<div className="rounded hover:shadow-2xl overflow-hidden   bg-white shadow-lg">
					<img
						className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center shadow-lg"
						src={Student}
						alt="Sut"
					/>
					<div className="px-6 py-4">
						<div className="font-bold font-Poppins text-xl text-G_Purple mb-2">
							Student
						</div>
						<p className="text-gray-700 text-base mb-5">
							Among the many benefits of an online learning, you’ll find virtual
							classrooms are great for people who are advancing their education
							while working. In a traditional classroom, lectures will be
							scheduled at a specific time of day and your schedule will be
							formed around the availability of classes.Online Study is the new
							trane
						</p>
             <small className ="text-G_Purple font-medium "> Click Button below  to see website available for student </small>
					</div>
					<div className=" flex text-center justify-center  px-6 pt-4 pb-2">
						<button
							type="button"
							className="   w-full text-center justify-center align-middle   px-6 pt-2.5 pb-2 bg-G_Purple text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
						>
							<span className="text-lg">
								{" "}
								<FaChevronDown />
							</span>
							See more
						</button>
					</div>
				</div>

				{/* THIRD CARD  */}
				<div className="rounded  hover:shadow-2xl overflow-hidden  bg-white  shadow-lg">
					<img
						className="w-full 2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center shadow-lg"
						src={Marketing}
						alt="Forest"
					/>
					<div className="px-6 py-4">
						<div className="font-bold font-Poppins text-xl text-G_Purple   mb-2">
							Marketing
						</div>
						<p className="text-gray-700 text-base mb-5">
							here are so many reasons why you might want to study marketing: it
							will prepare you for a range of careers, marketing is one of the
							fastest-growing industries, you’ll learn what drives a business,
							you get to be creative and strategic… the list could go on and on!
							Marketing is a versatile degree that will prepare you for a wide
							range of careers.
						</p>
            
            <small className ="text-G_Purple font-medium "> Click Button below to view all the variable website to learn  marketing </small>
					</div>
					<div className=" flex text-center justify-center  px-6 pt-4 pb-2">
						<button
							type="button"
							className="  w-full text-center justify-center align-middle   px-6 pt-2.5 pb-2 bg-G_Purple text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
						>
							<span className="text-lg">
								{" "}
								<FaChevronDown />
							</span>
							<span className= "font " > See more </span>
						</button>
					</div>
				</div>
			</div>
			{/* END OF CARD SECTION  */}

      <section>
      <div>

      </div>

      </section>

		</>
	);
}

export default HomePagesCards
