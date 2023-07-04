import React, { useEffect, useState } from 'react'

export default function Cars(props: any) {
    const cur = props.car
    const [CAR, setCAR] = useState(cur)

    useEffect(() => {
        setCAR(cur)
    }, [cur])

    const checkProps = () => {
        return CAR.length === 0;
    }

    return (
        <div>
            {checkProps() ? <div>НЕТУ ПРОПСОВ</div> : CAR.map((prip: any) => (
                <div key={prip.id}>
                    {prip.name}
                    {prip.cost}
                </div>
            ))}
        </div>
    )
}
