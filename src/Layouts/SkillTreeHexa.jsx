import React from "react";
import SkillHexa from "../smallComponents/SkillHexa";

const getHexas = () => {
  const array = [];
  for (let i = 0; i <= 530; i++) {
    array[i] = {
      index: i + 1,
      skillId: `hexa${i + 1}`,
    };
  }
  return array;
};

const SkillTreeHexa = ({ moving, setSelectedSkill }) => {
  const [hexas] = React.useState(getHexas());
  const [connections, setConnections] = React.useState([]);
  const [requirements, setRequirements] = React.useState([]);
  return (
    <div className="hexaMain">
      <div className="hexaContainer">
        {hexas.map((hexa) => (
          <SkillHexa
            index={hexa.index}
            skillId={hexa.skillId}
            connections={connections}
            setConnections={setConnections}
            requirements={requirements}
            setRequirements={setRequirements}
            moving={moving}
            setSelectedSkill={setSelectedSkill}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillTreeHexa;
