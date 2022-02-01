import React from 'react'
import headerImg from './../Images/header.jpg'
import bottomImg from './../Images/bottom.png'
import './home.css';
import DivBox from './DivBox';

import datas from './Api';



const Home = () => {
    
    return (
        <div className="home my-2">
            <div className="homeBox">
                <div className="mb-5 homeCrausel">
                    <img className="headerImg" src={headerImg} alt="headerImg" />
                </div>
               <div className="menuBox">
                    <div className="rows1">

                        {datas.map((data)=>{
                            return(
                                <DivBox rowNumber={data.rowNumber} heading={data.heading} src1={data.pic1} src2={data.pic2} src3={data.pic3} src4={data.pic4} src5={data.pic5} src6={data.pic6} src7={data.pic7} src8={data.pic8} src9={data.pic9} src10={data.pic10} category={data.category} />

                            )
                        })}

                    </div>
                </div>
                <div className=" homeCrausel">
                    <img className="headerImg" src={bottomImg} alt="headerImg" />
                </div>
            </div>
            
        </div>
    )
}

export default Home
