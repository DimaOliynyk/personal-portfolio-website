import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className=" m-auto"> 
        <div className="flex flex-row bg-[#292F36] h-[70px] justify-between pt-[25px] text-white">
          <p className="w-[50%]"><span className="text-[#12F7D6]">&lt;C/&gt;</span> SinanTokmak</p>

          <div className="flex flex-row justify-between w-[50%]">
            <p className="text-[#12F7D6]">Home</p>
            <p>Blogs</p>
            <div className="w-[50px] h-[50px]"/>
          </div>
        </div>

        <hr className="h-0.5 bg-black border-0 opacity-[0.2]" />
      </header>


      <main className="bg-[#292F36] w-[100%] h-screen pt-[50px]">
        <div className="w-[320px] h-[520px] border border-white rounded-tl-[150px] rounded-br-[150px] m-auto flex flex-col">
            <div className="ml-auto mr-auto mt-[50px] text-center">
              <img className="w-[100px] h-[100px] m-auto" src="/"/>
              <p className="mt-[20px]">Dmytro</p>
              <p>Full-stack developer</p>
            </div>
            <div>
              <div className="flex flex-row">
                <img  className="w-[14px] h-[14px]" src=""/>
                <p>d.oliynyk@outlook.com</p>
              </div>
              <div className="flex flex-row">
                <img  className="w-[14px] h-[14px]" src=""/>
                <p>d.oliynyk@outlook.com</p>
              </div>
              <div className="flex flex-row">
                <img  className="w-[14px] h-[14px]" src=""/>
                <p>d.oliynyk@outlook.com</p>
              </div>
              <div className="flex flex-row">
                <img  className="w-[14px] h-[14px]" src=""/>
                <p>d.oliynyk@outlook.com</p>
              </div>
            </div>
            <div>
              <p className=" h-[20px] bg-[#292F36]">HTML</p>
            </div>

            <button>Downaload CV <img src="/Shape.png"/></button>
        </div>


        <div className="mt-[50px]">
          <p className="text-[#12F7D6]">&lt;h1&gt;</p>
          <div className="ml-[30px] text-white text-[20px]">
            <p>Hey</p>
            <p>I'm <span className="text-[#12F7D6]">Dima</span>,</p>
            <p>Full-stack developer</p>
          </div>
          <p className="text-[#12F7D6]">&lt;/h1&gt;</p>   
        </div>
      </main>
    </>
  );
}
