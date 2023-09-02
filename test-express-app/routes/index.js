const express = require("express");

const router = express.Router();
const userRoute = require('./user.route')
const sectorRoute = require('./sector.route')

const defaultRoutes = [
  {
    path: "/sectors",
    route: sectorRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
