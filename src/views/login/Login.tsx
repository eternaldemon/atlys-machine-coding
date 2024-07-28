import LoginModal from "../../components/login-modal/LoginModal";
import { useNavigate } from "react-router-dom";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/home");
      };

    return (
        <div className="w-screen h-screen flex flex-col justify-center align-middle">
            HAHAHAHAHA 
            <LoginModal isOpen={true} logo={true} onClose={() => navigateToHome()} />
        </div>
    )
}

export default Login;