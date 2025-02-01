const containsNearbyDuplicate = (nums, k) => {

  const index_map = new Map();

  for (let i = 0; i < nums.length; i++) {

    // If the number already exists in the map, check the difference
    if (index_map.has(nums[i])) {
      // should use Math.abs() to ensure the difference is non-negative.
      let diff = Math.abs(index_map.get(nums[i]) - i);
      if (diff <= k) {
        return true
      }
    }
    // Add it to the map with the current index of the number
    index_map.set(nums[i], i);
  }

  return false;
};