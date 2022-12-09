import './navBar.css';
import DataContext from '../state/dataContext';
import { useContext} from 'react';
import {Link} from 'react-router-dom';



function NavBar() {
  const cart = useContext(DataContext).cart;

  return (

    <nav className="navbar navbar-expand-lg navbar-dark">

      <div className="container-fluid">
        <Link className="navbar-brand"></Link>

        <a class="navbar-brand" href="#">

          Navbar

        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

          <span class="navbar-toggler-icon"></span>

        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">

              <a class="nav-link active" aria-current="page" href="#">

                Home

              </a>

            </li>

            <li class="nav-item">

              <a class="nav-link" href="#">

                Link

              </a>

            </li>


            <li class="nav-item dropdown">

              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                Dropdown

              </a>

              <ul class="dropdown-menu">

                <li>

                  <a class="dropdown-item" href="#">

                    Action

                  </a>

                </li>

                <li>

                  <a class="dropdown-item" href="#">

                    Another action

                  </a>

                </li>

                <li>

                  <hr class="dropdown-divider" />

                </li>

                <li>

                  <a class="dropdown-item" href="#">

                    Something else here

                  </a>

                </li>

              </ul>

            </li>

            <li class="nav-item">

              <a class="nav-link disabled">Disabled</a>

            </li>

          </ul>



            <form class="d-flex" role="search">
              <Link className="btn btn-outline-sucess" to="/cart">

                <span className="badge text-bg-light">{cart.length}</span>
                &nbsp;View Cart
                
              </Link>
            

            </form>

        </div>

      </div>

    </nav>

  );

}

export default NavBar;
