import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'



function RegisterBuyer(props) {

    const navigate = useNavigate()
    const [user,setUser] = useState({
        email : '',
        password : '',
        name : ''
    });

    const [repassword,setRepassword] = useState('')


    const onHandleSubmit = async e =>{
        e.preventDefault()
        if(user.password === repassword)
        {   
            try{
                await axios.post('/user/register',{...user})
                localStorage.setItem('firstLogin',true)
                window.location.href = "/login";
            }
            catch (err) {
                alert(err.response.data.msg)
            }
        }
        else {
            alert('Mật khẩu không khớp')
        }
    }

    const onChangeInput = e => {
        const {name,value} = e.target;
        setUser({
            ...user,
            [name] : value
        })
    }

    return (
        <div className="grid__full-width app-login">
            <div className="app-login-2">
                <form 
                    className="needs-validation form-register"
                    onSubmit = {onHandleSubmit} 
                    noValidate
                >
                    <div className="form-group modal-form-title d-flex justify-content-center">
                        <div className="title-register">Đăng ký</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Họ và tên</label>
                        <input 
                            type="text" 
                            className="form-control modal-input"                                
                            placeholder="Nhập email của bạn" required 
                            name="name"
                            value = {user.name}
                            onChange = {onChangeInput}
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Vui lòng nhập email
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Địa chỉ email</label>
                        <input 
                            type="email" 
                            className="form-control modal-input" 
                            id="username"                     
                            placeholder="Nhập email của bạn" required 
                            name="email"
                            value = {user.email}
                            onChange = {onChangeInput}
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Vui lòng nhập email
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input 
                            type="password" 
                            className="form-control modal-input" 
                            id="password"
                              
                             placeholder="Nhập mật khẩu của bạn" required 
                             name="password"
                             value = {user.password}
                             onChange = {onChangeInput}
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Vui lòng nhập mật khẩu
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rePassword">Nhập lại mật khẩu</label>
                        <input 
                            type="password" 
                            className="form-control modal-input" 
                            id="confirmpassword" 
                            name="confirmpassword" 
                            placeholder="Nhập lại mật khẩu" required
                            value = {repassword}
                            onChange = {e => setRepassword(e.target.value)}
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Vui lòng nhập lại mật khẩu
                        </div>
                    </div>
            
                    <div className="form-group form-group-label">
                        <span >Bằng việc đăng kí, bạn đã đồng ý với chúng tôi về 
                           
                        </span>
                          
                        <span 
                            style={
                                {
                                    color : '#d80c24',
                                    marginLeft : '4px'
                                }
                            }
                        >Điều khoản dịch vụ &amp; chính sách bảo mật</span>
                    </div>
                    <div className="form-group d-flex justify-content-end">
                        <button
                            className="btn1 btn--highlight btn-register" 
                            type="button" data-dismiss="modal"
                            onClick = {() => {
                                navigate('/')
                            }}
                        >Trở lại</button>
                        <button
                            type="submit"   
                            className="btn1 btn--primary btn-register"
                           
                        >Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>

    );

}

export default RegisterBuyer;