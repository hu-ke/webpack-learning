import React, { useEffect } from 'react'
import { Chart } from 'bizcharts'

export default function Panel() {

    useEffect(() => {
        console.log('Chart', Chart)
    }, [])
    return (
        <div>Panelsss</div>
    )
}