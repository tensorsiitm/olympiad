const prizes = [
    { cls: 'Class 8', first: 'Rs 10,000', second: 'Rs 5,000', third: 'Rs 2,000' },
    { cls: 'Class 9', first: 'Rs 15,000', second: 'Rs 7,500', third: 'Rs 3,000' },
    { cls: 'Class 10', first: 'Rs 20,000', second: 'Rs 10,000', third: 'Rs 5,000' },
];

const perks = [
    { title: 'Topper of each class', text: 'A fully funded trip to IIT Madras during Shaastra.' },
    { title: 'Top 30 in each class', text: 'Free career guidance from IIT Madras students.' },
    { title: 'Every participant', text: 'A certificate of participation.' },
];

function Prizes() {
    return (
        <section className="section" id="prizes" aria-labelledby="prizes-title">
            <div className="container">
                <header className="section-head reveal">
                    <p className="eyebrow">[ Prizes ]</p>
                    <h2 id="prizes-title" className="section-title">Rs 1,00,000 prize pool</h2>
                </header>

                <div className="table-wrap reveal">
                    <table className="prize-table">
                        <caption className="sr-only">Cash prizes by class and rank</caption>
                        <thead>
                            <tr>
                                <th scope="col">Class</th>
                                <th scope="col">1st</th>
                                <th scope="col">2nd</th>
                                <th scope="col">3rd</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prizes.map((p) => (
                                <tr key={p.cls}>
                                    <th scope="row">{p.cls}</th>
                                    <td data-label="1st">{p.first}</td>
                                    <td data-label="2nd">{p.second}</td>
                                    <td data-label="3rd">{p.third}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <ul className="perks">
                    {perks.map((p) => (
                        <li className="perk reveal" key={p.title}>
                            <h3>{p.title}</h3>
                            <p>{p.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Prizes;
