"use client";

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
        <div className="flex flex-row bg-[#292F36] h-[70px] justify-between pt-[20px] text-white">
          <a href="/login" className="w-[50%] pt-[5px] md:text-[20px]"><span className="text-[#12F7D6]">&lt;C/&gt;</span> DimaOliinyk</a>

          <a href="https://github.com/DimaOliynyk" target="_blank">
            <img src="./github.svg" className="w-[30px] h-[30px]"/>
          </a>
          
        </div>

        <div className="w-[100%] h-[1px] bg-[#43454D] rounded-xl m-auto"></div>
      </header>


      <main className="bg-[#292F36] w-[100%] pt-[50px] xl:pt-[30px] flex flex-col">
        <p className={`${ubuntu.className} text-[#12F7D6] text-[80px] text-center hidden xl:block m-auto mb-[30px]`}>Developer</p>
        <div className="w-[320px] h-[620px] border border-white rounded-tl-[150px] rounded-br-[150px] m-auto flex flex-col">
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
            <div className="ml-[30px] flex flex-col justify-between mr-[30px]">
              <div className="flex flex-row justify-between mr-[30px]">
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
              <div className="flex flex-row justify-between mr-[30px] mt-[10px]">
                <div className="w-[80px] h-[25px] bg-[#12F7D6] rounded-3xl">
                  <p className="text-center">Node.js</p>
                </div>
                <div className="w-[60px] h-[25px] bg-[#12F7D6] rounded-3xl">
                  <p className="text-center">Next</p>
                </div>
                <div className="w-[50px] h-[25px] bg-[#12F7D6] rounded-3xl">
                  <p className="text-center">Sass</p>
                </div>
              </div>
              <div className="w-[100px] h-[25px] bg-[#12F7D6] rounded-3xl mt-[10px]">
                  <p className="text-center">Tailwind</p>
              </div>
            </div>

            <button className={`pl-[35px] pt-[10px] text-[20px] w-[220px] h-[50px] bg-white rounded-[50px] ml-[30px] mt-[20px] flex flex-row ${ubuntu.className}`} onClick={() => {alert("CV is still in process...((")}}>Download CV <img src="/Shape.png" className="w-[20px] h-[20px] mt-[3px] ml-[10px]"/></button>
        </div>

        <div className="xl:flex xl:flex-row m-auto xl:mb-[50px]">
          <div>
            <div className="mt-[50px] pl-[25px] pr-[25px] md:ml-[50px]">
              <p className="text-[#12F7D6]">&lt;h1&gt;</p>
              <div className={`ml-[30px] text-white text-[30px] md:text-[50px] ${ubuntu.className}`}>
                <p>Hey</p>
                <p>I'm <span className="text-[#12F7D6]">Dima</span>,</p>
                <p>Full-stack developer</p>
              </div>
              <p className="text-[#12F7D6]">&lt;/h1&gt;</p>   
            </div>

            <div className="mt-[50px] pl-[25px] pr-[25px] md:ml-[50px] xl:w-[850px]">
              <p className="text-[#12F7D6]">&lt;p&gt;</p>
              <div className="ml-[30px] text-white text-[15px] w-[280px] md:w-[85%] xl:w-[450px]">
                <p>I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done</p>
              </div>
              <p className="text-[#12F7D6]">&lt;/p&gt;</p>   
            </div>
          </div>
          
          <div className="w-[215px] h-[385px] bg-[#292F36] m-auto mt-[80px] rounded-3xl pt-[48px] pl-[32px] pr-[32px] mb-[60px] shadow-md xl:mr-[50px]">
            <div className="flex flex-row w-[150px] m-auto justify-between mb-[48px]">
              <p className="text-[40px] pt-[0px] text-[#12F7D6]">4</p>
              <p className="ml-[16px] text-white mt-[9px]">Programmming languages</p>
            </div>
            <div className="flex flex-row w-[150px] m-auto justify-between mb-[48px]">
              <p className="text-[40px] pt-[0px] text-[#12F7D6]">6</p>
              <p className="ml-[16px] text-white mt-[9px]">Development Tools</p>
            </div>
            <div className="flex flex-row w-[150px] m-auto justify-between">
              <p className="text-[40px] pt-[0px] text-[#12F7D6]">5</p>
              <p className="ml-[16px] text-white mt-[9px]">Years of Experience</p>
            </div>
            
          </div>
        </div>

        <div className="h-[1300px] xl:h-[680px] w-full bg-[url('/bgaboutme.svg')] bg-[#1A1E23]/100 bg-cover ">  
          <div className="m-auto w-[225px] md:w-[368px] h-[70px] md:h-[105px] bg-[#292F36] rounded-tl-[50px] rounded-br-[50px] mt-[50px] border-[3px] border-[#12F7D6] md:ml-[74px] xl:m-auto xl:mt-[50px]">
            <p className="text-center pt-[10px] md:pt-[5px] text-white text-[30px] md:text-[60px]">About Me</p>
          </div>

          <div className="xl:flex xl:flex-row xl:m-auto xl:w-[1440px]">
            <div className="h-[600px] md:h-[420px] w-[350px] md:w-[620px] bg-[#292F36] m-auto md:ml-[74px] rounded-3xl mt-[40px]">
              <div className="pt-[20px] pl-[25px] pr-[25px]">
                <p className="text-[#12F7D6]">&lt;p&gt;</p>
                <div className="ml-[0px] mt-[10px] text-white text-[15px] w-[280px] md:w-[540px]">
                  <p className="text-[#12F7D6] text-[30px]">Hello!</p>
                  <p className="mb-[10px] mt-[10px]">My name is Dima and I specialize in web developement that utilizes <span className="text-[#12F7D6]">HTML, CSS, JS, and REACT etc. </span></p>
                  <p className="mb-[10px]">I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.</p>
                  <p className="mb-[10px]">When I'm not coding, <span className="text-[#12F7D6]">I am writing bolgs</span>, reading, or picking up some new hands-on art project like <span>photography.</span></p>
                  <p className="mb-[10px]">I like to have my perspective and belief systems challenged so that I see the world through new eyes.</p>
                
                </div>
                <p className="text-[#12F7D6]">&lt;/p&gt;</p>   
              </div>
            </div>

            <img src="./aboutme.png" className="m-auto mt-[65px] md:w-[460px] md:h-[560px] lg:ml-[80px] xl:h-[420px] xl:mt-[40px] xl:mr-[140px] xl:ml-[0px]"/>
          </div>
        </div>

        <div className="h-[1100px] w-full pt-[65px] bg-[url('/skillbgimg.jpg')] bg-cover bg-center bg-[#292F36]/100 bg-blend-overlay">
        
          <div className="m-auto pb-[65px]">
            <p className={`text-center text-[60px] text-[#12F7D6] ${ubuntu.className}`}>Skills</p>

            <img src="./line.png" className="m-auto"/>

            <p className="text-white text-center mt-[20px] w-[270px] m-auto">I am striving to never stop learning and improving</p>
          </div>

          <div className="md:flex md:flex-row">
            <div className="w-[290px] h-[130px] bg-[#98FAEC] m-auto rounded-xl text-center flex flex-row mb-[32px] md:mr-0 md:mb-0">
              <div className="w-[10px] h-[130px] bg-[#0C73B8] rounded-tl-xl rounded-bl-xl"></div>

              <div className="m-auto">
                <img src="./laptop.png" className="m-auto pt-[5px]"/>
                <p className={`text-[20px] mt-[10px]`}>Web Development</p>
                <p className="mt-[5px] text-[15px] text-[#43454D]">HTML·CSS·JS·REACT</p>
              </div>
            </div>

            <div className="w-[290px] h-[130px] bg-[#98FAEC] m-auto rounded-xl text-center flex flex-row md:ml-[30px]">
              <div className="w-[10px] h-[130px] bg-[#0C73B8] rounded-tl-xl rounded-bl-xl"></div>

              <div className="m-auto">
                <img src="./icon-smartphone.svg" className="m-auto pt-[5px]"/>
                <p className={`text-[20px] mt-[10px]`}>App Development</p>
                <p className="mt-[5px] text-[15px] text-[#43454D]">iOS·Android</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-[90px]">
            <div className="flex flex-row justify-between m-auto w-[290px] md:w-[350px]">
              <div className="w-[112px] md:w-[144px] md:mr-[100px]">
                <img src="./htmlicon.svg" className="md:w-[144px]"/>
                <p className="text-[#E54F26] text-[25px] text-center font-medium mt-[20px]">HTML</p>
              </div>
              <div className="w-[112px] md:w-[144px] ">
                <img src="./cssicon.svg" className="md:w-[144px]"/>
                <p className="text-[#0C73B8] text-[25px] text-center font-medium mt-[20px]">CSS</p>
              </div>
            </div>
            <div className="flex flex-row justify-between m-auto mt-[40px] w-[290px] md:w-[350px]">
              <div className="w-[112px] md:w-[144px] md:mr-[100px]">
                <img src="./jsicon.svg" className="md:w-[144px]"/>
                <p className="text-[#E7A020] text-[25px] text-center font-medium mt-[20px]">JS</p>
              </div>
              <div className="w-[112px] md:w-[144px]">
                <img src="./reacticon.svg" className="md:w-[144px]"/>
                <p className="text-[#28A9E0] text-[25px] text-center font-medium mt-[20px]">REACT</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-[#292F36]">
          <div className="m-auto pb-[65px] pt-[65px]">
            <p className={`text-center text-[60px] text-[#12F7D6] ${ubuntu.className}`}>Works</p>

            <img src="./line.png" className="m-auto"/>

            <p className="text-white text-center mt-[20px] w-[270px] m-auto">I had the pleasure of working with these awesome projects</p>
          </div>

          <div className="flex flex-col max-w-[425px] m-auto h-[1050px] block">
            <div>
              <h3 className={`text-center text-white text-[26px] ${ubuntu.className}`}>Solo App Planer</h3>
              <p className="text-center text-[15px] w-[300px] m-auto text-[#E9E9E9] mt-[10px] mb-[10px] ">Solo Plan is a lightweight productivity app designed to help you manage tasks with ease.</p>
              
              <div className="flex flex-row mt-[15px] mb-[15px] ml-[30px] mr-[30px] justify-between ">
                <img src="./Login.png" className="w-[100px] h-[200px] rounded-[5px]"/>
                <img src="./Homepage- With Data.png" className="w-[100px] h-[200px] rounded-[5px]"/>
                <img src="./Schedule.png" className="w-[100px] h-[200px] rounded-[5px]"/>
              </div>
              <div className="flex flex-row m-auto mt-[30px]">
                <a href="https://github.com/DimaOliynyk/solo-plan" target="_blank" className="m-auto mr-[0px]  w-[50px] h-[50px] rounded-xl bg-white">
                  <img src="./icons8-github-96.png" className="w-[40px] h-[40px] m-auto mt-[5px]"/>
                </a>
                <a href="https://solo-plan-eight.vercel.app/login" target="_blank" className="m-auto w-[50px] h-[50px] ml-[15px] rounded-xl bg-white">
                  <img src="./icons/icons8-hyperlink-96.png" className="w-[40px] h-[40px] m-auto ml-[5px] mt-[5px]"/>
                </a>
              </div>
            </div>

            <div className="w-[80%] h-[1px] bg-[#43454D] rounded-xl m-auto mt-[30px] mb-[30px]"></div>

            <div className="">
              <h3 className={`text-center text-white text-[26px] ${ubuntu.className}`}>Vegetables Shop</h3>
              <p className="text-center text-[15px] w-[300px] m-auto text-[#E9E9E9] mt-[10px] mb-[10px] ">A simple and inviting website built for a regional produce vendor, showcasing seasonal goods and easy-to-find service information.</p>
              
              <div className="flex flex-row mt-[15px] mb-[15px] ml-[30px] mr-[30px] justify-between ">
                <img src="./portfolio/photo1-fuerstenberg.jpg" className="w-[100px] h-[200px] rounded-[5px]"/>
                <img src="./portfolio/photo2-fuerstenberg.jpg" className="w-[100px] h-[200px] rounded-[5px]"/>
                <img src="./portfolio/photo3-fuerstenberg.jpg" className="w-[100px] h-[200px] rounded-[5px]"/>
              </div>
              <div className="flex flex-row m-auto mb-[20px] mt-[30px]">
                <a href="https://fuerstenberg-langballig.de/" target="_blank" className="m-auto w-[50px] h-[50px] rounded-xl bg-white">
                  <img src="./icons/icons8-hyperlink-96.png" className="w-[40px] h-[40px] m-auto ml-[5px] mt-[5px]"/>
                </a>
              </div>
              
              
            </div>
          </div>
        </div>
      </main>

      <footer className={`bg-[#292F36] h-[100px] ${ubuntu.className} p-6`}>
        <div className="w-[80%] h-[1px] bg-[#43454D] rounded-xl m-auto"></div>
        <p className="text-center text-white mt-[15px] mb-[10px] ">Design by JohannLeon</p>
      </footer>
    </>
  );
}
