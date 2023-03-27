import { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import { Typography } from "@mui/material"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import intlTelInput from "intl-tel-input"
import $ from "jquery"
import "intl-tel-input/build/css/intlTelInput.css"
import { Copse, Inter } from "next/font/google"
import Image from "next/image"
import Head from "next/head"
import checkGeo from "../helpers/check_geo"
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
import "../styles/index.module.scss"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [geo, setGeo] = useState(null)
  const [coords, setCoords] = useState(null)
  const [selectedServiceCard, setSelectedServiceCard] = useState(0)
  const [mobile, setMobile] = useState(false)
  const [openedQuestForm, setOpenedQuestForm] = useState(false)
  useEffect(() => {
    checkGeoFunc()
    //check geo
    const input = document.querySelector("#calcNum")
    intlTelInput(input, {
      geoIpLookup: "auto",
      initialCountry: "ru",
      preferredCountries: ["ru", "ua", "by"],
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    })
    //set international phone num inp
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    setMobile(isMobile)
    setSelectedServiceCard(isMobile ? 0 : -1)
    //check is user from phone
    setTimeout(() => {
      setOpenedQuestForm(true)
    }, 1000)
  }, [])
  async function checkGeoFunc() {
    const geoLocation = await checkGeo()
    setGeo(geoLocation[2] | null)
    setCoords(geoLocation[0] ? [geoLocation[0], geoLocation[1]] : null)
  }
  useEffect(() => {}, [coords])
  return (
    <div className="main">
      <Head>
        <title>Центр недвижимости InvestReal</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <header className="headerMain">
        <div className="headerMainTitle">
          <strong>InvestReal</strong>
          <div>Центр недвижимости</div>
        </div>
        <div className="headerMainRight">
          <Image src={searchImg} alt="поиск" />
          <div className="headerMainRightSail">РАССЧИТАТЬ ЦЕНУ</div>
          <div className="headerMainRightConn">СВЯЗАТЬСЯ</div>
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
            <div className="withWorkCardTextTitle">Квартиры с долгами ЖКХ</div>
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
              При соблюдении условий у Вас не возникнет трудностей с совершением
              сделки
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
              <div className="withWorkMobCardTitle">Квартиры с долгами ЖКХ</div>
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
        <div>
          <div className="realtySail">Узнайте стоимость своей недвижимости</div>
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
              <Image className="realtySailCardImage" src={workbookImg} alt="" />
              <div className="realtySailCardTitle">Удобство</div>
              <div className="realtySailCardText">
                Зная цену своей квартиры Вы сможете планировать покупку нового
                жилья
              </div>
            </div>
          </div>
        </div>
        <form className="calc" action="" method="post">
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
          <input
            className="calcRange"
            name="square"
            type="range"
            min="10"
            max="100"
            step="10"
            defaultValue={60}
          />
          <input className="calcInp" name="name" placeholder="Ваше имя" />
          <div style={{ marginTop: "10px", width: "100%" }}>
            <input
              type="tel"
              className="calcTel"
              name="phone"
              required
              id="calcNum"
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
      <div className="compareCards">
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
          <div className="compareCardButton">ОСТАВИТЬ ЗАЯВКУ</div>
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
          <div className="compareCardButton">ПОЛУЧИТЬ АВАНС</div>
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
            Наш специалист оценит Вашу недвижимость и начнёт поиск покупателя по
            рыночной стоимости
          </div>
          <div className="compareCardButton">УЗНАТЬ СТОИМОСТЬ</div>
        </div>
      </div>

      <script src="jquery.min.js"></script>
      <script src="build/js/intlTelInput.js"></script>
    </div>
  )
}
