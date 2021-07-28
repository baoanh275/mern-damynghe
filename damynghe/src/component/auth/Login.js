import React,{useState} from 'react';
import axios from 'axios'

function Login() {   

    const [user,setUser] = useState({
        email : '',
        password : ''
    });

    const onChangeInput = e => {
        const {name,value} = e.target;
        setUser({
            ...user,
            [name] : value
        })
    }
    
    const loginSubmit = async e =>{
        e.preventDefault()

        try{
            await axios.post('/user/login',{...user})
            localStorage.setItem('firstLogin',true)
            /* window.location.href = "/"; */
        }
        catch (err) {
            alert(err.response.data.msg)
        }
    }


    return (
        <div className="grid__full-width app-login">
            <div className="app-login-2">
                <form 
                    className="needs-validation form-register"
                    onSubmit = {loginSubmit}
                    noValidate
                >
                    <div className="form-group modal-form-title d-flex justify-content-center">
                        <div className="title-register">Đăng nhập</div>
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
                            onChange =  {onChangeInput}
                            
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
                            onChange =  {onChangeInput}

                            
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Vui lòng nhập mật khẩu
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Quên mật khẩu?</label>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <button className="btn1 btn--highlight btn-register" type="button" data-dismiss="modal">Trở lại</button>
                        <button 
                            type="submit" 
                            className="btn1 btn--primary form-btn-submit btn-register"
                           
                        >Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>

    );

}

export default Login;