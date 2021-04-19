import React from 'react';
import Contact from './user/contact/Contact.js';
import DetailRestaurant from './user/detailRestaurant/DetailRestaurant';
import DetailFood from './user/detailFood/DetailFood.js';
import DetailService from './user/detailService/DetailService.js';

import Home from './user/home/Home.js';
import Restaurant from './user/restaurant/Restaurant.js';
import Plan from './user/plan/Plan.js';
import Service from './user/service/Service.js';
import Search from './user/search/Search.js';
import Login from './Login';


const routes = [
	{
		path : '/',
		exact : true,
		main : ()=> <Home />
	},
	
	{
		path : '/home/login',
		exact : true,
		main : ({history}) => <Login  history={history} />
	},

	// {
	// 	path : 'home/register_choice',
	// 	exact : true,
	// 	main : ()=> <RegisterChoice />
	// },

	// {
	// 	path : 'home/vendor_register',
	// 	exact : true,
	// 	main : ()=> <VendorRegister />
	// },

	// {
	// 	path : 'home/user_register',
	// 	exact : true,
	// 	main : ()=> <UserRegister />
	// },

  {
		path : '/home/restaurant',
		exact : true,
		main : ()=> <Restaurant />
	},
  {
		path : '/home/service',
		exact : true,
		main : ()=> <Service />
	},
	{
		path : '/home/contact',
		exact : true,
		main : ()=> <Contact />
	},
	{
		path : '/home/vendor/detail/:id',
		exact : true,
		main : ()=> <DetailRestaurant />
	},
	{
		path : '/home/product/detail/:id',
		exact : true,
		main : ()=> <DetailFood />
	},
	{
		path : '/home/servicedetail/:id',
		exact : true,
		main : ()=> <DetailService />
	},
	{
		path : '/home/vendor/detail/plan/:id',
		exact : true,
		main : ()=> <Plan />
	},
	{
		path : '/search',
		exact : true,
		main : ()=> <Search />
	}



	
	
];


export default routes;