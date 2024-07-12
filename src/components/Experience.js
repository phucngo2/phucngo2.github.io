import React from "react";

import { experienceData } from "../utils/data/experience";

const Experience = () => {
  return (
    <section className="right-content" id="experience">
      {experienceData.map((element) => (
        <div className="py-2" key={element.title}>
          <h4 className="opacity-55">{element.title}</h4>
          <div className="row p-2">
            {element.list.map((item) => (
              <div
                className="col-6 col-md-3 card text-14 me-md-4 my-2 my-md-0"
                key={item.name}
              >
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body py-2 px-3">
                  <div className="card-text">
                    <b>{item.name}</b>
                    <div className="opacity-55 text-12">{item.time}</div>
                    <div className="pt-2">{item.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
