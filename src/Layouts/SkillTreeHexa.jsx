import React from "react";

const getHexaParams = (i) => {
  const borderHexas = [];
  for (let i = 2; i <= 30; i++) {
    borderHexas.push(i);
  }
  for (let i = 504; i <= 531; i++) {
    borderHexas.push(i);
  }
  for (let i = 1; i <= 473; i += 59) {
    borderHexas.push(i);
    borderHexas.push(i + 30);
  }
  for (let i = 59; i <= 472; i += 59) {
    borderHexas.push(i);
    borderHexas.push(i + 30);
  }
  if (borderHexas.includes(i)) return { disabled: true };
  if ([251, 252, 281].includes(i))
    return { style: { backgroundColor: "blue" } };

  return {};
};

const getHexas = () => {
  const array = [];
  for (let i = 0; i <= 530; i++) {
    array[i] = { skillId: `hexa${i + 1}`, ...getHexaParams(i + 1) };
  }
  return array;
};

const SkillTreeHexa = () => {
  const [hexas] = React.useState(getHexas());
  return (
    <div className="hexaMain">
      <div className="hexaContainer">
        {hexas.map((hexa) => (
          <div
            key={hexa.skillId}
            style={{
              ...(hexa?.disabled ? { backgroundColor: "red" } : {}),
              ...hexa?.style,
            }}
          >
            {hexa.skillId}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTreeHexa;
