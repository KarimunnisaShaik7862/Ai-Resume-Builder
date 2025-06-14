import React, { useState } from "react";

export default function Resume() {

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



  const [formData, setFormData] = useState({
    name: "Nancy Swinson",
    title: "Software developer",
    phone: "+1 0123-456-789",
    email: "youremail@domain.com",
    address: "City,Country",
    linkedin: "linkedin",
    education: [
      {
          major: "Enter your Major ",
          institution: "Name of University",
          date : "2010 - 2012"
      },
       {
          major: "Enter your major",
          institution: "Name of University",
          date : "2010 - 2012"
      }
    ],
    skills:[
              "Website Administration",
              "Project Management",
              "Brand Development",
              "Coordination",
              "Organization and Prioritization",
              "Budgeting and Planning",
              "Client Support",
              "Working Independently"
    ],
    languages:[
            "English – Proficient",
            "Spanish – Independent",
            "French – Basic"
    ],
    experience:[
      {
        title:"Enter Your Job Title Here",
        Company: "google" ,
        Location :"Location", 
        Date: "xxxx",
        desc:"Brief description of the position and the responsibility you had in this post Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit sit accusantium autem perspiciatis, consequatur architecto dignissimos at cumque aliquam possimus perferendis minima harum! Sapiente qui expedita cum amet veritatis."
      },
      {
        title:"Enter Your Job Title Here",
        Company: "Microsoft" ,
        Location :"Location", 
        Date: "xxxx",
        desc:"Brief description of the position and the responsibility you had in this post Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit sit accusantium autem perspiciatis, consequatur architecto dignissimos at cumque aliquam possimus perferendis minima harum! Sapiente qui expedita cum amet veritatis."
      },
      {
        title:"Enter Your Job Title Here",
        Company: "AMAZON" ,
        Location :"Location", 
        Date: "xxxx",
        desc:"Brief description of the position and the responsibility you had in this post Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit sit accusantium autem perspiciatis, consequatur architecto dignissimos at cumque aliquam possimus perferendis minima harum! Sapiente qui expedita cum amet veritatis."
      }
       
    ],
    references:[
      {
        name:"Robert smith",
        email: "robert@domain.com",
        qual: "professor"
      },
       {
        name:"Anney smentha",
        email: "anney@domain.com",
        qual: "engineer"
      }
    ],

    summary: "Hello I’m Name Surname! This is the section where you describe your professional career. Let the potential employer know why they would want to hire you. Use this section for particular career highlights, collaborations or stepping stones to where you are now as a professional.",

    font:"sarif",
    allFont:["Impact","Sarif","Verdana","cursive","Arial","Noto","Gill Sans","Franklin Gothic Medium","Century Gothic","Calibri"],

    Color : "maroon",
    TextColor:["darkBlue","teal","navy","Green","ocean","maroon",],
    
      
    textColor : "maroon",
    text:["darkBlue","teal","navy","green","ocean","maroon",]
  });



 const handleChange = (field,value)=>{
     setFormData({ ...formData, ...(typeof field === 'object' ? field : { [field]: value }) });
  };

  const remove = (field , index) =>{
    const temp = [...formData[field]]
    temp.splice(index, 1);
    handleChange(field, temp)

  }


  const add = (newSection, area)=>{
    const update = [...formData[newSection],area];
    handleChange(newSection, update)
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
  handleChange({
    textColor: temp,
    Color: temp
  });
};

    

    const changeText = (e)=>{
    const temp = e.target.innerText;
    handleChange('font', temp)
  }

  const change = () =>{
    setShow((perv) => !perv);
  }
  const [show, setShow] = useState(false);




  return (
    <div className="flex lg:flex-row flex-col-reverse bg-[#b9b7b4] overflow-x-hidden">
      {/* buttons */}

        <div className=" w-full lg:w-[18%] bg-[#e1dcd6b2] flex flex-col pb-9 items-center px-2 py-10 lg:rounded-r-4xl">
           <h1 className="text-center text-[1.8rem] font-bold">Resume Tools</h1>
           <div className=" w-full place-items-center lg:w-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex  lg:flex-col ">
            {/* download button */}
             <div className="flex flex-col items-center justify-center">

              <button   className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#540B14] cursor-pointer" >Download PDF</button>



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
                            formData.text.map((elm,idx)=>(
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
                                       <button className="bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Enhance Summary</button>
                                 </div>
                              )
                           }
             </div>



{/* font buttons */}
          <div className="flex flex-col items-center justify-between">
                <button onClick={change} className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#540B14]">Change Font</button>
              {show && (
                 <div className=" mx-4 p-4 mt-2 bg-gray-900  rounded grid lg:grid-cols-2 grid-cols-3  gap-2">

                         {
                            formData.allFont.map((elm,idx)=>(
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
    <div className=" w-[95vw] lg:w-[80vw] xl:w-[70vw] mx-auto border-3 rounded-[10px]  border-[#4B3C35]  mt-6 bg-white p-5 mb-5 text-gray-800 font-sans" style={{fontFamily : formData.font}}>
      


      {/* Name And Domain */}

      <div className="flex items-center  justify-between border-b-5  pb-4 mb-6">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e)=>handleChange('name',e.target.value)}
            className={`text-[2.5rem] sm:text-[4rem] font-bold uppercase w-full mb-2 ${TextColorMap[formData.Color]}`}
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e)=>handleChange('title',e.target.value)}
            className="uppercase text-gray-500 w-full text-[1.5rem]"
          />
        </div>
      </div>



        <div className=" text-white  flex md:flex-row flex-col gap-5">
{/* left */}
        <div className={` space-y-6 w-full md:w-[35%]  p-3 text-black md:text-white ${colorMap[formData.textColor]} `}>
          {/* Contact */}
          <div>
            <h2 className="font-bold text-[1.5rem] text-[#540B14] md:text-[#CCC0B2] border-b mb-2">Contact</h2>
            <input
              type="text"
              name="phone"
              value={"📞" + formData.phone}
              onChange={(e)=>handleChange('phone',e.target.value)}
              className="block w-full mb-1"
            />
            <input
              type="email"
              name="email"
              value={"📩" + formData.email}
             onChange={(e)=>handleChange('email',e.target.value)}
              className="block w-full mb-1"
            />
            <input
              type="text"
              name="address"
              value={ "🏠" + formData.address}
              onChange={(e)=>handleChange('address',e.target.value)}
              className="block w-full mb-1"
            />
            <input
              type="text"
              name="linkedin"
              value={"🔗" + formData.linkedin}
              onChange={(e)=>handleChange('linkden',e.target.value)}
              className="block w-full"
            />
          </div>

          {/* Education */}
          <div className="">
            <div className="flex justify-between items-center border-b border-[#CCC0B2]">
              <h2 className="font-bold text-[1.5rem] text-[#540B14]  md:text-[#CCC0B2] mb-2">Education</h2> 

               <button onClick={()=>add('education',{
                         major: "Enter your major",
                         institution: "Name of University",
                         date : "2010 - 2012"
                      }
               )} className="border-2 border-[#CCC0B2] rounded-full w-5 h-5 flex items-center justify-center text-2xl ">+</button>
            </div>
            
            {
              formData.education.map((elm, idx)=>(
                <div key={idx} className="flex flex-col">
                  <input
                   type="text"
                   value={elm.major}
                   onChange={(e)=>{
                    const temp = [...formData.education]
                    temp[idx] = e.target.value;
                    handleChange('education',temp);
                   }}
                   className="font-semibold mt-4"
                   />

                    <input
                   type="text"
                   value={elm.institution}
                   onChange={(e)=>{
                    const temp = [...formData.education]
                    temp[idx] = e.target.value;
                    handleChange('education',temp);
                   }}
                   />

                    <input
                   type="text"
                   value={elm.date}
                   onChange={(e)=>{
                    const temp = [...formData.education]
                    temp[idx] = e.target.value;
                    handleChange('education',temp);
                   }}
                   />

                    <button className="text-red-500 text-start w-[70px] " onClick={()=>remove('education',idx)}>Remove</button>
                </div>
              ))
            }
          </div>

          {/* Skills */}
          <div>
           <div className="flex justify-between items-center border-b border-[#CCC0B2]">

             <h2 className="font-bold text-[1.5rem] text-[#540B14] md:text-[#CCC0B2] mb-2">Skills</h2>

            <button onClick={()=>add('skills','New skill')} className="border-2 border-[#CCC0B2] rounded-full w-5 h-5 flex items-center justify-center text-2xl">+</button>
           </div>

            {
              formData.skills.map((elm,idx)=>(
                <div key={idx} className="flex flex-row lg:flex-row md:flex-col justify-between mb-1">
                  <input
                   type="text"
                   value={ elm}
                   onChange={(e)=>{
                    const temp = [...formData.skills]
                    temp[idx] = e.target.value;
                    handleChange('skills',temp)
                   }}
                    />

                    <button className="text-red-500 text-start w-[70px] " onClick={()=>remove('skills',idx)}>Remove</button>

                </div>
              ))
            }
          </div>

          {/* Languages */}
          <div >
           <div className="flex justify-between items-center border-b border-[#CCC0B2]">
             <h2 className="font-bold text-[1.5rem] text-[#540B14] md:text-[#CCC0B2] mb-2">Languages</h2>

            <button onClick={()=>add('languages','New Language')} className="border-2 border-[#CCC0B2] rounded-full w-5 h-5 flex items-center justify-center  text-2xl">+</button>
           </div>

            {
              formData.languages.map((elm,idx)=>(
                <div key={idx} className="flex  flex-row lg:flex-row md:flex-col justify-between mb-1">
                  <input
                   type="text"
                   value={elm}
                   onChange={(e)=>{
                    const temp = [...formData.languages]
                    temp[idx] = e.target.value;
                    handleChange('languages',temp)
                   }}
                    />

                    <button className="text-red-500 text-start w-[70px] " onClick={()=>remove('languages',idx)}>Remove</button>
                  
                </div>
              ))
            }
            
          </div>

          {/* refrences */}
          <div >
           <div className="flex justify-between items-center border-b border-[#CCC0B2]">
             <h2 className="font-bold text-[1.5rem] text-[#540B14] md:text-[#CCC0B2] mb-2">References</h2>

            <button onClick={()=>add('references',{
              name:"name",
                email: "Email",
               qual: "Domain"

            })} className="border-2 border-[#CCC0B2] rounded-full w-5 h-5 flex items-center justify-center text-2xl">+</button>
           </div>

            {
              formData.references.map((elm, idx)=>(
                <div key={idx} className="flex flex-col">
                  <input
                   type="text"
                   value={elm.name}
                   onChange={(e)=>{
                    const temp = [...formData.references]
                    temp[idx] = e.target.value;
                    handleChange('references',temp);
                   }}
                   className="font-semibold mt-4 capitalize"
                   />

                    <input
                   type="text"
                   value={elm.email}
                   onChange={(e)=>{
                    const temp = [...formData.references]
                    temp[idx] = e.target.value;
                    handleChange('references',temp);
                   }}
                   />

                    <input
                    className="capitalize"
                   type="text"
                   value={elm.qual}
                   onChange={(e)=>{
                    const temp = [...formData.references]
                    temp[idx] = e.target.value;
                    handleChange('references',temp);
                   }}
                   />

                    <button className="text-red-500 text-start w-[70px] " onClick={()=>remove('references',idx)}>Remove</button>
                </div>
              ))
            }
            
          </div>

        </div>


{/* right */}

        <div className=" w-full md:w-[calc(100%-40%)] space-y-8 text-black">
          {/* Career Summary */}
          <div>
            <h2 className={`font-bold text-[2rem]  border-b mb-2 ${TextColorMap[formData.Color]}`}>Career Summary</h2>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={(e)=>handleChange('summary',e.target.value)}
              className="w-full p-2 h-[23vh] bg-gray-100 resize-none text-justify"
            />
          </div>

          {/* Experience */}
          <div>
            <div className="flex justify-between items-center border-b border-[#540B14]">
              <h2 className={`font-bold text-[2rem] mb-2 ${TextColorMap[formData.Color]}`}>Experience</h2>
            <button onClick={()=>add('experience',{

                   title:"Enter Your Job Title Here",
                   Company: "company" ,
                   Location :"Location", 
                   Date: "xxxx",
                   desc:"Brief description of the position and the responsibility you had in this post Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit sit accusantium autem perspiciatis, consequatur architecto dignissimos at cumque aliquam possimus perferendis minima harum! Sapiente qui expedita cum amet veritatis."
                        
                      }
               )} className=" w-5 h-5 flex items-center justify-center text-[1.8rem] font-bold ">+</button>
            </div>

            {formData.experience.map((elm,idx) => (
              <div key={idx} className="mb-6 flex flex-col">
                <input  
                type="text"
                value={elm.title}
                onChange={(e)=>{
                  const temp  = [...formData.experience]
                  temp[idx] = e.target.value
                  handleChange('experience',temp)
                }}
                 className="font-semibold"/>


                 <div className="flex  lg:flex-row flex-col gap-1">

                   <input 
                   className=" pl-2 borderblack uppercase"
                 type="text" 
                 value={elm.Company}
                 onChange={(e)=>{
                  const temp  = [...formData.experience]
                  temp[idx] = e.target.value
                  handleChange('experience',temp)
                }}
                 />

                  <input className=" pl-2 borderblack capitalize"
                 type="text" 
                 value={elm.Location}
                 onChange={(e)=>{
                  const temp  = [...formData.experience]
                  temp[idx] = e.target.value
                  handleChange('experience',temp)
                }}
                 />

                 <input 
                 className="lg:w-full pl-2"
                 type="text" 
                 value={elm.Date}
                 onChange={(e)=>{
                  const temp  = [...formData.experience]
                  temp[idx] = e.target.value
                  handleChange('experience',temp)
                }}
                 />
                 </div>

                 <textarea 
                 value={elm.desc}
                 onChange={(e)=>{
                  const temp  = [...formData.experience]
                  temp[idx] = e.target.value
                  handleChange('experience',temp)
                }}
                className="mt-3 bg-gray-100 h-[28vh] resize-none p-2 text-justify"

                 ></textarea>

                 <button className="text-red-500 text-start w-[70px] " onClick={()=>remove('experience',idx)}>Remove</button>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
