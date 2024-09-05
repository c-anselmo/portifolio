function Skill() {

    function Skillbar({ name, per }) {
        return (
            <div className="skills">
                <div className="skill">
                    <div className={`skill-name ${name}`}>{name}</div>
                    <div className={`skill-bar ${name}-bar`}>
                        <div className="skill-per" per={`${per}%`} style={{ maxWidth: `${per}%` }}></div>
                    </div>
                </div>
            </div>
        )
    }
    const info =
        [
            {
                id: 1,
                name: 'HTML',
                per: 90
            },
            {
                id: 2,
                name: 'CSS',
                per: 70
            },
            {
                id: 3,
                name: 'JS',
                per: 60
            },
            {
                id: 4,
                name: 'react',
                per: 50
            }
        ]
    return (
        <div>
            {info.map(item => {
                return (
                    <Skillbar key={item.id} name={item.name} per={item.per} />
                )
            })}
        </div>
    )
}


export default Skill