import React from "react"
export default function Meme() {
    return(
        <main>
            <form className="meme-form">
                <input 
                    type="text"
                    className="form--input"
                    placeholder="Top Text"
                />
                <input 
                    type="text"
                    className="form--input"
                    placeholder="Bottom Text"
                />
                <button
                    className="meme-button"
                >
                    Get a new meme image 
                </button>
            </form>
        </main>
    )
}