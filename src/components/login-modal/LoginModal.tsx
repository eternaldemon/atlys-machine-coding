import { FormEvent, ReactNode, useEffect, useState } from "react";
import Modal, { Header } from "../../components/modal/Modal";
import { ArrowRightIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface LoginModalProps {
  isOpen: boolean;
  onClose?: () => void;
  openRegistration?: () => void;
  logo?: boolean;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, openRegistration , logo}) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(true);

  const closeLoginModal = () => setIsLoginModalOpen(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    // Handle login logic with API call here
  };

  const handleModalToggle = () => {
    if(onClose) onClose();
    if(openRegistration) openRegistration();
  }

  useEffect(() => {
    setIsLoginModalOpen(() => isOpen);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isLoginModalOpen}
      onClose={onClose}
      header={
        <Header
          initialHeading="WELCOME BACK"
          mainHeading="Log into your account"
        />
      }
      logo={logo}
    >
      {/* Have not added required attribute to inputs since form handling is not required */}
      <form
        className="flex flex-col gap-4"
        onSubmit={(event) => handleLogin(event)}
      >
        <div className="flex flex-col gap-2 text-gray-300">
          <label htmlFor="email" className="text-sm">
            Email or Username
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event?.target?.value)}
            placeholder="Enter your email or username"
            className="p-2 bg-neutral-800 border border-gray-700 rounded"
          />
        </div>
        <div className="flex flex-col gap-2 text-gray-300 relative">
          <div className="flex justify-between">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <a
              href="#"
              className="text-sm text-gray-300 font-normal hover:text-white"
            >
              Forgot password?
            </a>
          </div>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event?.target?.value)}
            placeholder="Enter your password"
            className="p-2 bg-neutral-800 border border-gray-700 rounded"
          />
          <button
            type="button"
            className="absolute right-2 top-8 text-gray-400 hover:text-white:border-white rounded-full bg-neutral-800 p-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-4 w-4 p-0" />
            ) : (
              <EyeIcon className="h-4 w-4" />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="p-2 bg-blue-400 rounded text-white"
          onClick={onClose}
        >
          Login now
        </button>
        <p className="text-xs text-gray-400 flex gap-1">
          <span>Not registered yet? </span>
          <a
            href="#"
            className="text-gray-200 font-normal hover:text-gray-200 flex items-center gap-1"
            onClick={() => handleModalToggle()}
          >
            <span>Register</span> <ArrowRightIcon className="w-3 h-3 self-center" />
          </a>
        </p>
      </form>
    </Modal>
  );
};

export default LoginModal;
