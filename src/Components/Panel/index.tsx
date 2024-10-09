import React, { FC } from "react";

export interface PanelProps {
  backgroundImageUrl: string;
  imageName: string;
  isActive: boolean;
  onPanelClick: (backgroundImageUrl: string, imageName: string) => void;
}

const Panel: FC<PanelProps> = ({
  backgroundImageUrl,
  imageName,
  isActive,
  onPanelClick,
}: PanelProps) => {
  const onClick = () => {
    onPanelClick(backgroundImageUrl, imageName);
  };

  const customStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`,
  };

  return (
    <div
      className={`panel ${isActive ? "active" : ""}`}
      style={customStyle}
      onClick={onClick}
    >
      <h3>{imageName}</h3>
    </div>
  );
};

export default Panel;
