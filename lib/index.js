'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Checks if its an fsa action -- not checking for error and meta for now
 */
var isSortOfFSA = function isSortOfFSA(arg) {
    return arg && arg.type && arg.payload;
};
var _Object = Object;
var freeze = _Object.freeze;
var objectKeys = _Object.keys;

/**
 * Helper to create mapping of sub reducers
 */

var createReducersMap = exports.createReducersMap = function createReducersMap(reducers, keyPrefix) {
    var keys = objectKeys(reducers);

    var mapping = {};
    var prefix = keyPrefix || '';
    var isArray = Array.isArray(reducers); //reducers can be an object or array

    keys.forEach(function (key) {
        var reducerFunc = reducers[isArray ? parseInt(key) : key];
        mapping[prefix + (isArray === true ? reducerFunc.name : key)] = reducerFunc;
    });
    return mapping;
};

/**
 * Composes reducers by having its type mapping
 *
 */
var createReducerDelegate = exports.createReducerDelegate = function createReducerDelegate() {
    var reducersMapping = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    return function (state, arg) {
        var type = arg.type;

        var subReducer = reducersMapping[type];
        if (subReducer) {
            var toMerge;
            if (isSortOfFSA(arg)) {
                toMerge = subReducer(state, arg.payload || {});
            } else {
                var _type = arg.type;

                var _subArg = _objectWithoutProperties(arg, ['type']); //eslint-disable-line


                toMerge = subReducer(state, subArg || {});
            }
            //if we have something
            if (toMerge) {
                return freeze(_extends({}, state, toMerge));
            }
        }
        return state;
    };
};

exports.default = { createReducersMap: createReducersMap, createReducerDelegate: createReducerDelegate };
