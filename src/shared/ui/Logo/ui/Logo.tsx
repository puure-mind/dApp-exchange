import { logo } from "../config";
import { SX } from "../../../utils/styles";

interface Props {
  className?: string;
  sx?: SX;
}

export const Logo = ({ className, sx }: Props) => {
  return (
    <img style={sx} className={className} src={logo.icon} alt={logo.alt} />
  );
};
