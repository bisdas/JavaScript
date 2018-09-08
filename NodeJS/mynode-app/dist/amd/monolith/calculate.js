define(["./sum"], function (sum) {
    return function calculte(a, b) {
        return sum(a, b);
    };
});