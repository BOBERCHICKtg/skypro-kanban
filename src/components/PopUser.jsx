

const PopUser = () => {
  return (
    <div class="header__pop-user-set pop-user-set" id="user-set-target">
      <a href="">x</a>
      <p class="pop-user-set__name">Ivan Ivanov</p>
      <p class="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div class="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" class="checkbox" name="checkbox" />
      </div>
      <button type="button" class="_hover03">
        <a href="#popExit">Выйти</a>
      </button>
    </div>
  );
};

export default PopUser;
