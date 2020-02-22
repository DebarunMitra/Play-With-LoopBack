'use strict';

module.exports = function(City) {
                                  /**
                                   * city name validation
                                  */
                                  City.validatesLengthOf("name",{
                                        min:3,
                                        message:{min:"City name is too short"}
                                   });


                                  /**
                                   * populate the city
                                   * @param {number} count number of people to populate
                                   * @param {Function(Error, object)} callback
                                   */

                                  City.prototype.pop = function(
                                    count,
                                    callback
                                  ) {
                                    if (count <= 0){
                                      let err={
                                        statusCode:"400",
                                        message:"You need to populate with one or more people"
                                      };
                                      callback(err);
                                    }
                                    else{
                                          let result = {
                                            status: `Region populate by ${count} people`
                                          };
                                          // TODO
                                          callback(null, result);
                                        }
                                  };
                                };
