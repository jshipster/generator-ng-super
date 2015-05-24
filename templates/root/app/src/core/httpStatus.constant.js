/**
 * @ngdoc constant
 * @module app.core
 * @name httpStatus
 * @description Most frequently used HTTP codes
 */

(function(){

  'use strict';

  var httpStatus = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503
  };

  angular
    .module('app.core')
    .constant('httpStatus', httpStatus);

}());

