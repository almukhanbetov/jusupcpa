import photo1 from "../../Assets/office-1.jpg";
import photo2 from "../../Assets/vision.jpg";
import Container from "../Container";

function WhoWeAre() {
  return (
    <div className="bg-secondary">
      <Container>
        <div className="text-white">
          <div className="relative top-[-100px]">
            <div
              data-aos="flip-left"
              className=" flex md:flex-row flex-col bg-[#222222] ">
              <img
                src={photo1}
                alt="office"
                className="bg-cover md:w-[50%] w-full"
              />

              <div className="flex  justify-center flex-col md:p-[50px] p-[30px]">
                <h2 className="sm:text-3xl text-2xl uppercase font-bold mb-[10px]">
                  Кто мы?
                </h2>
                <p className="text-gray">
                  uibirzhasi.kz - созданная впервые в мире биржа недвижимости, биржа встречных цен, цен продаж недвижимости и цен покупок недвижимости.
                </p>
              </div>
            </div>

            <div
              data-aos="flip-right"
              className="flex md:flex-row flex-col-reverse  mt-[30px] bg-[#222222] ">
              <div className="flex  justify-center flex-col md:p-[50px] p-[30px]">
                <h2 className="sm:text-3xl text-2xl uppercase font-bold mb-[10px]">
                  Наша миссия
                </h2>
                <p className="text-gray">
                  Наша миссия — упростить сделки с недвижимостью, минимизируя затраты и ускоряя процесс. С uibirzhasi.kz вы получаете:
Низкие комиссии: всего 1% от продавца и 1% от покупателя — в 2–3 раза дешевле, чем у риелторов.
Быстрые сделки: уникальная динамика цен (цены продавцов снижаются на 1% ежедневно, предложения покупателей растут на 1%) помогает закрывать сделки за 7–14 дней.
Прозрачность и безопасность: депозиты 1% на счет ТОО "СРА" открывают доступ к контактам, с гарантированным возвратом при несостоявшихся сделках. Интеграция с eGov.kz обеспечивает проверку объектов.
                </p>
              </div>

              <img
                src={photo2}
                alt="vision"
                className="bg-cover md:w-[50%] w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhoWeAre;
