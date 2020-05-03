/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import SideBar from './SideBar';

const Layout = ({ children }) => (
    <section
        css={css`
            > aside {
                top: 0;
                left: 0;
                width: 18rem;
                position: fixed;
                z-index: 10;

                UL {
                    list-style: none;
                    padding: 0;
                    > LI {
                        padding: 0.2rem 1rem;
                        A {
                            color: #333;
                            text-decoration: none;
                            &:hover {
                                color: #333;
                            }
                        }
                    }
                }
            }
            > article {
                padding-left: 20rem;
            }
        `}
    >
        <aside>
            <SideBar />
        </aside>
        <article>
            {children}
        </article>
    </section>
);

export default Layout;
