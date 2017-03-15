/**
 * Created by Maranatha Ilesanmi on 3/15/2017.
 */

function findMissing(arr1, arr2){
    if ((arr1.length === 0) || (arr2.length === 0)) {
        return 0;
    } else if (arr1.length === arr2.length) {
        for (i = 0; i < arr2.length; i++) {
            if (arr1[i] === arr2[i]) {
                return 0;
            }
        }
    } else if (arr1.length < arr2.length) {
        j = 0;
        for (i = 0; i < arr2.length; i++) {
            if (arr1[i] === arr2[j]) {
                j++;
                continue;
            }
            return arr2[j];
        }
    } else if (arr1.length > arr2.length) {
        j = 0;
        for (i = 0; i < arr1.length; i++) {
            if (arr2[i] === arr1[j]) {
                j++;
                continue;
            }
            return arr1[j];
        }
    }
}