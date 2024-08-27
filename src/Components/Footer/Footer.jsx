import "./footer.css";
import image from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="bg-dBlack p-8 text-zinc-200">
      <div className="container grid grid-cols-3">
        <div >
          <ul className="relative text-[18px] justify-center flex flex-col font-light italic">
            <li className="relative my-5 cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full  hover:scale-125">
              <p>Inside Pages</p>
            </li>
            <li className="relative my-5 cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full  hover:scale-125">
              <p>Courses</p>
            </li>
            <li className="relative my-5 cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full  hover:scale-125">
              <p>About Us</p>
            </li>
            <li className="relative my-5 cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full  hover:scale-125">
              <p>Contact Us</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-[18px] justify-center flex flex-col font-light italic">
            <li className="relative my-5 cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full  hover:scale-125">
              <p>Inside Pages</p>
            </li>
            <li className="relative my-5 cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full  hover:scale-125">
              <p>Courses</p>
            </li>
            <li className="relative my-5 cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full  hover:scale-125">
              <p>About Us</p>
            </li>
            <li className="relative my-5 cursor-pointer w-fit before:absolute before:bottom-0 before:bg-move before:h-2 before:w-2 before:transition-all hover:before:w-full  hover:scale-125">
              <p>Contact Us</p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center flex-col gap-5 items-center">
          <img src={image} alt="logo" height={300} width={300} />
          <div className="flex flex-wrap items-center gap-4">
            <a target="_blank" rel="noopener noreferrer" href="#">
              <span className="sr-only">twitter</span>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current text-gray-700 hover:text-primary icon-twitter hover:scale-125"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
              </svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              <span className="sr-only">youtube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current text-gray-700 hover:text-primary icon-youtube hover:scale-125"
              >
                <path d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"></path>
              </svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              <span className="sr-only">facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current text-gray-700 hover:text-primary icon-facebook hover:scale-125"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              <span className="sr-only">telegram</span>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current text-gray-700 hover:text-primary icon-telegram hover:scale-125"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
              </svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              <span className="sr-only">instagram</span>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current text-gray-700 hover:text-primary icon-instagram hover:scale-125"
              >
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* <hr className="hr-ft mx-auto text-secondary" /> */}
      <div className="flex justify-center">
        <p>Copy-right &copy; 2024 By Titans Max Plus</p>
      </div>
    </div>
  );
};

export default Footer;
