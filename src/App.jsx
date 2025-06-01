import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import { useEffect, useState } from "react";
import {
  Wraper,
  PopExit,
  PopConteiner,
  PopExitBlock,
  PopExitFormGroup,
  PopExitYes,
  PopExitNo,
} from "./App.styles";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Wraper>
        <PopExit id="popExit">
          <PopConteiner>
            <PopExitBlock>
              <div className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </div>
              <form className="pop-exit__form" id="formExit" action="#">
                <PopExitFormGroup>
                  <PopExitYes
                    className="pop-exit__exit-yes _hover01"
                    id="exitYes"
                  >
                    <a href="modal/signin.html">Да, выйти</a>{" "}
                  </PopExitYes>
                  <PopExitNo className="pop-exit__exit-no _hover03" id="exitNo">
                    <a href="main.html">Нет, остаться</a>{" "}
                  </PopExitNo>
                </PopExitFormGroup>
              </form>
            </PopExitBlock>
          </PopConteiner>
        </PopExit>
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main loading={loading} />
      </Wraper>
    </>
  );
}

export default App;

/* upDate */
