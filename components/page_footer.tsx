import Link from "next/link";
import type { NextPageLayout } from "../pages/_app";
import styles from "@/styles/components/Footer.module.css";

// fonts
import { Inter } from "next/font/google";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFileLines, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const font_inter = Inter({subsets: ["latin"]});

const PageFooter: NextPageLayout = () => {
	return (
		<footer className={`${styles.footer} ${font_inter.className}`}>
			<div className={styles.copyright}>
				<p><b>© 2024 Icheng Lin. All Rights Reserved.</b></p>
				<p>
					<span>Made with </span>
					<FontAwesomeIcon icon={faHeart} width="14" height="14"/>
					<span> by Icheng Lin</span>
				</p>
			</div>
			<div className={styles.navbar}>
				<Link className={styles.item} href="https://github.com/ichenglin">
					<FontAwesomeIcon icon={faGithub} width="14" height="14"/>
					<span>Github</span>
				</Link>
				<Link className={styles.item} href="https://www.linkedin.com/in/ichenglin">
					<FontAwesomeIcon icon={faLinkedin} width="14" height="14"/>
					<span>LinkedIn</span>
				</Link>
				<Link className={styles.item} href="/resume">
					<FontAwesomeIcon icon={faFileLines} width="14" height="14"/>
					<span>Resume</span>
				</Link>
				<Link className={styles.item} href="/sitemap.xml">
					<FontAwesomeIcon icon={faMapLocationDot} width="14" height="14"/>
					<span>Sitemap</span>
				</Link>
			</div>
		</footer>
	);
};

export default PageFooter;