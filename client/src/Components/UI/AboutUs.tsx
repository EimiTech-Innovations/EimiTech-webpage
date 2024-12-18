import about1 from "../../assets/continuousLearning.svg";
import about2 from "../../assets/workshop.svg";
import about3 from "../../assets/itSolution.svg";
import { Link, Location, useLocation } from "react-router-dom";
import { useEffect } from "react";


export const AboutUs: React.FC = () => {
  const location: Location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      {
        location.pathname === "/about" &&
        <section className="py-20 mx-auto bg-no-repeat bg-cover bg-heroBg">
          <div className="container px-5 mx-auto">
            <p className="py-5 font-semibold"> <Link to={"/"} className="hover:underline decoration-bgText"> Home</Link> /
              <Link className="hover:underline decoration-bgText" to={"/about"}> About </Link>
            </p>

            <h2 className="pt-5 text-3xl font-bold"> About</h2>
            <p className="pb-5 lg:w-1/2"> We specialize in crafting seamless digital experiences through innovative web applications, empowering businesses to thrive in an increasingly digital world</p>
          </div>

        </section>
      }
      <div className={`bg-no-repeat  bg-cover bg-heroBg ${location.pathname === "/about" ? "bg-none" : "bg-heroBg"}`}>
        <div className="container mx-auto">
          <div
            id="about"
            className="flex flex-col items-center justify-center mx-auto lg:gap-40 md:gap-5 py-14 lg:py-32 md:py-24 md:flex-row"
          >
            {/* Left side - Images */}
            <div className="flex items-center gap-4 py-10 md:py-0 md:gap-2 lg:gap-14">
              <div className="flex flex-col gap-4 md:gap-2 lg:gap-14">
                <img
                  className="object-cover rounded-lg shadow-lg h-52 w-52"
                  src={about1}
                  alt="Continuous Learning"
                />
                <img
                  className="object-cover rounded-lg shadow-lg h-52 w-52 "
                  src={about3}
                  alt="IT solution"
                />
              </div>
              <img
                className="object-cover rounded-lg shadow-lg h-52 w-52 "
                src={about2}
                alt="Workshop"
              />
            </div>

            {/* Right side - Text and description */}
            <div className="max-w-xl text-left md:w-1/2">
              <h2 className="text-2xl font-bold md:text-3xl">What we do...</h2>
              <p className="mt-4 mb-6">
                We are committed to revolutionizing the digital landscape through
                our innovative services and solutions.
              </p>
              {/* Additional description */}
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">&#9658;</span>
                  <div>
                    <h3 className="font-semibold">Workshops and Training</h3>
                    <p>
                      Create a recognizable and trustworthy brand that resonates
                      deeply with our target audience, reflecting our values and
                      commitment to excellence.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">&#9658;</span>
                  <div>
                    <h3 className="font-semibold">IT & Software Solutions</h3>
                    <p>
                      Delivering innovative IT and software solutions tailored to
                      meet your plans and ideas and overcome its challenges,
                      ensuring everything works together smoothly.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">&#9658;</span>
                  <div>
                    <h3 className="font-semibold">
                      Continuous Learning and Adaptation
                    </h3>
                    <p>
                      Cultivating a culture of ongoing learning and adaptability
                      within your organization to stay ahead in the ever-evolving
                      digital landscape.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};
