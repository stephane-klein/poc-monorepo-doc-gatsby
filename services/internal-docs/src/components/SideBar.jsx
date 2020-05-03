/** @jsx jsx */
import { jsx } from '@emotion/core';
import SideBarLinks from '../data/sidebar-links.yaml';

const SideBarUL = ({items}) => (
    <ul>
        {items.map((item, index) => (
            <li key={index}>
                <a href={item.link}>{item.title}</a>
                {
                    item.items ? 
                    <SideBarUL items={item.items} />
                    : null
                }
            </li>
        ))}
    </ul>
);

const SideBar = () => (
    <nav>
        <SideBarUL items={SideBarLinks} />
    </nav>
);

export default SideBar;
