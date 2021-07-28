import React,{useContext,useEffect} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { useMediaQuery } from 'react-responsive';

import {GlobalState} from '../../GlobalState'

import Aos from "aos";
import "aos/dist/aos.css"
import { useNavigate } from 'react-router';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



 function HomePage(props) {
    const isDesktop = useMediaQuery({ query: '(min-device-width: 1024px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' })
    const navigate = useNavigate()


    const state = useContext(GlobalState)
    const [products] =  state.productsAPI.productHome
  

    
    useEffect(() => {
       Aos.init({duration : 1500})
    }, [])


    
    return (
        <React.Fragment>
            
            <div className="body">
                <div className="grid1 wide">
                    <div className="banner" ></div>
                    
                    <div className="section-product" data-aos="fade-up" >
            
                        <div className="section-product__title">
                            <b />
                            <span>SẢN PHẨM NỔI BẬT</span>
                            <b />
                        </div>
                        
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={getSlidePerView()}
                            navigation
                            onSlideChange={() => console.log('slide change')}
                        >
                            
                                {slideshow()}
                                             
                        </Swiper>
                    </div>
                    
                    <div className="section-product"  data-aos="fade-up" >
                        
                        <div className="section-product__title">
                            <b />
                            <span>GIÁ TRỊ CỐT LÕI</span>
                            <b />
                        </div>
                        <div className="row1 section-outstandingValue">
                            <div className="col1 c-6 l-3">
                                <div className="d-flex flex-column align-items-center box-outstandingValue">
                                    <img width={60} height={60} src="./asset/img/chung_nhan_icon.png" className="image" alt = "icon chung nhan" />
                                    <div className="text-1">Đạt Chuẩn</div>
                                    <div className="text-2">Đủ chứng nhận chất lượng</div>
                                </div>
                            </div>
                            <div className="col1 c-6 l-3">
                                <div className="d-flex flex-column align-items-center box-outstandingValue">
                                    <img width={60} height={60} src="./asset/img/chat_luong_icon.png" className="image" alt = "icon chat luong" />
                                    <div className="text-1">Chất Lượng</div>
                                    <div className="text-2">Đúng trọng lượng và hàm lượng</div>
                                </div>  
                            </div>
                            <div className="col1 c-6 l-3">
                                <div className="d-flex flex-column align-items-center box-outstandingValue">
                                    <img width={60} height={60} src="./asset/img/thu_doi_cao_icon.png" className="image" alt = "icon thu doi" />
                                    <div className="text-1">Cam Kết</div>
                                    <div className="text-2">Thu mua đổi trả trọn đời</div>
                                </div>
                            </div>
                            <div className="col1 c-6 l-3">
                                <div className="d-flex flex-column align-items-center box-outstandingValue">
                                    <img width={60} height={60} src="./asset/img/bao_hanh_vuot_troi_icon.png" className="image" alt = "icon bao hanh" />
                                    <div className="text-1">Miễn phí</div>
                                    <div className="text-2">Làm sạch trọn đời</div>
                                </div>
                            </div>
        
                        </div>
                        
                    </div>

                    {showSectionProduct()}
                    

                   
                   

                </div>
                  
            </div>
                
           
        </React.Fragment>

    );


    function slideshow(){
        var result = [];
        if(products.length !== 0)
        {

           products.soldest.map((product,index) =>{
     
                 result.push(
                     <SwiperSlide key={`slide ${index}`}>
                 
                         <div   className="section-product__item " 
                                id="section-product"
                                onClick={()=>{
                                    navigate(`/chi-tiet/${product.product_id}`)
                                }}
                         >
                             <div className="item-image">
                             <div className="image"
                                    style={{
                                        backgroundImage : `url(${product.images[0].url})`
                                    }}
                             
                             >
                             </div>
                             </div>
                             <div className="item-text-hover">QUICK VIEW</div>
                             <div className="item-name">
                                 {product.content}
                             </div>
                         </div>
                         
                     </SwiperSlide>
                 ) 
                                    
                return 1;               
             })
        }
      

        return result;
    }

    function showItemSectionProduct(product,index){

        var result = [];
      
           result.push
                (
                    <div className="col1 l-3  c-6  section-product__item " 
                         id="section-product"  key={index}
                         onClick = {() => {
                             navigate(`/chi-tiet/${product.product_id}`)
                         }} 
                         
                    >       
                        <div className="item-image">   
                            <div className="image"
                                 style = {{
                                    backgroundImage: `url(${product.images[0].url})`

                                 }}
                            >

                            </div>
                        </div>
                        <div className="item-text-hover">QUICK VIEW</div>
                        <div className="item-name">
                            {product.content}
                        </div>
                    </div>

                )
       
        
        return result;
    }

    function getSlidePerView(){
        if(isDesktop) return 4;
        else if(isTabletOrMobile) return 2;
        
    }

    function showSectionProduct(){
      
        if (products.length !== 0 ){
            
            var result = []
     
            
            products.category.map((product,index)=>{
                result.push(
                                
                                <div className="section-product" data-aos="fade-up" key={index} 
                                    
                                   
                                >
                
                                    <div className="section-product__title">
                                        <b />
                                        <span>{product[0].category}</span>
                                        <b />
                                    </div>
                                    <div className="row1">
                                        {
                                        
                                            
                                            product.map((prod,index)=>{
                                                return showItemSectionProduct(prod,index)
                                            })
                                
                                        }
                                    

                                    </div>
                                    
                                </div>
                             )

                  return 1;           
            })

            return  result
        }

        
    }

   
}

export default HomePage;