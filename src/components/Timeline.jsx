import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>
            <div className="timeline-wrapper">
                <div className="row">
                    <div className="col-lg-6 left" data-aos="fade-down">
                        <h1>Shukrana</h1>
                        <p>
                            On Saturdayday, 13<sup>th</sup> July, 2022,
                            <br />
                            13<sup>th</sup> Zilhajjah, 1443 Hijri,
                            <br />
                            Time: 08:30 PM
                        </p>
                        <h2>Venue:</h2>
                        <p>
                            Saptagiri Function Hall,
                            <br /> Gold Smith Street Colony,
                            <br /> Cowl Bazaar, Bellari.
                        </p>
                    </div>
                    <div className="col-lg-6 right" data-aos="fade-down"></div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-6 left next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                    ></div>
                    <div
                        className="col-lg-6 right next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                    >
                        <h1>Nikaah</h1>
                        <p>
                            On Sunday, 14<sup>th</sup> July, 2022,
                            <br />
                            14<sup>th</sup> Zilhajjah, 1443 Hijri,
                            <br />
                            Time: 11:30 AM.
                        </p>
                        <h2>Nikaah At:</h2>
                        <p>
                            Masjid-e-Abu Bakar Siddique,
                            <br /> (Ek Minar Masjid),
                            <br /> Gold Smith Street Colony,
                            <br /> Cowl Bazaar, Bellari.
                        </p>
                        <h2>Followed Lunch:</h2>
                        <p>
                            Saptagiri Function Hall,
                            <br /> Gold Smith Street Colony,
                            <br /> Cowl Bazaar, Bellari.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-6 left next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="100"
                    >
                        <h1>Valima</h1>
                        <p>
                            On Tuesday, 15<sup>th</sup> July, 2022,
                            <br />
                            15<sup>th</sup> Zilhajjah, 1443 Hijri,
                            <br />
                            Time: 02:00 PM.
                        </p>
                        <h2>Venue:</h2>
                        <p>
                            Saptagiri Function Hall,
                            <br /> Gold Smith Street Colony,
                            <br /> Cowl Bazaar, Bellari.
                        </p>
                    </div>
                    <div
                        className="col-lg-6 right next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="100"
                    ></div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
