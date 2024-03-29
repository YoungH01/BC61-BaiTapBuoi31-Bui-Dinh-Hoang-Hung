import React from 'react'
import { useState } from 'react';
import './../styleGlasses.css'
// import g1 from './../../public/glassesImage/'
// import g1 from './../assets/glassesImage/g1.jpg'
let isClick=0;

const SoluitonGlasses = () => {
    const data=[
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ];
    let [glasses,wearGlasses]=useState([]);
    // let isClick=0;
    const getDetailGlasses=(index)=>{
        let getDetail=[];
        getDetail=data[index];
        isClick=1;
        // console.log(isClick);
        wearGlasses(glasses=>glasses=getDetail);
    }
    const renderListGlasses=()=>{
        let newListGlasses=[];
        newListGlasses=data.map((item,index)=>{
            return (
                <div key={index} className='col-2' onClick={()=>{getDetailGlasses(index)}}>
                    <img src={item.url} style={{width:"100%"}}/>
                </div>
            );
        });
        return newListGlasses;
    }
    const renderDetailGlasses=()=>{
        return (
                   <div>
                            <img src={glasses.url} style={{width:"100%"}}/>
                            <p className='mt-5'>Name: {glasses.name}</p>
                            <p className="">Price: <span>{glasses.price}</span></p>
                            <p className="">{glasses.desc}</p>
                   </div>
        );
    }
    const checkClickAndRender=()=>{
        if(isClick==1){
            console.log(isClick);
           return( renderDetailGlasses())
        }
    }
  return (
    <div className='container'>
      {/* <img src='https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg'/> */}
      {/* in src */}
      {/* <img src={g1}/> */}
      {/* in public */}
      {/* <img src="./glassesImage/g1,jpg"/> */}
      <div className=''>
        <h1 className='text-center'>Bài tập thử kính</h1>
        <div className='d-flex mt-5 justify-content-around'>
            <div className="col-lg-6 col-xxl-4 mb-5">
                {/* {renderDetailGlasses()} */}
                <div className="card bg-light border-0 h-100">
                        <div className="card-body p-4 p-lg-5 pt-0 pt-lg-0">
                            <h2 className="fs-4 text-center fw-bold mt-5 mb-5">Chi tiết kính</h2>
                            {/* <img src={glasses.url} style={{width:"100%"}}/>
                            <p className='mt-5'>Name: {glasses.name}</p>
                            <p className="">Price: <span>{glasses.price}</span></p>
                            <p className="">{glasses.desc}</p> */}
                            {checkClickAndRender()}
                        </div>
                    </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
                <div className=''>
                 <img src="./glassesImage/model.jpg" alt="" style={{width:"100%"}} />
                 <img src={glasses.url} className='imgGlasses'/>
                </div>
            </div>
        </div>
        <div className="d-flex flex-wrap mt-5">
            {renderListGlasses()}
        </div>
      </div>
    </div>
  )
}

export default SoluitonGlasses
