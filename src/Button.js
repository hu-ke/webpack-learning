import React, { useState } from 'react'
import { Modal } from 'antd'

export default function Button() {
    const [isModalOpen, setIsModalOpen] = useState(false)
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