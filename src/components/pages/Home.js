import React from "react";
import "../../components/pages/Home.css";
import HeroSection from "../HeroSection";
import imageSrc from "../../components/pages/carer.jpeg";
function Home() {
  return (
    <div>
      <>
        <HeroSection />
      </>

      <h1>FUTURE IS IN YOUR HANDS</h1>
      <img src={imageSrc} alt="carer" />
      <p>
        What after 12th ?’ is the common question among the generation of
        students studying in 12th standard. Every year the questions hit lakhs
        of students in India and abroad. The confusion prevails among them
        concerning career prospects, job opportunities and yes, their passion,
        their preference. Counselors say that the lack of proper information
        about the courses available in India and their career prospects, is
        somewhere responsible. Science, Commerce and Arts are the options
        available in which students can find a suitable course to pursue after
        12th. Choosing a course shall never be a convenient option rather it
        should be a highly motivating choice for the students. Interests,
        motivation, and goals are prime factors students must consider while
        choosing a course from the range of courses available in India to pursue
        after 12th. Students can choose a course from top domains including
        Engineering, Architecture, Design, Law, Applied Science, Business
        Studies, Management, Behavioral and Social Sciences, Economics, Media,
        Humanities, and more."
      </p>
      <h1>REASONS FOR CHOOSING BTECH AS CAREER</h1>
      <h2>Requisite in the country</h2>

      <p>
        There is a need and demand for engineering graduates in the country.
        India is a developing nation where infrastructural and architectural
        developments are proposed by the government for the growth and
        betterment of society. With the lack of skilled human resources, the
        developmental activities of the country will be detained leading to
        public inconvenience and depletion of government funds.
      </p>
      <h2>Attractive salary packages</h2>
      <p>
        On average, the lowest salary package for a BTech graduate starts from
        Rs. 2.5 lakh whereas candidates completing their BTech courses from top
        institutes like IIT, NIT, etc are offered annual salary packages of up
        to Rs. 25 lakh.
      </p>
      <h2>Analytical and logical skillset</h2>
      <p>
        The students who pursue BTech courses inculcate a specific skill set
        which allows them to solve day-to-day related problems during their
        fieldwork without any hassle. They are trained to find feasible
        solutions to uncanny problems.
      </p>
      <h2>Perks and benefits</h2>
      <p>
        Apart from an attractive salary package, the industry offers various
        perks and benefits in the form of incentives, holiday packages,
        exclusive discounts and coupons, etc. to engineers which enhances their
        job satisfaction.
      </p>
      <h2>Career prospects</h2>
      <p>
        A BTech graduate has a variety of options to choose from in terms of
        career. They can apply for a job in the public and private sectors as
        engineers or can work as a researcher, consultants, etc. according to
        their goals and needs.
      </p>
    </div>
  );
}

export default Home;
