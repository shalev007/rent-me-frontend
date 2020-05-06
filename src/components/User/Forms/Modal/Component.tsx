import React, { useState } from 'react';
import LoginForm from 'src/components/User/Forms/Modal/Login/Component';
import RegisterForm from 'src/components/User/Forms/Modal/Register/Component';

export interface ModalProps {
    userRegistered?: boolean;
}

const Modal: React.FC<ModalProps> = (props: ModalProps): JSX.Element => {
    const [userRegistered, setUserRegistered] = useState(props.userRegistered || true);

    const switchToRegister = (): void => {
        setUserRegistered(false);
    };

    const switchToLogin = (): void => {
        setUserRegistered(true);
    };

    return (
        <div className="login-register-form-modal">
            {userRegistered ? (
                <div className="login-form-container">
                    <LoginForm />
                    <div className="buttons-container">
                        <a className="forgot-password">Forgot Password?</a>
                        <button onClick={switchToRegister}>Not registered yet?</button>
                    </div>
                </div>
            ) : (
                <div className="register-form-container">
                    <RegisterForm />
                    <div className="buttons-container">
                        <button onClick={switchToLogin}>Back to login</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
