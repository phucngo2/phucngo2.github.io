import React from "react";

import { certificates } from "../utils/data/certificates";

const Certificates = () => {
    const pageId = "certificates";

    return (
        <section className="right-content" id={pageId}>
            <h3>Certificates</h3>
            <div className="row py-3">
                {certificates.map((certificate) => (
                    <div className="col-2 text-14 mx-2" key={certificate.name}>
                        <a
                            className="d-flex flex-wrap justify-content-center"
                            href={certificate.src}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={certificate.img}
                                alt={certificate.name}
                                className="w-100"
                            />
                            <span className="opacity-55">
                                <b>{certificate.name}</b>
                            </span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
