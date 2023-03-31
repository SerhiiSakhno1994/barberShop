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
      <header>
        <Link to="">
          <img className={s.avatar} src={Logo} alt={"лого сайта"} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="">Про на</Link>
            </li>
            <li>
              <Link to="">Послуги та ціни </Link>
            </li>
            <li>
              <Link to="">Майстри</Link>
            </li>
            <li>
              <Link to="">Контакти</Link>
            </li>
          </ul>
        </nav>
        <Link to="tel:0990480078">+38 099-048-00-78</Link>
        <button type="button">Онлайн-запис</button>
      </header>
      <main>
        <section>
          <ul>
            <li>
              <Link to="https://www.instagram.com/" target="_bank">
                Instagram
              </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/" target="_bank">
                Youtube
              </Link>
            </li>
          </ul>
          <div>
            <p lang="en">A hair salon for men in Kyiv</p>
            <h1 lang="en">BarberShop</h1>
            <p>
              Мы эксперты в модных мужских стрижках. Работаем быстро, осторожно
              и со вкусом.
            </p>
          </div>
        </section>
        <section>
          <ul>
            <li>
              <img src={Img1} alt={"барбер голить шию"} />
            </li>
            <li>
              <img src={Img2} alt={"бврбер робить кантік"} />
            </li>
          </ul>
          <div>
            <p>Про Нас</p>
            <h2>Кращий барбершоп твого міста</h2>
            <p>
              Если ты хочешь добавить в свой образ больше уверенности – тебе
              точно к нам.
            </p>
            <p>
              Мы команда, которая никогда не останавливается на достигнутом и
              жаждет перемен. И когда ты попадешь в руки нашего мастера, то уже
              никогда не сможешь быть прежним. Мы команда, которая всегда с
              клиентами "на одной волне". Поэтому, мы всегда готовы
              усовершенствовать каждого, кто к нам приходит!
            </p>
            <button type="button">Онлайн-запис</button>
          </div>
        </section>
        <section>
          <p>Проведи час в компанії кращих майстів</p>
          <h2>Послуги та ціни</h2>
          <ul>
            <li>
              <p>Чоловіча стрижка</p>
              <span>від 300 грн </span>
            </li>
            <li>
              <p>Стрижка бороди</p>
              <span>від 200 грн </span>
            </li>
            <li>
              <p>Стрижка вусів</p>
              <span>від 200 грн </span>
            </li>
            <li>
              <p>Гоління небезпечной бритвой</p>
              <span>від 200 грн </span>
            </li>
          </ul>
          <ul>
            <li>
              <p>Гоління у стажера</p>
              <span>від 50 грн </span>
            </li>
            <li>
              <p>Стрижка під насадку</p>
              <span>від 200 грн </span>
            </li>
            <li>
              <p>Стрижка дитяча(до 12 років)</p>
              <span>від 200 грн </span>
            </li>
            <li>
              <p>Камуфлювання бороди</p>
              <span>від 200 грн </span>
            </li>
          </ul>
          <button type="button">Онлайн-запис</button>
        </section>
        <section>
          <ul>
            <li>
              <span>600</span>
              <p>Задоволених клієнтів в день</p>
            </li>
            <li>
              <span>50</span>
              <p>Нгород за відмінний сервіс</p>
            </li>
            <li>
              <span>20</span>
              <p>Кращих майстрів Києва</p>
            </li>
            <li>
              <span>100</span>
              <p>Подарунків постійним клієнтам</p>
            </li>
          </ul>
          <div>
            <p>Стара традиційна школа</p>
            <h2>Чому приходять саме до нас?</h2>
            <p>
              Про нас говорять тільки добре. Але краще 1 раз побачити і відчути,
              чим 10 разів прочитати
            </p>
          </div>
        </section>
        <section>
          <p> для справжніх поціновувачів атмосфери</p>
          <h2>Наші майстри</h2>
          <ul>
            <li>
              <img
                className={s.avatar}
                src={John}
                alt={"John Smith"}
                width={"370"}
                height={"346"}
              />
              <h3 lang="en">John Smith</h3>
              <p lang="en">Extreme Barber</p>
            </li>
            <li>
              <img
                className={s.avatar}
                src={Michele}
                alt={"Michele Doe"}
                width={"370"}
                height={"346"}
              />
              <h3 lang="en">Michele Doe</h3>
              <p lang="en">Extreme Barber</p>
            </li>
            <li>
              <img
                className={s.avatar}
                src={Alan}
                alt={"Alan Black"}
                width={"370"}
                height={"346"}
              />
              <h3 lang="en">Alan Black</h3>
              <p lang="en">Extreme Barber</p>
            </li>
          </ul>
        </section>
        <section>
          <p>На латинській мові “барба” означает “борода”</p>
          <h2 className={s.visuallyHidden}>Галерея</h2>
          <ul>
            <li>
              <img
                src={Rectangle1}
                alt="Rectangle1"
                width={"270"}
                height={"360"}
              />
            </li>
            <li>
              <img
                src={Rectangle2}
                alt="Rectangle2"
                width={"270"}
                height={"360"}
              />
            </li>
            <li>
              <img
                src={Rectangle3}
                alt="Rectangle4"
                width={"270"}
                height={"360"}
              />
            </li>
            <li>
              <img
                src={Rectangle4}
                alt="Rectangle4"
                width={"270"}
                height={"360"}
              />
            </li>
          </ul>
        </section>
        <section>
          <div>
            <h2>Онлайн запис</h2>
          </div>
        </section>
        <section>
          <div>
            <h2>Контакти</h2>
            <address>
              <ul>
                <li>
                  <Link to="">
                    <p>вул. Васильківська, 7а, Київ, 08132</p>
                  </Link>
                </li>
                <li>
                  <Link to="tel:0990480078">+38 099-048-00-78</Link>
                </li>
                <li>
                  <Link to="mailto:serhii.sakhno@ukr.net">
                    serhii.sakhno@ukr.net
                  </Link>
                </li>
              </ul>
            </address>
            <b>Часи роботи</b>
            <p>Кожного дня з 9:00 до 22:00</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; Copyright 2020</p>
        <ul>
          <li>
            <Link to="https://www.instagram.com/" target="_bank">
              Instagram
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/" target="_bank">
              Youtube
            </Link>
          </li>
        </ul>
      </footer>
    </Router>
  );
}

export default App;
