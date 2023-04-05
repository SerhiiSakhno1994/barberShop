import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "./images/logo.svg";
import Img1 from "./images/img1.jpg";
import Img2 from "./images/img2.jpg";
import Alan from "./images/alan.jpg";
import John from "./images/john.jpg";
import Michele from "./images/michele.jpg";
import Rectangle1 from "./images/Rectangle1.jpg";
import Rectangle2 from "./images/Rectangle2.jpg";
import Rectangle3 from "./images/Rectangle3.jpg";
import Rectangle4 from "./images/Rectangle4.jpg";
import s from "./App.module.css";

function App() {
  return (
    <Router>
      {" "}
      <header className={s.header}>
        <Link to="">
          <img className={s.headerLogo} src={Logo} alt={"лого сайта"} />
        </Link>
        <nav className={s.headerNav}>
          <ul className={s.headerList}>
            <li className={s.headerIteam}>
              <Link className={s.headerLink} to="">
                Про на
              </Link>
            </li>
            <li className={s.headerIteam}>
              <Link className={s.headerLink} to="">
                Послуги та ціни{" "}
              </Link>
            </li>
            <li className={s.headerIteam}>
              <Link className={s.headerLink} to="">
                Майстри
              </Link>
            </li>
            <li className={s.headerIteam}>
              <Link className={s.headerLink} to="">
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="tel:0990480078" className={s.headerTelLink}>
          +38 099-048-00-78
        </Link>
        <button className={`${s.headerBtn} ${s.btn}`} type="button">
          Онлайн-запис
        </button>
      </header>
      <main>
        <section className={s.hero}>
          <ul className={s.heroList}>
            <li className={s.heroIteam}>
              <Link
                className={s.socialLink}
                to="https://www.instagram.com/"
                target="_bank"
              >
                Instagram
              </Link>
            </li>
            <li className={s.socialIteam}>
              <Link
                className={s.socialLink}
                to="https://www.youtube.com/"
                target="_bank"
              >
                Youtube
              </Link>
            </li>
          </ul>
          <div className={s.heroRight}>
            <p lang="en" className={`${s.preTitle} ${s.heroPreTitle}`}>
              A hair salon for men in Kyiv
            </p>
            <h1 lang="en" className={s.heroTitle}>
              BarberShop
            </h1>
            <p className={`${s.heroAfterTitle} ${s.afterTitle}`}>
              Ми експерти у модних чоловічих стрижках. Працюємо швидко, обережно
              та зі смаком.
            </p>
          </div>
        </section>
        <section className={s.about}>
          <ul className={s.aboutList}>
            <li className={s.aboutIteam}>
              <img
                className={s.aboutLink}
                src={Img1}
                alt={"барбер голить шию"}
              />
            </li>
            <li className={s.aboutIteam}>
              <img
                className={s.aboutLink}
                src={Img2}
                alt={"бврбер робить кантік"}
              />
            </li>
          </ul>
          <div className={s.aboutRight}>
            <p className={`${s.preTitle} ${s.aboutPreTitle}`}>Про Нас</p>
            <h2 className={`${s.aboutTitle} ${s.sectionTitle}`}>
              Кращий барбершоп твого міста
            </h2>
            <p className={`${s.abortAfterTitle} ${s.afterTitle}`}>
              Якщо ти хочеш додати у свій образ більше впевненості, тобі точно
              до нас.
            </p>
            <p className={s.aboutText}>
              Ми команда, яка ніколи не зупиняється на досягнутому та прагне
              змін. І коли ти потрапиш до рук нашого майстра, то вже ніколи не
              зможеш бути тим самим. Ми команда, яка завжди з клієнтами "на
              одній хвилі". Тому ми завжди готові удосконалити кожного, хто до
              нас приходить!
            </p>
            <button className={`${s.aboutBtn} ${s.btn}`} type="button">
              Онлайн-запис
            </button>
          </div>
        </section>
        <section className={s.prices}>
          <p className={`${s.preTitle} ${s.pricesPreTitle}`}>
            Проведи час в компанії кращих майстів
          </p>
          <h2 className={`${s.pricesTitle} ${s.sectionTitle}`}>
            Послуги та ціни
          </h2>
          <ul className={s.pricesList}>
            <li className={s.pricesIteam}>
              <p className={s.pricesType}>Чоловіча стрижка</p>
              <span className={s.pricesCount}>від 300 грн </span>
            </li>
            <li className={s.pricesIteam}>
              <p className={s.pricesType}>Стрижка бороди</p>
              <span className={s.pricesCount}>від 200 грн </span>
            </li>
            <li className={s.pricesIteam}>
              <p className={s.pricesType}>Стрижка вусів</p>
              <span className={s.pricesCount}>від 200 грн </span>
            </li>
            <li className={s.pricesIteam}>
              <p className={s.pricesType}>Гоління небезпечной бритвой</p>
              <span className={s.pricesCount}>від 200 грн </span>
            </li>
          </ul>
          <ul className={s.pricesList}>
            <li className={s.pricesIteam}>
              <p className={s.pricesType}>Гоління у стажера</p>
              <span className={s.pricesCount}>від 50 грн </span>
            </li>
            <li className={s.pricesIteam}>
              <p className={s.pricesType}>Стрижка під насадку</p>
              <span className={s.pricesCount}>від 200 грн </span>
            </li>
            <li className={s.pricesIteam}>
              <p className={s.pricesType}>Стрижка дитяча(до 12 років)</p>
              <span className={s.pricesCount}>від 200 грн </span>
            </li>
            <li className={s.pricesIteam}>
              <p className={s.pricesType}>Камуфлювання бороди</p>
              <span className={s.pricesCount}>від 200 грн </span>
            </li>
          </ul>
          <button className={`${s.pricesBtn} ${s.btn}`} type="button">
            Онлайн-запис
          </button>
        </section>
        <section className={s.reasons}>
          <ul className={s.reasonsList}>
            <li className={s.reasonsIteam}>
              <span className={s.reasonsCount}>600</span>
              <p className={s.reasonsIteamText}>Задоволених клієнтів в день</p>
            </li>
            <li className={s.reasonsIteam}>
              <span className={s.reasonsCount}>50</span>
              <p className={s.reasonsIteamText}>Нгород за відмінний сервіс</p>
            </li>
            <li className={s.reasonsIteam}>
              <span className={s.reasonsCount}>20</span>
              <p className={s.reasonsIteamText}>Кращих майстрів Києва</p>
            </li>
            <li className={s.reasonsIteam}>
              <span className={s.reasonsCount}>100</span>
              <p className={s.reasonsIteamText}>
                Подарунків постійним клієнтам
              </p>
            </li>
          </ul>
          <div className={s.reasonsRigth}>
            <p className={`${s.preTitle} ${s.reasonsPreTitle}`}>
              Стара традиційна школа
            </p>
            <h2 className={`${s.reasonsTitle} ${s.sectionTitle}`}>
              Чому приходять саме до нас?
            </h2>
            <p className={`${s.reasonsAfterTitle} ${s.afterTitle}`}>
              Про нас говорять тільки добре. Але краще 1 раз побачити і відчути,
              чим 10 разів прочитати
            </p>
          </div>
        </section>
        <section className={s.masters}>
          <p className={`${s.preTitle} ${s.mastersPreTitle}`}>
            для справжніх поціновувачів атмосфери
          </p>
          <h2 className={`${s.mastersTitle} ${s.sectionTitle}`}>
            Наші майстри
          </h2>
          <ul className={s.mastersList}>
            <li className={s.mastersItem}>
              <img
                className={s.avatar}
                src={John}
                alt={"John Smith"}
                width={"370"}
                height={"346"}
              />
              <h3 className={s.mastersItemTitle} lang="en">
                John Smith
              </h3>
              <p className={s.mastersItemText} lang="en">
                Extreme Barber
              </p>
            </li>
            <li className={s.mastersItem}>
              <img
                className={s.avatar}
                src={Michele}
                alt={"Michele Doe"}
                width={"370"}
                height={"346"}
              />
              <h3 className={s.mastersItemTitle} lang="en">
                Michele Doe
              </h3>
              <p className={s.mastersItemText} lang="en">
                Extreme Barber
              </p>
            </li>
            <li className={s.mastersItem}>
              <img
                className={s.avatar}
                src={Alan}
                alt={"Alan Black"}
                width={"370"}
                height={"346"}
              />
              <h3 className={s.mastersItemTitle} lang="en">
                Alan Black
              </h3>
              <p className={s.mastersItemText} lang="en">
                Extreme Barber
              </p>
            </li>
          </ul>
        </section>
        <section className={s.gallery}>
          <p className={`${s.preTitle} ${s.galleryPreTitle}`}>
            На латинській мові “барба” означает “борода”
          </p>
          <h2 className={s.visuallyHidden}>Галерея</h2>
          <ul className={s.galleryList}>
            <li className={s.galleryItem}>
              <img
                src={Rectangle1}
                alt="Rectangle1"
                width={"270"}
                height={"360"}
              />
            </li>
            <li className={s.galleryItem}>
              <img
                src={Rectangle2}
                alt="Rectangle2"
                width={"270"}
                height={"360"}
              />
            </li>
            <li className={s.galleryItem}>
              <img
                src={Rectangle3}
                alt="Rectangle4"
                width={"270"}
                height={"360"}
              />
            </li>
            <li className={s.galleryItem}>
              <img
                src={Rectangle4}
                alt="Rectangle4"
                width={"270"}
                height={"360"}
              />
            </li>
          </ul>
        </section>
        <section className={s.online}>
          <div>
            <h2 className={`${s.onlineTitle} ${s.sectionTitle}`}>
              Онлайн запис
            </h2>
          </div>
        </section>
        <section className={s.contacts}>
          <div>
            <h2 className={`${s.contactsTitle} ${s.sectionTitle}`}>Контакти</h2>
            <address className={s.contactsAddress}>
              <ul className={s.contactsList}>
                <li className={s.contactsItem}>
                  <Link
                    className={s.contactsLink}
                    to="https://goo.gl/maps/diYyiURGGYjzQSFp6"
                    target="_bank"
                  >
                    <p>вул. Васильківська, 7а, Київ, 08132</p>
                  </Link>
                </li>
                <li className={s.contactsItem}>
                  <Link className={s.contactsLink} to="tel:0990480078">
                    +38 099-048-00-78
                  </Link>
                </li>
                <li className={s.contactsItem}>
                  <Link
                    className={s.contactsLink}
                    to="mailto:serhii.sakhno@ukr.net"
                  >
                    serhii.sakhno@ukr.net
                  </Link>
                </li>
              </ul>
            </address>
            <b className={s.contactsTimeTitle}>Часи роботи</b>
            <p className={s.contactsTimeText}>Кожного дня з 9:00 до 22:00</p>
          </div>
        </section>
      </main>
      <footer className={s.footer}>
        <p className={s.footerCopy}>&copy; Copyright 2020</p>
        <ul className={s.footerList}>
          <li className={s.footerItem}>
            <Link
              className={s.socialLink}
              to="https://www.instagram.com/"
              target="_bank"
            >
              Instagram
            </Link>
          </li>
          <li className={s.footerItem}>
            <Link
              className={s.socialLink}
              to="https://www.youtube.com/"
              target="_bank"
            >
              Youtube
            </Link>
          </li>
        </ul>
      </footer>
    </Router>
  );
}

export default App;
