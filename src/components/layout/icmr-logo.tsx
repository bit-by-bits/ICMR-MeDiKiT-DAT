import { URLs } from "@/routes";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/icmr.png";

const ICMRLogo: React.FC = () => (
  <Link
    to={URLs.app.home}
    className="flex items-center gap-2 text-foreground font-semibold"
  >
    <img src={LoginImg} alt="Login" className="w-8 h-8" />
    <span className="sr-only">ICMR MeDiKiT-DAT</span>
  </Link>
);

export default ICMRLogo;
