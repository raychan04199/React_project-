import logo from '../assets/investment-calculator-logo.png';

export default function Headers() {
    return(
        <header id="header">
            <img id="header img" src={logo} alt="Investment Calculator" />
            <h1 >Investment Calculator</h1>
        </header>
    )
}