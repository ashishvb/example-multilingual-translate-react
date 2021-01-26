import logo from './logo.svg';
import './App.css';
import { useTranslate  } from 'multilingual-translate';


function App() {

  let [translate,changeLanguage] = useTranslate();

  const onChangeLanguage = (lang) => {
    changeLanguage(lang);
  }

  return (
    <div className="container text-center py-4">
       <div className="row">
        <div className="col-lg-6 col-md-8 col-12 mx-auto">

            <div className="card my-4">
              <div className="card-header"> {translate('homepage.title')}  </div>
              <div className="card-body">

                <p> {translate('homepage.body')} </p>

                <p> {translate('homepage.change-language')} </p>

                <p> 
                  <button type="button" onClick={() => onChangeLanguage('en')} className="btn btn-success m-1">English</button>
                  <button type="button" onClick={() => onChangeLanguage('hin')}  className="btn btn-danger m-1">Hindi</button>
                  <button type="button" onClick={() => onChangeLanguage('es')} className="btn btn-warning m-1">Spanish</button>
                  <button type="button" onClick={() => onChangeLanguage('ja')} className="btn btn-info m-1">Japanese</button>
                </p>

            
              </div>
              <div className="card-footer">
                  <p> 
                    {translate('homepage.github-msg')} <br/>  
                      <a href="https://github.com/ashishvb/multilingual-translate-react"> https://github.com/ashishvb/multilingual-translate-react </a>
                    </p>
                  <p> 
                    {translate('homepage.thankyou')} 
                  </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
