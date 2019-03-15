// Code your solution here:
function driversWithRevenueOver(drivers, value) {
  const result = drivers.filter(driver => driver.revenue > value);
  return result;
}