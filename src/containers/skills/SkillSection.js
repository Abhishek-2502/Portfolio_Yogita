import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills, skillBars } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}

        {/* Skill Bars Section */}
        <div className="skillBars-main-div">
          <Fade left duration={2000}>
            <h1 className="skills-heading" style={{ color: theme.text }}>
              Languages I Know
            </h1>
          </Fade>
          <Fade right duration={2000}>
            <div className="skillBars-container">
              {skillBars.data.map((skillBar, i) => {
                return (
                  <div key={i} className="skillBar-div">
                    <p className="skillBar-text" style={{ color: theme.text }}>
                      {skillBar.skillName}
                    </p>
                    <div className="skillBar-progress">
                      <div
                        className="skillBar-progress-fill"
                        style={{ width: `${skillBar.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default SkillSection;
