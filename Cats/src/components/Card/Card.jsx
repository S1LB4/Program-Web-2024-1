import './Card.css'
import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";

export function Card({ image = "", fact = "", onClick }) {
    const [highlightedText, setHighlightedText] = useState("");

    useEffect(() => {
        if (fact) {
            const words = fact.split(" ");
            const firstFourWords = words.slice(0, 4).join(" ");
            setHighlightedText(firstFourWords);
        }
    }, [fact]);

    return (
        <div className="card-container">
            <div className="card">
                <img className="card-image" src={image} alt="Cat" />
                <div className="card-content">
                    <p className="card-title">DID YOU KNOW?</p>
                    <p className="card-description">
                        {highlightedText && <span className="card-highlight">{highlightedText}</span>}
                        {highlightedText && " "}
                        {fact.slice(highlightedText.length)}
                    </p>
                </div>
            </div>
        </div>
    );
}