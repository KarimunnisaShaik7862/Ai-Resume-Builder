import { useState } from 'react'
import profile from '../../../assets/images/profile.jpg'
function App() {

   const colorMap = {
  darkBlue: "md:bg-[#001a20]",
  teal: "md:bg-[#086f5b]",
  navy: "md:bg-[#062e48]",
  green: "md:bg-[#043927]",
  ocean: "md:bg-[#033f4e]",
  maroon: "md:bg-[#4d0604]",
};
 const TextColorMap = {
  darkBlue: "text-[#001a20]",
  teal: "text-[#086f5b]",
  navy: "text-[#062e48]",
  green: "text-[#043927]",
  ocean: "text-[#033f4e]",
  maroon: "text-[#4d0604]",
};


   const [details , setDetails] = useState({
    name: "Ema",
    profession: "Fullstack Developer",
    contact: "+565564514",
    email: "example@gmail.com",
    address: "Mumbai ,India",
    linkedIn : "linkedin",
    soft: ["Communicational skills", "problem solving","leadership" ],
    objective: "Enthusiastic and solution-driven software developer with a solid understanding of programming concepts and hands-on experience in building responsive and user-friendly applications.Eager to contribute to innovative projects and grow as a developer in a dynamic team environment.",

    language: ["English", "Hindi" , "French"],

    education: [
      {
        course: "Bachelor's of Computer Application",
        date : "2023 - 2026",
        institution : "Sunshine engineering college"
      },
      {
        course: "Higher school Education (12th)",
        date : "2023 ",
        institution : "Golden Valley Senior Secondary School"
      },

    ],

    tech:[
      {
        skillName:"HTML",
        rate:"5"
      },
      {
        skillName : "CSS",
        rate: "5"
      },
      {
        skillName : "React",
        rate: "3"
      },
      {
        skillName : "tailwind",
        rate: "5"
      },
      {
        skillName : "Javascript",
        rate: "4"
      }

    ],

    hobbies : ["sports","gaming", "dancing ","singing "],

    refrences :[
      {
        person : "Prof. Anish mehta",
        contact : "+5648916181",
        gmail : "anish@gmail.com"

      },
      {
        person : "Prof. shreya desai",
        contact : "+965648122",
        gmail : "shreyadesai@gmail.com"

      },
    ],

    achivements : [
      {
        
        domain: "Frontend Development",
        desc: "Built multiple responsive and user-friendly websites using HTML, CSS, and JavaScript. Successfully created projects like an Amazon clone and fashion landing pages, showcasing strong UI/UX skills." 
      }
    ],
    image:null,

    font:"sarif",
    allFont:["Impact","Sarif","Verdana","cursive","Arial","Noto","Gill Sans","Franklin Gothic Medium","Century Gothic","Calibri"],

    Color : "maroon",
    TextColor:["darkBlue","teal","navy","Green","ocean","maroon",],
    
      
    textColor : "maroon",
    text:["darkBlue","teal","navy","green","ocean","maroon",]



  }); 




  const changedata = (field,value)=>{
    setDetails({ ...details, ...(typeof field === 'object' ? field : { [field]: value }) });
  };


  const remove = (field , index) =>{
    const temp = [...details[field]]
    temp.splice(index, 1);
    changedata(field, temp)

  }

  const add = (newSection, area)=>{
    const update = [...details[newSection],area];
    changedata(newSection, update)
  }

    const [opt, changeOpt] = useState(false);

  const optChange = () =>{
    changeOpt((perv) => !perv);
  }

  const [Ai, changeAi] = useState(false);

  const AiChange = () =>{
    changeAi((perv) => !perv);
  }

  const [text, setText] = useState(false);
  
    const textChange = () =>{
      setText((perv) => !perv);
    }


  //  const changeTextColor= (e)=>{
  //     const temp = e.target.innerText;
  //     handleChange('Color', temp)
  //   }
  
  const changeColor = (e) => {
  const temp = e.target.innerText;
  changedata({
    textColor: temp,
    Color: temp
  });
};

    

    const changeText = (e)=>{
    const temp = e.target.innerText;
    changedata('font', temp)
  }

  const change = () =>{
    setShow((perv) => !perv);
  }
  const [show, setShow] = useState(false);



  return (
    <>

   <div className=" flex lg:flex-row flex-col-reverse bg-[#b9b7b4] overflow-x-hidden">

    {/* buttons */}
     <div className=" w-full lg:w-[18%] bg-[#e1dcd6b2] flex flex-col pb-9 items-center px-2 py-10 lg:rounded-r-4xl">
           <h1 className="text-center text-[1.8rem] font-bold">Resume Tools</h1>
           <div className=" w-full place-items-center lg:w-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex  lg:flex-col ">
            {/* download button */}
             <div className="flex flex-col items-center justify-center">
                     <button onClick={optChange}  className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#2a499d] cursor-pointer" >Download</button>
                         {
                              opt &&(
                                  <div className="bg-gray-200 mt-2 p-2 rounded-[15px] sm:w-[80%] flex flex-col gap-2 text-black font-bold items-center justify-center">
                                    <button className=" bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Manual Edit</button>
                                  <button className="bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Ai Edit</button>
                    </div>
                        )
                      }
              </div>

{/* colours */}
              <div className="flex flex-col items-center justify-between">
                   <button onClick={textChange} className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#540B14]">Change Colours</button>

                    {text && (
                          <div className=" mx-1 p-2 mt-2 bg-gray-900  rounded grid grid-cols-3 lg:grid-cols-2  gap-2">

                          {
                            details.text.map((elm,idx)=>(
                            <div key={idx} onClick={changeColor} className="bg-gray-300 flex items-center justify-center text-black p-2  rounded-[5px] text-[0.6rem] md:[0.8rem] lg:text-[1rem] xl:text-[1.1rem]">{elm}
                            </div>
                               ))
                           }
                         </div>
                     )}
              </div>

              <button className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#10502e]">Save Changes</button>
              <button className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#18113b]">Share Resume</button>
              
             {/* ai assitance  */}
             <div className="flex flex-col items-center justify-center">
                    <button onClick={AiChange} className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#034e5f]">Ai Assistance</button>
                         {
                            Ai &&(
                                <div className="bg-gray-200 mt-2 p-2 rounded-[15px] sm:w-[80%] flex items-center flex-col gap-2 text-black font-bold">
                                       <button className=" bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Enhance Profile</button>
                                       <button className="bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Enhance Achievement</button>
                                 </div>
                              )
                           }
             </div>



{/* font buttons */}
          <div className="flex flex-col items-center justify-between">
                <button onClick={change} className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#9a2b38]">Change Font</button>
              {show && (
                 <div className=" mx-4 p-4 mt-2 bg-gray-900  rounded grid lg:grid-cols-2 grid-cols-3  gap-2">

                         {
                            details.allFont.map((elm,idx)=>(
                                  <div key={idx} onClick={changeText} className="bg-gray-300 flex items-center justify-center text-black p-1  rounded-[5px] text-[0.8rem] lg:text-[1rem] xl:text-[1.1rem]">{elm}
                            </div>
                              ))
                          }
                     </div>
              )}
          </div>

    </div>

       </div>



{/* Resume */}
    <div className={`  w-[96vw] lg:w-[78vw] m-auto  bg-black mt-12 p-2 flex lg:flex-row flex-col lg:gap-2  ${colorMap[details.textColor]}`} style={{fontFamily : details.font}}>

      {/*----------------------------- left ---------------------------*/}
      <div className="bg-white w-full  lg:w-[45%] lg:rounded-e-3xl flex flex-col items-center
       py-5 gap-5">

        {/* profile */}
        <div className=" flex items-center justify-between gap-2 px-2 lg:px-0 lg:justify-center lg:gap-0  ">
          <div className=" flex flex-col lg:w-full sm:w-[200px] w-[150px]  items-center  justify-center"> 
             <img src={details.image || profile} alt=""  className="w-[80%] h-[80%] xl:h-[65%] xl:w-[65%] border-2 rounded-full overflow-hidden" />
             <input type="file"  accept="image/*" 
                       onChange={(e) => {
                       const file = e.target.files[0];p-2
                       const imageURL = URL.createObjectURL(file);
                        changedata('image',imageURL)
                      }}
             className="mb-3 bg-am mt-2 w-[55%] text-center sm:text-[0.6rem] md:text-[1rem]  text-gray-400" />
          </div>
          <div className="w-[80%] lg:hidden block justify-center"> 
          <input type="text" value={details.name} onChange={(e)=>changedata('name',e.target.value)} className={` text-[3rem] sm:text-[4rem] w-full h-[70px]  font-bold uppercase pl-3 ${TextColorMap[details.Color]}`}/>
          <input type="text" value={details.profession} onChange={(e)=>changedata('profession', e.target.value)} className={`text-[0.8rem] bg-gray-100 text-gray-500 uppercase sm:text-[1.2rem] pl-4 ${TextColorMap[details.Color]}`} />
        </div>


        
        </div>


        {/* contact */}
        <div className={`w-[90%] gap-1 pb-2 flex flex-col items-center justify-center `}>
            <h1 className={` text-[1.4rem] sm:text-[2rem] w-full border-b-2 font-bold ${TextColorMap[details.Color]}`}>Contact</h1>
            <div className="flex w-full gap-1 items-center justify-center">
              <label>Phone:</label>
              <input type="email" value={details.contact} onChange={(e) => changedata('contact', e.target.value)} className="border-none focus:outline-none rounded-full pl-3 border-amber-50 hover:bg-gray-300 hover:cursor-pointer w-full"/>
            </div>
            <div className="flex w-full gap-1 items-center justify-center">
              <label>Email:</label>
              <input type="email" value={details.email} onChange={(e) => changedata('email', e.target.value)} className="border-none focus:outline-none rounded-full pl-3 border-amber-50 hover:bg-gray-300 hover:cursor-pointer w-full"/>
            </div>
            <div className="flex w-full gap-1  items-center justify-center">
              <label>Address:</label>
              <input type="email" value={details.address} onChange={(e) => changedata('address', e.target.value)} className="border-none focus:outline-none rounded-full pl-3 border-amber-50 hover:bg-gray-300 hover:cursor-pointer  w-full"/>
            </div>

            <div className="flex w-full gap-1  items-center justify-center">
              <label>LinkedIn:</label>
              <input type="email" value={details.linkedIn} onChange={(e) => changedata('linkdeIn', e.target.value)} className="border-none focus:outline-none rounded-full pl-3 border-amber-50 hover:bg-gray-300 hover:cursor-pointer  w-full"/>
            </div>
    
            
        </div>

        
        {/* objective */}
        <div className="lg:hidden block w-[90%]">
          <div className=" flex flex-col gap-3">
          <h1 className={` text-[1.4rem] sm:text-[2rem] w-full border-b-2 font-bold capitalize  ${TextColorMap[details.Color]}`}>Objective</h1>
          <textarea value={details.objective} onChange={(e)=>changedata('objective', e.target.value)}   className="resize-none h-[35vh] sm:h-[20vh] p-3"></textarea>
        </div>
        </div>


        {/* softskills */}

        <div className="w-[90%] gap-1 pb-2 flex flex-col  justify-center">
          <div className=" px-2  w-full border-b-2 flex justify-between items-center">
          <h1 className={`text-[1.4rem] sm:text-[2rem]  text-center  font-bold ${TextColorMap[details.Color]}`}>Soft Skills</h1>
          <button onClick={()=>add('soft','New skill')} className="font-bold text-[1.2rem] ">+</button>
          </div>
            

            {details.soft.map((elm, idx) => (
              <div key={idx} 
              className="flex"
              >
                <input
                  value={elm}
                  onChange={(e) => {
                    const newSkills = [...profile.skills];
                    newSkills[idx] = e.target.value;
                    handleChange('soft', newSkills);
                  }}
                  type="text"
                  className="border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer w-full capitalize" 
                />
                <button className="text-red-500" onClick={()=>remove('soft',idx)}>Remove</button>

              </div>
            ))}
        </div>


        {/* languages */}
        <div className="w-[90%] gap-1 pb-2 flex flex-col  justify-center">

        <div className=" px-2  w-full border-b-2 flex justify-between items-center">
          <h1 className={`text-[1.4rem] sm:text-[2rem]  text-center  font-bold ${TextColorMap[details.Color]}`}>Languages</h1>
          <button onClick={()=>add('language','New language')} className="font-bold text-[1.2rem] ">+</button>
        </div>

            {
                details.language.map((elm,idx)=>(
                  <div key={idx}
                  className="flex"
                  >
                  <input
                  value={elm}
                  onChange={(e)=>{
                  const lang = [...details.language]
                  lang[idx] = e.target.value;
                  changedata('language',lang) 
                }}
                  type="text"
                  className="border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer w-full "
                   />

                <button className="text-red-500" onClick={()=>remove('language',idx)}>Remove</button>
                  </div>
                
              ))
            }
        </div>


        {/* refrences */}

        <div className="w-[90%]  lg:block hidden pb-2 ">
          
        <div className=" px-2  w-full border-b-2 flex justify-between  items-center">
          <h1 className={`text-[1.4rem] sm:text-[2rem]  text-center  font-bold ${TextColorMap[details.Color]}`}>Refrences</h1>
          <button onClick={()=>add('refrences',{
            person : 'person name',
            contact : '+564645',
            gmail : 'example@gmail.com'

          })} className="font-bold text-[1.2rem] ">+</button>
        </div>


            {
              details.refrences.map((elm, idx)=>(
                <div key={idx} className="">
                  <input 
                  value={elm.person}
                  onChange={(e)=>{
                    const updated = [...details.refrences]
                    updated[idx].person = e.target.value
                    changedata('refrences', updated) 
                  }}
                  type="text"
                  className="font-bold border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer w-full "
                  />

                  <input 
                  value={elm.contact}
                  onChange={(e)=>{
                    const updated = [...details.refrences]
                    updated[idx].contact = e.target.value
                    changedata('refrences', updated) 
                  }}
                  type="text" 
                  className="border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer w-full "
                  />

                  <input 
                  value={elm.gmail}
                  onChange={(e)=>{
                    const updated = [...details.refrences]
                    updated[idx].gmail = e.target.value
                    changedata('refrences', updated) 
                  }}
                  type="email" 
                  className="border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer w-full "
                  />

               <button className="text-red-500 mb-5" onClick={()=>remove('refrences',idx)}>Remove</button>
                </div>

              ))
            }
          
        </div>

      


      </div>

{/*----------------------------- right ---------------------------*/}

      <div className="bg-white w-full lg:rounded-2xl gap-5 flex flex-col py-10 px-5">

        {/* name */}
        <div className="w-[100%] flex-col  lg:flex hidden justify-center"> 
          <input type="text" value={details.name} onChange={(e)=>changedata('name',e.target.value)} className={`text-[3rem] w-full h-[70px]  font-bold uppercase pl-3 ${TextColorMap[details.Color]}`}/>
          <input type="text" value={details.profession} onChange={(e)=>changedata('profession', e.target.value)} className={`text-[1.2rem] bg-gray-100 text-gray-500 uppercase  pl-4 ${TextColorMap[details.Color]}`} />
        </div>


        {/* objective */}
        <div className="lg:block hidden">
          <div className=" flex flex-col gap-3">
          <h1 className={` text-[1.4rem] sm:text-[2rem] w-full border-b-2 font-bold capitalize  ${TextColorMap[details.Color]}`}>Objective</h1>
          <textarea value={details.objective} onChange={(e)=>changedata('objective', e.target.value)}   className="resize-none h-[35vh] sm:h-[20vh] p-3"></textarea>
        </div>
        </div>



        {/* Education */}
        <div className=" flex flex-col gap-3">
        <div className=" px-2  w-full border-b-2 flex justify-between items-center">
          <h1 className={`text-[1.4rem] sm:text-[2rem] w-full  font-bold capitalize  ${TextColorMap[details.Color]}`}>Education</h1>
          <button onClick={()=>add('education',{
            course : "enter course",
            date : "xxxx",
            institution : "enter institute name"
          })} className="font-bold text-[1.2rem] ">+</button>
        </div>
          {details.education.map((elm, idx)=>(
            <div className=" space-y-1" key={idx}>
              <div className=" flex sm:flex-row flex-col gap-2">
                  <input 
                    value={elm.course}
                    onChange={(e)=>{
                    const edu = [...details.education]
                    edu[idx].course = e.target.value;
                    changedata('education', edu)
                  }}
                  type="text"
                  className={`w-full  border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer bg-transparent capitalize font-bold  ${TextColorMap[details.Color]}`}
                  />

                  <input
                    value={elm.date}
                    onChange={(e)=>{
                    const edu = [...details.education]
                    edu[idx].date = e.target.value
                    handleChange('education',edu)
                  }}
                  type="text" 
                  className="sm:text-right border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer pr-5"/>
              </div>
              <input 
                    value={elm.institution}
                    onChange={(e)=>{
                    const edu = [...details.education]
                    edu[idx].institution = e.target.value;
                    changedata('education', edu)
                  }}
                  type="text"
                  className="w-full  border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer bg-transparent capitalize"
                  />

            <button className="text-red-500" onClick={()=>remove('education',idx)}>Remove</button>
            </div>
          ))
          }
          
        </div>


        {/* techical skills */}

        <div className=" flex flex-col gap-1">
          
        <div className=" px-2  w-full border-b-2 flex justify-between items-center">
          <h1 className={` text-[1.4rem] sm:text-[2rem] w-full  font-bold capitalize  ${TextColorMap[details.Color]}`}>Technical skills</h1>
          <button onClick={()=>add('tech',{
            skillName : "skill ",
            rate: '0'
          })} className="font-bold text-[1.2rem] ">+</button>
        </div>

          <p className="place-self-end mr-15 font-bold">Rating</p>
          {
            details.tech.map((elm, idx)=>(
              <div key={idx} className=" flex gap-2  justify-between">
                <input 
                value={elm.skillName}
                onChange={(e)=>{
                  const tech = [...details.tech]
                  tech[idx].skillName = e.target.value;
                  changedata('tech', tech) 
                }}
                type="text" 
                 className="w-full border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer bg-transparent capitalize "
                />

                <input 
                value={elm.rate}
                min="0"
                max="5"
                onChange={(e)=>{
                  const tech = [...details.tech]
                  tech[idx].rate = e.target.value;
                  changedata('tech', tech) 
                }}
                className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none text-center"
                type="number" />

              <button className="text-red-500" onClick={()=>remove('tech',idx)}>Remove</button> 
              </div>
              
            ))
          }
        </div>



        {/* hobbies */}

        <div className=" flex flex-col gap-1">
        <div className=" px-2  w-full border-b-2 flex justify-between items-center">
          <h1 className={` text-[1.4rem] sm:text-[2rem] w-full  font-bold capitalize  ${TextColorMap[details.Color]}`}>Hobbies</h1>
          <button onClick={()=>add('hobbies','New hobby ')} className="font-bold text-[1.2rem] ">+</button>
        </div> 

          {
            details.hobbies.map((elm,idx)=>(
              <div key={idx} className="flex items-center justify-center">
                <input 
              value={elm}
              onChange={(e)=>changedata('hobbies',e.target.value)}
              type="text" 
              className=" w-full border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer bg-transparent capitalize"
              />
              <button className="text-red-500" onClick={()=>remove('hobbies',idx)}>Remove</button>
              </div>
              
            ))
          }
        </div>



        {/* achivements */}

        <div className=" flex flex-col gap-1">
        <div className=" px-2  w-full border-b-2 flex justify-between items-center">
          <h1 className={` text-[1.4rem] sm:text-[2rem] w-full  font-bold capitalize  ${TextColorMap[details.Color]}`}>Achivements</h1>
          <button onClick={()=>add('achivements',{
            domain : 'enter achivement domain',
            desc : ' tell your achievement'
          })} className="font-bold text-[1.2rem] ">+</button>
        </div>
          {
            details.achivements.map((elm, idx)=>(
              <div key={idx}
              className="space-y-2"
              >
                <input 
                value={elm.domain}
                onChange={(e)=>{
                  const updated  = [...details.achivements]
                  updated[idx].domain = e.target.value
                  changedata('achivements', updated)
                }}
                type="text"
                className={`w-full  border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer bg-transparent capitalize font-bold ${TextColorMap[details.Color]}`}
                />
                <textarea 
                value={elm.desc}
                onChange={(e)=>{
                  const updated  = [...details.achivements]
                  updated[idx].desc = e.target.value
                  changedata('achivements', updated)
                }}
     
                className="w-full   pl-3 hover:bg-gray-300 h-[28vh] sm:h-[20vh] hover:cursor-pointer  resize-none bg-transparent capitalize"
                ></textarea>

              <button className="text-red-500" onClick={()=>remove('achivements',idx)}>Remove</button>
              </div>
            ))
          }
          
        </div>

        {/* refrences */}

        <div className="w-[90%] block lg:hidden pb-2 ">
          
        <div className=" px-2  w-full border-b-2 flex justify-between  items-center">
          <h1 className={`text-[1.4rem] sm:text-[2rem]  text-center  font-bold ${TextColorMap[details.Color]}`}>Refrences</h1>
          <button onClick={()=>add('refrences',{
            person : 'person name',
            contact : '+564645',
            gmail : 'example@gmail.com'

          })} className="font-bold text-[1.2rem] ">+</button>
        </div>


            {
              details.refrences.map((elm, idx)=>(
                <div key={idx} className="">
                  <input 
                  value={elm.person}
                  onChange={(e)=>{
                    const updated = [...details.refrences]
                    updated[idx].person = e.target.value
                    changedata('refrences', updated) 
                  }}
                  type="text"
                  className="font-bold border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer w-full "
                  />

                  <input 
                  value={elm.contact}
                  onChange={(e)=>{
                    const updated = [...details.refrences]
                    updated[idx].contact = e.target.value
                    changedata('refrences', updated) 
                  }}
                  type="text" 
                  className="border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer w-full "
                  />

                  <input 
                  value={elm.gmail}
                  onChange={(e)=>{
                    const updated = [...details.refrences]
                    updated[idx].gmail = e.target.value
                    changedata('refrences', updated) 
                  }}
                  type="email" 
                  className="border-none focus:outline-none rounded-full pl-3 hover:bg-gray-300 hover:cursor-pointer w-full "
                  />

               <button className="text-red-500 mb-5" onClick={()=>remove('refrences',idx)}>Remove</button>
                </div>

              ))
            }
          
        </div>




      </div>
    </div>
   </div>
      
    </>
  )
}

export default App
