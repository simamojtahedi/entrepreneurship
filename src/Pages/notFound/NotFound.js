import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Wrapper from '../../Utils/Wrapper/Wrapper';
import './style.scss'

const NotFound = () => {
    let history = useHistory();

    return (
        <>
            <Wrapper pageTitle="صفحه مورد نظر شما پیدا نشد" >
            <div className="container">
                <div className="page-wrapper">
                    <div className="notFound pt-5 d-flex flex-column align-items-center">
                        <img src="/assets/img/icons/moon-and-stars.png" alt="404" />
                        <h4 className="text-center mt-5"> صفحه مورد نظر شما پیدا نشد ! </h4>
                        <div className="col-lg-6 mt-5">
                            <Link className="btn btn-danger col-lg-5 mx-3" to="/"> داشبورد </Link>
                            <button onClick={history.goBack} className="btn btn-warning col-lg-5 mx-3"> بازگشت </button>
                        </div>
                    </div>
                </div>
            </div>
            </Wrapper>
        </>
    )
}

export default withRouter(NotFound)