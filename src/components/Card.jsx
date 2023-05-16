import React from "react";
import { useState } from "react";
const style = {
  card: `max-w-[350px] rounded-[10px] shadow-[0px_5px_10px_2px_rgba(34,60,80,0.12)] relative`,
  price: `absolute top-0 right-0 bg-green-500 p-1 mt-1 mr-1 rounded-[5px] `,
  content: `p-4`,
  btn: `w-full bg-green-300 p-4  rounded-[15px]  `,
  img: `w-inherit h-[250px]`,
  more: `max-h-full mb-[15px] h-full`,
  text: ``,
  button: `text-[green] bg-gray-200 p-2 rounded-[6px] mb-[15px]`,
};

const Card = ({ id, image, info, name, price, handleDeleted }) => {
  const [readMore, setReadMore] = useState(false);
  const more = () => {
    setReadMore(!readMore);
  };
  return (
    <div className={style.card}>
      <img className={style.img} src={image} alt="" width={350} height={250} />
      <span className={style.price}>${price}</span>
      <div className={style.content}>
        <h1>{name}</h1>
        <div className={style.more}>
          <p className={style.text}>
            {readMore ? info : info.substr(0, 200) + "..."}
          </p>
          <button className={style.button} onClick={() => more()}>
            {readMore ? "Avvalgi holatga qaytish" : "Ko'proq ko'rish"}
          </button>
        </div>
        <button className={style.btn} onClick={() => handleDeleted(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Card;
