import React, { useState } from "react";
import image from '../../../assets/images/image.jpg'

export default function Resume() {

  const colorMap = {
  darkBlue: "md:bg-[#001a20]",
  brown: "md:bg-[#a67c52]",
  navy: "md:bg-[#062e48]",
  green: "md:bg-[#043927]",
  ocean: "md:bg-[#033f4e]",
  maroon: "md:bg-[#4d0604]",
};
 const TextColorMap = {
  darkBlue: "text-[#001a20]",
  brown: "text-[#a67c52]",
  navy: "text-[#062e48]",
  green: "text-[#043927]",
  ocean: "text-[#033f4e]",
  maroon: "text-[#4d0604]",
};


  const [profile, setProfile] = useState({
    name: "Meredith Snappen",
    title: "Legal intern ",
    phone: "+658946266",
    email: "example@gmail.com",
    location: "london",
    objective: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius labore eaque deserunt impedit esse explicabo, numquam corrupti eum, magnam tenetur sapiente quam reiciendis non beatae. Quidem quas eveniet hic ipsam.",
    education: [
      {
        major:"enter your major",
        instution: "write your institution name",
        year:"xxxx"
      },
      {
        major:"enter your major",
        instution: "write your institution name",
        year:"xxxx"
      }
    ],
    skills: ["html","react","tailwind","css","C"],
    achievements: [
      {
       domain:"domain",
        year: "xxxx",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus illum corporis officiis sint, ratione quasi pariatur. Accusantium minima ipsa modi sed, porro ad placeat sunt temporibus odio blanditiis vel voluptas."
      },
      {
       domain:"domain",
        year: "xxxx",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus illum corporis officiis sint, ratione quasi pariatur. Accusantium minima ipsa modi sed, porro ad placeat sunt temporibus odio blanditiis vel voluptas."
      }
    ],
    experience: [
      {
        comp:"enter your company name",
        desc:"highlight your gained experince journey"
      },
      {
        comp:"enter your company name",
        desc:"highlight your gained experince journey"
      }
    ],
    references: [
      {
        name:"enter name",
        gmail:"Gmail",
        contact:"+5654564556"
      },
      {
        name:"enter name",
        gmail:"Gmail",
        contact:"+5654564556"
      },
    ],
    image:null,

     font:"sarif",
    allFont:["Impact","Sarif","Verdana","cursive","Arial","Noto","Gill Sans","Franklin Gothic Medium","Century Gothic","Calibri"],

    Color : "maroon",
    TextColor:["darkBlue","brown","navy","Green","ocean","maroon",],
    
      
    textColor : "maroon",
    text:["darkBlue","brown","navy","green","ocean","maroon",]
  });


  const change = (field , value) =>{
  setProfile({ ...profile, ...(typeof field === 'object' ? field : { [field]: value }) });
 } 


 const remove = (field , index) =>{
  const temp = [...profile[field]]
  temp.splice(index, 1);
  change(field, temp)
}


const add = (newSection, area)=>{
  const update = [...profile[newSection],area];
  change(newSection, update)
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
  change({
    textColor: temp,
    Color: temp
  });
};

    const changeText = (e)=>{
    const temp = e.target.innerText;
    change('font',temp)
  }

  const changeShow = () =>{
    setShow((perv) => !perv);
  }
  const [show, setShow] = useState(false);


  return (
    <div className="flex lg:flex-row flex-col bg-[#b9b7b4] overflow-x-hidden">

{/* buttons */}
      <div className=" w-full lg:w-[18%] bg-gray-50 flex flex-col pb-9 items-center px-2 py-10 lg:rounded-r-4xl">
           <h1 className="text-center text-[1.8rem] font-bold">Resume Tools</h1>
           <div className=" w-full place-items-center lg:w-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex  lg:flex-col ">

           {/* download button */}
            <button   className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#540B14]  cursor-pointer" >Download PDF</button>


            {/* upload button */}
             <div className="flex flex-col items-center justify-center">
                     <button onClick={optChange}  className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#1B1F2A] cursor-pointer" >Upload Resume</button>
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
                            profile.text.map((elm,idx)=>(
                            <div key={idx} onClick={changeColor} className="bg-gray-300 flex items-center justify-center text-black p-2  rounded-[5px] text-[0.6rem] md:[0.8rem] lg:text-[1rem] xl:text-[1.1rem]">{elm}
                            </div>
                               ))
                           }
                         </div>
                     )}
              </div>

              <button className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#1B1F2A]">Save Changes</button>
              <button className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#540B14]">Share Resume</button>
              
  {/* ai assitance  */}
             <div className="flex flex-col items-center justify-center">
                    <button onClick={AiChange} className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#1B1F2A]">Ai Assistance</button>
                         {
                            Ai &&(
                                <div className="bg-gray-200 mt-2 p-2 rounded-[15px] sm:w-[80%] flex items-center flex-col gap-2 text-black font-bold">
                                       <button className=" bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Enhance Expereince</button>
                                       <button className="bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">improve Achievements</button>
                                       <button className="bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Enhance Summary</button>
                                 </div>
                              )
                           }
             </div>



{/* font buttons */}
          <div className="flex flex-col items-center justify-between">
                <button onClick={changeShow} className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#540B14]">Change Font</button>
              {show && (
                 <div className=" mx-4 p-4 mt-2 bg-gray-900  rounded grid grid-cols-2   gap-2">

                         {
                            profile.allFont.map((elm,idx)=>(
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
      <div className="w-[95vw] lg:w-[80vw] xl:w-[70vw] mx-auto border-3 rounded-[10px]  border-[#4B3C35]  mt-6 bg-white  mb-5 text-gray-800 font-sans flex md:flex-row flex-col-reverse" style={{fontFamily : profile.font}}>

        
{/* Left Side */}
        <div className={`w-full p-5 md:w-[calc(100%-30%)] `}>

          {/* name and domain */}
          <div className="md:block hidden">
                <div className="flex item-center flex-col justify-center mb-5">
                       <input
                             type="text"
                            className={` text-[1.5rem] sm:text-[4rem] font-bold border-b border-gray-300 w-full mb-2 text-center ${TextColorMap[profile.Color]}`}
                             placeholder="Full Name"
                            value={profile.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                         />
                        <input
                             type="text"
                             className=" text-[1rem] sm:text-[1.6rem] uppercase text-gray-600 border-b border-gray-300 w-full mb-2 text-center"
                              placeholder="Title"
                              value={profile.title}
                             onChange={(e) => handleChange("title", e.target.value)}
                         />
                </div>
          </div>



        {/* objective */}
          <section className="mb-6">
            <h3 className={`text-[2rem]  font-bold border-b pb-1 mb-2 ${TextColorMap[profile.Color]}`}>Objective</h3>
            
            <textarea
              className="w-full hover:border h-[32vh] sm:h-[20vh] hover:border-gray-300 p-2 rounded resize-none"
              placeholder="Write your career objective"
              value={profile.objective}
              onChange={(e) => handleChange("objective", e.target.value)}
            />
          </section>

          {/* education */}
          <section className="mb-6 ">

            <div className="border-b flex justify-between pr-5">
              <h3 className={`text-[2rem]  font-bold pb-1 mb-2 ${TextColorMap[profile.Color]}`}>Education</h3>
              <button className="text-blue-600 text-sm mt-1"
              onClick={()=>add('education',{
           major: "enter your course",
           year: " xxxx",
           instution: "University and institution name"
            })}
              >+ Add</button>
            </div>

            {
              profile.education.map((elm,idx)=>(
                <div key={idx} className="flex flex-col hover:border hover:border-gray-300 my-5">
                  <input type="text"  
                          value={elm.major}
                          onChange={(e)=>{
                          const temp = [...profile.education]
                          temp[idx].major = e.target.value
                          change('education',temp)
                        }}
                         className="px-2 font-bold capitalize"
                  />

                  <input type="text"
                  value={elm.instution} 
                  onChange={(e)=>{
                const temp = [...profile.education]
                temp[idx].instution = e.target.value
                change('education',temp)
              }}
                  className="px-2 "
                  />


                  <input type="text"
                  value={elm.year}
                  onChange={(e)=>{
                const temp = [...profile.education]
                temp[idx].year = e.target.value
                change('education',temp)
              }}
                  className="px-2 text-blue-600"
                  />
                  
                  <button className="text-red-500 w-[80px] text-sm mt-1 text-left px-3"
                  onClick={()=>remove('education',idx)}
                  >Remove</button>

                </div>
              ))
            }
            
            
          </section>


          {/* skills */}
          <section className="mb-6">

            <div className="border-b flex justify-between pr-5">
              <h3 className={`text-[2rem]  font-bold pb-1 mb-2 ${TextColorMap[profile.Color]}`}>Skills</h3>
              <button className="text-blue-600 text-sm mt-1"
              onClick={()=>add('skills',"enter your skill")}
              >+ Add</button>
            </div>

            {
              profile.skills.map((elm,idx)=>(
                <div key={idx} className="flex justify-between hover:border hover:border-gray-300 my-5">
                  <input type="text"  
                  value={elm}
                  onChange={(e)=>{
                    const temp  = [...profile.skills]
                    temp[idx] = e.target.value;
                    change('skills',temp)
                  }}
                  className="px-2 w-full gap-1 uppercase"
                  />
                  
                  <button className="text-red-500 text-sm  w-[80px] mt-1 text-left px-3"
                  onClick={()=>remove('skills',idx)}
                  >Remove</button>

                </div>
              ))
            }
            
            
          </section>



          {/* achivements */}
          <section className="mb-6">

            <div className="border-b flex justify-between pr-5">
              <h3 className={`text-[2rem]  font-bold pb-1 mb-2 ${TextColorMap[profile.Color]}`}>Achievements</h3>
              <button className="text-blue-600 text-sm mt-1"
              onClick={()=>add('achievements',{
           domain: "enter your course",
           year: " xxxx",
           desc: "University and institution name"
            })}
              >+ Add</button>
            </div>

            {
              profile.achievements.map((elm,idx)=>(
                <div key={idx} className="flex flex-col hover:border hover:border-gray-300 my-5">
                  <input type="text"  
                  value={elm.domain}
                  onChange={(e)=>{
                const temp = [...profile.achievements]
                temp[idx].domain = e.target.value
                change('achievements',temp)
              }}
                  className="px-2 uppercase font-bold"
                  />
                  <input type="text"
                  value={elm.year} 
                  onChange={(e)=>{
                const temp = [...profile.achievements]
                temp[idx].year = e.target.value
                change('achievements',temp)
              }}
                  className="px-2 text-blue-600"
                  />

                  <textarea 
                  value={elm.desc}
                  onChange={(e)=>{
                const temp = [...profile.achievements]
                temp[idx].desc = e.target.value
                change('achievements',temp)
                 }}
                  className="px-2  h-[32vh] sm:h-[20vh] resize-none"
                  ></textarea>
                  
                  <button className="text-red-500 w-[80px] text-sm mt-1 text-left px-3"
                  onClick={()=>remove('achievements',idx)}
                  >Remove</button>

                </div>
              ))
            }
            
            
          </section>



          {/* experience */}

          <section className="mb-6">

            <div className="border-b flex justify-between pr-5">
              <h3 className={`text-[2rem]  font-bold pb-1 mb-2 ${TextColorMap[profile.Color]}`}>Experience</h3>
              <button className="text-blue-600 text-sm mt-1"
              onClick={()=>add('experience',{
           comp: "enter the company name",
           desc: "highlight your gained experince journey"
            })}
              >+ Add</button>
            </div>

            {
              profile.experience.map((elm,idx)=>(
                <div key={idx} className="flex flex-col hover:border hover:border-gray-300 my-5">
                  <input type="text"  
                  value={elm.comp}
                  onChange={(e)=>{
                const temp = [...profile.experience]
                temp[idx].comp = e.target.value
                change('experience',temp)
              }}
                  className="px-2 font-bold uppercase"
                  />

                  <textarea 
                  value={elm.desc}
                  onChange={(e)=>{
                const temp = [...profile.experience]
                temp[idx].desc = e.target.value
                change('experience',temp)
                 }}
                  className="px-2 h-[25vh] resize-none"
                  ></textarea>
                  
                  <button className="text-red-500  w-[80px] text-sm mt-1 text-left px-3"
                  onClick={()=>remove('experience',idx)}
                  >Remove</button>

                </div>
              ))
            }
            
            
          </section>

          {/* Reference */}
          <section className="mb-6 md:hidden block">
            <div className="border-b flex justify-between pr-5">
              <h3 className={`text-[2rem]  font-bold pb-1 mb-2 ${TextColorMap[profile.Color]}`}>Reference</h3>
              <button className="text-blue-600 text-sm  mt-1"
              onClick={()=>add('references',{
                       name:"enter name",
                      gmail:"Gmail",
                       contact:"+5654564556"
                       })}
              >+ Add </button>
            </div>

            {
              profile.references.map((elm,idx)=>(
                <div key={idx} className="flex flex-col hover:border hover:border-gray-300 my-5">
                  <input type="text"  
                          value={elm.name}
                          onChange={(e)=>{
                          const temp = [...profile.references]
                          temp[idx].name = e.target.value
                          change('references',temp)
                        }}
                         className="px-2 capitalize"
                  />

                  <input type="email"
                  value={elm.gmail} 
                  onChange={(e)=>{
                const temp = [...profile.references]
                temp[idx].gmail = e.target.value
                change('references',temp)
              }}
                  className="px-2 "
                  />


                  <input type="text"
                  value={elm.contact}
                  onChange={(e)=>{
                const temp = [...profile.references]
                temp[idx].contact = e.target.value
                change('references',temp)
              }}
                  className="px-2 "
                  />
                  
                  <button className="text-red-500 w-[80px] text-sm mt-1 text-left px-3"
                  onClick={()=>remove('references',idx)}
                  >Remove</button>

                </div>
              ))
            }
            
            
          </section>

        </div>



{/* Right Side */}
        <div className={`w-full md:w-[30%]  p-4 rounded-lg ${colorMap[profile.textColor]}`}>

          {/* image */}
          <div className="w-full flex flex-col items-center justify-center mb-4">
            
            <img src={profile.image || image} alt="" className="w-50 h-50 border border-black object-cover  rounded-full mx-auto mb-3 " />

            <input type="file"  accept="image/*" 

                       onChange={(e) => {
                       const file = e.target.files[0];
                       const imageURL = URL.createObjectURL(file);
                        change('image',imageURL)
                        
                      }}
             className="mt-2  w-[25%] md:w-[65%]  text-[0.7rem] md:text-[1rem] md:text-white text-black " />
          </div>

          {/* name and domain */}
          <div className="md:hidden block">
                <div className="flex item-center flex-col justify-center mb-5">
                       <input
                             type="text"
                            className={`text-[2rem] sm:text-[3rem]  font-bold border-b border-gray-300 w-full mb-2 text-center ${TextColorMap[profile.Color]}`}
                             placeholder="Full Name"
                            value={profile.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                         />
                        <input
                             type="text"
                             className="text-[1rem] sm:text-[1.6rem] text-gray-600 border-b border-gray-300 w-full mb-2 text-center uppercase"
                              placeholder="Title"
                              value={profile.title}
                             onChange={(e) => handleChange("title", e.target.value)}
                         />
                </div>
          </div>

          {/* contact info  */}

          <div className="mb-1 text-black  md:text-white">
            <input
              type="text"
              placeholder="Phone"
              className="w-full   border-b border-white mb-2"
              value={profile.phone}
              onChange={(e) => change("phone", e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full   border-b border-white mb-2"
              value={profile.email}
              onChange={(e) => change("email", e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full   border-b border-white mb-2"
              value={profile.location}
              onChange={(e) => change("location", e.target.value)}
            />
          </div>

          {/* Reference */}
          <section className=" md:text-white text-black mb-6 md:block hidden">
            <div className="border-b flex justify-between pr-5">
              <h3 className="text-[1.5rem]  font-bold  pb-1 mb-2">Reference</h3>
              <button className="text-white-600 text-xl mt-1"
              onClick={()=>add('references',{
        name:"enter name",
        gmail:"Gmail",
        contact:"+5654564556"
      })}
              >+ Add</button>
            </div>

            {
              profile.references.map((elm,idx)=>(
                <div key={idx} className="flex flex-col hover:border hover:border-gray-300 my-5">
                  <input type="text"  
                          value={elm.name}
                          onChange={(e)=>{
                          const temp = [...profile.references]
                          temp[idx].name = e.target.value
                          change('references',temp)
                        }}
                         className="px-2 capitalize"
                  />

                  <input type="email"
                  value={elm.gmail} 
                  onChange={(e)=>{
                const temp = [...profile.references]
                temp[idx].gmail = e.target.value
                change('references',temp)
              }}
                  className="px-2 "
                  />


                  <input type="text"
                  value={elm.year}
                  onChange={(e)=>{
                const temp = [...profile.references]
                temp[idx].contact = e.target.value
                change('references',temp)
              }}
                  className="px-2 text-blue-600"
                  />
                  
                  <button className="text-red-500 w-[80px] text-sm mt-1 text-left px-3"
                  onClick={()=>remove('references',idx)}
                  >Remove</button>

                </div>
              ))
            }
            
            
          </section>
        </div>


      </div>
    </div>
  );
}
