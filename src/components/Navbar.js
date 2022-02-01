import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
    const focusInput=(e)=>{

    }
    return (
        <div className="navbars">
            <div className="navBox">
                <div className="leftPart">
                    <div className="logo">
                        <Link to="/"><img className="myntraLogo" src="data:image/png;base64,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" alt="logo"/></Link>
                    </div>
                    <div className="title">
                        <p>MEN</p>
                    </div>
                    <div className="title">
                        <p>WOMEN</p>
                    </div>
                    <div className="title">
                        <p>KIDS</p>
                    </div>
                    <div className="title">
                        <p>HOME & LIVING</p>
                    </div>
                    <div className="title">
                        <p>BEAUTY</p>
                    </div>
                </div>
                <div className="rightPart">
                    <div>
                        <form>
                            <img className="wish mx-2" src="data:image/png;base64,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"/>
                            <input onFocus={focusInput} type="text" placeholder="Search for products,barand and more"/>
                           
                        </form>
                        
                    </div>
                    <div className="title">
                        <img className="person" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqKSf7pEKebHDLt1mfYgo1_9LT7c06CMkBg&usqp=CAU" alt="person"/>

                        <p>Profile</p>
                    </div>
                    <div className="title">
                        <img className="wish" src="https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png" alt="wishlist"/>

                        <p>Wishlist</p>
                    </div>
                    <div className="title">
                        <img className="person" src="data:image/png;base64,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" alt="bag"/>
                        <p>Bag</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
