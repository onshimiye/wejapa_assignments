/*
Buhari and Osibajo each created one problem. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Buhari's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Osibajo's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Buhari is awarded 1 point.
If a[i] < b[i], then Osibajo is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

Example

a = [1, 2, 3]
b = [3, 2, 1]
For elements 0, Osibajo is awarded a point because b[0] is larger .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Buhari receives a point.
The return array is [1, 1] with Buhari's score first and Osibajo's second.

P.S: You may call the function comparePoints(a,b) - [1,1]

*/

function comparePoints(a, b) {
    let res = [0, 0];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            res[0] += 1;
        } else if (a[i] < b[i]) {
            res[1] += 1;
        }
    }

    return res
}