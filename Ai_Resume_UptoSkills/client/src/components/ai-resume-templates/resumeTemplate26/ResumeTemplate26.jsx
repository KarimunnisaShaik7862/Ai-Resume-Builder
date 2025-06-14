import { useState } from "react"


function App() {
   const [data , setData] = useState({
    name:"Ishita Sharma",
    domain:"software developer",
    contact:["📞 +91 5845469829", " 📍 Times Square ,New York "," 📩 example@gmail.com", " 🔗linkden","🔗 github"],
    education:[
      {
        major : "Enter your major",
        date : "xxxx",
        institute : "enter the institution name"
      },
      {
        major : "Enter your major",
        date : "xxxx",
        institute : "enter the institution name"
      },

    ],
    skills: ["HTML", "CSS","JS","TailwindCss","React","C++","Problem Solving"],
    experience:[
      {
        company : "Company name ",
        date : "xxxx",
        position: "Enter The poistion",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe aut sapiente accusamus similique? Corporis quasi, reprehenderit nesciunt aliquam voluptatem ipsum facere voluptate molestias, fuga vel saepe, quis eaque optio alias!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe aut sapiente accusamus similique? Corporis quasi, reprehenderit nesciunt aliquam voluptatem ipsum facere voluptate molestias, fuga vel saepe, quis eaque optio alias!"
        
      },

    ],
    project : [
      {
        name : "Project Name",
        desc: "Enter the project description ..........."
        
      }
    ],
    reference:[
      {
        name : "name",
        domain : "profession..",
        email : "email..."
      },
      {
        name : "name",
        domain : "profession..",
        email : "email...."
      }
      

    ],
    font: "sarif",
    color:["Impact","Sarif","Verdana","cursive","Arial","Noto","Gill Sans","Franklin Gothic Medium","Century Gothic","Calibri"],
    textColor : "#0a91b2",

    text:["#155DFC","#9F0712","#062e48","#ce8383","#033f4e","#320e54"]


  })

   const [opt, changeOpt] = useState(false);

  const optChange = () =>{
    changeOpt((perv) => !perv);
  }

  const [Ai, changeAi] = useState(false);

  const AiChange = () =>{
    changeAi((perv) => !perv);
  }


  const handleChange = ((field, val)=>{
    setData({...data,[field] : val})
  })

  const remove = ((field,index) => {
    const temp = [...data[field]];
    temp.splice(index,1)
    handleChange(field,temp)
  })


  const add = ((field,value) =>{
    const temp = [...data[field],value];
    handleChange(field,temp)
  })

  const [show, setShow] = useState(false);

  const change = () =>{
    setShow((perv) => !perv);
  }
  const changeFont = (e)=>{
    const temp = e.target.innerText;
    handleChange('font', temp)
  }

   const [text, setText] = useState(false);

  const textChange = () =>{
    setText((perv) => !perv);
  }


  const changeText = (e)=>{
    const temp = e.target.innerText;
    handleChange('textColor', temp)
  }


  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
        <div className="md:flex md:flex-row overflow-hidden flex flex-col bg-gray-200">
          <button onClick={() => setShowMenu(!showMenu)} className="text-4xl text-start block md:hidden">⚙️</button>

          {/* buttons */}
          <div className={`${showMenu ? "block" : "hidden"}  absolute md:block top-12 md:top-0  w-[40vw] md:w-[20vw] bg-blue-100 border border-blue-300 rounded-[20px] md:bg-white p-5 left-0 md:items-center  md:relative`}>

            <h1 className="text-center my-5 text-[1.8rem] font-bold">Resume Tools</h1>
             <div className="flex flex-col gap-[2rem] items-center">


               {/* download button */}
               <button  className="border-[#073679] border-4 font-bold p-1 text-[0.6rem] md:[0.8rem] lg:text-[1rem] xl:text-[1.1rem] rounded-[10px] w-[80%] h-[50px]">Download PDF</button>

              {/* upload  button */}

            <button onClick={optChange} className="border-[#820000] border-4 font-bold p-1 text-[0.6rem] md:[0.8rem] lg:text-[1rem] xl:text-[1.1rem] rounded-[10px] w-[80%] h-[50px]">Upload Resume</button>
              {
                opt &&(
                    <div className="bg-gray-200 p-2 rounded-[15px] w-[80%] flex items-center flex-col gap-2 text-black font-bold">
                        <button className=" bg-gray-400 p-2  w-[120px] sm:w-[100%] text-[0.6rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Manual Edit</button>
                        <button className="bg-gray-400 p-2  w-[120px] sm:w-[100%] text-[0.6rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Ai Edit</button>
                    </div>
                )
              }
              {/* ai assistance button */}

          <button  onClick={AiChange} className="border-[black] border-4 font-bold rounded-[10px] w-[80%] h-[50px]  px-2 text-[0.6rem]  lg:text-[0.8rem] xl:text-[1rem]">Ai Assistance</button>

         {
                Ai &&(
                    <div className="bg-gray-200 p-2 rounded-[15px] w-[80%] flex items-center flex-col gap-2 te
                    xt-black font-bold">
                       <button className=" bg-gray-400 p-2  w-[120px] sm:w-[100%] text-[0.6rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Enhance Expereince</button>
                        <button className="bg-gray-400 p-2  w-[120px] sm:w-[100%] text-[0.6rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Ai project  Description</button>
                    </div>
                )
           }

           {/* save and share button */}
        <button className="border-[#99024e] border-4 font-bold rounded-[10px] w-[80%] h-[50px]  px-2 text-[0.6rem]  lg:text-[0.8rem] xl:text-[1rem]">Save Changes</button>
        <div className="w-full bg-gray-300 h-[2px]"></div>

        <button className="border-[#073679] border-4 font-bold rounded-[10px] w-[80%] h-[50px]  px-2 text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] ">Share Pdf</button>

        {/* colour button */}
        <button onClick={textChange} className="border-[#3c0210] border-4 font-bold rounded-[10px] w-[80%] h-[50px]  px-2 text-[0.6rem]  lg:text-[0.8rem] xl:text-[1rem]">Colours</button>
        {text && (
            <div className=" mx-1 p-2 bg-gray-900  rounded grid xl:grid-cols-2 grid-cols-1  gap-2">

              {
                data.text.map((elm,idx)=>(
                <div key={idx} onClick={changeText} className="bg-gray-300 flex items-center justify-center text-black p-2  rounded-[5px] text-[0.6rem] md:[0.8rem] lg:text-[1rem] xl:text-[1.1rem]">{elm}
                </div>
                ))
              }
            </div>
        )}



        {/* font changes */}
        <button  onClick={change} className="border-[#820000] border-4 font-bold rounded-[10px] w-[80%] h-[50px] px-2 text-[0.6rem]  lg:text-[0.8rem] xl:text-[1rem]">Change Font</button>

        {show && (
            <div className=" mx-1 p-2 bg-gray-900  rounded grid xl:grid-cols-2 grid-cols-1  gap-2">

              {
                data.color.map((elm,idx)=>(
                <div key={idx} onClick={changeFont} className="bg-gray-300 flex items-center justify-center text-black p-2  rounded-[5px] text-[0.6rem] md:[0.8rem] lg:text-[1rem] xl:text-[1.1rem]">{elm}
                </div>
                ))
              }
            </div>
        )}
        
      </div>
          </div>




          {/* Resume */}
          <div className=" md:w-[75vw] lg:w-[60vw]  flex bg-gray-50 flex-col gap-5  md:m-auto p-5 md:mt-5  m-4 border-2" style={{fontFamily : data.font}}>

            {/* name and info  */}
            <div className="  border-gray-300 border-b-4 gap-2 flex sm:flex-row flex-col sm:items-start items-center justify-center  w-full sm:justify-around py-5">

                        {/* domain info */}
              <div className=" w-full sm:w-[45%] sm:items-start items-center flex flex-col gap-2">
                <input type="text" className=" p-1 sm:text-left text-center text-[1.8rem] sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.9rem]  xl:text-[2.2rem] uppercase font-bold" value={data.name} onChange={(e) => handleChange('name',e.target.value)} style={{color : data.textColor}} />

                <input type="text" className="w-[57%] text-center border-2 bg-gray-100 border-gray-200 p-1 " value={data.domain} onChange={(e) => handleChange('domain',e.target.value)} />
              </div>

                       {/* contact info  */}
              <div className=" w-full sm:w-[45%] flex flex-col bg-gray-100 border-gray-200  border-2 p-1">
                {
                  data.contact.map((elm,idx)=>(
                    <input key={idx} type="text" value={(elm)} onChange={(e) => {
                      const temp = [...data.contact];
                      temp[idx] = e.target.value
                      handleChange('contact',temp)
                    }} className="text-start" />
                  ))
                }
              </div>

            </div>


            {/* education */}
            <div className="flex sm:flex-row flex-col w-full justify-around border-gray-300 border-b-2 pb-5">
              <h1 className=" w-full sm:w-[25%] text-[1.5rem] font-bold " style={{color : data.textColor}}>Education</h1>
              <div className=" p-2 w-full sm:w-[70%] flex flex-col gap-2">
                {
                  data.education.map((elm,idx)=>(
                    <div key={idx} className=" flex flex-col gap-1 ">
                      <div className="flex sm:flex-row flex-col sm:justify-between gap-5">
                        <input type="text" value={elm.major} onChange={(e)=>{
                          const temp = [...data.education];
                          temp[idx] = e.target.value;
                          handleChange('education',temp)
                        }} className=" w-full pl-2 uppercase font-bold text-[0.7rem] sm:text-[1rem] " style={{color : data.textColor}}/>

                        <input type="date" value={elm.date} onChange={(e)=>{
                          const temp = [...data.education];
                          temp[idx] = e.target.value;
                          handleChange('education',temp)
                        }} className="pl-2 bg-gray-100 border-2 border-gray-200" />
                      </div>
                       <input type="text" value={elm.institute} onChange={(e)=>{
                          const temp = [...data.education];
                          temp[idx] = e.target.value;
                          handleChange('education',temp)
                        }} className=" w-full pl-2" />

                        <button className="place-self-start p-1 text-red-500" onClick={()=>remove('education',idx)}>Remove</button>
                    </div>
                  ))
                }

                <button className="place-self-start p-1 font-bold text-blue-900" onClick={()=>add('education',{
                          major : "Enter your major",
                          date : "xxxx",
                         institute : "enter the institution name"
                      })}>+Add</button>
              </div>
            </div>


            {/* Skills */}
            <div className="flex  w-full sm:flex-row flex-col justify-around border-gray-300 border-b-2 pb-5">
              <h1 className="w-full sm:w-[25%] text-[1.5rem] capitalize font-bold " style={{color : data.textColor}}>Skills</h1>
              <div className="flex flex-col w-full sm:w-[70%] gap-5">
                  <div className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  pl-3">
                  {
                  data.skills.map((elm,idx)=>(
                    <div  key={idx}>
                      <input type="text" value={elm} onChange={(e) => {
                      const temp = [...data.skills];
                      temp[idx] = e.target.value
                      handleChange('skills',temp)
                    }} size={elm.length} className=" text-center  bg-gray-200 rounded-full" style={{border :` 1px solid ${data.textColor}`}} />
                      <button className="place-self-start p-1 text-red-500" onClick={()=>remove('skills',idx)}>x</button>
                    </div>
                  ))
                }
                
                    </div>
                    <button className="place-self-start p-1 font-bold text-blue-900" onClick={()=>add('skills',"New skill")}>+Add</button>
              </div>
            </div>


            {/* experience*/}
            <div className="flex sm:flex-row flex-col w-full justify-around border-gray-300 border-b-2 pb-5">
              <h1 className=" w-full sm:w-[25%] text-[1.5rem] font-bold " style={{color : data.textColor}}>Experience</h1>
              <div className=" p-2 w-full sm:w-[70%] flex flex-col gap-2">
                {
                  data.experience.map((elm,idx)=>(
                    <div key={idx} className=" flex flex-col gap-1 ">
                      <div className="flex sm:flex-row flex-col sm:justify-between gap-5">
                        <input type="text" value={elm.company} onChange={(e)=>{
                          const temp = [...data.experience];
                          temp[idx] = e.target.value;
                          handleChange('experience',temp)
                        }} className=" w-full pl-2 uppercase font-bold text-[0.7rem] sm:text-[1rem] " style={{color : data.textColor}}/>

                        <input type="date" value={elm.date} onChange={(e)=>{
                          const temp = [...data.experience];
                          temp[idx] = e.target.value;
                          handleChange('experience',temp)
                        }} className="pl-2 bg-gray-100 " />
                      </div>
                       <input type="text" value={elm.position} onChange={(e)=>{
                          const temp = [...data.experience];
                          temp[idx] = e.target.value;
                          handleChange('experience',temp)
                        }} className=" w-full text-[0.7rem] sm:text-[1rem]  pl-2" />

                        <textarea placeholder={elm.desc} onChange={(e)=>{
                          const temp = [...data.experience];
                          temp[idx] = e.target.value;
                          handleChange('experience',temp)
                        }} className="resize-none mt-2 text-justify p-1 min-h-[200px] sm:min-h-[160px] md:min-h-[300px]   xl:min-h-[280px]   text-[0.7rem] md:text-[1rem]  bg-gray-100"></textarea>

                        <button className="place-self-start p-1 text-red-500" onClick={()=>remove('experience',idx)}>Remove</button>
                    </div>
                  ))
                }

                <button className="place-self-start p-1 font-bold text-blue-900" onClick={()=>add('experience', {
                    company : "Company name ",
                    date : "xxxx",
                    position: "Enter The poistion",
                    desc: "Enter our experience in that company and elaborate your responsiblility................."
        
                  })}>+Add</button>
              </div>
            </div>


            {/* Projects*/}
            <div className="flex sm:flex-row flex-col w-full justify-around border-gray-300 border-b-2 pb-5">
              <h1 className=" w-full sm:w-[25%] text-[1.5rem] font-bold" style={{color : data.textColor}}>Projects</h1>
              <div className=" p-2 w-full sm:w-[70%] flex flex-col gap-2">
                {
                  data.project.map((elm,idx)=>(
                    <div key={idx} className=" flex flex-col gap-1 ">
                        <input type="text" value={elm.name} onChange={(e)=>{
                          const temp = [...data.project];
                          temp[idx] = e.target.value;
                          handleChange('project',temp)
                        }} className=" w-full pl-2 uppercase text-[0.7rem] sm:text-[1rem]  font-bold " />

                        <textarea placeholder={elm.desc} rows={5} onChange={(e)=>{
                          const temp = [...data.project];
                          temp[idx] = e.target.value;
                          handleChange('project',temp)
                        }} className="resize-none mt-2 text-justify  text-[0.7rem] md:text-[1rem]  p-1 bg-gray-100"></textarea>

                        <button className="place-self-start p-1 text-red-500" onClick={()=>remove('project',idx)}>Remove</button>
                    </div>
                  ))
                }

                <button className="place-self-start p-1 font-bold text-blue-900" onClick={()=>add('project', {
                  name : "Project Name",
                  desc: "Enter the project description ..........."    
                  })}>+Add</button>
              </div>
            </div>




            {/* Reference */}
            <div className="flex sm:flex-row flex-col w-full justify-around pb-2">
              <h1 className=" w-full sm:w-[25%] text-[1.5rem] font-bold "style={{color : data.textColor}}>Reference</h1>
              <div className=" p-2 w-full sm:w-[70%] flex flex-col gap-1">
                {
                  data.reference.map((elm,idx)=>(
                    <div key={idx} className=" flex sm:flex-row flex-col sm:justify-between gap-2 border border-blue-300 ">
                        <input type="text" value={elm.name} onChange={(e)=>{
                          const temp = [...data.reference];
                          temp[idx] = e.target.value;
                          handleChange('reference',temp)
                        }} className=" w-full pl-2 uppercase bg-gray-100 text-[0.7rem] sm:text-[0.9rem]  font-bold " />

                       <input type="text" value={elm.domain} onChange={(e)=>{
                          const temp = [...data.reference];
                          temp[idx] = e.target.value;
                          handleChange('reference',temp)
                        }} className=" w-full pl-2" />

                         <input type="text" value={elm.email} onChange={(e)=>{
                          const temp = [...data.reference];
                          temp[idx] = e.target.value;
                          handleChange('reference',temp)
                        }} className=" w-full pl-2" />

                        <button className="place-self-start p-1 text-red-500" onClick={()=>remove('reference',idx)}>Remove</button>
                    </div>
                  ))
                }

                <button className="place-self-start p-1 font-bold text-blue-900" onClick={()=>add('reference',{
                     name : "name",
                     domain : "profession..",
                     email : "email...."
                     })}>+Add</button>
              </div>
            </div>


            

            


          </div> 
        </div>
        
    </>
  )
}

export default App
