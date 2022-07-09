import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. Akbar Hussain </h2>
                <h5>
                    W.No.: 26, Porotamma Temple Street,
                    <br />
                    Near Jawar Street,
                    <br /> Cowl Bazaar, Bellari.
                </h5>
                <p className="address">Contact: +91 90367 18582.</p>
            </div>
        </section>
    );
}

export default InviteNote;
