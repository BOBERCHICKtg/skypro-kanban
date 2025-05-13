import React from "react";
import Calendar from "./Calendar";

const PopBrowse = () => {
  return (
    <div class="pop-browse" id="popBrowse">
      <div class="pop-browse__container">
        <div class="pop-browse__block">
          <div class="pop-browse__content">
            <div class="pop-browse__top-block">
              <h3 class="pop-browse__ttl">Название задачи</h3>
              <div class="categories__theme theme-top _orange _active-category">
                <p class="_orange">Web Design</p>
              </div>
            </div>
            <div class="pop-browse__status status">
              <p class="status__p subttl">Статус</p>
              <div class="status__themes">
                <div class="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div class="status__theme _gray">
                  <p class="_gray">Нужно сделать</p>
                </div>
                <div class="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div class="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div class="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <div class="pop-browse__wrap">
              <form
                class="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div class="form-browse__block">
                  <label for="textArea01" class="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    class="form-browse__area"
                    name="text"
                    id="textArea01"
                    readonly
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div class="theme-down__categories theme-down">
              <p class="categories__p subttl">Категория</p>
              <div class="categories__theme _orange _active-category">
                <p class="_orange">Web Design</p>
              </div>
            </div>
            <div class="pop-browse__btn-browse ">
              <div class="btn-group">
                <button class="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button class="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button class="btn-browse__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
            <div class="pop-browse__btn-edit _hide">
              <div class="btn-group">
                <button class="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button class="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  class="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button class="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
