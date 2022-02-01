import React from 'react'
import {Link,useNavigate,useHistory } from 'react-router-dom';
const DivBox = ({rowNumber,heading,src1,src2,src3,src4,src5,src6,src7,src8,src9,src10,category}) => {
    const navigate = useNavigate();
    const renderToMenuList=()=>{
        navigate(`/${category}`);
    }


    const secondRow=()=>{
        return(
            <div>
                <img className="images" src={src6} onClick={renderToMenuList} alt="img1"/>
                <img className="images" src={src7} onClick={renderToMenuList} alt="img1"/>
                <img className="images" src={src8} onClick={renderToMenuList} alt="img1"/>
                <img className="images" src={src9} onClick={renderToMenuList} alt="img1"/>
                <img className="images" src={src10} onClick={renderToMenuList} alt="img1"/>
                    
            </div>

        )
    }


    return (
        <div className="mb-5">
            <h3 className="titleHeading my-5">{heading}</h3>
            <div className="imageRow">
                <div className="imagesDiv">
                    <img className="images" src={src1} onClick={renderToMenuList} alt="img1"/>
                    <img className="images" src={src2} onClick={renderToMenuList} alt="img1"/>
                    <img className="images" src={src3} onClick={renderToMenuList} alt="img1"/>
                    <img className="images" src={src4} onClick={renderToMenuList} alt="img1"/>
                    <img className="images" src={src5} onClick={renderToMenuList} alt="img1"/>
                    {rowNumber===2?secondRow():""}
                </div>
            </div>
        </div>
    )
}

export default DivBox
