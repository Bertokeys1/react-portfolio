function NavBar (props) {
    function clickHandler(event){
        const id = event.target.id;
        props.setPageRender(id)
    }
    return (
        <header>
        <nav className="header">
            <h1>Alberto Barrientos</h1>
            <div>
                <a className="navMenu" href="#aboutme" id="about" onClick={clickHandler}>About Me</a>
                <a className="navMenu" href="#work" id="projects" onClick={clickHandler}>Portfolio</a>
                <a className="navMenu" href="#contacts" id="contacts" onClick={clickHandler}>Contact Me</a>
                <a className="navMenu" href="https://drive.google.com/file/d/1D4WuCm_lgbgUBRBNxYnXcX5dv9kShmr8/view?usp=sharing">Resume</a>
            </div>
        </nav>
    </header>
    )
}

export default NavBar;