import { useMemo } from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({
  primaryButtonCursor,
  primaryButtonBorder,
  primaryButtonPadding,
  primaryButtonBackgroundColor,
  primaryButtonPosition,
  primaryButtonTop,
  primaryButtonLeft,
  seeMoreDisplay,
}) => {
  const primaryButtonStyle = useMemo(() => {
    return {
      cursor: primaryButtonCursor,
      border: primaryButtonBorder,
      padding: primaryButtonPadding,
      backgroundColor: primaryButtonBackgroundColor,
      position: primaryButtonPosition,
      top: primaryButtonTop,
      left: primaryButtonLeft,
    };
  }, [
    primaryButtonCursor,
    primaryButtonBorder,
    primaryButtonPadding,
    primaryButtonBackgroundColor,
    primaryButtonPosition,
    primaryButtonTop,
    primaryButtonLeft,
  ]);

  const seeMoreStyle = useMemo(() => {
    return {
      display: seeMoreDisplay,
    };
  }, [seeMoreDisplay]);

  return (
    <div className="primary-button" style={primaryButtonStyle}>
      <div className="frame-parent">
        <div className="see-more-wrapper">
          <div className="see-more" style={seeMoreStyle}>
            See more
          </div>
        </div>
        <img className="vector-icon4" alt="" src="/vector.svg" />
      </div>
      <div className="primary-button-child" />
    </div>
  );
};

export default PrimaryButton;
