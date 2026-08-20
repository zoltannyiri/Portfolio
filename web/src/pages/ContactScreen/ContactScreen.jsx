import { useState } from "react"

import { PropagateLoader } from "react-spinners";
import { MdOutlineEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageContext"

const ContactScreen = () => {
  const { t } = useLanguage()
  const [emailAddress, setEmailAddress] = useState("")
  const [fullName, setFullName] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("")
  const [loading, setLoading] = useState(false)
  const [sendStatus, setSendStatus] = useState(null)

  const emailSender = async () => {
    setLoading(true)
    setSendStatus(null)

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

      if (response.ok) {
        setSendStatus("success")
      } else {
        setSendStatus("error")
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSendStatus("error")
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080d15] pb-12 pt-24 sm:pt-32 lg:pt-40">
      {/* <AnimatedBackground /> */}
      
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className=" absolute left-1/2 top-[38%] h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/[0.08] blur-[180px] "/>
        <div className=" absolute left-1/2 top-[48%] h-[650px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/[0.04] blur-[160px] " />
      </div>

      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-center *:mx-auto sm:px-6">
          <div className="text-3xl font-bold leading-tight text-teal-400 sm:text-4xl lg:text-5xl">
            {t("Vedd fel velem a kapcsolatot!")}
          </div>

          <div className="mt-5 items-center justify-center text-center text-base leading-relaxed text-gray-400 sm:mt-8 sm:text-xl lg:text-2xl">
            {t("Ötleteid vannak, melyeket megvalósítanál?")} <br /> {t("Vagy szeretnél együtt dolgozni velem? Ne habozz, írj nekem!")}
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-10 px-4 sm:mt-10 sm:px-6 lg:grid-cols-2 lg:gap-15">
          <div className="md:grid-cols-1">
            <div className="text-[#FAF9F6] text-2xl font-bold">
              {t("Dolgozzunk együtt!")}
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

                  <span className="break-all text-sm text-gray-400">
                    zoltan.nyiri02@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-gray-700 opacity bg-[#162029] px-6 py-6">
              <div className="flex items-center gap-5">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>

                <span className="text-white font-bold">
                  {t("Nyitott vagyok új lehetőségekre")}
                </span>
              </div>
              
              <div className="text-gray-400 text-sm mt-3">
                {t("Teljes állású vagy projekt alapú együttműködés")}
              </div>
            </div>

          </div>

          <div className="md:grid-cols-2">
            <div className="*:mx-auto mx-auto max-w-2xl">
              <div className="text-[#FAF9F6] text-sm font-bold">
                {t("Név")}
              </div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t("Teljes neved")}
                className="mt-2 w-full rounded-lg border border-gray-900 bg-[#070b14] px-4 py-2 text-white placeholder-gray-400 focus:border-teal-400 focus:ring focus:ring-teal-400/20"
              />
              <div className="text-[#FAF9F6] text-sm font-bold mt-5">
                Email
              </div>
              <input
                type="text"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder={t("email@pelda.com")}
                className="mt-2 w-full rounded-lg border border-gray-900 bg-[#070b14] px-4 py-2 text-white placeholder-gray-400 focus:border-teal-400 focus:ring focus:ring-teal-400/20"
              />
              <div className="text-[#FAF9F6] text-sm font-bold mt-5">
                {t("Tárgy")}
              </div>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={t("Tárgy")}
                className="mt-2 w-full rounded-lg border border-gray-900 bg-[#070b14] px-4 py-2 text-white placeholder-gray-400 focus:border-teal-400 focus:ring focus:ring-teal-400/20"
              />
              <div className="text-[#FAF9F6] text-sm font-bold mt-5">
                {t("Üzenet")}
              </div>
              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("Üzenet")}
                className="mt-2 w-full resize-y rounded-lg border border-gray-900 bg-[#070b14] px-4 py-3 text-white placeholder-gray-400 focus:border-teal-400 focus:ring focus:ring-teal-400/20"
              />
            </div>
            <button onClick={emailSender}
              disabled={loading}
              className="cursor-pointer min-w-full mt-8 h-11 inline-flex items-center justify-center rounded-lg text-sm font-bold bg-teal-500 px-4 py-3 text-center text-black hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
            >
              {loading ? (
                <PropagateLoader />
              ) : sendStatus === "success" ? (
                <div className="text-green-800 font-semibold">
                  {t("Email sikeresen elküldve!")}
                </div>
              ) : sendStatus === "error" ? (
                <div className="text-red-400 font-semibold">
                  {t("Hiba történt az email küldése közben.")}
                </div>
              ) : (
                <div>
                  <FiSend className="inline mr-2 text-green-200" /> {t("Email küldése")}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactScreen
