import { motion } from "framer-motion";

const AboutPage = () => {
  const skillsClassList =
    "rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black";
  const skills = [
    "JavaScript",
    "CSS",
    "TypeScript",
    "C#",
    "Entity Framework",
    "SQL Server",
    "Azure",
    "Tailwind CSS",
    "Framer Motion",
    "Next.Js",
    "CSS",
    "HTML",
    "jQuery",
  ];
  return (
    <>
      {/* CONTAINER */}
      <div className="">
        {/* TEXT CONTAINER */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-28 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            {/* BIOGRAPHY SIGNATURE SVG*/}
            <div className="self-end">
              <svg
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="185"
                height="77"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M21 58C21 52.0017 15.4405 56.5793 12.9444 59.2222C5.50091 67.1036 2.85004 78.3884 2 88.8889C1.54351 94.5279 -0.034584 112.619 10.4444 110.778C23.6186 108.463 32.9581 87.8843 33.9444 75.5555C34.0826 73.8285 33.3398 68.7455 33 70.4444C32.0532 75.1785 32.8597 81.9492 34.7778 86.3333C38.4582 94.7458 47.1162 94.5583 50.4444 86.3889C54.8055 75.6846 53.2266 62.729 52.2222 51.5555C51.8444 47.3525 52 43.105 52 38.8889C52 38.099 52 30.4682 52 34.0555C52 46.107 53.1954 60.8312 59 71.6111C60.7615 74.8825 63.0144 79 67.0556 79C72.1358 79 74.9867 77.699 78.1111 73.2222C82.8121 66.4864 82 40.6748 82 48.8889C82 55.7851 80.9053 63.5339 85.0556 69.5C87.4309 72.9146 93.1445 76.6662 97.2222 74C104.513 69.2329 103 58.8032 103 51.2222C103 48.5176 103.281 45.6367 102.944 42.9444C102.184 36.8591 110.142 44.1983 112.944 46C119.988 50.5282 127.988 56.9335 121.778 65.4444C120.178 67.6363 115.299 74.0282 111.556 71.8889C109.893 70.9388 116.381 61.7981 117 60.3889C119.868 53.8557 120.87 47.8846 121.5 40.8333C122.12 33.8935 123.766 26.9318 124 20C124.189 14.3882 124.491 7.24766 127.778 2.44443C130.624 -1.71541 132.281 10.5842 132.667 11.8333C136.705 24.9173 141.152 37.9007 143.444 51.4444C144.434 57.2894 145.868 63.3896 146 69.3333C146.105 74.0356 148.082 68.7031 149 66.7778C153.051 58.2803 158.049 50.233 162.889 42.1667C163.125 41.7726 165.569 36.1111 166.556 36.1111C168.556 36.1111 169.183 53.4453 173 55.7778C177.749 58.6798 189.203 37.6756 192.722 34.5C197.848 29.8739 208.538 25.8089 215.778 28.2222C217.942 28.9435 222.6 31.9816 223 26.7778C223.227 23.8324 222.385 24.8677 221.556 27C220.052 30.8668 219.729 36.2459 220.056 40.3333C220.469 45.5006 227.137 47.8227 231.444 45.5555C238.971 41.5942 242 32.6218 242 24.7222C242 18.4814 241.894 37.2058 242.056 43.4444C242.47 59.3969 246.919 75.4409 252.056 90.4444C253.882 95.7793 273.303 134.507 260 135C249.781 135.378 235.858 128.081 235.056 116.444C234.67 110.861 238.253 106.687 242 102.889C248.653 96.1432 256.181 90.2634 262.889 83.5555C264.507 81.9371 280.778 67 273 67"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            {/* BIOGRAPHY SCROLL SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILL TITLE */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* SKILL LIST */}
            {/* <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"> */}
            <div className="flex gap-4 flex-wrap">
              {skills.map((skill) => (
                <div className={skillsClassList}>{skill}</div>
              ))}
            </div>

            {/* SKILL SCROLL SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="">EXPERIENCE</div>
        </div>
        {/* SVG CONTAINER */}
        <div className=""></div>
      </div>
    </>
  );
};

export default AboutPage;
