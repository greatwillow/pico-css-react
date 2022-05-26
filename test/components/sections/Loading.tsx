import React from 'react'

export const Loading = () => (
    <section id="loading">
        <h2>Loading</h2>
        <article aria-busy="true"></article>
        <button aria-busy="true">Please wait…</button>
    </section>
)