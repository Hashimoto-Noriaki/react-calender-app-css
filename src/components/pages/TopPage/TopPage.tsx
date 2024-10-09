import React from 'react'
import styles from "./style.module.css"

export const TopPage = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <p>スケジュール管理</p>
                <nav>
                    <ul>
                        <li>利用方法</li>
                        <li>ログイン</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
