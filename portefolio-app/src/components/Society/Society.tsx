import "./Society.css";
import React from "react";

function Society({ society }: any) {
    let imgRoute = "../../img/";
    let logo = require("../../img/" + society.logo);
    return (
        <div className="society-wrapper" id={"society_" + society.Alt}>
            <div className="society-page-left">
                <div className="society-img">
                    <div className="society-img-wrapper">
                        <img src={logo} alt={society.alt} />
                    </div>
                </div>
                <div className="society-page-name">
                        {society.name}
                </div>
            </div>
            <div className="society-page">
                <div className="society-page-title">
                    <div className="society-page-poste">
                        {society.poste}
                    </div>
                    <div className="society-page-date">
                        {society.date}
                    </div>
                </div>
                <div className="society-description">
                    <span>{society.description}</span>
                </div>
                <div className="society-bottom">
                    <div className="society-competences">
                        <div className="society-competences-title">
                            Compétences acquises:
                        </div>
                        <div className="society-competences-list">
                            {
                                society.competences.map((competence: any) => {
                                    return (
                                        <div className="competence-wrapper">
                                            <span>-{competence}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="society-technologies">
                        <div className="society-technologies-title">
                            Technologies utilisé:
                        </div>
                        <div className="society-technologies-list">
                            {
                                society.technologies.map((technology: any) => {
                                    let logo = require("../../img/" + technology);
                                    return (
                                        <div className="technology-img-wrapper">
                                            <img src={logo} alt="technology" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Society;