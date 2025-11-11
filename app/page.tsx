import Image from "next/image";
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'], // choose what you need
})


export default function Home() {
  return (
    <>
      <header className="pl-[25px] pr-[25px] m-auto"> 
        <div className="flex flex-row bg-[#292F36] h-[70px] justify-between pt-[25px] text-white">
          <p className="w-[50%]"><span className="text-[#12F7D6]">&lt;C/&gt;</span> DimaOliinyk</p>

          <div className="flex flex-row justify-between w-[50%]">
            {/* <p className="text-[#12F7D6]">Home</p>
            <p>Blogs</p> */}
            <div className="w-[50px] h-[50px]"/>
          </div>
        </div>

        <div className="w-[100%] h-[1px] bg-[#43454D] rounded-xl m-auto"></div>
      </header>


      <main className="bg-[#292F36] w-[100%] pt-[50px] flex flex-col flex-grow">
        <div className="w-[320px] h-[540px] border border-white rounded-tl-[150px] rounded-br-[150px] m-auto flex flex-col">
            <div className="ml-auto mr-auto mt-[50px] text-center">
              <img className="w-[100px] h-[100px] m-auto" src="./profile.png"/>
              <p className={`mt-[20px] text-white text-[30px] ${ubuntu.className}`}>Dmytro</p>
              <p className="text-center text-white">Full-stack developer</p>
            </div>
            <div className="mt-[25px] ml-[30px]">
              <div className="flex flex-row mb-[15px]">
                <img  className="w-[14px] h-[14px] mt-[5px]" src="./icon-mail.png"/>
                <p className="text-white ml-[20px]">d.oliynyk@outlook.com</p>
              </div>
              <div className="flex flex-row mb-[15px]">
                <img  className="w-[14px] h-[14px] mt-[5px]" src="./icon-mail.png"/>
                <p className="text-white ml-[20px]">Germany</p>
              </div>
              <div className="flex flex-row mb-[15px]">
                <img  className="w-[14px] h-[14px] mt-[5px]" src="./icon-mail.png"/>
                <p className="text-white ml-[20px]">Freelancer</p>
              </div>
              <div className="flex flex-row mb-[15px]">
                <img  className="w-[14px] h-[14px] mt-[5px]" src="./icon-mail.png"/>
                <p className="text-white ml-[20px]">www.dimaoliinyk.com</p>
              </div>
            </div>
            <div className="ml-[30px] flex flex-row justify-between mr-[30px]">
              <div className="w-[50px] h-[25px] bg-[#12F7D6] rounded-3xl">
                <p className="text-center">HTML</p>
              </div>
              <div className="w-[40px] h-[25px] bg-[#12F7D6] rounded-3xl">
                <p className="text-center">Js</p>
              </div>
              <div className="w-[50px] h-[25px] bg-[#12F7D6] rounded-3xl">
                <p className="text-center">Css</p>
              </div>
              <div className="w-[60px] h-[25px] bg-[#12F7D6] rounded-3xl">
                <p className="text-center">React</p>
              </div>
            </div>

            <button className={`pl-[35px] pt-[10px] text-[20px] w-[220px] h-[50px] bg-white rounded-[50px] ml-[30px] mt-[20px] flex flex-row ${ubuntu.className}`}>Download CV <img src="/Shape.png" className="w-[20px] h-[20px] mt-[3px] ml-[10px]"/></button>
        </div>


        <div className="mt-[50px] pl-[25px] pr-[25px]">
          <p className="text-[#12F7D6]">&lt;h1&gt;</p>
          <div className={`ml-[30px] text-white text-[30px] ${ubuntu.className}`}>
            <p>Hey</p>
            <p>I'm <span className="text-[#12F7D6]">Dima</span>,</p>
            <p>Full-stack developer</p>
          </div>
          <p className="text-[#12F7D6]">&lt;/h1&gt;</p>   
        </div>

        <div className="mt-[50px] pl-[25px] pr-[25px]">
          <p className="text-[#12F7D6]">&lt;p&gt;</p>
          <div className="ml-[30px] text-white text-[15px] w-[280px]">
            <p>I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done</p>
          </div>
          <p className="text-[#12F7D6]">&lt;/p&gt;</p>   
        </div>
        
        <div className="w-[215px] h-[385px] bg-[#292F36] m-auto mt-[80px] rounded-3xl pt-[48px] pl-[32px] pr-[32px] mb-[60px] shadow-md">
          <div className="flex flex-row w-[150px] m-auto justify-between mb-[48px]">
            <p className="text-[40px] pt-[0px] text-[#12F7D6]">4</p>
            <p className="ml-[16px] text-white mt-[9px]">Programmming languages</p>
          </div>
          <div className="flex flex-row w-[150px] m-auto justify-between mb-[48px]">
            <p className="text-[40px] pt-[0px] text-[#12F7D6]">6</p>
            <p className="ml-[16px] text-white mt-[9px]">Development Tools</p>
          </div>
          <div className="flex flex-row w-[150px] m-auto justify-between">
            <p className="text-[40px] pt-[0px] text-[#12F7D6]">8</p>
            <p className="ml-[16px] text-white mt-[9px]">Years of Experience</p>
          </div>
          
        </div>

        <div className="h-[1300px] w-full bg-[url('/bgaboutme.svg')] bg-[#1A1E23]/100 bg-cover">  
          <div className="m-auto w-[225px] h-[70px] bg-[#292F36] rounded-tl-[50px] rounded-br-[50px] mt-[50px] border-[3px] border-[#12F7D6]">
            <p className="text-center pt-[10px] text-white text-[30px]">About Me</p>
          </div>

          <div className="h-[600px] w-[350px] bg-[#292F36] m-auto rounded-3xl mt-[40px]">
            <div className="pt-[20px] pl-[25px] pr-[25px]">
              <p className="text-[#12F7D6]">&lt;p&gt;</p>
              <div className="ml-[0px] mt-[10px] text-white text-[15px] w-[280px]">
                <p className="text-[#12F7D6] text-[30px]">Hello!</p>
                <p className="mb-[10px] mt-[10px]">My name is Dima and I specialize in web developement that utilizes <span className="text-[#12F7D6]">HTML, CSS, JS, and REACT etc. </span></p>
                <p className="mb-[10px]">I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.</p>
                <p className="mb-[10px]">When I'm not coding, <span className="text-[#12F7D6]">I am writing bolgs</span>, reading, or picking up some new hands-on art project like <span>photography.</span></p>
                <p className="mb-[10px]">I like to have my perspective and belief systems challenged so that I see the world through new eyes.</p>
              
              </div>
              <p className="text-[#12F7D6]">&lt;/p&gt;</p>   
            </div>
          </div>

          <img src="./aboutme.png" className="m-auto mt-[65px]"/>
        </div>

        <div className="h-[1100px] w-full pt-[65px] bg-[url('/skillbgimg.jpg')] bg-cover bg-center bg-[#292F36]/100 bg-blend-overlay">
        
          <div className="m-auto pb-[65px]">
            <p className={`text-center text-[60px] text-[#12F7D6] ${ubuntu.className}`}>Skills</p>

            <img src="./line.png" className="m-auto"/>

            <p className="text-white text-center mt-[20px] w-[270px] m-auto">I am striving to never stop learning and improving</p>
          </div>

          <div className="w-[290px] h-[130px] bg-[#98FAEC] m-auto rounded-xl text-center flex flex-row mb-[32px]">
            <div className="w-[10px] h-[130px] bg-[#0C73B8] rounded-tl-xl rounded-bl-xl"></div>

            <div className="m-auto">
              <img src="./laptop.png" className="m-auto pt-[5px]"/>
              <p className={`text-[20px] mt-[10px]`}>Web Development</p>
              <p className="mt-[5px] text-[15px] text-[#43454D]">HTML·CSS·JS·REACT</p>
            </div>
          </div>

          <div className="w-[290px] h-[130px] bg-[#98FAEC] m-auto rounded-xl text-center flex flex-row">
            <div className="w-[10px] h-[130px] bg-[#0C73B8] rounded-tl-xl rounded-bl-xl"></div>

            <div className="m-auto">
              <img src="./icon-smartphone.svg" className="m-auto pt-[5px]"/>
              <p className={`text-[20px] mt-[10px]`}>App Development</p>
              <p className="mt-[5px] text-[15px] text-[#43454D]">iOS·Android</p>
            </div>
          </div>

          <div className="flex flex-col mt-[90px]">
            <div className="flex flex-row justify-between m-auto w-[290px]">
              <div className="w-[112px]">
                <img src="./htmlicon.svg" />
                <p className="text-[#E54F26] text-[25px] text-center font-medium mt-[20px]">HTML</p>
              </div>
              <div className="w-[112px]">
                <img src="./cssicon.svg" />
                <p className="text-[#0C73B8] text-[25px] text-center font-medium mt-[20px]">CSS</p>
              </div>
            </div>
            <div className="flex flex-row justify-between m-auto w-[290px] mt-[40px]">
              <div className="w-[112px]">
                <img src="./jsicon.svg" />
                <p className="text-[#E7A020] text-[25px] text-center font-medium mt-[20px]">JS</p>
              </div>
              <div className="w-[112px]">
                <img src="./reacticon.svg" />
                <p className="text-[#28A9E0] text-[25px] text-center font-medium mt-[20px]">REACT</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full h-[500px] bg-[#292F36]">
          <div className="m-auto pb-[65px] pt-[65px]">
            <p className={`text-center text-[60px] text-[#12F7D6] ${ubuntu.className}`}>Works</p>

            <img src="./line.png" className="m-auto"/>

            <p className="text-white text-center mt-[20px] w-[270px] m-auto">I had the pleasure of working with these awesome projects</p>
          </div>
        </div>
      </main>

      <footer className={`bg-[#292F36] h-[80px] pb-[20px] pt-[20px] ${ubuntu.className} p-6`}>
        <div className="w-[80%] h-[1px] bg-[#43454D] rounded-xl m-auto"></div>
        <p className="text-center text-white mt-[20px]">Design by JohannLeon</p>
      </footer>
    </>
  );
}
