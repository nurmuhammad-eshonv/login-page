import React, { useState } from "react";
import styles from "./index.module.css";
import icon1 from "../assets/img/icon.svg";
import icon2 from "../assets/img/icon2.svg";
import icon3 from "../assets/img/icon3.svg";
import icon4 from "../assets/img/icon4.svg";
import icon5 from "../assets/img/icon5.svg";

function Header() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [country, setCountry] = useState("");
  const [city, setcity] = useState("");
  const [joy, setJoy] = useState("");
  const [quantity, setQuantity] = useState("");
  const [opinion, setOpinion] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

 

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLink("");
  };
  function handleSubmit(e) {
    let user = {
      name,
      email,
      number,
      country,
      city,
      joy,
      quantity,
      opinion,
      dunyo,
      telegram,
      instagram,
      feyzbuk,
      github,
      yuklash
    };
    setName(" "),
      setEmail(""),
      setNumber(""),
      setCountry(""),
      setcity(""),
      setJoy(""),
      setQuantity(""),
      setOpinion(""),
      setDunyo(""),
      setInstagram(""),
      setTelegram(""),
      setFeyzbuk(""),
      setGithub("");
    localStorage.setItem("data", JSON.stringify(user));
    e.preventDefault();
    console.log(user);
  }
  console.log(city);
  let [dunyo1, setDunyo1] = useState(false);
  let [instagram1, setInstagram1] = useState(false);
  let [telegram1, setTelegram1] = useState(false);
  let [feyzbuk1, setFeyzbuk1] = useState(false);
  let [github1, setGithub1] = useState(false);
  let [yuklash1, setYuklash1] = useState(false)

  let [dunyo, setDunyo] = useState("");
  let [instagram, setInstagram] = useState("");
  let [telegram, setTelegram] = useState("");
  let [feyzbuk, setFeyzbuk] = useState("");
  let [github, setGithub] = useState("");
  const [yuklash, setYuklash] = useState("https://picsum.photos/200/300")

  const img = yuklash

  function yangi(r) {
  setDunyo1(false)
  setInstagram1(false)
  setTelegram1(false)
  setFeyzbuk1(false)
  setGithub1(false)
  setYuklash(false)
    r.preventDefault();

  }


  return (
    <div className={styles.container}>
      <form className={styles.wrapper}>
        <h2 className={styles.title}>Kompaniya ma’lumotlari</h2>
        <p className={styles.komp}>Kompaniya haqidagi ma’lumotlarni kiriting</p>
        <div className={styles.wrapperCard}>
          <img
            className={styles.cardImg}
            src={img}
            alt="rasm yuklang"
          />
          <p onClick={() => setYuklash1(true)} className={styles.yuklash}>Yuklash</p>
        </div>
        <div className={styles.form}>
          <p className={styles.formTitle}>
            Kompaniya nomi <span>*</span>
          </p>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            className={styles.input}
            type="text"
            placeholder="Kompaniya nomi"
          />
        </div>
        <div className={styles.form}>
          <p className={styles.formTitle}>
            Email <span>*</span>
          </p>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className={styles.input}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className={styles.form}>
          <p className={styles.formTitle}>
            Telefon raqami <span>*</span>
          </p>
          <input
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            value={number}
            className={styles.input}
            type="number"
            placeholder="Telefon raqami"
          />
        </div>
        <p className={styles.formTitle}>
          Linklar<span>*</span>
        </p>

        <div className={styles.form}>
          <div className={styles.icons}>
            <a onClick={(r) => {yangi(r),setDunyo1(true)}}
              className={styles.icon}
              href="#"
            >
              <img  src={icon1} alt="" />
            </a>
            <a
             onClick={() => {setInstagram1(true)}}
              className={styles.icon}
              href="#"
            >
              <img src={icon2} alt="" />
            </a>
            <a
             onClick={() => {setTelegram1(true)}}
              className={styles.icon}
              href="#"
            >
              <img src={icon3} alt="" />
            </a>
            <a
             onClick={() => {setFeyzbuk1(true)}}
              className={styles.icon}
              href="#"
            >
              <img src={icon4} alt="" />
            </a>
            <a
             onClick={() => {setGithub1(true)}}
              className={styles.icon}
              href="#"
            >
              <img src={icon5} alt="" />
            </a>
          </div>
          <div className={styles.selectD}>
            <p className={styles.formTitle}>
              Davlat<span>*</span>
            </p>
            <p className={styles.formTitle}>
              Shaxar<span>*</span>
            </p>
          </div>

          <div className={styles.doubleSelect}>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={styles.firstSelect}
            >
              <option>Davlat</option>
              <option>Uzbekiston</option>
              <option>Rossiya</option>
            </select>

            <select
              value={city}
              onChange={(e) => setcity(e.target.value)}
              className={styles.firstSelect}
            >
              <option>Shahar</option>
              <option>Farg'ona</option>
              <option>namangan</option>
            </select>
          </div>
          <div className={styles.form}>
            <p className={styles.formTitle}>
              Yashash joyi <span>*</span>
            </p>
            <input
              onChange={(e) => setJoy(e.target.value)}
              value={joy}
              className={styles.input}
              type="text"
              placeholder="Joy"
            />
          </div>
          <div className={styles.form}>
            <p className={styles.formTitle}>
              Hodimlar soni <span>*</span>
            </p>
            <input
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              className={styles.input}
              type="number"
              placeholder="Hodimlar soni"
            />
          </div>
          <div className={styles.form}>
            <p className={styles.formTitle}>
              Hodimlar soni <span>*</span>
            </p>
            <textarea
              onChange={(e) => setOpinion(e.target.value)}
              value={opinion}
              className={styles.inputtt}
              type="text"
              placeholder="Kompaniya xaqida izox qoldiring"
            />
          </div>

          <div className={styles.btnWrapper}>
            <button
              className={styles.buttonnn}
              onClick={(e) => handleSubmit(e)}
            >
              ORQAGA
            </button>
            <button className={styles.buttonn} onClick={(e) => handleSubmit(e)}>
              KEYINGISI
            </button>
          </div>
        </div>
        {dunyo1 && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span  className={styles.close} onClick={()=>setDunyo1(false)}>
                submit
              </span>
             <input onChange={ (e) => {setDunyo(e.target.value)}} value={dunyo} className={styles.modalLink}type="text"placeholder="Link"/>
            </div>
          </div>
        )}
         {instagram1 && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={()=>setInstagram1(false)}>
                submit
              </span>
             <input  onChange={ (e) => {setInstagram(e.target.value)}} value={instagram} className={styles.modalLink}type="text"placeholder="Link"/>
            </div>
          </div>
        )}
         {telegram1 && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={()=>setTelegram1(false)}>
                submit
              </span>
             <input  onChange={ (e) => {setTelegram(e.target.value)}} value={telegram} className={styles.modalLink}type="text"placeholder="Link"/>
            </div>
          </div>
        )}
         {feyzbuk1 && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={()=>setFeyzbuk1(false)}>
                submit
              </span>
             <input onChange={ (e) => {setFeyzbuk(e.target.value)}} value={feyzbuk}   className={styles.modalLink}type="text"placeholder="Link"/>
            </div>
          </div>
        )}
         {github1 && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close}  onClick={()=>setGithub1(false)}>
                submit
              </span>
             <input onChange={ (e) => {setGithub(e.target.value)}} value={github} className={styles.modalLink}type="text"placeholder="Link"/>
            </div>
          </div>
        )}
        {yuklash1 && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close}  onClick={()=>setYuklash1(false)}>
                submit
              </span>
             <input onChange={ (e) => setYuklash(e.target.value)} className={styles.modalLink}type="text"placeholder="Link"/>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Header;
