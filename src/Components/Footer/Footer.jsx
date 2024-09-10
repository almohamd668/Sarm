import "./footer.css";
import image from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-dBlack p-8 text-zinc-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <ul className="text-[18px] flex flex-col font-light italic space-y-5">
              <li className="relative cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full hover:scale-125">
                <p>Inside Pages</p>
              </li>
              <li className="relative cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full hover:scale-125">
                <p>Courses</p>
              </li>
              <li className="relative cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full hover:scale-125">
                <p>About Us</p>
              </li>
              <li className="relative cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full hover:scale-125">
                <p>Contact Us</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-[18px] flex flex-col font-light italic space-y-5">
              <li className="relative cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full hover:scale-125">
                <p>Inside Pages</p>
              </li>
              <li className="relative cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full hover:scale-125">
                <p>Courses</p>
              </li>
              <li className="relative cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full hover:scale-125">
                <p>About Us</p>
              </li>
              <li className="relative cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full hover:scale-125">
                <p>Contact Us</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <img src={image} alt="logo" className="h-24 w-24 md:h-48 md:w-48" />
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a target="_blank" rel="noopener noreferrer" href="#">
                <span className="sr-only">twitter</span>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current text-gray-700 hover:text-primary hover:scale-125"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                </svg>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <span className="sr-only">youtube</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current text-gray-700 hover:text-primary hover:scale-125"
                >
                  <path d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"></path>
                </svg>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <span className="sr-only">facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current text-gray-700 hover:text-primary hover:scale-125"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <span className="sr-only">telegram</span>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current text-gray-700 hover:text-primary hover:scale-125"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
                </svg>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <span className="sr-only">linkedin</span>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current text-gray-700 hover:text-primary hover:scale-125"
                >
                  <path d="M22.225 0H1.774C.791 0 0 .791 0 1.774v20.452C0 23.209.791 24 1.774 24h20.451c.983 0 1.774-.791 1.774-1.774V1.774C24 .791 23.209 0 22.225 0zm-14.45 20.452H4.614v-8.735h3.16v8.735zm-1.583-9.913c-1.026 0-1.863-.835-1.863-1.86s.836-1.861 1.863-1.861c1.03 0 1.861.836 1.861 1.861 0 1.026-.83 1.86-1.861 1.86zm14.334 9.913h-3.162v-4.708c0-1.118-.02-2.558-1.564-2.558-1.565 0-1.808 1.226-1.808 2.493v4.773h-3.16v-8.735h3.04v1.191h.042c.425-.805 1.458-1.655 3.002-1.655 3.211 0 3.8 2.112 3.8 4.855v4.847h.002z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
