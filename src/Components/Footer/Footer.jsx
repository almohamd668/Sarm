import "./footer.css";
import image from "../../assets/logo.svg";
const Footer = () => {
  return <div className="ft-sec bg-slate-700 p-8 text-zinc-200">
    <div className="grid grid-cols-3">
    <div>
      <ul>
        <li className="f-li">
          <p>Inside Pages</p>
        </li>
        <li className="f-li">
          <p>Courses</p>
        </li>
        <li className="f-li">
          <p>test</p>
        </li>
        <li className="f-li">
          <p>About Us</p>
        </li>
        <li className="f-li">
          <p>Contact Us</p>
        </li>
      </ul>
    </div>
    <div>
    <ul>
        <li className="f-li">
          <p>Inside Pages</p>
        </li>
        <li className="f-li">
          <p>Courses</p>
        </li>
        <li className="f-li">
          <p>test</p>
        </li>
        <li className="f-li"> 
          <p>About Us</p>
        </li>
        <li className="f-li">
          <p>Contact Us</p>
        </li>
      </ul>
    </div>
    <div className="flex justify-center items-center">
    <img src={image} alt="logo" height={150} width={150} />
    </div>
    </div>
    <hr className="my-5 text-purple-400" />
    <div className="flex justify-center">
      <p>Copy-right &copy; 2024 By Titans Max Plus</p>
    </div>
  </div>
  ;
};

export default Footer;
