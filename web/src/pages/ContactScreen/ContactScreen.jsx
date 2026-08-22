import { useState } from "react"
import { PropagateLoader } from "react-spinners"
import { MdOutlineEmail } from "react-icons/md"
import { FiSend } from "react-icons/fi"

import { useLanguage } from "../../i18n/LanguageContext"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ErrorMessage = ({ field, message }) => {
  const { t } = useLanguage()

  return message ? (
    <p id={`${field}-error`} className="mt-2 text-sm text-red-400" role="alert">
      {t(message)}
    </p>
  ) : null
}

const ContactScreen = () => {
  const { t } = useLanguage()
  const [emailAddress, setEmailAddress] = useState("")
  const [fullName, setFullName] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("")
  const [website, setWebsite] = useState("")
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [sendStatus, setSendStatus] = useState(null)

  const validateForm = () => {
    const nextErrors = {}
    const trimmedName = fullName.trim()
    const trimmedEmail = emailAddress.trim()
    const trimmedSubject = subject.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName) {
      nextErrors.fullName = "Kérlek, add meg a neved."
    } else if (trimmedName.length < 2 || trimmedName.length > 100) {
      nextErrors.fullName = "A név legalább 2, legfeljebb 100 karakter lehet."
    }

    if (!EMAIL_PATTERN.test(trimmedEmail) || trimmedEmail.length > 254) {
      nextErrors.emailAddress = "Kérlek, adj meg egy érvényes email címet."
    }

    if (!trimmedSubject) {
      nextErrors.subject = "Kérlek, add meg a tárgyat."
    } else if (trimmedSubject.length < 3 || trimmedSubject.length > 150) {
      nextErrors.subject = "A tárgy legalább 3, legfeljebb 150 karakter lehet."
    }

    if (trimmedMessage.length < 10) {
      nextErrors.message = "Kérlek, írj legalább 10 karakteres üzenetet."
    } else if (trimmedMessage.length > 5000) {
      nextErrors.message = "Az üzenet legfeljebb 5000 karakter lehet."
    }

    if (!privacyAccepted) {
      nextErrors.privacyAccepted = "Kérlek, fogadd el az adatkezelési feltételeket."
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSendStatus(null)

    if (!validateForm()) return

    setLoading(true)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          emailAddress: emailAddress.trim(),
          subject: subject.trim(),
          message: message.trim(),
          privacyAccepted,
          website,
        }),
      })

      if (response.ok) {
        setFullName("")
        setEmailAddress("")
        setSubject("")
        setMessage("")
        setWebsite("")
        setPrivacyAccepted(false)
        setErrors({})
        setSendStatus("success")
      } else {
        setSendStatus(response.status === 429 ? "rate-limit" : "error")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSendStatus("error")
    } finally {
      setLoading(false)
    }
  }

  const fieldClass = (field) => `mt-2 w-full rounded-lg border bg-[#070b14] px-4 py-3 text-white outline-none placeholder-gray-500 transition focus:ring-2 ${
    errors[field]
      ? "border-red-400/70 focus:border-red-400 focus:ring-red-400/15"
      : "border-gray-800 focus:border-teal-400 focus:ring-teal-400/20"
  }`

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080d15] pb-16 pt-24 sm:pt-32 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[38%] h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/[0.08] blur-[180px]" />
        <div className="absolute left-1/2 top-[48%] h-[650px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/[0.04] blur-[160px]" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold leading-tight text-teal-400 sm:text-4xl lg:text-5xl">
            {t("Vedd fel velem a kapcsolatot!")}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:mt-8 sm:text-xl lg:text-2xl">
            {t("Ötleteid vannak, melyeket megvalósítanál?")} <br />
            {t("Vagy szeretnél együtt dolgozni velem? Ne habozz, írj nekem!")}
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-10 px-4 sm:mt-10 sm:px-6 lg:grid-cols-2 lg:gap-15">
          <div>
            <h2 className="text-2xl font-bold text-[#FAF9F6]">
              {t("Dolgozzunk együtt!")}
            </h2>

            <a
              href="mailto:zoltan.nyiri02@gmail.com"
              className="mt-5 block rounded-xl border border-gray-800 bg-[#0c121a] px-4 py-4 transition hover:border-teal-400/30"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-400/10">
                  <MdOutlineEmail className="text-2xl text-teal-400" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="font-semibold text-white">Email</span>
                  <span className="break-all text-sm text-gray-400">zoltan.nyiri02@gmail.com</span>
                </div>
              </div>
            </a>

            <div className="mt-5 rounded-xl border border-gray-700 bg-[#162029] px-6 py-6">
              <div className="flex items-center gap-5">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
                <span className="font-bold text-white">{t("Nyitott vagyok új lehetőségekre")}</span>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                {t("Teljes állású vagy projekt alapú együttműködés")}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mx-auto max-w-2xl">
              <div>
                <label htmlFor="fullName" className="text-sm font-bold text-[#FAF9F6]">
                  {t("Név")} <span className="text-teal-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  minLength="2"
                  maxLength="100"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder={t("Teljes neved")}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className={fieldClass("fullName")}
                />
                <ErrorMessage field="fullName" message={errors.fullName} />
              </div>

              <div className="mt-5">
                <label htmlFor="emailAddress" className="text-sm font-bold text-[#FAF9F6]">
                  Email <span className="text-teal-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  maxLength="254"
                  value={emailAddress}
                  onChange={(event) => setEmailAddress(event.target.value)}
                  placeholder={t("email@pelda.com")}
                  aria-invalid={Boolean(errors.emailAddress)}
                  aria-describedby={errors.emailAddress ? "emailAddress-error" : undefined}
                  className={fieldClass("emailAddress")}
                />
                <ErrorMessage field="emailAddress" message={errors.emailAddress} />
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="text-sm font-bold text-[#FAF9F6]">
                  {t("Tárgy")} <span className="text-teal-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  minLength="3"
                  maxLength="150"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder={t("Tárgy")}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={fieldClass("subject")}
                />
                <ErrorMessage field="subject" message={errors.subject} />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-bold text-[#FAF9F6]">
                  {t("Üzenet")} <span className="text-teal-400" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  minLength="10"
                  maxLength="5000"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={t("Üzenet")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={`message-count${errors.message ? " message-error" : ""}`}
                  className={`${fieldClass("message")} resize-y`}
                />
                <div className="mt-2 flex items-start justify-between gap-4">
                  <ErrorMessage field="message" message={errors.message} />
                  <span id="message-count" className="ml-auto shrink-0 text-xs text-gray-500">
                    {message.length}/5000 {t("karakter")}
                  </span>
                </div>
              </div>

              <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-gray-300">
                  <input
                    type="checkbox"
                    required
                    checked={privacyAccepted}
                    onChange={(event) => setPrivacyAccepted(event.target.checked)}
                    aria-invalid={Boolean(errors.privacyAccepted)}
                    aria-describedby="privacy-notice"
                    className="mt-1 h-4 w-4 shrink-0 accent-teal-400"
                  />
                  <span>
                    {t("Az űrlap elküldésével hozzájárulok, hogy a megadott adataimat a kapcsolatfelvétel megválaszolásához kezeljék.")}
                  </span>
                </label>
                <ErrorMessage field="privacyAccepted" message={errors.privacyAccepted} />

                <details id="privacy-notice" className="mt-3 text-sm text-gray-400">
                  <summary className="cursor-pointer font-medium text-teal-400">
                    {t("Adatkezelési tájékoztató")}
                  </summary>
                  <p className="mt-3 leading-6">
                    {t("Az adatkezelő Nyiri Zoltán. A nevet, email címet, tárgyat és üzenetet kizárólag a megkeresés megválaszolására használom. Az adatokat nem értékesítem és nem használom marketingre.")}
                  </p>
                </details>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 inline-flex h-12 min-w-full cursor-pointer items-center justify-center rounded-lg bg-teal-500 px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-[#080d15] disabled:cursor-wait disabled:opacity-70"
            >
              {loading ? (
                <PropagateLoader size={9} color="#071014" />
              ) : (
                <span><FiSend className="mr-2 inline" /> {t("Email küldése")}</span>
              )}
            </button>

            <div className="mt-4 min-h-6 text-center" aria-live="polite">
              {sendStatus === "success" && (
                <p className="font-semibold text-green-400">{t("Email sikeresen elküldve!")}</p>
              )}
              {sendStatus === "error" && (
                <p className="font-semibold text-red-400">{t("Hiba történt az email küldése közben.")}</p>
              )}
              {sendStatus === "rate-limit" && (
                <p className="font-semibold text-amber-400">{t("Túl sok üzenetet küldtél. Kérlek, próbáld újra később.")}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactScreen
