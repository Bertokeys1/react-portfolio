import joinIn from "../assets/images/JoinIn.png";
import passwordGen from "../assets/images/passwordGen.png";
import noteApp from "../assets/images/noteTaker.png";
import bookApp from "../assests/images/bookApp.png";
import textApp from "../assests/images/textApp.png";
import bitPage from "../assests/images/bitPage.png";

export default function Projects() {
  return (
    <div>
      <div id="work" className="mt-5 pb-5">
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">Portfolio</h3>
          <hr className="w-50 mx-auto pb-2" />
        </div>
        <div className="projectItems row text-center">
          <section className="col-lg-4">
            <h4>Join in</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://join-in-app.herokuapp.com/"
            >
              <img
                className="img-fluid w-50 mx-auto"
                src={joinIn}
                alt="project 1 "
              />
            </a>
            <a
              className="row col-2 mx-auto"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/kelseybrianne/full-stack-app"
            >
              github repo
            </a>
          </section>
          <section className="col-4">
            <h4>Password generator!</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://bertokeys1.github.io/Password-generator/"
            >
              <img
                className="img-fluid w-50 mx-auto"
                src={passwordGen}
                alt="project 2 "
              />
            </a>
            <a
              className="row col-2 mx-auto"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Bertokeys1/Password-generator"
            >
              github repo
            </a>
          </section>
          <section className="col-4">
            <h4>Note taker</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://note-taker2000.herokuapp.com/"
            >
              <img
                className="img-fluid w-50 mx-auto"
                src={noteApp}
                alt="project 2 "
              />
            </a>
            <a
              className="row col-2 mx-auto"
              target="_blank"
              rel="noreferrer"
              href="https://enigmatic-plains-20871.herokuapp.com/"
            >
              github repo
            </a>
          </section>
        </div>
        <div className="projectItems row text-center">
          <section className="col-lg-4">
            <h4>Book Search API</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://book-search-engine2000.herokuapp.com/"
            >
              <img
                className="img-fluid w-50 mx-auto"
                src={bookApp}
                alt="project 1 "
              />
            </a>
            <a
              className="row col-2 mx-auto"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Bertokeys1/seach-a-book"
            >
              github repo
            </a>
          </section>
          <section className="col-4">
            <h4>Text Editor PWA</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://text-editor22.herokuapp.com/"
            >
              <img
                className="img-fluid w-50 mx-auto"
                src={textApp}
                alt="text app "
              />
            </a>
            <a
              className="row col-2 mx-auto"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Bertokeys1/Password-generator"
            >
              github repo
            </a>
          </section>
          <section className="col-4">
            <h4>Bit Page!</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://book-search-engine2000.herokuapp.com/"
            >
              <img
                className="img-fluid w-50 mx-auto"
                src={noteApp}
                alt="project 2 "
              />
            </a>
            <a
              className="row col-2 mx-auto"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/charliem61/bitPage"
            >
              github repo
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}