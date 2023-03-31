import sendImg from "../public/send.png"
import Image from "next/image"
import { useRef, useState } from "react"
import { parsePhoneNumber } from "libphonenumber-js"
import Axios from "../helpers/axios"
import $ from "jquery"
import Link from "next/link"
import PhoneInput from "react-phone-number-input"

export default function Footer(props) {
  const phone2Ref = useRef()
  const [sendingNumber, setSendingNumber] = useState(false)
  const [phoneContacts, setPhoneContacts] = useState()
  function scrollTo(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }
  async function sendPhoneForm2() {
    console.log($(phone2Ref.current).val())
    if (sendingNumber) {
      return 0
    }
    setSendingNumber(true)
    try {
      console.log($(phone2Ref.current).val())
      const phoneNumber = parsePhoneNumber($(phone2Ref.current).val())
      console.log(phoneNumber.isValid())
      if (phoneNumber.isValid()) {
        const body = {
          city: props.city ? props.city : "null",
          lat: props.coords ? props.coords[0].toString() : "null",
          lng: props.coords ? props.coords[1].toString() : "null",
          phone: phoneNumber.number.toString(),
        }
        const [err, data] = await Axios.sendPhone(body)
        if (err) {
          setSendingNumber(false)
          alert("Произошла ошибка во время отправки формы")
        }
        if (data) {
          setDataAdded(true)
        }
        return 0
      } else {
        alert("Введите корректный номер телефона")
      }
      console.log(phoneNumber)
    } catch (err) {
      console.log(err)
      alert("Введите корректный номер телефона")
    }
    setSendingNumber(false)
  }
  return (
    <footer className="footer">
      <div className="footerBlocks">
        <div className="footerBl">
          <div className="footerCol">
            <div className="footerColTitle">УСЛУГИ</div>
            <div className="footerColText">
              <Link href="/">Выкуп недвижимости</Link>
            </div>
            <div
              className="footerColText"
              onClick={() => {
                if (props.compareRef) {
                  scrollTo(props.compareRef)
                }
              }}
            >
              Аванс
            </div>
            <div
              className="footerColText"
              onClick={() => {
                if (props.compareRef) {
                  scrollTo(props.compareRef)
                }
              }}
            >
              Обычная продажа
            </div>
            <div
              className="footerColText"
              onClick={() => {
                if (props.compareRef) {
                  scrollTo(props.compareRef)
                }
              }}
            >
              Обмен недвижимости
            </div>
          </div>
          <div className="footerCol">
            <div className="footerColTitle">ОЦЕНКА</div>
            <div
              className="footerColText"
              onClick={() => {
                if (props.calcRef) {
                  scrollTo(props.calcRef)
                }
              }}
            >
              Online — калькулятор
            </div>
            <div className="footerColText">Заказать оценку</div>
          </div>
        </div>
        <div className="footerBl">
          <div className="footerCol">
            <div className="footerColTitle">О КОМАНИИ</div>
            <div
              className="footerColText"
              onClick={() => {
                if (props.aboutRef) {
                  scrollTo(props.aboutRef)
                }
              }}
            >
              Информация
            </div>
            <div className="footerColText">Блог</div>
            <div className="footerColText">Отзывы</div>
          </div>
          <div className="footerCol">
            <div className="footerColTitle">ОБРАТНАЯ СВЯЗЬ</div>
            <div className="footerColConn">
              <PhoneInput
                placeholder="Телефон"
                defaultCountry="RU"
                value={phoneContacts}
                onChange={setPhoneContacts}
                className="footerColConnTel"
                limitMaxLength={10}
                international
                ref={phone2Ref}
              />
              <Image
                src={sendImg}
                className="footerColConnSend"
                onClick={sendPhoneForm2}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footerUnder">© 2010 InvestReal</div>
    </footer>
  )
}
