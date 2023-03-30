import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { parsePhoneNumber } from "libphonenumber-js"
import { Typography, FormControl } from "@mui/material"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { Inter } from "next/font/google"
import Image from "next/image"
import Head from "next/head"
import checkGeo from "../helpers/check_geo"
import determineCity from "../helpers/determine_city"
import mainImg from "../public/main.png"
import searchImg from "../public/search.png"
import man1Img from "../public/man1.png"
import man2Img from "../public/man2.png"
import man3Img from "../public/man3.png"
import likeImg from "../public/like.png"
import clockImg from "../public/clock.png"
import graphImg from "../public/graph.png"
import workbookImg from "../public/workbook.png"
import clock2Img from "../public/clock2.png"
import moneyImg from "../public/money.png"
import houseImg from "../public/house.png"
import keysImg from "../public/keys.png"
import starImg from "../public/star.png"
import laptopImg from "../public/laptop.png"
import notebookImg from "../public/notebook.png"
import arrowImg from "../public/arrow.png"
import feedback1Img from "../public/feedback1.png"
import feedback2Img from "../public/feedback2.png"
import feedback3Img from "../public/feedback3.png"
import feedback4Img from "../public/feedback4.png"
import Footer from "../components/Footer"
import $ from "jquery"
import "@/styles/index.module.scss"

const inter = Inter({ subsets: ["latin"] })
const sliderImages = [feedback1Img, feedback2Img, feedback3Img, feedback4Img]
const slider2Images = [feedback1Img, feedback2Img, feedback3Img]

export default function Home() {
  const [geo, setGeo] = useState(null)
  const [coords, setCoords] = useState(null)
  const [city, setCity] = useState(null)
  const [selectedServiceCard, setSelectedServiceCard] = useState(0)
  const [mobile, setMobile] = useState(false)
  const [openedQuestForm, setOpenedQuestForm] = useState(false)
  const [questFormType, setQuestFormType] = useState("Квартира")
  const [sliderIndex, setSliderIndex] = useState(0)
  const [slider2Index, setSlider2Index] = useState(0)
  const [phoneContacts, setPhoneContacts] = useState()
  const [phoneCalc, setPhoneCalc] = useState()
  const realtySailRef = useRef()
  const calcRef = useRef()
  const compareRef = useRef()
  const aboutRef = useRef()
  const phone1Ref = useRef()
  useEffect(() => {
    checkGeoFunc()
    //check geo
    //set international phone num inp
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    setMobile(isMobile)
    setSelectedServiceCard(isMobile ? 0 : -1)
    //check is user from phone
    setTimeout(() => {
      setOpenedQuestForm(true)
    }, 15000)
  }, [])
  async function checkGeoFunc() {
    const geoLocation = await checkGeo()
    setGeo(geoLocation[2] || null)
    console.log(geoLocation)
    setCoords(geoLocation[0] ? [geoLocation[0], geoLocation[1]] : null)
    if (geoLocation[0]) {
      const determinedCity = determineCity(geoLocation[0], geoLocation[1])
      setCity(determinedCity)
    }
  }
  function changeSliderPic(next) {
    if (next) {
      if (sliderIndex + 1 == sliderImages.length) {
        setSliderIndex(0)
      } else {
        setSliderIndex(sliderIndex + 1)
      }
    } else {
      if (sliderIndex == 0) {
        setSliderIndex(sliderImages.length - 1)
      } else {
        setSliderIndex(sliderIndex - 1)
      }
    }
  }
  function scrollTo(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }
  function rangeChange() {
    const slideValue = document.querySelector(".calcRangeValue span")
    const inputSlide = document.querySelector(".calcRangeField input")
    let value = inputSlide.value
    slideValue.textContent = value
    slideValue.style.left = value + "%"
    slideValue.style.transform = "translateX(-75%) scale(1)"
  }
  function sendCalcForm(e) {
    e.preventDefault()
    const body = {
      lat: "null",
      lng: "null",
      city: "Moscow",
      name: "null",
      address: "null",
      typeObject: "null",
      square: "null",
      countRoom: "2",
      phone: "891119191919",
    }
    console.log(body)
  }
  function sendPhoneForm1() {
    console.log($(phone1Ref.current).val())
    const phoneNumber = $(phone1Ref.current).val()
    if (!phoneNumber.isValid()) {
      console.log("Номер телефона валиден")
      alert("Введите корректный номер телефона")
      return 0
    } else {
    }
    console.log(phoneNumber)
  }
  return (
    <>
      <div className="main">
        <Head>
          <title>Центр недвижимости InvestReal</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&family=Roboto:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <Dialog
          open={openedQuestForm}
          onClose={() => {
            setOpenedQuestForm(false)
          }}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle style={{ textAlign: "center" }}>
            Остались вопросы?
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom style={{ textAlign: "center" }}>
              Отправьте форму или позвоните нам и вы узнайте как продать
              квартиру безопасно и выгодно, как быстрее подготовить документы
              для продажи и на какие цены можно ориентироваться.
            </Typography>
            <form noValidate autoComplete="off">
              <div className="questFormTitle">Тип недвижимости</div>
              <select fullWidth label="Квартира" className="questFormInput">
                <option>Квартира</option>
                <option>Комната</option>
                <option>Доля</option>
                <option>Дом</option>
                <option>Земельный участок</option>
                <option>Земельный участок</option>
              </select>
              <div className="questFormTitle">Количество комнат</div>
              <div
                style={{
                  display: "flex",
                  fontSize: "35px",
                  marginTop: "20px",
                  alignItems: "center",
                  fontWeight: "300",
                }}
              >
                <div
                  style={{
                    margin: "0px 10px",
                    cursor: "pointer",
                    display: "none",
                  }}
                  onChange={() => {
                    setQuestRooms(questRooms > 0 ? questRooms - 1 : 0)
                  }}
                >
                  -
                </div>
                <input
                  type="number"
                  className="questFormPlusminusInp"
                  defaultValue={2}
                />
                <div
                  style={{
                    margin: "0px 10px",
                    cursor: "pointer",
                    display: "none",
                  }}
                  onChange={() => {
                    setQuestRooms(questRooms + 1)
                  }}
                >
                  +
                </div>
              </div>
              <TextField
                label="Адрес"
                style={{ marginTop: "20px" }}
                fullWidth
              />
              <PhoneInput
                value={phoneCalc}
                onChange={setPhoneCalc}
                defaultCountry="RU"
                limitMaxLength={10}
                international
                className="questFormTel"
              />
              <input
                className="questFormSend"
                type="submit"
                value="Отправить"
              />
            </form>
            <div className="questFormUnder">
              Нажимая кнопку «Отправить», вы подтверждаете свое согласие на
              обработку персональных данных
            </div>
          </DialogContent>
        </Dialog>
        <header className="headerMain">
          <div className="headerMainTitle">
            <strong>InvestReal</strong>
            <div>Центр недвижимости</div>
          </div>
          <div className="headerMainRight">
            <Image
              src={searchImg}
              alt="поиск"
              onClick={() => {
                scrollTo(realtySailRef)
              }}
            />
            <div
              className="headerMainRightSail"
              onClick={() => {
                scrollTo(calcRef)
              }}
            >
              РАССЧИТАТЬ ЦЕНУ
            </div>
            <div className="headerMainRightConn">
              <Link href="tel: +79113007705">СВЯЗАТЬСЯ</Link>
            </div>
          </div>
        </header>
        <div className="block1">
          <strong>Покупаем недвижимость</strong>
          <div>
            Получите выгодное предложение по цене, и продайте свою недвижимость
            без показов и стресса
          </div>
        </div>
        <div
          className="block1Cities"
          style={{ display: geo != "Ярославль" ? "flex" : "none" }}
        >
          <div>МУРМАНСК</div>
          <div>ЗАТО</div>
          <div>КОЛА</div>
          <div>ОЛЕНЕГОРСК</div>
          <div>МОНЧЕГОРСК</div>
          <div>АПАТИТЫ</div>
        </div>
        <div
          className="block1Cities"
          style={{ display: geo == "Ярославль" ? "flex" : "none" }}
        >
          <div>ЯРОСЛАВЛЬ</div>
          <div>РЫБИНСК</div>
          <div>РОСТОВ</div>
          <div>ТУТАЕВ</div>
        </div>
        <div className="preBackCircle">
          <div className="backCircle">
            <div className="headerMainLogo">
              <strong>InvestReal</strong>
              <div>Центр недвижимости</div>
            </div>
            <div className="backCircleTitle">
              Покупаем <br /> недвижимость
            </div>
            <Image src={mainImg} className="mainImg" alt="main image" />
            <div className="backCircleText">
              Получите выгодное предложение по <br /> цене, и продайте свою
              недвижимость <br />
              без показов и стресса
            </div>
            <div className="backCircleButton">СВЯЗАТЬСЯ</div>
          </div>
        </div>
        <div className="withWork">С какими объектами мы работаем</div>
        <div className="withWorkCards">
          <div className="withWorkCard">
            <div className="withWorkCardText">
              <div className="withWorkCardTextTitle">
                Квартиры с мат. капиталом
              </div>
              <div className="withWorkCardTextText">
                Объясним, какие документы необходимы, как их собрать и законно
                зарегистрировать сделку
              </div>
            </div>
            <Image src={man1Img} className="withWorkCardImg1" alt="" />
          </div>
          <div className="withWorkCard">
            <div className="withWorkCardText">
              <div className="withWorkCardTextTitle">
                Квартиры с долгами ЖКХ
              </div>
              <div className="withWorkCardTextText">
                Наш специалист поможет решить вопрос с задолженностью
              </div>
            </div>
            <Image src={man1Img} className="withWorkCardImg1" alt="" />
          </div>
          <div className="withWorkCard">
            <div className="withWorkCardText">
              <div className="withWorkCardTextTitle">Квартира с ипотекой</div>
              <div className="withWorkCardTextText">
                Помогаем продать недвижимость, которая находится в залоге банка
              </div>
            </div>
            <Image src={man1Img} className="withWorkCardImg1" alt="" />
            <Image src={man2Img} className="withWorkCardImg2" alt="" />
          </div>
          <div className="withWorkCard">
            <div className="withWorkCardText">
              <div className="withWorkCardTextTitle">Долевая собственность</div>
              <div className="withWorkCardTextText">
                При соблюдении условий у Вас не возникнет трудностей с
                совершением сделки
              </div>
            </div>
            <Image src={man1Img} className="withWorkCardImg1" alt="" />
          </div>
        </div>
        <div className="withWorkMobCards">
          <div style={{ display: "flex" }}>
            <div className="withWorkMobCard1">
              <div className="withWorkMobCardTitle">
                Квартиры с мат. капиталом
              </div>
              <div className="withWorkMobCardText">
                Объясним, как законно зарегистрировать сделку
              </div>
              <Image src={man2Img} className="withWorkMobCardImage1" alt="" />
            </div>
            <div>
              <div className="withWorkMobCard2">
                <div className="withWorkMobCardTitle">
                  Квартиры с долгами ЖКХ
                </div>
                <div className="withWorkMobCardText">
                  Решим вопрос с задолженностью
                </div>
              </div>
              <div className="withWorkMobCard2 withWorkMobCard3">
                <div className="withWorkMobCardTitle">Квартира с ипотекой</div>
                <div className="withWorkMobCardText">
                  Купим квартиру в залоге у банка
                </div>
              </div>
            </div>
          </div>
          <div className="withWorkMobCard4">
            <div>
              <div className="withWorkMobCardTitle">Долевая собственность</div>
              <div className="withWorkMobCardText">
                У Вас не возникнет трудностей с совершением сделки
              </div>
            </div>
            <Image src={man3Img} className="withWorkMobCardImage2" alt="" />
          </div>
        </div>
        <div className="realtySailBlock">
          <div ref={realtySailRef}>
            <div className="realtySail">
              Узнайте стоимость своей недвижимости
            </div>
            <div className="realtySailCards">
              <div className="realtySailCard">
                <Image className="realtySailCardImage" src={likeImg} alt="" />
                <div className="realtySailCardTitle">Честная оценка</div>
                <div className="realtySailCardText">
                  Используем более 30 параметров для оценки
                </div>
              </div>
              <div className="realtySailCard">
                <Image className="realtySailCardImage" src={clockImg} alt="" />
                <div className="realtySailCardTitle">Скорость и простота</div>
                <div className="realtySailCardText">
                  Вам не нужно тратить деньги и время для оценки стоимости
                  недвижимости
                </div>
              </div>
              <div className="realtySailCard">
                <Image className="realtySailCardImage" src={graphImg} alt="" />
                <div className="realtySailCardTitle">Реалистичные цены</div>
                <div className="realtySailCardText">
                  Онлайн — оценка показывает среднюю рыночную стоимость
                </div>
              </div>
              <div className="realtySailCard">
                <Image
                  className="realtySailCardImage"
                  src={workbookImg}
                  alt=""
                />
                <div className="realtySailCardTitle">Удобство</div>
                <div className="realtySailCardText">
                  Зная цену своей квартиры Вы сможете планировать покупку нового
                  жилья
                </div>
              </div>
            </div>
          </div>
          <form
            className="calc"
            action=""
            method="post"
            ref={calcRef}
            onSubmit={sendCalcForm}
          >
            <div className="calcTitle">Онлайн — калькулятор</div>
            <select className="calcSelect" name="object">
              <option>Вид объекта</option>
              <option>КВАРТИРА</option>
              <option>КОМНАТА</option>
              <option>ДОЛЯ В КВАРТИРЕ</option>
              <option>КОММЕРЧЕСКАЯ НЕДВИЖМОСТЬ</option>
            </select>
            <input className="calcInp" placeholder="Улица" name="street" />
            <div className="calcSqr">Площадь м2</div>
            <div class="calcRangeBl">
              <div class="calcRangeValue">
                <span>60</span>
              </div>
              <div class="calcRangeField">
                <input
                  type="range"
                  min="10"
                  max="100"
                  defaultValue="60"
                  step="10"
                  onChange={rangeChange}
                />
              </div>
            </div>
            <div className="calcRangeValues">
              <div>10</div>
              <div>100</div>
            </div>
            <input className="calcInp" name="name" placeholder="Ваше имя" />
            <div style={{ marginTop: "10px", width: "100%" }}>
              <PhoneInput
                className="calcTel"
                value={phoneCalc}
                onChange={setPhoneCalc}
                placeholder="Enter phone number"
                defaultCountry="RU"
                limitMaxLength={10}
                international
              />
            </div>
            <br />
            <input type="submit" value="ОТПРАВИТЬ" className="calcButton" />
            <div className="calcWarning">
              Нажимая кнопку «Отправить», вы подтверждаете свое согласие на
              обработку персональных данных
            </div>
          </form>
        </div>
        <div className="services">Услуги компании</div>
        <div className="servicesCards">
          <div className="servicesCard">
            <Image className="servicesCardImage" src={clock2Img} />
            <div className="servicesCardTitle">Выкуп недвижимости</div>
            <div className="servicesCardText">
              90% от рыночной стоимости за 24 часа
            </div>
          </div>
          <div className="servicesCard">
            <Image className="servicesCardImage" src={moneyImg} />
            <div className="servicesCardTitle">Продажа с авансом</div>
            <div className="servicesCardText">
              Аванс в день обращения до 300 000 рублей
            </div>
          </div>
          <div className="servicesCard">
            <Image className="servicesCardImage" src={houseImg} />
            <div className="servicesCardTitle">Продажа объекта</div>
            <div className="servicesCardText">
              100% стоимости квартиры в течение 2х месяцев
            </div>
          </div>
          <div className="servicesCard">
            <Image className="servicesCardImage" src={keysImg} />
            <div className="servicesCardTitle">Обмен недвижимости</div>
            <div className="servicesCardText">
              Выберите новую квартиру взамен старой
            </div>
          </div>
        </div>
        <div className="compare">
          Сравните наши услуги и выберите оптимальное решение
        </div>
        <div
          className="compareButtons"
          style={{ display: mobile ? "flex" : "none" }}
        >
          <div
            className="compareButton"
            style={{
              background: selectedServiceCard == 0 ? "red" : "white",
              color: selectedServiceCard == 0 ? "white" : "red",
            }}
            onClick={() => {
              setSelectedServiceCard(0)
            }}
          >
            ВЫКУП
          </div>
          <div
            className="compareButton"
            style={{
              background: selectedServiceCard == 1 ? "red" : "white",
              color: selectedServiceCard == 1 ? "white" : "red",
            }}
            onClick={() => {
              setSelectedServiceCard(1)
            }}
          >
            ПРОДАЖА
          </div>
          <div
            className="compareButton"
            style={{
              background: selectedServiceCard == 2 ? "red" : "white",
              color: selectedServiceCard == 2 ? "white" : "red",
            }}
            onClick={() => {
              setSelectedServiceCard(2)
            }}
          >
            АВАНС
          </div>
        </div>
        <div className="compareCards" ref={compareRef}>
          <div
            className="compareCard"
            style={{
              display:
                selectedServiceCard == 0
                  ? "block"
                  : selectedServiceCard == -1
                  ? "block"
                  : "none",
            }}
          >
            <div className="compareCardTitle">Срочный выкуп</div>
            <div className="compareCardSubtitle">Деньги после регистрации</div>
            <div className="compareCardText">до 3-х дней</div>
            <div className="compareCardFlexBlock">
              <div
                className="compareCardCircle"
                style={{ backgroundColor: "#7389de" }}
              ></div>
              <div className="compareCardCircleText">
                быстрее от обычной продажи на 100 дней
              </div>
            </div>
            <div className="compareCardSubtitle">Показы квартиры</div>
            <div className="compareCardText">Всего один показ</div>
            <div className="compareCardSubtitle">Коммунальные платежи</div>
            <div className="compareCardText">отсутствуют</div>
            <div className="compareCardSubtitle">Сумма продажи</div>
            <div className="compareCardText">фиксированная</div>
            <div className="compareCardSubtitle">Стоимость квартиры</div>
            <div className="compareCardText">90% от рыночной</div>
            <div className="compareCardSubtext">
              Не нужно менять планы, подстраиваться под незнакомых покупателей и
              постоянно поддерживать «товарный» вид квартиры
            </div>
            <div
              className="compareCardButton"
              onClick={() => {
                setOpenedQuestForm(true)
              }}
            >
              ОСТАВИТЬ ЗАЯВКУ
            </div>
          </div>
          <div
            className="compareCard"
            style={{
              display:
                selectedServiceCard == 1
                  ? "block"
                  : selectedServiceCard == -1
                  ? "block"
                  : "none",
            }}
          >
            <div className="compareCardTitle">Продажа с авансом</div>
            <div className="compareCardSubtitle">Аванс до 300 000 рублей</div>
            <div className="compareCardText">в день обращения</div>
            <div className="compareCardFlexBlock">
              <div className="compareCardCircle"></div>
              <div className="compareCardCircleText">
                остаток после продажи, в течение 3 — х месяцев
              </div>
            </div>
            <div className="compareCardSubtitle">Показы квартиры</div>
            <div className="compareCardText">Постоянные показы</div>
            <div className="compareCardSubtitle">Коммунальные платежи</div>
            <div className="compareCardText">— 25 000 рублей</div>
            <div className="compareCardSubtitle">Торги с покупателем</div>
            <div className="compareCardText">снижение цены от 10%</div>
            <div className="compareCardSubtitle">Стоимость квартиры</div>
            <div className="compareCardText">95% от рыночной</div>
            <div className="compareCardSubtext">
              Тип продажи подходит в случае, если необходимо срочно получить
              деньги в счёт будущей продажи квартиры
            </div>
            <div
              className="compareCardButton"
              onClick={() => {
                setOpenedQuestForm(true)
              }}
            >
              ПОЛУЧИТЬ АВАНС
            </div>
          </div>
          <div
            className="compareCard"
            style={{
              display:
                selectedServiceCard == 2
                  ? "block"
                  : selectedServiceCard == -1
                  ? "block"
                  : "none",
            }}
          >
            <div className="compareCardTitle">Обычная продажа</div>
            <div className="compareCardSubtitle">Деньги с начала продажи</div>
            <div className="compareCardText">3 — 4 месяца</div>
            <div className="compareCardFlexBlock">
              <div className="compareCardCircle"></div>
              <div className="compareCardCircleText">долгое ожидание денег</div>
            </div>
            <div className="compareCardSubtitle">Показы квартиры</div>
            <div className="compareCardText">Постоянные показы</div>
            <div className="compareCardSubtitle">Коммунальные платежи</div>
            <div className="compareCardText">— 25 000 рублей</div>
            <div className="compareCardSubtitle">Торги с покупателем</div>
            <div className="compareCardText">снижение цены от 10%</div>
            <div className="compareCardSubtitle">Стоимость квартиры</div>
            <div className="compareCardText">уменьшается с расходами</div>
            <div className="compareCardSubtext">
              Наш специалист оценит Вашу недвижимость и начнёт поиск покупателя
              по рыночной стоимости
            </div>
            <div
              className="compareCardButton"
              onClick={() => {
                setOpenedQuestForm(true)
              }}
            >
              УЗНАТЬ СТОИМОСТЬ
            </div>
          </div>
        </div>

        <div className="about" ref={aboutRef}>
          О компании «InvestReal»
        </div>
        <div className="aboutBlock">
          <div className="aboutCards">
            <div className="aboutCard">
              <Image className="aboutCardImage" src={starImg} />
              <div className="aboutCardTitle">Более 5 лет</div>
              <div className="aboutCardText">
                Мы занимаемся покупкой и продажей недвижимости
              </div>
            </div>
            <div className="aboutCard">
              <Image className="aboutCardImage" src={laptopImg} />
              <div className="aboutCardTitle">978 объектов</div>
              <div className="aboutCardText">
                На январь 2023 года мы помогли реализовать на рынке
              </div>
            </div>
            <div className="aboutCard">
              <Image className="aboutCardImage" src={houseImg} />
              <div className="aboutCardTitle">Наш блог</div>
              <div className="aboutCardText">
                Разбираем актуальные вопросы недвижимости
              </div>
            </div>
            <div className="aboutCard">
              <Image className="aboutCardImage" src={notebookImg} />
              <div className="aboutCardTitle">Безопасность</div>
              <div className="aboutCardText">
                Наш договор работы полностью застраховывает продавца
              </div>
            </div>
          </div>
          <div className="aboutFeedbacks">
            <div className="aboutFeedbacksStr">Отзывы</div>
            <div className="aboutFeedbacksSlider">
              <Image
                className="aboutFeedbacksSliderArrow1"
                onClick={() => {
                  changeSliderPic(false)
                }}
                src={arrowImg}
              />
              <Image
                className="aboutFeedbacksSliderImage"
                src={sliderImages[sliderIndex]}
              />
              <div
                className="aboutFeedbacksSliderReview"
                style={{ display: "none" }}
              >
                <Image className="aboutFeedbacksSliderReviewImage" />
                <div className="aboutFeedbacksSliderReviewText"></div>
                <div className="aboutFeedbacksSliderReviewName"></div>
              </div>
              <Image
                className="aboutFeedbacksSliderArrow1 aboutFeedbacksSliderArrow2"
                onClick={() => {
                  changeSliderPic(true)
                }}
                src={arrowImg}
              />
            </div>
          </div>
        </div>
        <div className="aboutFeedbacksButton">ВСЕ ОТЗЫВЫ</div>
        <div className="contacts">Контакты</div>
        <div className="contactsBl">
          <div className="contactReq">
            <div className="contactReqTitle">Заявка на оценку квартиры</div>
            <div className="contactReqText">
              Оставьте номер телефона, и мы сделаем вам предложение <br /> по
              выкупу квартиры
            </div>
            <div className="contactReqWrite">Введите свой номер телефона:</div>
            <div className="contactReqNum">
              <div className="contactReqNumInpDiv">
                <PhoneInput
                  placeholder="Enter phone number"
                  defaultCountry="RU"
                  value={phoneContacts}
                  onChange={setPhoneContacts}
                  className="contactReqNumInp"
                  limitMaxLength={10}
                  international
                  ref={phone1Ref}
                />
              </div>
              <div className="contactReqNumSend" onClick={sendPhoneForm1}>
                ОТПРАВИТЬ
              </div>
            </div>
          </div>
          <div className="contactInfo">
            <div className="contactInfoCard">
              <div className="contactInfoCardTitle">Номер телефона:</div>
              <Link href="tel: +79113007705">
                <div className="contactInfoCardText">+7(8152)707-705</div>
              </Link>
            </div>
            <div className="contactInfoCard">
              <div className="contactInfoCardTitle">Адрес:</div>
              <div className="contactInfoCardText">
                г.Мурманск пр-т. Ленина д. 43 офис 1
              </div>
            </div>
            <div className="contactInfoCard">
              <div className="contactInfoCardTitle">E — mail:</div>
              <div className="contactInfoCardText">info@invest-real.online</div>
            </div>
          </div>
        </div>
      </div>
      <Footer calcRef={calcRef} compareRef={compareRef} aboutRef={aboutRef} />
    </>
  )
}
