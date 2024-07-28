import { FormEvent, useEffect, useState } from "react";
import Modal, { Header } from "../../components/modal/Modal";
import {
  ArrowRightIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

interface RegisterModalProps {
  isOpen: boolean;
  onClose?: () => void;
  openLogin?: () => void
  logo?: boolean;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  openLogin,
  logo,
}) => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState<boolean>(true);

  const closeRegistrationModal = () => setIsRegistrationModalOpen(false);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    // Handle login logic with API call here
    console.log("Logging in with", { email, password });
  };

  const handleModalToggle = () => {
    if(onClose) onClose();
    if(openLogin) openLogin();
  }

  useEffect(() => {
    setIsRegistrationModalOpen(() => isOpen);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isRegistrationModalOpen}
      onClose={onClose}
      header={
        <Header
          initialHeading="SIGN UP"
          mainHeading="Create an account to continue"
        />
      }
      logo={logo}
    >
      <form
        className="flex flex-col gap-4"
        onSubmit={(event) => handleLogin(event)}
      >
        <div className="flex flex-col gap-2 text-gray-300">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event?.target?.value)}
            placeholder="Enter your email"
            className="p-2 bg-neutral-800 border border-gray-700 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-2 text-gray-300">
          <label htmlFor="email" className="text-sm">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event?.target?.value)}
            placeholder="Choose a preferred username"
            className="p-2 bg-neutral-800 border border-gray-700 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-2 text-gray-300 relative">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event?.target?.value)}
            placeholder="Choose a strong password"
            className="p-2 bg-neutral-800 border border-gray-700 rounded"
            required
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
          Continue
        </button>
        <p className="text-xs text-gray-400 flex gap-1">
          <span>Already have an account?</span>
          <a
            href="#"
            className=" text-gray-200 font-normal hover:text-gray-200 flex items-center gap-1"
            onClick={() => handleModalToggle()}
          >
            <span>Login</span>{" "}
            <ArrowRightIcon className="w-3 h-3 self-center" />
          </a>
        </p>
      </form>
    </Modal>
  );
};

export default RegisterModal;
