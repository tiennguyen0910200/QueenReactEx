import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "../header/Headerbig.css";
import "../header/Headersmall.css";
import Search from "../search/Search";
class Header extends Component {
  // 1.1
  constructor(props) {
    super(props);
    this.state = {
      // account: props.userData,
      // isLoggedIn: props.userIsLoggedIn,
      vendor: [],
      valueSearch: "",
    };
    this.getVendor();
    this.logOut = this.logOut.bind(this);
  }
  getVendor() {
    fetch("http://127.0.0.1:8000/api/index").then((response) => {
      response.json().then((data) => {
        console.log(data);
        this.setState({
          vendor: data,
        });
        localStorage.setItem("vendor", JSON.stringify(data));
      });
    });
  }
  // updateUI(data){
  //   this.setState({
  //     vendor:data
  //   })
  //   localStorage.setItem("vendor", JSON.stringify(data));
  // }
  handleSearch = (search) => {
    var vendorpro = [];
    let oldVendor = JSON.parse(localStorage.getItem("vendor"));
    if (!oldVendor) {
      oldVendor = [];
    }
    if (search.length <= 0 || search === "") {
      this.setState({
        vendor: oldVendor,
        valueSearch: search,
      });
    } else {
      let searchValue = search.toLowerCase();
      for (var i = 0; i < oldVendor.length; i++) {
        // console.log(
        //  // oldVendor[i].category.name.toLowerCase().indexOf(searchValue) != -1
        // );
        if (oldVendor[i].name.toLowerCase().indexOf(searchValue) != -1) {
          vendorpro.push(oldVendor[i]);
        }
      }

    //   const filteredProducts = this.state.vendor.filter(item => {
    //     return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    // });
      this.setState({
        vendor: vendorpro,
        valueSearch: search,
      });
    }
  };
  // 1.2
  logOut() {
    let appState = {
      isLoggedIn: false,
      account: {},
    };
    localStorage["appState"] = JSON.stringify(appState);
    this.setState(appState);
    this.props.history.push("/home/login");
  }
  // 1.3
  render() {
    const aStyle = {
      cursor: "pointer",
    };
    return (
      <div>
        <header className="header">
          <ul className="nameWeb">
            <li>
              <a href="#">
                <i class="fa fa-phone" aria-hidden="true">
                  07045228766
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-envelope">QueenParty@gmail.com</i>
              </a>
            </li>
          </ul>
          <div className="right_contain">
            <div className="icon">
              <i class="fab fa-facebook-square"></i>&ensp;
              <i class="fab fa-skype"></i>&ensp;
              <i class="fab fa-pinterest-square"></i>
            </div>
            {/*<div className="user">
                <Link to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true" ></i></Link>&ensp;                   
                <Link to="/home/login"><a>Đăng nhập</a></Link>
                </div> */}

            {this.state.login ? (
              <div className="user">
                <Link to="/" onClick={this.logOut}>
                  Logout
                </Link>
              </div>
            ) : (
              <div className="user">
                <Link to="/home/checkout">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </Link>
                &ensp;
                {/* <Link to="/home/login"><a>Đăng nhập</a></Link> */}
                {!this.state.isLoggedIn ? (
                  // <Link to="/home/login"><a>Đăng nhập</a></Link>
                  <Link to="/home/register">
                    {" "}
                    <a>Đăng Ky</a>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            )}

            {/* {this.state.checkLogin ==="on"?
                <Link to="/" onClick={this.logOut}>Logout</Link>:<div><Link to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true" ></i></Link>&ensp;<Link to="/home/login" className="dnhap" >Đăng nhập</Link></div>                 
                } */}
          </div>
        </header>

        <div className="navi">
          <div className="small">
            <Link to="/">
              <img src="https://www.linkpicture.com/q/logo2_6.png" alt="" />
            </Link>
            <div className="flex2">
              <div className="dn">
                <div>
                  <i class="fa fa-home">&ensp;Đà Nẵng</i>
                </div>
                &ensp;&ensp;
                <div>
                  <i class="fa fa-truck" aria-hidden="true">
                    &ensp;24/24
                  </i>
                </div>
                &ensp;
              </div>
              <div className="flex">
                {/* --------------- */}
                {/* <form onSubmit={this.onchange}>
                  <input className="input-Search" id="inputsearch" name='txtSearch' type='text' placeholder='Nhập từ khóa...'></input>
                  {this.state.sear === true ? (<a className='link' href='/image'>X</a>) : ''}
                  <Link to="/search"><button id="icon" onClick={this.search} ><i class="fas fa-search"></i></button></Link>
                </form> */}
                <Search search={this.handleSearch} />
              </div>
            </div>
          </div>
          <ul>
            <li>
              <Link to="/">Giới thiệu</Link>
            </li>
            <li>
              <Link to="/home/restaurant">Nhà hàng & Cửa hàng</Link>
            </li>
            <li>
              <Link to="/home/service">Dịch vụ</Link>
            </li>
            <li>
              <Link to="/home/contact">Liên hệ</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
