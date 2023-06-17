// import MainNavbar from '../layout/MainNavbar';
import classes from './Layout.module.css'

function Layout(props) {
    return (
        <div>
            {/* <MainNavbar/> */}
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    );
    
}

export default Layout