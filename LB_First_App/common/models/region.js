"use strict";

module.exports = function(Region) {
  //Operation Hook
  Region.observe("before save", function(ctx, next) {
    if (ctx.instance && ctx.instance.CityId) {
      return Region.app.models.City.count({
        id: ctx.instance.CityId
      }).then(res => {
        if (res < 1) {
          let err = {
            statusCode: "400",
            message: "Error adding region to invalid city"
          };

          return Promise.reject(err);
        }
      });
    }
    return next();
  });

  /**
   * city name validation
   */
  Region.validatesLengthOf("name", {
    min: 3,
    message: { min: "Region name is too short" }
  });
  /**
   * depopulate the city
   * @param {number} count number of depopulation of people
   * @param {Function(Error, object)} callback
   */

  Region.prototype.depop = function(count, callback) {
    if (count <= 0) {
      let err = {
        statusCode: "400",
        message: "You need to depopulate with one or more people"
      };
      callback(err);
    } else {
      let result = {
        status: `Region depopulate by ${count} people`
      };
      // TODO
      callback(null, result);
    }
  };
};
