import React from 'react'

export const Progress = () => (
    <section id="progress">
        <h2>Progress bar</h2>
        <progress id="progress-1" value={25} max={100}></progress>
        <progress id="progress-2" value={65} max={100}></progress>
    </section>
)