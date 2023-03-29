import sendImg from "../public/send.png"
import Image from "next/image"
import Link from "next/link"

export default function Footer(props) {
  function scrollTo(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" })
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
              <input className="footerColConnTel" placeholder="Телефон" />
              <Image src={sendImg} className="footerColConnSend" />
            </div>
          </div>
        </div>
      </div>
      <div className="footerUnder">© 2010 InvestReal</div>
    </footer>
  )
}
