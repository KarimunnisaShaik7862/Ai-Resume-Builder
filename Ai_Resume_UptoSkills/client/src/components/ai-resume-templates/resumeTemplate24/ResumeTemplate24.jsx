

import React, { useState } from 'react';

function App() {
   const [info, setinfo] = useState({
    name: "Edin",
    contact: [
      {
        linkden: "linkden",
        phn: 56545555,
        state: "delhi ,india",
        gmail: "edin@gmail.com"
      }
    ],
    

    objective: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate alias ut temporibus nisi vitae odit officia quo, modi eum possimus aliquid quis illum quae dignissimos maiores qui molestiae velit ad.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate alias ut temporibus nisi vitae odit " ,

    education : [
      {
        course: "Bachelor's of Computer Science",
        date : "2015 - 2019",
        institute: "london University"
      },
      {
        course: "Higher studies (12th)",
        date : "2015 ",
        institute: "Mount valley International school"
      }
    ] ,
    techskills:[
      {
        skillName : "html",
      },
      {
        skillName : "CSS",
      },
      {
        skillName : "JS",
      },


    ],
    softskills:[
      {
        skillName : "Leadership",
      },
      {
        skillName : "Problem solving",
      },
      {
        skillName : "Project management",
      },


    ],

    experience:[
      {
        company : "company name",
        domain : "domain name ",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptate architecto praesentium, soluta perspiciatis tempora voluptatem est! Eum, cupiditate optio, qui facere quisquam harum aperiam, quod neque soluta nesciunt ipsa."
      },

      {
        company : "company name",
        domain : "domain name ",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptate architecto praesentium, soluta perspiciatis tempora voluptatem est! Eum, cupiditate optio, qui facere quisquam harum aperiam, quod neque soluta nesciunt ipsa."
      }
      
    ],

    project: [
      {
        projectname : "Project",
        desc : "enter your program Details ............"
      },
      {
        projectname : "Project",
        desc : "enter your program Details ............"
      }

    ],

    certificate : [
      {
        name:'name of certificate',
        comp : " company name  ",
     }
    ],


    font: "sarif",
    color:["Impact","Sarif","Verdana","cursive","Arial","Noto","Gill Sans","Franklin Gothic Medium","Century Gothic","Calibri"],
    textColor : "#10502e",

    text:["#10502e","#9F0712","#062e48","#ce8383","#2E2E2E","#320e54"]



  })


 const change = (field , value) =>{
  setinfo({ ...info, ...(typeof field === 'object' ? field : { [field]: value }) })
 } 


 const remove = (field , index) =>{
  const temp = [...info[field]]
  temp.splice(index, 1);
  change(field, temp)
}


const add = (newSection, area)=>{
  const update = [...info[newSection],area];
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


   const changeTextColor= (e)=>{
      const temp = e.target.innerText;
      change('textColor', temp)
    }
  
//   const changeColor = (e) => {
//   const temp = e.target.innerText;
//   change({
//     textColor: temp,
//     Color: temp
//   });
// };

    

    const changeText = (e)=>{
    const temp = e.target.innerText;
   change('font', temp)
  }

  const changeshow = () =>{
    setShow((perv) => !perv);
  }
const [show, setShow] = useState(false);


  return (
    <>
         <div className=" flex lg:flex-row flex-col bg-[#b9b7b4] overflow-x-hidden">
         <div className=" w-full lg:w-[18%] bg-[#e1dcd6b2] flex flex-col pb-9 items-center px-2 py-10 lg:rounded-r-4xl">
            <h1 className="text-center text-[1.8rem] font-bold">Resume Tools</h1>
           <div className=" w-full place-items-center lg:w-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex  lg:flex-col ">

               {/* download button */}
            <button  className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 bg-[#9a2b38] text-white  cursor-pointer" >Download PDF</button>


            {/*upload button */}
             <div className="flex flex-col items-center justify-center">
                     <button onClick={optChange}  className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#2a499d] cursor-pointer" >Upload Resume</button>
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
                            info.text.map((elm,idx)=>(
                            <div key={idx} onClick={changeTextColor} className="bg-gray-300 flex items-center justify-center text-black p-2  rounded-[5px] text-[0.6rem] md:[0.8rem] lg:text-[1rem] xl:text-[1.1rem]">{elm}
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
                                       <button className=" bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Enhance Expereince</button>
                                       <button className="bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Ai project  Description</button>
                                       <button className="bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Enhance Summary</button>
                                 </div>
                              )
                           }
             </div>



{/* font buttons */}
          <div className="flex flex-col items-center justify-between">

            
                <button onClick={changeshow} className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#9a2b38]">Change Font</button>
              {show && (
                 <div className=" mx-4 p-4 mt-2 bg-gray-900  rounded grid grid-cols-2  gap-2">
                         {
                            info.color.map((elm,idx)=>(
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

      <div className="w-[95vw] lg:w-[75vw] bg-amber-50 flex mt-12 flex-col items-center p-10  rounded-3xl border-1  m-auto mb-5" style={{fontFamily : info.font}}>

        <div className="flex lg:flex-col flex-row items-center gap-2 mb-5">

        {/* name */}
           <input type="text" className="text-center w-[85%]  uppercase font-bold text-[2.5rem] sm:text-[4rem]     " value={info.name} onChange={(e)=>change('name',e.target.value)} style={{color : info.textColor}}/>

           {info.contact.map((elm ,idx)=>(
            <div key={idx} className=" grid lg:border-none border-l-2 border-gray-300 lg:grid-cols-2 w-full  grid-cols-1 xl:grid-cols-4 flex-col gap-2  p-2">
              <input  type='text' value={elm.linkden} onChange={(e)=>change('contact',e.target.value)} className="   rounded-full bg-gray-200  text-center  focus:outline-none" style={{color : info.textColor}}/>
              <input  type='text' value={elm.phn}  onChange={(e)=>change('contact',e.target.value)} 
              className="   rounded-full  bg-gray-200   text-center  focus:outline-none " style={{color : info.textColor}}/>
              <input  type='text' value={elm.state} onChange={(e)=>change('contact',e.target.value)} className=" rounded-full  bg-gray-200   text-center focus:outline-none " style={{color : info.textColor}}/>
              <input  type='email' value={elm.gmail} onChange={(e)=>change('contact',e.target.value)} className=" rounded-full  bg-gray-200   text-center focus:outline-none " style={{color : info.textColor}}/>
            </div>
          ))

          }
        </div>

      {/* Objective */}
      <div className="w-full flex flex-col space-y-4 mb-3">
        <h2 className=" text-[1.5rem] sm:text-[2rem] font-bold  border-b-2 border-black pb-2" style={{color : info.textColor}}>Objective</h2>
        <textarea value={info.objective} className="h-[42vh] sm:h-[28vh] resize-none 
         p-5 "></textarea>

      </div>



      {/* Education */}
      <div className="w-full flex flex-col space-y-4 pace mb-5">
        <div className=' flex items-center justify-between border-b-2 border-black'>
        <h2 className="text-[1.5rem] sm:text-[2rem] font-bold  pb-2" style={{color : info.textColor}} >Education</h2>
        <button onClick={()=>add('education',{
           course: "enter your course",
           date : " xxxx",
           institute: "University and institution name"
        })} className="border-3 border-blue-950 rounded-full w-7 h-7  flex items-center justify-center font-bold">+</button>

        </div>
        {
          info.education.map((elm, idx)=>(
            <div key={idx}>
               <div className="flex sm:flex-row flex-col">
               <input
              value={elm.course}
              onChange={(e)=>{
                const update = [...info.education]
                update[idx].course = e.target.value;
                change('education',update)
              }}
               type="text" 
               className="w-full font-bold capitalize"
               />

               <input
              value={elm.date}
              onChange={(e)=>{
                const update = [...info.education]
                update[idx].date = e.target.value;
                change('education',update)
              }}
               type="date" 
               className=" bg-gray-100  pl-2 rounded-full md:text-center  focus:outline-none  "
               /> 
               </div>
               <input
              value={elm.institute}
              onChange={(e)=>{
                const update = [...info.education]
                update[idx].institute = e.target.value;
                change('education',update)
              }}
               type="text" 
               className="w-full capitalize"
               /> 

              <button className="text-red-500" onClick={()=>remove('education',idx)}>Remove</button>
            </div>
          ))
        }

      </div>




      {/* Skills */}
    <div className="w-full flex flex-col space-y-4 mb-5">
    <h2 className="text-[1.5rem] sm:text-[2rem] font-bold  border-b-2 border-black pb-2" style={{color : info.textColor}}>Skills</h2>
      <div className="w-full flex sm:flex-row flex-col justify-around space-y-4 mb-5">
        {/* technical skills */}
       
        <div className="w-full">
           <div className=' flex items-center  justify-between  '>
           <h1 className="w-full text-[1.2rem] mb-2 font-bold capitalize hover:bg-gray-400">Technical Skills</h1>
           <button onClick={()=>add('techskills',{
          skillName:"new skill"
        })} className=" text-2xl rounded-full w-7 h-6  flex items-center justify-center  font-bold">+</button>

           </div>

          
        {
          info.techskills.map((elm, idx)=>(
            
            <div key={idx} className="flex px-2 flex-row ">
              <input 
            value={elm.skillName}
            onChange={(e)=>{
              const update = [...info.techskillsskills]
              update[idx].skillName = e.target.value;
              change('techskills',update)
            }}
            type="text" 
            className="hover:bg-gray-400 w-full rounded-full  pl-1"
            />

          <button className="text-red-500 text-right " onClick={()=>remove('techskills',idx)}>x</button>
            </div>
 
          ))
        }
        </div>

        {/* soft skills */}

        <div className=" w-full ">
        <div className=' flex items-center flex-row'>
           <h1 className="w-full text-[1.2rem] mb-2 font-bold capitalize hover:bg-gray-400">Soft Skills</h1>
           <button onClick={()=>add('softskills',{
          skillName:"new skill"
        })} className=" text-2xl rounded-full w-7 h-6  flex items-center justify-center  font-bold">+</button>

           </div>
        {
          info.softskills.map((elm, idx)=>(
            
            <div key={idx} className="flex px-2 flex-row">
              <input 
            value={elm.skillName}
            onChange={(e)=>{
              const update = [...info.softskills]
              update[idx].skillName = e.target.value;
              change('skills',update)
            }}
            type="text" 
            className="hover:bg-gray-400 w-full rounded-full pl-1"
            />

          <button className="text-red-500 sm:text-right text-left" onClick={()=>remove('softskills',idx)}>x</button>
            </div>
            
          ))
        }
        </div>
        
      </div>
    </div>





      {/* Experience */}
      <div className="w-full flex flex-col space-y-4 mb-5">
      <div className=' flex items-center justify-between border-b-2 border-black'>
        <h2 className="text-[1.5rem] sm:text-[2rem] font-bold  pb-2" style={{color : info.textColor}}>Experience</h2>
        <button onClick={()=>add('experience',{
           company: "company name ....",
           domain : " write the domain field",
           desc: "write your experience "
        })} className="border-3 border-blue-950 rounded-full w-7 h-7  flex items-center justify-center font-bold">+</button>

        </div>
        {
          info.experience.map((elm , idx)=>(
            <div key={idx} className="flex flex-col ">
              <input 
              value={elm.company}
              onChange={(e)=>{
                const temp  = [...info.experience]
                temp[idx].company = e.target.value;
                change('experince', temp)
              }}
              type="text"
              className=" text-[1rem] sm:text-[1.2rem] font-bold focus:outline-none hover:bg-gray-300 rounded-full pl-2"
              />
               <input 
              value={elm.domain}
              onChange={(e)=>{
                const temp  = [...info.experience]
                temp[idx].domain = e.target.value;
                change('experince', temp)
              }}
              type="text"
              className=" text-[0.6] sm:text-[1rem]  font-bold focus:outline-none hover:bg-gray-300 rounded-full pl-2" style={{color : info.textColor}}
              />
               <textarea 
              value={elm.desc}
              onChange={(e)=>{
                const temp  = [...info.experience]
                temp[idx].desc = e.target.value;
                change('experince', temp)
              }}
              type="text"
              className="focus:outline-none h-[40vh] md:h-[28vh] hover:bg-gray-300 resize-none p-2 "
              ></textarea>


          <button className="text-red-500 place-self-start" onClick={()=>remove('experience',idx)}>Remove</button>
            </div>
          ))
        }
       
       
      
      </div>
      

      {/* Projects */}
    <div className="w-full flex flex-col space-y-4">
        <div className="flex border-b-2 border-black justify-between items-center">
        <h2 className="text-[1.5rem] sm:text-[2rem] font-bold   pb-2" style={{color : info.textColor}}>Projects</h2>
        <button 
        onClick={()=>add('project',{
          projectnumber:'Project',
          projectname : " Project Name ",
          desc: " enter your project Details...... "
       })}
         className="border-3 border-blue-950 rounded-full w-7 h-7  flex items-center justify-center font-bold">+</button>
        </div>
        

        <div className="space-y-4 mb-5">
          {
            info.project.map((elm,idx)=>(
              <div key={idx}>
                <h1 className="text-[1.2rem] font-bold text-black text-left">Project</h1>

                <input 
                value={elm.projectname}
                onChange={(e)=>{
                  const temp = [...info.project]
                  temp[idx].projectname = e.target.value;
                  change('project', temp)
                }}
                
                type="text"  className="text-[1.2rem] rounded-full pl-2 focus:outline-none font-bold mb-2 hover:bg-gray-300 capitalize" style={{color : info.textColor}}/>


             <textarea 
              value={elm.desc}
              onChange={(e)=>{
                const temp  = [...info.project]
                temp[idx].desc = e.target.value;
                change('project', temp)
              }}
              type="text"
              className=" w-full h-[20vh] hover:bg-gray-300 resize-none text-justify  pl-2"
              ></textarea>

             <button className="text-red-500 place-self-start" onClick={()=>remove('project',idx)}>Remove</button>
          </div>

            ))
            
          }
          
          
        </div>
      </div>



      {/* Certificates */}
      <div className="w-full flex flex-col space-y-4">
      <div className="flex border-b-2 border-black justify-between items-center">
        <h2 className="text-[1.5rem] sm:text-[2rem] font-bold  pb-2" style={{color : info.textColor}}>Certificates</h2>
        <button 
        onClick={()=>add('certificate',{
          name:'name of certificate',
          comp : " company name  ",
       })}
        className="border-3 border-blue-950 rounded-full w-7 h-7  flex items-center justify-center font-bold">+</button>
        </div>
        {
          info.certificate.map((elm,idx)=>(
            <div key={idx} className="flex sm:flex-row  flex-col ">    
              <input
              value={elm.name}
              onChange={(e)=>{
                const temp = [...info.certificate]
                temp[idx].name = e.target.value
                change('certificate',temp)
              }}
               type="text"  className=" mb-2 text-blue-950 capitalize"  />


               <input
              value={elm.comp}
              onChange={(e)=>{
                const temp = [...info.certificate]
                temp[idx].comp = e.target.value
                change('certificate',temp)
              }}
               type="text"  className="   mb-2 capitalize"  />  

              <button className="text-red-500 place-self-start" onClick={()=>remove('certificate',idx)}>Remove</button>
            </div>
          ))
        }


        
      </div>
    </div>
         </div>
    </>
  );
}
export default App;
