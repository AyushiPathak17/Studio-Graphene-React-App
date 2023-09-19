import { useMemo } from "react";
import "./TextField.css";

const TextField = ({
  textFieldPosition,
  textFieldTop,
  textFieldLeft,
  fLORIDAJACKETMargin,
}) => {
  const textFieldStyle = useMemo(() => {
    return {
      position: textFieldPosition,
      top: textFieldTop,
      left: textFieldLeft,
    };
  }, [textFieldPosition, textFieldTop, textFieldLeft]);

  const fLORIDAJACKETStyle = useMemo(() => {
    return {
      margin: fLORIDAJACKETMargin,
    };
  }, [fLORIDAJACKETMargin]);

  return (
    <div className="text-field" style={textFieldStyle}>
      <div className="florida-jacket-parent">
        <div className="florida-jacket" style={fLORIDAJACKETStyle}>
          FLORIDA JACKET
        </div>
        <div className="suffered-alteration-in">
          Suffered alteration in some form, bysuffalterattion in some forme,
          byinjected humor, or randomised
        </div>
        <div className="florida-jacket">$100</div>
      </div>
    </div>
  );
};

export default TextField;
