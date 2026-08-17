import { useState } from "react"

import AnimatedBackground from "../../components/AnimatedBackground"
import { MdOutlineEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const ContactScreen = () => {
  const [emailAddress, setEmailAddress] = useState("")
  const [fullName, setFullName] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
  }

  const emailSender = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          emailAddress,
          subject,
          message,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080d15] pt-24 md:pt-40">
      {/* <AnimatedBackground /> */}
      
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className=" absolute left-1/2 top-[38%] h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/[0.08] blur-[180px] "/>
        <div className=" absolute left-1/2 top-[48%] h-[650px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/[0.04] blur-[160px] " />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center *:mx-auto mx-auto max-w-7xl text-center">
          <div className=" text-teal-400 text-5xl font-bold">
            Vedd fel velem a kapcsolatot!
          </div>

          <div className="text-gray-400 text-2xl mt-10 items-center text-center justify-center">
            Ötleteid vannak, melyeket megvalósítanál? <br></br> Vagy szeretnél együtt dolgozni velem? Ne habozz, írj nekem!
          </div>
        </div>
        <div className="mt-10 mx-auto grid max-w-6xl grid-cols-1 gap-15 px-6 md:grid-cols-2 ">
          <div className="md:grid-cols-1">
            <div className="text-[#FAF9F6] text-2xl font-bold">
              Dolgozzunk együtt!
            </div>
            {/* <div className="text-gray-400 text-md mt-6">
              asd
            </div> */}


            <div className="mt-5 rounded-xl border border-gray-800 bg-[#0c121a] px-4 py-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-400/10">
                  <MdOutlineEmail className="text-2xl text-teal-400" />
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold text-white">
                    Email
                  </span>

                  <span className="text-sm text-gray-400">
                    zoltan.nyiri02@gmail.com
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="md:grid-cols-2">
            <div className="*:mx-auto mx-auto max-w-2xl">
              <div className="text-[#FAF9F6] text-sm font-bold">
                Név
              </div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Teljes neved"
                className="mt-2 w-full rounded-lg border border-gray-900 bg-[#070b14] px-4 py-2 text-white placeholder-gray-400 focus:border-teal-400 focus:ring focus:ring-teal-400/20"
              />
              <div className="text-[#FAF9F6] text-sm font-bold mt-5">
                Email
              </div>
              <input
                type="text"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="email@pelda.com"
                className="mt-2 w-full rounded-lg border border-gray-900 bg-[#070b14] px-4 py-2 text-white placeholder-gray-400 focus:border-teal-400 focus:ring focus:ring-teal-400/20"
              />
              <div className="text-[#FAF9F6] text-sm font-bold mt-5">
                Tárgy
              </div>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Tárgy"
                className="mt-2 w-full rounded-lg border border-gray-900 bg-[#070b14] px-4 py-2 text-white placeholder-gray-400 focus:border-teal-400 focus:ring focus:ring-teal-400/20"
              />
              <div className="text-[#FAF9F6] text-sm font-bold mt-5">
                Üzenet
              </div>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Üzenet"
                className="mt-2 w-full rounded-lg border border-gray-900 bg-[#070b14] px-4 py-2 text-white placeholder-gray-400 focus:border-teal-400 focus:ring focus:ring-teal-400/20"
              />
            </div>
            <a onClick={emailSender}
              className="min-w-full mt-8 inline-block rounded-lg text-sm font-bold bg-teal-500 px-4 py-3 text-center text-black hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
            >
              <FiSend className="inline mr-2" />
              Email küldése
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ContactScreen