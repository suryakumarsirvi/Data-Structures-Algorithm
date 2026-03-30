// Build Array from Permutation

function ans(nums){
    let ans = [];

    for(let i = 0; i < nums.length; i++){
        ans[i] = nums[nums[i]];
    }

    return ans;
}

console.log(ans([0, 2, 1, 5, 3, 4]))