import {React,useState} from 'react'
 

function Navbar() {
  const[firstName,setfirstName]=useState("");
  const[SecondName,setSecondName]=useState("");
  const[Email,setEmail]=useState("");
  const[Contact,setContact]=useState("");
  const[Gender,setGender]=useState("male");
  const[Subject,setSubject]=useState("Physics")
  const[resume,setResume]=useState("");
  const[url,setUrl]=useState();
  const[selectedOption,setSelectedOption]=useState("");
  const[text,setText]=useState("");
  const handleReset = () => {
        // Reset all state variables here
         setfirstName("");
         setLastName("");
         setEmail("");
         setContact("");
         setGender("male");
         setSubject({
             english: true,
             maths: false,
             physics: false,
         });
         setResume("");
         setUrl("");
         setSelectedOption("");
         setAbout("");
     };
     const handleSubmit =()=>{
      console.log(
        firstName,
        SecondName,
        Email,
        Contact,
        Gender,
        Subject,
        resume,
        url,
        about

      )
     }

  return (
    <div className="App">
      <h1>Contact Form</h1>
      <fieldset>
        <form action="#">
          <label >
            First Name*  </label>
            <input
            type="text"
            name="first name"
            id="firstname"
            value={firstName}
            onChange={(e)=>
             setfirstName(e.target.value) 
            }
            placeholder='Enter first Name'
            required
            />
            <label htmlFor="SecondNAme">Second Name*</label>
            <input
            type='text'
            name="secondName"
            id="SecondName"
            value={SecondName}
            onChange={(e)=>
              setSecondName(e.target.value)
            }
            placeholder='Enter Second Name'
            required
            />
            <label htmlFor="email">Email*</label>
            <input
            type="email"
            name='Email'
            id="Email"
            value={Email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
            placeholder="Enter Your Email"
            required
            />
            <label htmlFor="Tel"> Contact No*</label>
            <input
            type="tel"
            name='tel'
            id='tel'
            value={Contact}
            onChange={(e)=>
              setContact(e.target.value)
            }
            placeholder='Enter Your Contact Number'
            required
            />
            <label htmlFor="Gender">Gender</label>
            <input
            type="radio"
            id="male"
            name="male"
            value="male"
            checked={Gender==="male"}
            onChange={()=>
              setGender(e.target.value)
            }
            
            
            />
            Male
            
            <input
            type="radio"
            id="female"
            name="female"
            value="female"
            checked={Gender==="female"}
            onChange={(e)=>
              setGender(e.target.value)

            }
            />
            Female
         
            <input
            type="radio"
            id="others"
            name="others"
            value="others"
            checked={Gender==="others"}
            onChange={(e)=>
              setGender(e.target.value)
            }
            />
            Other
            <label htmlFor="subject">Your Favourite Subject</label>
            <input
            type="checkbox"
            id="Physics"
            name="Physics"
            value="Physics"
            checked={Subject==="Physics"}
            onChange={(e)=>
              setSubject(e.target.value)
            }
            />
            Physics
            <input
            type="checkbox"
            id="Chemistry"
            name="Chemistry"
            value="Chemistry"
            checked={Subject==="Chemistry"}
            onChange={(e)=>
              setSubject(e.target.value)
            }
            />
            Chemistry
            <input
            type="checkbox"
            id="Maths"
            name="Maths"
            value="Maths"
            checked={Subject==="Maths"}
            onChange={(e)=>
              setSubject(e.target.value)
            }
            />
            Maths
            <label htmlFor="file">Upload Resume*</label>
            <input
            type="file"
            id="resume"
            name="file"
            
            onChange={(e)=>
              setResume(e.target.files[0])
            }
            placeholder="Upload Resume"
            required
            />
            <label htmlFor="urk"> Enter URL*</label>
            <input
            type="url"
            id="url"
            name="url"
           
            onChange={(e)=>
              setUrl(e.target.value)
            }
            placeholder="Enter Url Here"
            required
            />
            <label>Select Your Choice*</label>
            <select
             name="select"
             id="select"
             value={selectedOption}
             onChange={(e)=>
              setSelectedOption(e.target.value)
             }
            >
              <option
              value=""
              disabled
              selected={selectedOption===""}
              > Select Your Option
              </option>
              <optgroup label="Beginner">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">JavaScript</option>
              </optgroup>
              <optgroup label="Intermediate">
                <option value="4">React</option>
                <option>NodeJs</option>
              </optgroup>
             
            </select>
            <label htmlFor="about">About</label>
            <textarea
             id="about"
             rows="10"
             col="30"
             value={text}
             onChange={(e)=>
              setText(e.target.value)
             }
             placeholder="About"
             required
            ></textarea>
            <button className="bg-green-300"
            type="reset"
            value="reset"
            onClick={()=> handleReset}
            >Reset</button>
            <button 
            type="submit"
            value="submit"
            onClick={(e)=> handleSubmit(e)
            }
            >Submit</button>
            
        
        </form>
      </fieldset>
      
    </div>
  )
}

export default Navbar
