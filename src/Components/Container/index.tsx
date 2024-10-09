import React, { FC, useState } from "react";

import Panel from "../Panel";

interface PanelType {
  backgroundImageUrl: string;
  imageName: string;
}

const panels: PanelType[] = [
  {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1728439899761-2a22bc7b842a?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageName: "Parking Lot",
  },
  {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1728440026751-2c9a6acfc1a1?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageName: "Traffic",
  },
  {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1728439870855-1822c5459b90?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageName: "Snow",
  },
  {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1728439718227-e503763007db?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageName: "Lake",
  },
  {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1728440259893-83ca94f34f73?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageName: "City Lights",
  },
];

const Container: FC<{}> = () => {
  const [activePanel, setActivePanel] = useState<PanelType>(panels[0]);

  const onPanelClick = (backgroundImageUrl: string, imageName: string) => {
    setActivePanel({
      backgroundImageUrl,
      imageName,
    });
  };
  return (
    <div className='container'>
      {panels.map((panel) => (
        <Panel
          backgroundImageUrl={panel.backgroundImageUrl}
          imageName={panel.imageName}
          isActive={panel.backgroundImageUrl === activePanel.backgroundImageUrl}
          onPanelClick={onPanelClick}
        />
      ))}
    </div>
  );
};

export default Container;
