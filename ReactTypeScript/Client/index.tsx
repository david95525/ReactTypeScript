import * as React from "react";
import { render } from 'react-dom';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import { Home } from "./components/home";
import { NavHeader } from "./components/navheader";

type FooterProps = { children: React.ReactNode };
const APP = () => (
    <>
        <NavHeader />
        <HashRouter>
            <ul>
                <li>
                    <Link to="/home" className="nav-link">
                        首頁
                    </Link>
                </li>
            </ul>
            <Container fluid>
                <Row>
                    <Routes>
                        <Route path="/home" element={<Home />}></Route>
                    </Routes>
                </Row>
            </Container>
        </HashRouter >
    </>

);

render(<APP />, document.getElementById('root'));