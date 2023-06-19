import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

import Aside from "../../components/aside/Aside";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container">
      <div>
        <h2>ОРИГИНАЛЬНЫЙ РЕЦЕПТ БУРГЕРА, ПОКОРИВШИЙ МИР</h2>
        <div className="blockCard">
          <div>
            <div data-aos="fade-right" className="boxCard item1">
              <h3 className="itemText">Булочка</h3>
              <img
                className="imgCard"
                src="http://buloshnaya.org/wp-content/uploads/2018/08/1598968599bbdfc463a1065677bf0cba-768x512.jpg"
                alt=""
              />
              <p className="words">
                Правильно подобранная булочка – основа для получения идеального
                бургера. В пекарне БулоШная можно купить булочки для
                гамбургеров. Они отличаются особой текстурой, поэтому тают во
                рту, но остаются упругими и не меняют своей формы. Чтобы
                получить достойный бургер, нужно приобрести именно их.
              </p>
            </div>
            <div data-aos="fade-left" className="boxCard item2">
              <h3 className="itemText">Coyc</h3>
              <img
                className="imgCard"
                src="https://i.obozrevatel.com/food/recipemain/2019/1/9/1524575836burger-s-syrnym-sousom-v-stile-santa-fe.jpg?size=636x424"
                alt=""
              />
              <p className="words">
                Заправка должна не просто улучшить вкус, ее задача связать все
                компоненты в единую вкусовую композицию. Идеальное блюдо не
                предполагает использование майонеза из магазина. Он должен быть
                свежеприготовленным из натуральных продуктов, а это желток
                куриного яйца, растительное масло, соль, немного уксуса.
              </p>
            </div>
          </div>

          <div>
            <div data-aos="fade-right" className="boxCard item3">
              <h3 className="itemText">Котлета</h3>
              <img
                className="imgCard"
                src="http://buloshnaya.org/wp-content/uploads/2018/08/582434fc00dba-768x512.jpg"
                alt=""
              />
              <p className="words">
                Главным компонентом является котлета sдля гамбургера. Именно с
                нее когда-то началась история бургера. Изначально это был стейк
                из рубленой говядины, который подавали в ресторанах Гамбурга.
                Сегодня чаще используют говяжий фарш со специями и луком. Из
                него формируются котлеты и обжариваются на гриле.
              </p>
            </div>

            <div data-aos="fade-left" className="boxCard item4">
              <h3 className="itemText">Процесс соединения всех компонентов</h3>
              <p
                style={{
                  width: 300,
                  marginLeft: "150px",
                  marginBottom: "30px",
                }}
              >
                К обязательным компонентам стоит отнести лист салата, который
                придает блюду свежесть и сочность. Также в состав гамбургера
                можно вносить помидоры, огурцы свежие и маринованные, сыр и
                многое другое.
              </p>
              <img
                className="imgCard"
                src="http://buloshnaya.org/wp-content/uploads/2018/08/0227-768x474.jpg"
                alt=""
              />
            </div>
            <div data-aos="fade-right" className="boxCard item5">
              <h3 className="itemText"> Пошаговое приготовление гамбургера:</h3>
              <img
                className="imgCard"
                src="http://buloshnaya.org/wp-content/uploads/2018/08/burger-s-kuricej-i-bekonom1-768x510.jpg"
                alt=""
              />
              <ul className="words">
                <li> половинка булочки, смазанная соусом;</li>
                <li> котлета;</li>
                <li>кольца лука;</li>
                <li> кружочки томата;</li>
                <li> лист салата;</li>
                <li> половинка булочки с соусом.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <img
          style={{ width: "1200px" }}
          src="https://idei.club/uploads/posts/2022-10/1666861512_55-idei-club-p-kukhnya-fast-fuda-instagram-57.jpg"
          alt=""
        /> */}
        <Aside />
      </div>
    </div>
  );
};

export default About;
