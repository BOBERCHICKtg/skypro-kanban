import Calendar from "./Calendar";

const PopNewCard = () => {
  return (
    <div class="pop-new-card" id="popNewCard">
      <div class="pop-new-card__container">
        <div class="pop-new-card__block">
          <div class="pop-new-card__content">
            <h3 class="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" class="pop-new-card__close">
              &#10006;
            </a>
            <div class="pop-new-card__wrap">
              <form
                class="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div class="form-new__block">
                  <label for="formTitle" class="subttl">
                    Название задачи
                  </label>
                  <input
                    class="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autofocus
                  />
                </div>
                <div class="form-new__block">
                  <label for="textArea" class="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    class="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div class="pop-new-card__categories categories">
              <p class="categories__p subttl">Категория</p>
              <div class="categories__themes">
                <div class="categories__theme _orange _active-category">
                  <p class="_orange">Web Design</p>
                </div>
                <div class="categories__theme _green">
                  <p class="_green">Research</p>
                </div>
                <div class="categories__theme _purple">
                  <p class="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button class="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
