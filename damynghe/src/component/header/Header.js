import React, {  useState,useContext } from 'react';
import { useNavigate } from 'react-router';
import {GlobalState} from '../../GlobalState'
import * as Constant from '../constant/Constant'
import * as ConstSubCategory from '../constant/ConstantSubCategory'

function Header(props) {
    const value = useContext(GlobalState)
    var [state,setState] = useState(false)
    const [category] = value.categoriesAPI.categories;
    const [input,setInput] = useState('')
    const [,setSearch] = value.productsAPI.search
    const [checked,setChecked] = useState([false,false,false,false,false,false])
    const navigate = useNavigate()

    var activeClassname = state ===true ? 'active1' : ''
    const toggleState = () =>{
        setState(!state)
    }

    const toggleChecked = (index) =>{
        var check2 = [...checked]
        check2[index] = !check2[index];
        setChecked(check2)
    }

    const onSubmitInput = (event,index) =>{
        if(event.key==='Enter'){
            setSearch(input)
            navigate(`/search/${input}`)
            setInput('')
            if(index ==='1'){
                toggleState()
            }
        }

    }


    return (
        <div className="header">
                <div className="header-top-1 ">
                    <div className="grid1 wide " style={{ height: '100%' }}>
                        <div className="header-top hide-on-mobile-tablet">
                            <ul className="header-top-left d-flex">
                                <li className="header-top-left-item ">
                                    <i className="header-top-left__icon  fas fa-map-marker-alt " />
                                    <div className="header-top-left__text ">Đá mỹ nghệ Tường Thu</div>
                                </li>
                                <li className="header-top-left-item ">
                                    <i className="fas fa-phone" />
                                    <div className="header-top-left__text">0794545447</div>
                                </li>
                            </ul>
                            <ul className="header-top-right d-flex">
                                <li className="header-top-left-item ">
                                    <i className="fas fa-map-marker-alt" />
                                    <div className="header-top-left__text">Đăng kí</div>
                                </li>
                                <li className="header-top-left-item ">
                                    <i className="fas fa-phone" />
                                    <div className="header-top-left__text">Đăng nhập</div>
                                </li>
                               
                            </ul>
                        </div>
                        <div className="header-top__search  hide-on-desktop">
                            <input 
                                className="search" 
                                type="text" 
                                placeholder="Tìm kiếm sản phẩm"  
                                value={input}
                                onKeyPress={(e)=> onSubmitInput(e,'0')}
                                onChange = {(e)=>
                                    {

                                        setInput(e.target.value)
                                        
                                    }
                                }
                            />
                            <div className="icon"
                                onClick={
                                    ()=>{
                                        setSearch(input)
                                        navigate(`/search/${input}`)
                                        setInput('')
                                    }
                                }
                            >
                                <i className=" fas fa-search" />
                            </div>
                        </div>
                    </div>
                </div>

            

                <div className="grid1 wide">
                    <div className="header-center">
                        <div className="header-center__search hide-on-mobile-tablet ">
                            <input 
                                className="search" type="text"
                                placeholder="Tìm kiếm sản phẩm"  
                                value={input}
                                onKeyPress={(e)=> onSubmitInput(e,'0')}
                                onChange = {(e)=>
                                    {

                                        setInput(e.target.value)
                                        
                                    }
                                }
                            />
                            <i className="icon fas fa-search" 
                                onClick={
                                    ()=>{
                                        setSearch(input)
                                        navigate(`/search/${input}`)
                                        setInput('')
                                    }
                                }
                            />
                        </div>
                        <button className="topbar-right btn--collapse hide-on-desktop" type="button">
                            <div 
                                className="line-container"
                                onClick = {() => toggleState()}
                            >
                                <div className="line line-1" />
                                <div className="line line-2" />
                                <div className="line line-3" />
                            </div>

                        </button>
                        <div 
                            className="header-center__logo"
                            onClick={()=>{
                                
                                navigate('/')
                            }}
                        >
                            <img src="https://res.cloudinary.com/da-my-nghe/image/upload/v1625591639/damynghe/logo3_npmo2f.png" className="header-logo" alt="logo da my nghe" />
                        </div>
                        <div className="header-center__cart">
                            <div className="text hide-on-mobile">GIỎ HÀNG</div>
                            <i className="icon fas fa-shopping-cart" />
                        </div>
                    </div>
                    <div className="header-bottom">
                        <ul className="header-nav hide-on-mobile-tablet">
                            <li 
                                className="nav-item nav-item-active"
                                onClick={()=>{
                                    navigate('/')
                                }}
                            >
                                    HOME
                                    
                            </li>
                            <li className="nav-item">
                                 <h3>TƯỢNG ĐÁ</h3>
                                <div className="out-menu">
                                    <div className="row1 out-menu-item">
                                        {
                                            showTuongDa()
                                        }
                                                    
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <h3>NỘI THẤT ĐÁ</h3>
                                <div className="out-menu">
                                    <div className="row1 out-menu-item">
                                        <div  className="col1 l-4">
                                            <h4 className="out-menu-title">LAN CAN</h4>
                                            <h5 className="out-menu-name"
                                                onClick = {
                                                    ()=>{
                                                        navigate('/danh-muc/noi-that/lan-can')
                                                    }
                                                }
                                            >Lan can</h5>
                                          
                
                                            
                                        </div>

                                        <div  className="col1 l-4">
                                            <h4 className="out-menu-title">BÀN GHẾ</h4>
                                            <h5 className="out-menu-name"
                                                 onClick = {
                                                    ()=>{
                                                        navigate('/danh-muc/noi-that/ban-ghe-san-vuon')
                                                    }
                                                }
                                            >Bàn ghế sân vườn</h5>
                                            
                                        </div>

                                        <div  className="col1 l-4">
                                            <h4 className="out-menu-title">KHÁC</h4>
                                            <h5 className="out-menu-name"
                                                 onClick = {
                                                    ()=>{
                                                        navigate('/danh-muc/noi-that/binh-bong')
                                                    }
                                                }
                                            >
                                                Bình bông</h5>

                                            <h5 
                                                className="out-menu-name"
                                                onClick = {
                                                    ()=>{
                                                        navigate('/danh-muc/noi-that/dai-phun-nuoc')
                                                    }
                                                }
                                            >Đài phun nước</h5>
                                    
                                   
                                            
                                        </div>
                                    </div>
                                </div>



                            </li>
                            <li className="nav-item">TƯỢNG NGHỆ THUẬT</li>
                            <li className="nav-item">
                                <h3>CÔNG TRÌNH NỔI BẬT</h3>
                            </li>

                            
                        </ul>
                    </div>
                </div>

                <div className={`menu ${activeClassname}`} >
                <div className="menu-top">
                    <div className="menu-search">
                       
                        <input 
                            type="text" 
                            placeholder="Search" 
                            onKeyPress={(e)=>  onSubmitInput(e,'1')}
                            value={input}
                            onChange = {(e)=>
                                {

                                    setInput(e.target.value)
                                    
                                }
                            }
                        />
                         <i 
                            className="search-icon fas fa-search" 
                            onClick={
                                ()=>{
                                    setSearch(input)
                                    navigate(`/search/${input}`)
                                    setInput('')
                                    toggleState()
                                }
                            }
                        />
                    </div>
                    <div className="menu-top-right">
                        <div 
                            className={`line-container ${activeClassname}`}
                            onClick = {() => toggleState()}
                        >
                            <div className="line line-1" />
                            <div className="line line-2" />
                            <div className="line line-3" />
                        </div>
                    </div>
                </div>
                <div className="menu-center">
                 
                    <ul className="header-moblie">
                        <li 
                            onClick={()=> {
                                navigate('/')
                            }}
                        >
                         
                            <h2 
                                className="category-title"
                                onClick={
                                    () => {
                                        navigate('/')
                                        toggleState()
                                    }
                                }
                                
                            >HOME</h2>
                        </li>
                

                            {showCategory()}
                    
                    </ul>
                </div>
                <div className="menu-bottom">
                    <div className="menu-bottom-user">
                        <img src="https://res.cloudinary.com/da-my-nghe/image/upload/v1625591639/damynghe/logo3_npmo2f.png" alt ="logo da my nghe"/>
                        <span>Đá mỹ nghệ Tường Thu</span>
                    </div>
                    <i className="far fa-question-circle" />
                </div>
            </div>
            </div>
    );


    function showTuongDa(){
        var result = []
        
        for(let i=0;i<category.length;i++){
           
            switch(category[i].name){
                case Constant.TUONG_PHAT :
                result.push(
                <div  className="col1 l-4" key={`${category[i].name}`}>
                    <h4 
                        className="out-menu-title"
                        onClick={
                            ()=>{
                                navigate(`/danh-muc/tuong-phat`)
                            }
                        }
                    >
                        TƯỢNG PHẬT
                    </h4>


                    {showItemCategory(category[i].subname,category[i].name)}
                    
                </div>
                )
                break;
                case Constant.TUONG_KHAC :
                result.push(
                <div  className="col1 l-4" key={`${category[i].name}`}>
                    <h4 
                        className="out-menu-title"
                        onClick={
                            ()=>{
                                navigate(`/danh-muc/tuong-khac`)
                            }
                        }
                    >
                        TƯỢNG KHÁC
                    </h4>


                    {showItemCategory(category[i].subname,category[i].name)}
                    
                </div>
                )
                break;
                case Constant.TUONG_LINH_VAT :
                result.push(
                <div  className="col1 l-4" key={`${category[i].name}`}>
                    <h4 
                        className="out-menu-title"
                        onClick={
                            ()=>{
                                navigate(`/danh-muc/tuong-linh-vat`)
                                
                            }
                        }
                    >
                        TƯỢNG LINH VẬT
                    </h4>


                    {showItemCategory(category[i].subname,category[i].name)}
                    
                </div>
                )
                break;
                
                default : break;
               
               
              
               
            }
        }
      

        return result;
    }
    function showItemCategory(subname,name){
        var result = [];
        var cate = '';
        var subcate = '';
        for(let i=0;i<ConstSubCategory.category.length;i++){
            if(name === ConstSubCategory.category[i].key)
            {
                cate = ConstSubCategory.category[i].value;
                break
            }
        }
        
        


        for(let i=0;i<subname.length;i++){
            
            result.push(
                <h5 className="out-menu-name" 
                    key={`${subname[i]}`}
                    onClick = {
                        () =>{
                            for(let j=0;j<ConstSubCategory.subCategory.length;j++){
                                if(subname[i] === ConstSubCategory.subCategory[j].key)
                                {
                                    subcate = ConstSubCategory.subCategory[j].value;

                                    break
                                }
                            }
                            navigate(`/danh-muc/${cate}/${subcate}`)
                            
                        }
                    }
                >

                    {`${subname[i]}`}

                </h5>
            )
        }
        return result;
    }


    function showCategory(){
        var result = []
       
        for(let i=0;i<category.length;i++){
            result.push(
                <li key={i} >
                                   
                    <h2
                    className="category-title"
                    onClick={
                        () =>{
                            toggleChecked(i)
                        }
                    }
                    >
                        {category[i].name}
                    </h2>

                    <h2 className={checked[i] ===true ? 'sub-item actived' : 'sub-item'}>
                        <div
                        key ={i}
                        onClick = {
                            () =>{
                                var cate = '';
                                    for(let j=0;j<ConstSubCategory.category.length;j++){
                                        if(category[i].name === ConstSubCategory.category[j].key)
                                        {
                                            cate = ConstSubCategory.category[j].value;
                                        }
                                    }
                           
                                navigate(`/danh-muc/${cate}`)
                                toggleState()
                            }
                        }
                        >{category[i].name}</div>

                        {showSubCategory(category[i].subname,category[i].name)}
                    </h2>
                                
                
                </li>
            )
        }



        return result
    }
    function showSubCategory(subname,name){

        var result=[]

        
        var subcate = '';
        var cate = '';
        for(let i=0;i<ConstSubCategory.category.length;i++){
            if(name === ConstSubCategory.category[i].key)
            {
                cate = ConstSubCategory.category[i].value;
                break
            }
        }


        for(let i=0;i<subname.length;i++){
            result.push(
                <div
                    key ={i}
                    onClick = {
                        () =>{
                            for(let j=0;j<ConstSubCategory.subCategory.length;j++){
                                if(subname[i] === ConstSubCategory.subCategory[j].key)
                                {
                                    subcate = ConstSubCategory.subCategory[j].value;

                                    break
                                }
                            }
                            navigate(`/danh-muc/${cate}/${subcate}`)
                            toggleState()
                        }
                    }
                >{subname[i]}</div>
            )
        }


        return result
    }
}

export default Header;