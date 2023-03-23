import { Inter } from "next/font/google"
import Image from "next/image"
import Head from "next/head"
import mainImg from "../public/main.png"
import searchImg from "../public/search.png"
import man1Img from "../public/man1.png"
import man2Img from "../public/man2.png"
import "../styles/index.module.scss"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
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
      </Head>
      <header className="headerMain">
        <div className="headerMainTitle">
          <strong>InvestReal</strong>
          <div>Центр недвижимости</div>
        </div>
        <div className="headerMainRight">
          <Image src={searchImg} />
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
      <div className="block1Cities">
        <div>МУРМАНСК</div>
        <div>ЗАТО</div>
        <div>КОЛА</div>
        <div>ОЛЕНЕГОРСК</div>
        <div>МОНЧЕГОРСК</div>
        <div>АПАТИТЫ</div>
      </div>
      <div styles={{ height: "0px" }}>
        <div className="backCircle">
          <Image src={mainImg} className="mainImg" />
        </div>
      </div>

      <header className="headerMain headerMain2">
        <div className="headerMainTitle">
          <strong>InvestReal</strong>
          <div>Центр недвижимости</div>
        </div>
        <div className="headerMainRight">
          <Image src={searchImg} />
          <div className="headerMainRightSail">РАССЧИТАТЬ ЦЕНУ</div>
          <div className="headerMainRightConn">СВЯЗАТЬСЯ</div>
        </div>
      </header>
      <div className="block1 block2">
        <strong>Покупаем недвижимость</strong>
        <div>
          Получите выгодное предложение по цене, и продайте свою недвижимость
          без показов и стресса
        </div>
      </div>
      <div className="block1Cities block2Cities">
        <div>ЯРОСЛАВЛЬ</div>
        <div>РЫБИНСК</div>
        <div>РОСТОВ</div>
        <div>ТУТАЕВ</div>
      </div>
      <div styles={{ height: "0px" }}>
        <div className="backCircle backCircle2">
          <Image src={mainImg} className="mainImg" />
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
          <Image src={man1Img} className="withWorkCardImg1" />
        </div>
        <div className="withWorkCard">
          <div className="withWorkCardText">
            <div className="withWorkCardTextTitle">Квартиры с долгами ЖКХ</div>
            <div className="withWorkCardTextText">
              Наш специалист поможет решить вопрос с задолженностью
            </div>
          </div>
          <Image src={man1Img} className="withWorkCardImg1" />
        </div>
        <div className="withWorkCard">
          <div className="withWorkCardText">
            <div className="withWorkCardTextTitle">Квартира с ипотекой</div>
            <div className="withWorkCardTextText">
              Помогаем продать недвижимость, которая находится в залоге банка
            </div>
          </div>
          <Image src={man1Img} className="withWorkCardImg1" />
          <Image src={man2Img} className="withWorkCardImg2" />
        </div>
        <div className="withWorkCard">
          <div className="withWorkCardText">
            <div className="withWorkCardTextTitle">Долевая собственность</div>
            <div className="withWorkCardTextText">
              При соблюдении условий у Вас не возникнет трудностей с совершением
              сделки
            </div>
          </div>
          <Image src={man1Img} className="withWorkCardImg1" />
        </div>
      </div>
    </div>
  )
}
