function longestIncreasingSubsequence(arr) {
    const n = arr.length;  // 7
    const dp = Array(n).fill(1);
    const prev = Array(n).fill(-1);
  
    let maxLength = 1, lastIndex = 0;
  
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1;
          prev[i] = j;
        }
      }
      if (dp[i] > maxLength) {
        maxLength = dp[i];
        lastIndex = i;
      }
    }
  
    // Construct LIS from dp and prev
    const lis = [];
    while (lastIndex !== -1) {
      lis.unshift(arr[lastIndex]);
      lastIndex = prev[lastIndex];
    }
  
    return lis.length;
  }
  
  const arr = [10, 2, 3, 5, 8, 101, 18];
// arr = [10,2,3,5,6,7,8,10,18,19]

  console.log(longestIncreasingSubsequence(arr));  // Output: [2, 3, 5, 8, 101]
  