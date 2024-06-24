import { useState } from "react"
import Footer from "../Footer/Footer";

function Form() {
    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)

    function handleClick1() {
        setIsActive1(true);
        setIsActive2(false);
    }
    function handleClick2() {
        setIsActive2(true);
        setIsActive1(false);
    }

    return (
        <div style={{
            width: '100%',
            height: '1900px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#341071'
        }}>
            <div className="Form-id">
                <div className="title">Enter information</div>
                <div className="forms-box">
                    <div className="leftForm">
                        <input type="text" id="name" placeholder="Name" autoComplete="off" required />
                        <input type="text" id="date-of-birth" autoComplete="off" required onFocus={(e) => e.target.type = 'date'} placeholder="Date of Birth" />
                        <input type="text" id="passport-id" autoComplete="off" required placeholder="Passport ID" />
                    </div>
                    <div className="rightForm">
                    <input type="text" id="surname" placeholder="Surname" autoComplete="off" required />
                    <input type="text" id="email" placeholder="Email" autoComplete="off" required />
                    <div className="gender-box">
                        <div className="text-gender">Gender</div>
                        <div className="genders">
                            <div className={isActive1 ? 'active' : ''} onClick={() => handleClick1()}>
                                M
                            </div>
                            <div className={isActive2 ? 'active' : ''} onClick={() => handleClick2()}>
                                W
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <a href="#carts">
                    <button className="further">Further</button>
                </a>
            </div>

            <div className="Form-id-second" id="carts">
                <div className="map">
                    <div className="map-text">Map</div>
                    <div className="carts-icons">
                        <img src="./mastercard_light 1.png" alt="mastercard icon" />
                        <img src="./visa_light 1.png" alt="visa icon" />
                        <img src="/mir_light 1.png" alt="mir icon" />
                    </div>
                </div>
                <div className="inputs">
                    <div>
                        <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
                        <input type="text" placeholder="MM / YY" />
                    </div>
                    <input type="text" placeholder="CVC" />
                </div>
                <button className="pay">Pay</button>
            </div>

            <Footer />
        </div>
    )
}
export default Form