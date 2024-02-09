import React, { useContext } from "react";
import { useMainHexaSkillTreeConfig } from "../configs/SkillTreeConfigs/useMainHexaSkillTreeConfig";
import { CharacterContext } from "../providers/characterProvider";
import { getBorderHexas } from "../utils/common";
import SkillSlot from "./SkillSlot";

const getHexaParams = (i) => {
  const borderHexas = getBorderHexas();
  if (borderHexas.includes(i)) return { style: { backgroundColor: "red" } };
  return { style: {} };
};

const SkillHexa = ({
  index,
  skillId,
  connections,
  setConnections,
  requirements,
  setRequirements,
  moving,
  setSelectedSkill,
}) => {
  const { character } = useContext(CharacterContext);
  const [params] = React.useState({ ...getHexaParams(index) });

  const config = useMainHexaSkillTreeConfig();
  const hexaConfig = config.find((conf) => conf.skillId === index);

  return (
    <div
      key={skillId}
      style={{
        ...params.style,
        position: "relative",
      }}
      className={`hexa ${
        connections?.includes(index) ? "connectionHighlight" : ""
      } ${requirements?.includes(index) ? "requirementHighlight" : ""} ${
        character.skills?.includes(skillId) ? "hexaSkillActive" : ""
      }`}
      onMouseOver={() => {
        if (!moving) {
          setConnections(hexaConfig?.connects(index) || []);
          setRequirements(hexaConfig?.req(index) || []);
        }
      }}
      onMouseLeave={() => {
        if (!moving) {
          setConnections([]);
          setRequirements([]);
        }
      }}
    >
      <SkillSlot skill={hexaConfig} setSelectedSkill={setSelectedSkill} />
    </div>
  );
};

export default SkillHexa;
