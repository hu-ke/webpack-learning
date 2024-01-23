import React, { useEffect, useState } from 'react'
import { Modal } from 'antd'
import _ from 'lodash'
import moment from 'moment'
import { Chart} from 'bizcharts'

export default function Button() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    useEffect(() => {
        const arr = [1, 2, 3];
        const newArr = _.map(arr, n => n * 2);
        console.log('newArr', newArr, moment())
        console.log('bizcharts', Chart, 21)
    }, [])
    return (
        <>        
            <button 
                onClick={() => {
                    setIsModalOpen(true)
                }}
            >
                添加全局弹框
            </button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={() => {}} onCancel={() => {
                setIsModalOpen(false)
            }}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}