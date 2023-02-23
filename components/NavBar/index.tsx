import {navs} from "@/components/NavBar/config";
import styles from './index.module.scss'
import Link from "next/link";
export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <section className={styles.logoArea}>
                blog
            </section>
            <section className={styles.linkArea}>
                {navs.map(nav=>{
                    return <Link href={ nav.value } key={nav.label} legacyBehavior={true}>
                        {nav.label}
                    </Link>
                })}
            </section>
        </div>
    )
}
