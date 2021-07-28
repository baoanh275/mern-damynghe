import React,{useContext,useState} from 'react';
import {Link,useNavigate, useParams} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import * as ConstSubCategory from '../constant/ConstantSubCategory'


function CategoryPage(props) {
    const navigate = useNavigate()
    const state = useContext(GlobalState)
    const [allProduct] =  state.productsAPI.allProducts
    const [category] =  state.categoriesAPI.categories
  
    const [checked,setChecked] = useState([false,false,false,false,false,false])
   
    var products = []

    const {id} = useParams()
    var catego = ''
    var categoryPage = ''

    for(let i = 0;i<ConstSubCategory.category.length;i++){
        if(id=== ConstSubCategory.category[i].value){
            catego = ConstSubCategory.category[i].key;
            categoryPage = ConstSubCategory.category[i].key;
            break
        }
    }

   
    for(let i=0;i<allProduct.length;i++){
        if(catego===allProduct[i].category){
            products.push(allProduct[i])
        }
    }
   

    const toggleChecked = (index) =>{
        var check2 = [...checked]
        check2[index] = !check2[index];
        setChecked(check2)
    }
    
    
    if(products.length === 0){
        return <h2 className="no-product">Không có sản phẩm nào</h2>
    }
    else
    return (
        <React.Fragment>
            <div className="grid1 wide">
                <div className="section-top">
                    <div className="section-top-left">
                        <Link to="/" className="text">TRANG CHỦ</Link>
                        <div className="separate">/</div>
                        <div className="text-2">{categoryPage}</div>
                    </div>
                    {/* <div className="section-top-right">
                        <div className="">Hiển thị 1–12 trong 26 kết quả</div>
                        <div className="">
                            <form>
                                <select>
                                    <option>Tất cả</option>
                                    <option></option>
                                    <option></option>
                                    <option></option>

                                </select>

                            </form>
                        </div>

                    </div> */}
                </div>
            </div>

            <div className="grid1 wide">
                <div className="row1">
                    <div className="col1 l-3">
                        <div className="d-flex flex-column">
                            <div className="section-category hide-on-mobile-tablet">
                                <div className="section-category-title">
                                    DANH MỤC SẢN PHẨM
                                </div>
                                <ul className="section-category-item">
                                    <li 
                                        onClick={()=> {
                                            navigate('/')
                                        }}
                                    >
                                        <h2 className="category-title">Home</h2>
                                    </li>
                            

                                        {showCategory()}
                                
                                </ul>
                            </div>

                            

                           
                        </div>
                     
                    </div>
                    <div className="col1 l-9 c-12">
                        <div className="row1">
                          
                                {showSectionProduct()}
                         
                        </div>
                        {/* <div className="pagination">
                            <ul className="section-pagination">
                                <li className="pagination-item">1</li>
                                <li className="pagination-item">2</li>
                                <li className="pagination-item">3</li>
                                <li className="pagination-item">4</li>
                                <li className="pagination-item">5</li>
                            </ul>
                        </div> */}
                    </div>

                    
                </div>
            </div>
        </React.Fragment>
    );



    function showSectionProduct(){
        
        if (products.length !== 0 ){
            
            var result = []
            products.map((product,index)=>{
                result.push(
                               
                            <div className="col1 l-3  c-6  section-product__item "  key={index}
                                id="section-product"
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
                return 1;
                            
            })

            return  result
        }

        
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
                    >{category[i].name}</h2>
                    <h2 className={checked[i] ===true ? 'sub-item actived' : 'sub-item'}>
                        {showSubCategory(category[i].subname,category[i].name)}
                    </h2>
                                
                
                </li>
            )
        }


   
        return result;
        
    }
    function showSubCategory(subname,name){

        var result=[]

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
                        }
                    }
                >{subname[i]}</div>
            )
        }


        return result
    }
}

export default CategoryPage;