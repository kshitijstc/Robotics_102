import { useState } from "react";
import "./Popup.css";
import { popupDetails } from "./themeDetails";
import closeButton from "../assets/close.svg";
import { WeekTask, courseData } from "../data/courseData";
import YoutubeLink from "./YoutubeLink";
import roboClubImage from '../assets/robo_club.png';

function Popup({ expand, setExpand, cardNo }) {
  const screenWidth = window.innerWidth;
  const { title, bgLeft, bgRight, colorLeft } = popupDetails[cardNo - 1];
  const { para1, para2, extra, weekData } = courseData[cardNo - 1];
  const stylesLeft = {
    backgroundColor: bgLeft,
    color: colorLeft,
  };
  const stylesRightForWeekAndTask = {
    backgroundColor: bgLeft,
  };
  const [showText, setShowText] = useState(false);
  const stylesRight = {
    backgroundColor: bgRight,
    color: "black",
  };
  const numStyle = {
    WebkitTextStroke: `2px ${colorLeft}`,
    MozTextStroke: `2px ${colorLeft}`,
    msTextStroke: `2px ${colorLeft}`,
    textStroke: `2px ${colorLeft}`,
  };

  function WeekElement({ weekNo, index, task }){
    const [showContent, setShowContent] = useState(false);
    const { heading, resources } = weekData[index];
    const handleClick = () => {
      setShowContent(!showContent);
    };
    return (
      <div className="popup__right_weekElement px-5 py-2">
        <div className="flex items-center">
          <h1 className="flex-1 flex items-center">
            {task ? `TASK ${weekNo}` : `WEEK ${weekNo}`}
          </h1>
          <img
            onClick={handleClick}
            className={`text-black w-6 cursor-pointer ${showContent ? "rotate-45 duration-300" : "rotate-90 duration-500"}`}
            src={closeButton}
            alt="" />
        </div>
        <div className="overflow-hidden">
          {<div
            className={`popup__right_weekElementExpand ${showContent ? "show" : ""}`}
          >
            {task ? (
              <div className=" p-4  mt-2">
                <p className="text-xl">
                  Task{" "}
                  <a
                    className="underline"
                    href={WeekTask[index][cardNo - 1]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    link
                  </a>
                </p>
              </div>
            ) : (
              <>
                <h1>{heading}</h1>
                <br />
                <div className="flex flex-col gap-y-2" key={index}>
                  {resources.map((resource, index) => {
                    let { title, links } = resource;
                    return (
                      <div key={index}>
                        {links.map((link, index) => {
                          if (link.includes("youtu")) {
                            return (
                              <>
                                {index === 0 && (
                                  <h1 className="text-lg">&bull; {title}</h1>
                                )}
                                <div className="flex flex-wrap gap-2">
                                  {/* {index > 0 && <div>|</div>} */}
                                  <div className=" pl-1 ml-2">
                                    -<YoutubeLink key={index} link={link} />
                                  </div>
                                </div>
                              </>
                            );
                          }
                          return (
                            <>
                              {/* {index > 0 && <div>|</div>} */}

                              <div className="pl-1 flex flex-col">
                                {index === 0 && (
                                  <h1 className="text-lg block">
                                    &bull; {title} :
                                  </h1>
                                )}
                                <a
                                  className="cursor-pointer underline text-gray-700 ml-2"
                                  href={link[1]}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  -{link[0]}
                                </a>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>}
        </div>
      </div>
    );
  }

  const WeekElement1 = ({ weekNo, index, task, bgRight }) => {
    const [showContent, setShowContent] = useState(false);
    const {heading,resources} = weekData[index];
    const handleClick = () => {
      setShowContent(!showContent);
    };

    return (
      <div
        className="popup__right_weekElement px-5 py-2"
        style={stylesRightForWeekAndTask}
      >
        <div className="flex items-center">
          <h1 className="flex-1 flex items-center">
            {task ? `TASK ${weekNo}` : `WEEK ${weekNo}`}
          </h1>
          <img
            onClick={handleClick}
            className={`text-black w-6 cursor-pointer ${
              showContent ? "rotate-45 duration-300" : "rotate-90 duration-500"
            }`}
            src={closeButton}
            alt=""
          />
        </div>

        <div className="overflow-hidden">
          {
            <div
              className={`popup__right_weekElementExpand ${
                showContent ? "show" : ""
              }`}
            >
              {task ? (
                <div className="p-4  mt-2">
                  <p className="text-xl">
                    Task{" "}
                    <a
                      className="underline"
                      href={WeekTask[index][cardNo - 1]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      link
                    </a>
                  </p>
                </div>
              ) : (
                <>
                  <h1>{heading}</h1>
                  <br />
                  <div
                    className="pop__right_weekdata flex-col gap-y-2  border border-black rounded-sm "
                    key={index}
                  >
                    {resources.map((resource, ind)=>{
                      let { title, links } = resource;
                      return(
                      
                      <div
                          key={ind}
                          className={` flex-row py-5 px-10  border border-black rounded-sm hover:bg-[${bgRight}]`}
                        >
                          {links.map((link, index) => {
                            if (link.includes("youtu")) {
                              return (
                                <div className="flex">
                                  {index === 0 ? (
                                    <h1 className="text-lg flex-1 w-14">{title}</h1>
                                  ) : (
                                    <h1 className="text-lg flex-1 w-14">{""}</h1>
                                  )}
                                  <div className="flex-[2_2_0%] flex-wrap gap-1  py-2  border-l border-black">
                                    <div className=" pl-1 ml-2" >
                                      <YoutubeLink key={index} link={link} />
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                            return (
                              <>
                                <div className="flex">
                                  {index === 0 && (
                                    <h1 className="flex-1 text-lg">
                                      {title} :
                                    </h1>
                                  )}
                                  <a className=" course-link cursor-pointer underline text-gray-700 pl-2 ml-2 flex-[2_2_0%] border-l border-black"
                                    href={link[1]}
                                    target="_blank"
                                    rel="noreferrer"
                                  >-{link[0]}
                                  </a>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          }
        </div>
      </div>
    );
  };

  const TaskSubmissionElement = ({ weekNo, link }) => {
    const [showContent, setShowContent] = useState(false);
    const handleClick = () => {
      setShowContent(!showContent);
    };
    return (
      <div
        className="popup__right_weekElement px-5 py-2"
        style={stylesRightForWeekAndTask}
      >
        <div className="flex items-center">
          <h1 className="flex-1 flex items-center">{`TASK ${weekNo}`}</h1>
          <img
            onClick={handleClick}
            className={`text-black w-6 cursor-pointer ${
              showContent ? "rotate-45 duration-300" : "rotate-90 duration-500"
            }`}
            src={closeButton}
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <div
            className={`popup__right_weekElementExpand ${
              showContent ? "show" : ""
            }`}
          >
            <div className=" p-4  mt-2">
              <p className="text-xl">
                Task Submission -
                <a
                  className="underline"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleClose = () => {
    const element = document.querySelector(".popup");
    element.classList.remove("enter-animation");
    element.classList.add("exit-animation");

    setTimeout(() => {
      element.classList.remove("exit-animation");
      element.remove();
      setExpand(false);
    }, 400);
  };
  return expand ? (
    <div className="popup__outer">
      <div
        className={`popup ${
          expand ? "enter-animation" : "-translate-y-[100vh]"
        }`}
      >
        <div style={stylesLeft} className="popup__left">
          <div className="popup__left_closeButton">
            <svg
              className="cursor-pointer"
              onClick={handleClose}
              width="67"
              height="67"
              viewBox="0 0 67 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1464 51.3536L19.5 51.7071L19.8536 51.3536L33.5 37.7071L47.1464 51.3536L47.5 51.7071L47.8536 51.3536L51.3536 47.8536L51.7071 47.5L51.3536 47.1464L37.7071 33.5L51.3536 19.8536L51.7071 19.5L51.3536 19.1464L47.8536 15.6464L47.5 15.2929L47.1464 15.6464L33.5 29.2929L19.8536 15.6464L19.5 15.2929L19.1464 15.6464L15.6464 19.1464L15.2929 19.5L15.6464 19.8536L29.2929 33.5L15.6464 47.1464L15.2929 47.5L15.6464 47.8536L19.1464 51.3536Z"
                fill={colorLeft}
                stroke={colorLeft}
              />
              <rect
                x="2"
                y="2"
                width="63"
                height="63"
                rx="31.5"
                stroke={colorLeft}
                stroke-width="4"
              />
            </svg>
          </div>
          <div className="popup__left_title">
            {title.split(" ").map((word, index) => {
              return <h1 key={index}>{word}</h1>;
            })}
          </div>
          <div className="popup__left_num" style={numStyle}>
            <p>0{cardNo}</p>
          </div>
        </div>
        <div style={stylesRight} className="popup__right overflow-y-scroll">
          <div className="popup__right_item mt-14 m-10">
            <svg
              className="cursor-pointer hidden mobile_popup_close"
              onClick={handleClose}
              width="67"
              height="67"
              viewBox="0 0 67 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1464 51.3536L19.5 51.7071L19.8536 51.3536L33.5 37.7071L47.1464 51.3536L47.5 51.7071L47.8536 51.3536L51.3536 47.8536L51.7071 47.5L51.3536 47.1464L37.7071 33.5L51.3536 19.8536L51.7071 19.5L51.3536 19.1464L47.8536 15.6464L47.5 15.2929L47.1464 15.6464L33.5 29.2929L19.8536 15.6464L19.5 15.2929L19.1464 15.6464L15.6464 19.1464L15.2929 19.5L15.6464 19.8536L29.2929 33.5L15.6464 47.1464L15.2929 47.5L15.6464 47.8536L19.1464 51.3536Z"
                fill={colorLeft}
                stroke={colorLeft}
              />
              {/* <rect
                x="2"
                y="2"
                width="63"
                height="63"
                rx="31.5"
                stroke={colorLeft}
                stroke-width="4"
              /> */}
            </svg>
            <div className="popup__right_item flex flex-row">
            <h2>01</h2>
            <img src={roboClubImage} alt="" className="popup__right_image h-[100px] w-[100px] ml-5"/>
            </div>
            
            <hr className="border-gray-300 " />
            <h1>OVERVIEW</h1>

            <p>
              {para1}
              <br />
              <br />
              {para2} <span className={!showText && "hidden"}> {extra}</span>
              {!showText && (
                <button onClick={() => setShowText(true)} className="underline">
                  .... Read more
                </button>
              )}
            </p>
          </div>
          <div className="popup__right_item mt-14 m-10">
            <h2>02</h2>
            <hr className="border-gray-300 " />

            <h1>TASK LIST</h1>
            {screenWidth > 760 ? 
            <div className="popup__right_weekElementContainer space-y-4 my-4">
              <WeekElement1 weekNo={"01"} index={0} bgRight={bgRight}/>
              {/* <WeekElement1 weekNo={"01"} index={0} task={true} bgRight={bgRight}/> */}
              <WeekElement1 weekNo={"02"} index={1} bgRight={bgRight}/>
              {/* <WeekElement1 weekNo={"02"} index={1} task={true} bgRight={bgRight}/> */}
              <WeekElement1 weekNo={"03"} index={2} bgRight={bgRight}/> 
              {/* <WeekElement1 weekNo={"03"} index={2} task={true} bgRight={bgRight}/> */}
            </div> 
            : 
            // For Mobile View
            <div className="popup__right_weekElementContainer space-y-4 my-4">
              <WeekElement weekNo={"01"} index={0} bgRight={bgRight}/>
              {/* <WeekElement weekNo={"01"} index={0} task={true} bgRight={bgRight}/> */}
              <WeekElement weekNo={"02"} index={1} bgRight={bgRight}/>
              {/* <WeekElement weekNo={"02"} index={1} task={true} bgRight={bgRight}/> */}
              <WeekElement weekNo={"03"} index={2} bgRight={bgRight}/>
              {/* <WeekElement weekNo={"03"} index={2} task={true} bgRight={bgRight}/> */}
            </div>}
            

            {/* <hr className="border-black-500"></hr> */}

            
          </div>
          <div className="popup__right_item mt-14 m-10 space-y-2">
            <h2>03</h2>
            <hr className="border-gray-300" />
            <h1>SUBMISSION</h1>
            <TaskSubmissionElement link={WeekTask[0][cardNo-1]} weekNo={"01"} />
            <TaskSubmissionElement link={WeekTask[1][cardNo-1]} weekNo={"02"} />
            {/* <TaskSubmissionElement link={WeekTask[2][cardNo-1]} weekNo={"03"} /> */}
          </div> 
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;



