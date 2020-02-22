'use strict';

module.exports = function(City) {
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
