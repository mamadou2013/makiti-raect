import {Navbar,Nav, Button, Image} from 'react-bootstrap';
import classes from './MainNavbar.module.css';

const MainNavbar = ()=>{
    return (
            <>
               <Navbar style={{backgroundColor: '#1791d2'}} fixed="top">
                    <Navbar.Brand href="#home" variant="light" style={{color: 'white', fontFamilly: 'bold', marginLeft: '5px'}}>Contact</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#sign-in" className={classes.textColor} style={{color: 'white', marginRight: '-8px'}}>Se connecter</Nav.Link>
                        <Navbar.Text className={classes.textColor} style={{color: 'white', marginRight: '-8px'}}>
                            /
                        </Navbar.Text>
                        <Nav.Link href="#sign-up" className={classes.textColor} style={{color: 'white'}}>S'enregistrer</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="mt-5">
                    <Navbar.Brand href="#home" style={{color: '#1791d2', marginLeft: '10px'}}>
                        <img
                        alt=""
                        src="./assets/images/makiti-logo.jpg"
                        width="40"
                        height="40"
                        />
                    </Navbar.Brand>
                    <Navbar.Text className={classes.textColor} style={{color: '#1791d2', marginLeft: '-8px'}}>
                        MAKITI+
                    </Navbar.Text>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav style={{color: '#1791d2', width: '15%', marginLeft: '5%'}} >
                                <Nav.Link href="#features">
                                    <Button className="btn text-primary" style={{backgroundColor: 'rgba(219, 217, 217, 0.63)', border:'none'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-fill mb-1 me-1" viewBox="0 0 16 16">
                                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                                        </svg>
                                        Categories
                                    </Button>
                                </Nav.Link>
                            </Nav>
                            <Nav style={{color: '#1791d2', width: '25%'}}>
                                <Nav.Link href="#deets">
                                    <div className="input-group">
                                        <input type="text" class="form-control" placeholder="Chercher" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button type="button" className="btn btn-primary" style={{backgroundColor: '#1791d2', borderRaduis:'5px'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </Nav.Link>
                            </Nav>
                            <Nav style={{color: '#1791d2', width: '20%'}}>
                                <Nav.Link href="#deets">
                                    <Button variant="primary" style={{backgroundColor: '#1791d2'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle mb-1 me-1" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                    </svg>
                                        Poster une annonce
                                    </Button>
                                </Nav.Link>
                            </Nav>
                            <Nav style={{color: '#1791d2', width: '15%'}}>
                                <Nav.Link href="#deets">
                                    <Button variant="outline-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart mb-1 me-1" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                                        </svg>
                                        Favoris
                                    </Button>
                                </Nav.Link>
                            </Nav>
                            <Nav style={{color: '#1791d2', justifyContent: 'flex-end', width: '15%'}}>
                                <Image src="./assets/images/Ellipse 1.png" width='40' height='35' rounded />
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </>
    );
}

export default MainNavbar;