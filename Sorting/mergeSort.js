/**
 * Created by harrisonmiller on 10/8/14.
 */
var a = [341, 20, 7, 746, 21, 29, 914, 98, 764, 9, 1];

function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

console.log(mergeSort(a));
















'use strict';

var mergeSort = (function () {

    function compare(a, b) {
        return a - b;
    }

    /**
     * Mergesort method which is recursively called for sorting the input array.
     *
     * @private
     * @param {array} array The array which should be sorted
     * @param {number} start Left side of the subarray
     * @param {number} end Right side of the subarray
     * @returns {array} Array with sorted subarray
     */
    function mergesort(array, start, end, cmp) {
        if (Math.abs(end - start) <= 1) {
            return [];
        }
        var middle = Math.ceil((start + end) / 2);

        mergesort(array, start, middle, cmp);
        mergesort(array, middle, end, cmp);

        return merge(array, start, middle, end, cmp);
    }

    /**
     * Devides and sort merges two subarrays of given array
     *
     * @private
     * @param {array} array The array which subarrays should be sorted
     * @param {number} start The start of the first subarray. This subarray is with end middle - 1.
     * @param {number} middle The start of the second array
     * @param {number} end end - 1 is the end of the second array
     * @returns {array} The array with sorted subarray
     */
    function merge(array, start, middle, end, cmp) {
        var left = [],
            right = [],
            leftSize = middle - start,
            rightSize = end - middle,
            maxSize = Math.max(leftSize, rightSize),
            size = end - start,
            i;

        for (i = 0; i < maxSize; i += 1) {
            if (i < leftSize) {
                left[i] = array[start + i];
            }
            if (i < rightSize) {
                right[i] = array[middle + i];
            }
        }
        i = 0;
        while (i < size) {
            if (left.length && right.length) {
                if (cmp(left[0], right[0]) > 0) {
                    array[start + i] = right.shift();
                } else {
                    array[start + i] = left.shift();
                }
            } else if (left.length) {
                array[start + i] = left.shift();
            } else {
                array[start + i] = right.shift();
            }
            i += 1;
        }
        return array;
    }

    /**
     * Initial call to the mergesort method
     *
     * @public
     * @param {array} array The array which will be sorted
     * @returns {array} Sorted array
     */
    return function (array, cmp) {
        cmp = cmp || compare;
        return mergesort(array, 0, array.length, cmp);
    };

}());























function mergeSort(arr) {
    // input check
    if(!Array.isArray(arr)) return -1;

    // base case
    if(arr.length <= 1) return arr;

    // split the arr into halves
    let half = Math.floor(arr.length/2),
        left = arr.slice(0, half),
        right = arr.slice(half);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let output = [];    
    
    // sort the two halves
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            output.push(left.shift());
        } else {
            output.push(right.shift());
        }
    }

    // add remainder of lists to array
    while(left.length) output.push(left.shift());
    while(right.length) output.push(right.shift());

    return output;
}


