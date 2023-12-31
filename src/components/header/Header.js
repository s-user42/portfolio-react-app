import "./header.css";
import myCV from "../../resources/CV - Stanislav  Bogatii.pdf";

const Header = () => {
    return ( 
        <header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>Hello, my name is <em>Stanislav</em></strong><br/>		
                    				a frontend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
			    <a href={myCV} target="_blank" rel="noreferrer" className="btn">Download CV</a>
			</div>
		</header>
     );
}
 
export default Header;