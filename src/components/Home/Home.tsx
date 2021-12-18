import { Button } from "antd";

import { Carousel } from "antd";

const items = [
  {
    key: "1",
    title: "Maestro Yoda",
    content:
      "El miedo es el camino hacia el Lado Oscuro. El miedo lleva a la ira, la ira lleva al odio, el odio lleva al sufrimiento. Percibo mucho miedo en ti",
  },
  {
    key: "2",
    title: " Obi-Wan",
    content:
      "Que la fuerza te acompañe",
  },
  {
    key: "3",
    title: "Darth Vader",
    content:
      "Únete a mí y juntos dominaremos la Galaxia como padre e hijo",
  },
];

export const Home = () => {
  return (
  <div className="heroBlock">
     <Carousel>
      {items.map((item) => {
        return (
          <div key={item.key} className="container-fluid">
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
             
            </div>
          </div>
        );
      })}
    </Carousel> 
  </div>
  );
};
