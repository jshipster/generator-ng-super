/**
 * @ngdoc object
 * @name app.core.constant:httpStatus
 * @description Commonly consumed HTTP Request Codes exposed as an injectable object
 * @example
 <pre>
 angular.module("someModule", [])
 .controller("some", controller);

 function controller(httpStatus, someService){
  var vm = this;
  someService.get().then(function(res){
    if(res.status === httpStatus.OK){
      vm.users = res.data;
    }
   })
  };
 </pre>
 */

(function(){

  'use strict';

  var httpStatus = {
    /**
     * @ngdoc property
     * @name httpStatus.#OK
     * @propertyOf app.core.constant:httpStatus
     * @returns {number} 200
     */
    OK: 200,

    /**
     * @ngdoc property
     * @name httpStatus.#CREATED
     * @propertyOf app.core.constant:httpStatus
     * @returns {number} 201
     */
    CREATED: 201,

    /**
     * @ngdoc property
     * @name httpStatus.#ACCEPTED
     * @propertyOf app.core.constant:httpStatus
     * @returns {number} 202
     */
    ACCEPTED: 202,

    /**
     * @ngdoc property
     * @name httpStatus.#NO_CONTENT
     * @propertyOf app.core.constant:httpStatus
     * @returns {number} 204
     */
    NO_CONTENT: 204,

    /**
     * @ngdoc property
     * @name httpStatus.#BAD_REQUEST
     * @propertyOf app.core.constant:httpStatus
     * @returns {number} 400
     */
    BAD_REQUEST: 400,

    /**
     * @ngdoc property
     * @name httpStatus.#UNAUTHORIZED
     * @propertyOf app.core.constant:httpStatus
     * @returns {number} 401
     */
    UNAUTHORIZED: 401,

    /**
     * @ngdoc property
     * @name httpStatus.#FORBIDDEN
     * @propertyOf app.core.constant:httpStatus
     * @returns {number} 403
     */
    FORBIDDEN: 403,

    /**
     * @ngdoc property
     * @name httpStatus.#NOT_FOUND
     * @propertyOf app.core.constant:httpStatus
     * @returns {number} 404
     */
    NOT_FOUND: 404,

    /**
     * @ngdoc property
     * @name httpStatus.#METHOD_NOT_ALLOWED
     * @propertyOf app.core.constant:httpStatus
     * @returns {number} 405
     */
    METHOD_NOT_ALLOWED: 405,

    /**
     * @ngdoc property
     * @name httpStatus.#INTERNAL_SERVER_ERROR
     * @propertyOf app.core.constant:httpStatus
     * @returns {number} 500
     */
    INTERNAL_SERVER_ERROR: 500,

    /**
     * @ngdoc property
     * @name httpStatus.#BAD_GATEWAY
     * @propertyOf app.core.constant:httpStatus
     * @returns {number} 502
     */
    BAD_GATEWAY: 502,

    /**
     * @ngdoc property
     * @name httpStatus.#SERVICE_UNAVAILABLE
     * @propertyOf app.core.constant:httpStatus
     * @returns {number} 503
     */
    SERVICE_UNAVAILABLE: 503
  };

  angular
    .module('app.core')
    .constant('httpStatus', httpStatus);

}());
